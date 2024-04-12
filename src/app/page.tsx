"use client";

import Navigation from "./components/Navigation";
import Faucet from "./components/Faucet";
import Footer from "./components/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia, baseSepolia, polygonAmoy } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "Crossmint USDC Testnet Faucet",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || "",
  chains: [baseSepolia, sepolia, polygonAmoy],
  ssr: true,
});

const queryClient = new QueryClient();

const Page: React.FC = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <div className="container mx-auto max-w-5xl bg-white rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-6 sm:gap-8 p-8">
              <Navigation />
              <Faucet />
            </div>
          </div>
          <Footer />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Page;
