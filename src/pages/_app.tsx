import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Web3Modal } from "@web3modal/react";
import { chains, providers } from "@web3modal/ethereum";

if (!process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID)
  throw new Error("You need to provide WALLET_CONNECT_PROJECT_ID env variable");

const modalConfig = {
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  theme: "dark" as const,
  accentColor: "default" as const,
  ethereum: {
    appName: "web3Modal",
    autoConnect: true,
    chains: [chains.goerli],
    providers: [
      providers.walletConnectProvider({
        projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
      }),
    ],
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
      <Web3Modal config={modalConfig} />
    </ThemeProvider>
  );
}

export default MyApp;
