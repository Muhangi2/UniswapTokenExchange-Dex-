require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_AMOY_RPC =
  "https://polygon-amoy.g.alchemy.com/v2/lJvyhT9Q6wW87nhn5pnwfx8ZLy3wzbvr";

module.exports = {
  solidity: "0.8.19",
  networks: {
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_AMOY_RPC,
      accounts: [`0x${process.env.AMOY_PRIVATE_KEY}`],
    },
  },
};
