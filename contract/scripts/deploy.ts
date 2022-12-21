import { ethers } from "hardhat";

const deploy = async () => {
  const Transactions = await ethers.getContractFactory("Transactions");
  const Transaction = await Transactions.deploy();

  await Transaction.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp deployed to ${Transaction.address}`
  );
};

const runDeploy = async () => {
  try {
    await deploy();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runDeploy();
