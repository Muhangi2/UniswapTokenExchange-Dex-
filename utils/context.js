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
    const contractObj = await DexExchange();
    const address = await contractObj.getTokenAddress(tokenName);
    
  } catch (error) {}
}
