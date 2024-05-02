import React, { Component } from "react";
import "../styles/globals.css";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";

const { chains, provider } = configureChains(
  [chains.amoy],
  [infuraProvider({ apiKey: "", priority: 1 })]
);

const { connectors } = createClient({
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
  <WagmiConfig>
    <RainbowKitProvider>
      <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>;
}
export default MyApp;
