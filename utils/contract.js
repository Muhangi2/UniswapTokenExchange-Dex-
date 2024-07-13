import { ethers } from "ethers";
import CustomToken from "./CustomToken.json";
import dexExchange from "./DEXExchange.json";

export const tokencontract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const tokencontract = new ethers.Contract(address, CustomToken.abi, signer);
    return tokencontract;
  }
};

export const DexExchange = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const dexcontract = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      dexExchange.abi,
      signer
    );
    console.log(dexcontract);
    return dexcontract;
  }
};
