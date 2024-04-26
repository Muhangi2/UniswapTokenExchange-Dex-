// const { wait } = require("@testing-library/user-event/dist/utils");
const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("CustomToken", function () {
  let CustomToken;
  let customToken;
  let owner;
  const TokenName = "ElonMusk";
  const TokenSymbol = "EM";

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    CustomToken = await ethers.getContractFactory("CustomToken");
    customToken = await CustomToken.deploy(TokenName, TokenSymbol);
    await customToken.deployed();
    // console.log("CustomToken deployed to:", customToken);
  });
  it("it should deploy with the correct name and symbol", async function () {
    expect(await customToken.name()).to.equal(TokenName);
    expect(await customToken.symbol()).to.equal(TokenSymbol);
  });

  it("it should  mint initial supply  to the owner", async function () {
    const ownerBalance = await customToken.balanceOf(owner.address);
    expect(ownerBalance).to.equal(1000000n * 10n ** 18n);
  });

  it("Should transfer tokens between accounts", async function () {
    const recipient = ethers.Wallet.createRandom().address;
    await customToken.transfer(recipient, 1000);
    //lets transfer of tokens
    const receipientBalance = await customToken.balanceOf(recipient);
    expect(receipientBalance).to.equal(1000);
  });
  it("should not allow transfer when exceeding the balance", async function () {
    const recipient = ethers.Wallet.createRandom().address;
    await expect(
      customToken.transfer(recipient, 10000000n * 10n ** 18n)
    ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
  });
});
