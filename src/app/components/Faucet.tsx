import React, { useMemo, useState } from "react";
import Address from "../components/Address";
import Amount from "../components/Amount";
import { CrossmintChains } from "../components/Chains";
import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";
import { useFundWallet } from "../hooks/useFundWallet";
import { getChainType, UsdcEnabledTestnet, UsdcEnabledTestnetChains } from "../types/blockchain/BlockChains";
import APIKey from "./APIKey";
import { Button } from "@/components/ui/button";

const Faucet: React.FC = () => {
    const { fundWallet, fundWalletLoading, error } = useFundWallet();
    const [amount, setAmount] = useState(30);
    const [address, setAddress] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [currency, setCurrency] = useState<CryptoCurrency>(CryptoCurrency.USDC);
    const [chain, setChain] = useState<UsdcEnabledTestnet>(UsdcEnabledTestnetChains.ETHEREUM_SEPOLIA);
    const chainType = useMemo(() => getChainType(chain), [chain]);

    return (
        <div className="sm:col-span-6 flex flex-col bg-black rounded-md">
            <div className="border-b border-stone-900 p-3">
                <h2 className="text-base font-semibold">Request</h2>
            </div>
            <div className="p-3 flex flex-col gap-4">
                <CrossmintChains chain={chain} onChainChange={setChain} />
                <Address
                    address={address}
                    chainType={chainType}
                    onChange={(value) => {
                        setAddress(value);
                    }}
                />
                <Amount amount={amount} setAmount={setAmount} currency={currency} onChangeCurrency={setCurrency} />
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
