import { createContext, useContext, useEffect, useState } from "react";
import { UsdcEnabledTestnet } from "../types/blockchain/BlockChains";
import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";
import { fetchPostJson } from "../utils";

export interface FundWalletProps {
  amount: number;
  address: string;
  chain: UsdcEnabledTestnet;
  currency: CryptoCurrency;
}

export type FundWalletResponse = {
  txId: string;
};

export interface FundWalletContextType {
  fundWallet: (props: FundWalletProps) => Promise<FundWalletResponse>;
  fundWalletLoading: boolean;
}

export const FundWalletContext = createContext<FundWalletContextType>({
  fundWallet: async () => {
    throw new Error(
      "[FundWalletProvider] fundWallet called outside of provider"
    );
  },

  fundWalletLoading: false,
});

export function FundWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fundWalletLoading, setFundWalletLoading] = useState(false);

  async function fundWallet(
    props: FundWalletProps
  ): Promise<FundWalletResponse> {
    const fundWalletBody = {
      amount: props.amount,
      currency: props.currency,
      ...(props.chain !== "solana" && { chain: props.chain }),
    };

    setFundWalletLoading(true);
    const response = await fetchPostJson<FundWalletResponse>(
      `https://staging.crossmint.com/api/v1-alpha2/wallets/${props.address}/balances`,
      fundWalletBody
    );
    setFundWalletLoading(false);

    return response;
  }

  return (
    <FundWalletContext.Provider value={{ fundWallet, fundWalletLoading }}>
      {children}
    </FundWalletContext.Provider>
  );
}

export function useFundWallet() {
  return useContext(FundWalletContext);
}
