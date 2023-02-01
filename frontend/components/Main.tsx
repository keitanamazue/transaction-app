import React from "react";
import { TransactionContext } from "../context/TransactionContext";

export const Main = () => {
  const {
    currentAccount,
    connectWallet,
    sendTransaction,
    address,
    setAddress,
    amount,
    setAmount,
  } = React.useContext(TransactionContext) as any;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!address || !amount) return alert("Please fill all the fields");
    sendTransaction();
    console.log({ amount });
  };
  return (
    <div className="h-screen">
      {currentAccount ? (
        <div className="flex justify-center items-center mt-60 gap-x-20">
          <div className="flex flex-col justify-center items-center gap-y-4">
            <div className="text-5xl font-bold">Transaction</div>
            <div className="text-5xl font-bold">App</div>
          </div>
          <form className="flex flex-col gap-y-5 w-96 bg-slate-400 p-6 rounded-md shadow-md">
            <input
              type="text"
              className="bg-gray rounded-sm px-2 py-2"
              placeholder="Wallet Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <input
              type="number"
              className="bg-gray rounded-sm px-2 py-2"
              placeholder="ETH"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
            a
            {/* <input
              type="text"
              className="bg-gray rounded-sm px-2 py-2"
              placeholder="keyword"
            />
            <input
              type="text"
              className="bg-gray rounded-sm px-2 py-2"
              placeholder="message"
            /> */}
            <div className="px-2 py-2 bg-red-100">
              <button
                className="w-full h-full"
                onClick={(e) => handleSubmit(e)}
              >
                submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="absolute top-96 left-[44%]">
          <div className="bg-yellow-200">
            <button
              className="w-full h-full px-12 py-4"
              onClick={connectWallet}
            >
              Connect wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
