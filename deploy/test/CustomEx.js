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
  });
  it("it should deploy with the correct name and symbol", async function () {
    expect(await customToken.name()).to.equal(TokenName);
    expect(await customToken.symbol()).to.equal(TokenSymbol);

  });


  it("it should mint tokens", async function(){
    const amount = 1000;
    await customToken.mint(owner.address, amount);
    expect(await customToken.balanceOf(owner.address)).to.equal(amount);
  })
});
