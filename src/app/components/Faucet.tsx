import { useState, useEffect } from "react";
import Address from "../components/Address";
import Amount from "../components/Amount";
import { CrossmintChains } from "../components/Chains";
import Preview from "../components/Preview";
import { useAccount } from "wagmi";
import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";
import Currencies from "./Currencies";
import { useFundWallet } from "../hooks/useFundWallet";
import {
  UsdcEnabledTestnet,
  UsdcEnabledTestnetChains,
} from "../types/blockchain/BlockChains";

const Faucet: React.FC = () => {
  const account = useAccount();
  const { fundWallet, fundWalletLoading } = useFundWallet();
  const [amount, setAmount] = useState(10);
  const [address, setAddress] = useState(account.address || "0xabcde12345...");
  const [currency, setCurrency] = useState<CryptoCurrency>(
    CryptoCurrency.USDXM
  );
  const [chain, setChain] = useState<UsdcEnabledTestnet>(
    UsdcEnabledTestnetChains.ETHEREUM_SEPOLIA
  );
  useEffect(() => {
    setAddress(account.address || "0x");
  }, [account]);

  return (
    <div className="sm:col-span-6 flex flex-col items-center">
      <Address setAddress={setAddress} />
      <Amount amount={amount} setAmount={setAmount} currency={currency} />
      <CrossmintChains chain={chain} onChainChange={setChain} />
      <Currencies currency={currency} onChangeCurrency={setCurrency} />
      <Preview amount={amount} address={account.address || ""} />
      <button
        className="w-40 px-4 py-2 my-4 rounded-md text-white font-mono bg-blue-500 disabled:bg-gray-400"
        disabled={fundWalletLoading}
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
    </div>
  );
};

export default Faucet;
