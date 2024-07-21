import { BigNumber, ethers } from "ethers";
import { tokencontract, DexExchange } from "./contract";
import { toWei, toEth } from "./utils";

export async function swapEthToken(tokenName, tokenamount) {
  try {
    let tx = { value: toWei(tokenamount) };
    const contractObj = await DexExchange();
    const data = await contractObj.swapEthToken(tokenName, tx);
    const receipt = await data.wait();
    return receipt;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
export async function hasValidAllowance(owner, tokenName, amount) {
  try {
    const dexcontract = await DexExchange();
    const address = await dexcontract.getTokenAddress(tokenName);

    const tokencontract = await tokencontract(address);
    const data = await tokencontract.allowance(
      owner,
      "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    );

    const result = BigNumber.from(data.toString()).gte(
      BigNumber.from(toWei(amount))
    );
    return result;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
export async function swapTokenToEth(tokenName, amount) {
  try {
    const dexcontract = await DexExchange();
    const data = await dexcontract.swapTokenToEth(tokenName, toWei(amount));
    const receipt = await data.wait();
    return receipt;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
export async function swapTokenToToken(tokenName, amount, tokenName2) {
  try {
    const dexcontract = await DexExchange();
    const data = await dexcontract.swapTokenToToken(
      tokenName,
      tokenName2,
      toWei(amount)
    );
    const receipt = await data.wait();
    return receipt;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
export async function getTokenBalance(tokenName, tokenaddress) {
  try {
    const DexExchange = await DexExchange();
    const data = await DexExchange.getTokenBalance(tokenName, tokenaddress);
    const receipt = await data.await();
    return receipt;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
export async function getEthBalance() {
  try {
    const DexExchange = await DexExchange();
    const data = await DexExchange.getEthBalance();
    const receipt = await data.await();
    return receipt;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
export async function getTokenAddress(tokenName) {
  try {
    const DexExchange = await DexExchange();
    const data = await DexExchange.getTokenAddress(tokenName);
    const receipt = await data.await();
    return receipt;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
export async function getName(tokenName) {
  try {
    const DexExchange = await DexExchange();
    const data = await DexExchange.getName(tokenName);
    const receipt = await data.await();
    return receipt;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
export async function totasupply(tokenname) {
  try {
    const DexExchange = await DexExchange();
    const data = await DexExchange.totasupply(tokenname);
    const receipt = await data.await();
    return receipt;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
export async function increaseAllowance(tokenName, Amount) {
  try {
    const dexcontract = await DexExchange();
    const address = await dexcontract.getTokenAddress(tokenName);

    const tokenContractObj = await tokencontract(address);
    const data = await tokenContractObj.approve("token adress", toWei(Amount));
    const receipt = await data.wait();
    return receipt;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
export async function getAllHistory() {
  try {
    const DexExchange = await DexExchange();
    const getAllHistory = await DexExchange.getAllHistory();

    const historyTransaction = await getAllHistory.map((history, i) => ({
      historyId: history.historyId.toNumber(),
      tokenA: history.tokenA,
      tokenB: history.tokenB,
      inputValue: toEth(history?.inputValue),
      outputValue: toEth(history?.outputValue),
      userAddress: history.userAddress,
    }));
    return historyTransaction;
  } catch (error) {
    return parseFloatErrorMsg(error);
  }
}
function toWe(amount) {
  const towei = ethers.utils.parseUnits(amount.toString());
  return towei.toString();
}
function parseFloatErrorMsg(error) {
  const json = JSON.parse(JSON.stringify(error));
  return json?.reason || json?.error?.message;
}
