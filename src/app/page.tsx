"use client";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FundWalletProvider } from "./hooks/useFundWallet";
import FaucetRouter from "./components/FaucetRouter";

const queryClient = new QueryClient();

const Page: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FundWalletProvider>
        <div className="container mx-auto max-w-5xl bg-white rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-6 sm:gap-8 p-8">
            <Navigation />
            <FaucetRouter />
          </div>
        </div>
        <Footer />
      </FundWalletProvider>
    </QueryClientProvider>
  );
};

export default Page;
