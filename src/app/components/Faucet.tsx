import { useState, useEffect } from "react";
import Address from "../components/Address";
import Amount from "../components/Amount";
import Chains from "../components/Chains";
import Preview from "../components/Preview";
import MintUSDXM from "../components/MintUSDXM";
import { useAccount } from "wagmi";
import { CryptoCurrency } from "../currencies/CryptoCurrencies";
import Currencies from "./Currencies";

const Faucet: React.FC = () => {
  const account = useAccount();
  const [amount, setAmount] = useState(10);
  const [address, setAddress] = useState(account.address || "0xabcde12345...");
  const [currency, setCurrency] = useState<CryptoCurrency>(
    CryptoCurrency.USDXM
  );

  useEffect(() => {
    setAddress(account.address || "0x");
  }, [account]);

  return (
    <div className="sm:col-span-6 flex flex-col items-center">
      <Address setAddress={setAddress} />
      <Amount amount={amount} setAmount={setAmount} />
      <Chains />
      <Currencies currency={currency} onChangeCurrency={setCurrency} />
      <Preview amount={amount} address={account.address || ""} />
      {currency === CryptoCurrency.USDXM ? (
        <MintUSDXM amount={amount} address={address} />
      ) : (
        <button className="w-40 px-4 py-2 my-4 rounded-md text-white font-mono bg-red-500">
          Not implemented
        </button>
      )}
    </div>
  );
};

export default Faucet;
