import React, { createContext, useContext, useState } from "react";
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
    fundWallet: (props: FundWalletProps) => Promise<FundWalletResponse | undefined>;
    resetState: () => void;
    fundWalletLoading: boolean;
    fundWalletResponse?: FundWalletResponse;
    error?: Error;
}

export const FundWalletContext = createContext<FundWalletContextType>({
    fundWallet: async () => {
        throw new Error("[FundWalletProvider] fundWallet called outside of provider");
    },
    resetState: () => {
        throw new Error("[FundWalletProvider] resetState called outside of provider");
    },
    fundWalletLoading: false,
    fundWalletResponse: undefined,
    error: undefined,
});

export function FundWalletProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [fundWalletLoading, setFundWalletLoading] = useState(false);
    const [fundWalletResponse, setFundWalletResponse] = useState<FundWalletResponse | undefined>(undefined);
    const [error, setError] = useState<Error | undefined>(undefined);
    async function fundWallet(props: FundWalletProps): Promise<FundWalletResponse | undefined> {
        const fundWalletBody = {
            amount: props.amount,
            currency: props.currency,
            ...(props.chain !== "solana" && { chain: props.chain }),
        };

        setFundWalletLoading(true);

        try {
            const response = await fetchPostJson<FundWalletResponse>(
                `https://staging.crossmint.com/api/v1-alpha2/wallets/${props.address}/balances`,
                fundWalletBody
            );
            setFundWalletLoading(false);
            setFundWalletResponse(response);
            return response;
        } catch (error) {
            setFundWalletLoading(false);
            setFundWalletResponse(undefined);
            setError(error as Error);
            return undefined;
        }
    }

    function resetState() {
        setFundWalletResponse(undefined);
        setError(undefined);
        setFundWalletLoading(false);
    }

    return (
        <FundWalletContext.Provider
            value={{
                fundWallet,
                resetState,
                fundWalletLoading,
                fundWalletResponse,
                error,
            }}
        >
            {children}
        </FundWalletContext.Provider>
    );
}

export function useFundWallet() {
    return useContext(FundWalletContext);
}
