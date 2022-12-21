import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import { contractABI, contractAddress } from "../utils/connect";

export const ethereum =
  typeof window !== "undefined" ? (window as any).ethereum : null;

export const TransactionContext = createContext("");

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0.0001);
  const getSmartContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    return transactionContract;
  };

  const checkMetamaskConnected = async () => {
    if (!ethereum) alert("You need to install metamask");

    const accounts = await ethereum.request({ method: "eth_accounts" });
    setCurrentAccount(accounts[0]);
  };
  const connectWallet = async () => {
    if (!ethereum) alert("You need to install metamask");

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    setCurrentAccount(accounts[0]);
  };

  const sendTransaction = async () => {
    if (!ethereum) alert("You need to install metamask");

    const transactionContract = getSmartContract();

    const parseAmount = ethers.utils.parseEther(amount.toString());

    const transactionParameters = {
      gas: "0x5208",
      to: address,
      from: currentAccount,
      value: parseAmount._hex,
    };

    const txHash = await ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });

    const transactionHash = await transactionContract.addToBlockChain(
      address,
      parseAmount
    );

    console.log("loading", transactionHash.hash);
    await transactionHash.wait();
    console.log("done", transactionHash.hash);
  };

  useEffect(() => {
    checkMetamaskConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        connectWallet,
        sendTransaction,
        address,
        setAddress,
        amount,
        setAmount,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
