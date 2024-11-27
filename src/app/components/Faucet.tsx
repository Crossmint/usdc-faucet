import { useState } from "react";
import Address from "../components/Address";
import Amount from "../components/Amount";
import { CrossmintChains } from "../components/Chains";
import Preview from "../components/Preview";
import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";
import Currencies from "./Currencies";
import { useFundWallet } from "../hooks/useFundWallet";
import { UsdcEnabledTestnet, UsdcEnabledTestnetChains } from "../types/blockchain/BlockChains";

const Faucet: React.FC = () => {
    const { fundWallet, fundWalletLoading, error } = useFundWallet();
    const [amount, setAmount] = useState(30);
    const [address, setAddress] = useState("");
    const [currency, setCurrency] = useState<CryptoCurrency>(CryptoCurrency.USDC);
    const [addressTouched, setAddressTouched] = useState(false);
    const [chain, setChain] = useState<UsdcEnabledTestnet>(UsdcEnabledTestnetChains.ETHEREUM_SEPOLIA);

    return (
        <div className="sm:col-span-6 flex flex-col items-center">
            <Address
                address={address}
                setAddress={(value) => {
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
            <button
                className="w-40 px-4 py-2 my-4 rounded-md text-white font-mono bg-blue-500 disabled:bg-gray-400"
                disabled={fundWalletLoading || !address.trim()}
                onClick={() => {
                    fundWallet({
                        amount,
                        address,
                        chain: chain,
                        currency,
                    });
                }}
            >
                {fundWalletLoading ? "Loading..." : "Fund Wallet"}
            </button>
            {error && <div className="text-red-500">{error.message}</div>}
        </div>
    );
};

export default Faucet;
