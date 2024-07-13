import React from "react";
import "../styles/globals.css";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public"; // Import public provider

const { chains, provider } = configureChains(
  [
    chain.hardhat,
    {
      id: 1337,
      name: "Hardhat",
      network: "localhost",
      rpcUrls: {
        default: "http://127.0.0.1:8545",
      },
      nativeCurrency: {
        name: "Hardhat Eth",
        symbol: "ETH",
        decimals: 18,
      },
      blockExplorers: null,
      testnet: true,
    }
  ],
  [
    alchemyProvider({
      apiKey: "bce8a15dd364a66eed23a08411c3e59c8ba39fb25867a9baf4256ebe72ec5f2b",
      priority: 1,
    }),
    publicProvider(), // Add the public provider for local networks
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Mock Dex",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
