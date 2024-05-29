import { ethers } from "ethers";

//here we are converting to smaller values e.g wei
export function toWei(amount, decimals = 18) {
  const toWei = ethers.utils.parseUnits(amount, decimals);
  return toWei.toString();
}
//here converting to larger values e.g eth
export function toEth(amount, decimals = 18) {
  const toEth = ethers.utils.formatUnits(amount, decimals);
  return toEth.toString();
}
