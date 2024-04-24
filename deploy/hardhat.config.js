require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_AMOY_RPC =
  "https://polygon-amoy.g.alchemy.com/v2/2t4uLw6zkkF8B3jHSWIfyz_Gpe9znxE8";

module.exports = {
<<<<<<< HEAD
  solidity: "0.8.19",
  networks: {
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_AMOY_RPC,
      accounts: [process.env.MUMBAI_PRIVATE_KEY],
    },
  },
=======
  solidity: "0.8.0",
  // defaultNetwork: "matic",
  // networks: {
  //   hardhat: {},
  //   polygon_mumbai: {
  //     url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
  //     accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
  //   },
  // },
>>>>>>> 59212d8d1bb16a8a5615f086d9b072b3088389ae
};
