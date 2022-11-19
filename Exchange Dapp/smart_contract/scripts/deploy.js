const hre = require("hardhat");

const main = async () => {
  const Transaction = await await hre.ethers.getContractFactory("Transaction");
  const transactions = await Transaction.deploy();

  await transactions.deployed();

  console.log("Transaction deployed to: ", transactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();