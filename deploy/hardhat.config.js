require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_AMOY_RPC =
  "https://polygon-amoy.g.alchemy.com/v2/2t4uLw6zkkF8B3jHSWIfyz_Gpe9znxE8";

module.exports = {
  solidity: "0.8.19",
  networks: {
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_AMOY_RPC,
      accounts: [process.env.MUMBAI_PRIVATE_KEY],
    },
  },
};
