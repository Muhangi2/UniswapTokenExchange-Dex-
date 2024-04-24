const hre = require("hardhat");

async function main() {
  const customdexcontract = await hre.ethers.getContractFactory("DEXExchange");
  const dexcontract = await customdexcontract.deploy();
  await dexcontract.deployed();

  console.log("DEXExchange deployed to:", dexcontract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
