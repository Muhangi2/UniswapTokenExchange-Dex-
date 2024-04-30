import { ethers } from "ethers";
import CustomToken from "./utils/CustomToken.json";
import DexExchange from "./utils/DexExchange.json";

export const tokencontract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const tokencontract = new ethers.Contract(address, CustomToken.abi, signer);
    return tokencontract;
  }
};

export const DexExchange=async()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;
    if (ethereum) {
        const signer = provider.getSigner();
        const dexcontract = new ethers.Contract("", DexExchange.abi, signer);
        return dexcontract;
    }
}
