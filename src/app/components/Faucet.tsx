import React, { useState } from "react";
import Address from "../components/Address";
import Amount from "../components/Amount";
import { CrossmintChains } from "../components/Chains";
import Preview from "../components/Preview";
import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";
import Currencies from "./Currencies";
import { useFundWallet } from "../hooks/useFundWallet";
import { UsdcEnabledTestnet, UsdcEnabledTestnetChains } from "../types/blockchain/BlockChains";
import APIKey from "./APIKey";
import { Button } from "@/components/ui/button";

const Faucet: React.FC = () => {
    const { fundWallet, fundWalletLoading, error } = useFundWallet();
    const [amount, setAmount] = useState(30);
    const [address, setAddress] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [currency, setCurrency] = useState<CryptoCurrency>(CryptoCurrency.USDC);
    const [addressTouched, setAddressTouched] = useState(false);
    const [chain, setChain] = useState<UsdcEnabledTestnet>(UsdcEnabledTestnetChains.ETHEREUM_SEPOLIA);

    return (
        <div className="sm:col-span-6 flex flex-col items-center">
            <Address
                address={address}
                onChange={(value) => {
                    setAddressTouched(true);
                    setAddress(value);
                }}
            />
            {addressTouched && !address.trim() && (
                <div className="text-red-500 text-sm">Please enter a wallet address</div>
            )}
            <Currencies currency={currency} onChangeCurrency={setCurrency} />
            <CrossmintChains chain={chain} onChainChange={setChain} />
            <Amount amount={amount} setAmount={setAmount} currency={currency} />
            <Preview amount={amount} address={address} chain={chain} currency={currency} />
            <APIKey apiKey={apiKey} onChange={setApiKey} />
            <Button
                className="w-40 my-4"
                disabled={fundWalletLoading || !address.trim() || !apiKey.trim()}
                onClick={() => {
                    fundWallet({
                        amount,
                        address,
                        chain: chain,
                        currency,
                        apiKey: apiKey,
                    });
                }}
            >
                {fundWalletLoading ? "Loading..." : "Fund Wallet"}
            </Button>
            {error && <div className="text-red-500">{error.message}</div>}
        </div>
    );
};

export default Faucet;
