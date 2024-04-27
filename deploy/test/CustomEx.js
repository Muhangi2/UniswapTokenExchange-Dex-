// const { wait } = require("@testing-library/user-event/dist/utils");
const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("CustomToken & DexExchange", function () {
  let CustomToken;
  let customToken;
  let DEXexchange;
  let dexexchange;
  let owner;
  const ethValue = 1;
  const tokenName = "SHIBA INU";
  const TokenSymbol = "EM";

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    CustomToken = await ethers.getContractFactory("CustomToken");
    customToken = await CustomToken.deploy(tokenName, TokenSymbol);
    await customToken.deployed();
    // console.log("CustomToken deployed to:", customToken);
    DEXexchange = await ethers.getContractFactory("DEXExchange");
    dexexchange = await DEXexchange.deploy();
    await dexexchange.deployed();
  });

  describe("CustomToken", function () {
    it("it should deploy with the correct name and symbol", async function () {
      expect(await customToken.name()).to.equal(tokenName);
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

  describe("DexExchange", function () {
    it("it should deploy with defaults tokens", async function () {
      for (let i = 0; i < dexexchange.tokens.length; i++) {
        expect(await dexexchange.getName(dexexchange.tokens[i])).to.equal(
          dexexchange.tokens[i]
        );
      }
    });
    it("Swap Eth to token", async function () {
      const ethBefore = await dexexchange.getEthBalance();
      const tokenBefore = await customToken.balanceOf(owner.address);
      console.log("ethBefore", ethBefore.toString());
      console.log("tokenBefore", tokenBefore.toString());

      const initialBalance = await dexexchange.getBalance(tokenName, owner.address);
      console.log("initial balance",initialBalance.toString());

      await dexexchange.swapEthToToken(tokenName, { value: ethValue });
      await expect(dexexchange.swapEthToToken(tokenName, { value: ethValue })).to.not.be.reverted
      const finalBalance = await dexexchange.getBalance(tokenName, owner.address);
      console.log("final balance",finalBalance.toString());
      
      const history = await dexexchange.getAllHistory();

      expect(history.length).to.equal(2); 

      // const ethAfter = await dexexchange.getEthBalance();
      // const tokenAfter = await customToken.balanceOf(owner.address);
      // console.log("after swapp",ethAfter.toString());
      // console.log("after swapping Eth to token ",tokenAfter.toString());

      // // Calculate the expected token amount
      // const expectedTokens = (ethValue * 10 ** 18) / dexexchange.ethValue;

      // // Assert the balances
      // expect(ethAfter).to.equal(ethBefore.sub(ethValue));
      // expect(tokenAfter).to.equal(tokenBefore.add(expectedTokens));
    });

    // it("should swap token to Ether", async function () {
    //   const tokenAmount = 1000;
    //   await customToken.transfer(dexexchange.address, tokenAmount);

    //   const dexTokenBalance = await customToken.balanceOf(dexexchange.address);
    //   console.log("DEXExchange Token Balance:", dexTokenBalance.toString());

    //   const ethBefore = await dexexchange.getEthBalance();
    //   console.log(ethBefore);
    //   const tokenBefore = await customToken.balanceOf(owner.address);

    //   // console.log("ethBefore", ethBefore.toString());
    //   console.log("tokenBefore", tokenBefore.toString());

    //   // await dexexchange.swapTokenToEth(tokenName, tokenAmount);

    //   // const ethAfter = await dexexchange.getEthBalance();
    //   // console.log("ethAfter", ethAfter.toString());
    //   // const tokenAfter = await customToken.balanceOf(owner.address);

    //   // expect(ethAfter).to.equal(ethBefore.add(tokenAmount * ethValue));
    //   // expect(tokenAfter).to.equal(tokenBefore.sub(tokenAmount));
    // });
  });
});
