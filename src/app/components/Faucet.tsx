import React, { useState } from "react";
import Address from "../components/Address";
import Amount from "../components/Amount";
import { CrossmintChains } from "../components/Chains";
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
        <div className="sm:col-span-6 flex flex-col bg-black rounded-md">
            <div className="border-b border-stone-900 p-3">
                <h2 className="text-base font-semibold">Request</h2>
            </div>
            <div className="p-3 flex flex-col gap-4">
                <CrossmintChains chain={chain} onChainChange={setChain} />
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
                <div className="flex items-end gap-4">
                    <Amount amount={amount} setAmount={setAmount} />
                    <Currencies currency={currency} onChangeCurrency={setCurrency} />
                </div>
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
        </div>
    );
};

export default Faucet;
