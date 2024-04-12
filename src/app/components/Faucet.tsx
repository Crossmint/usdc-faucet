import { useState, useEffect } from "react";
import Address from "../components/Address";
import Amount from "../components/Amount";
import Chains from "../components/Chains";
import Preview from "../components/Preview";
import MintUSDC from "../components/MintUSDC";
import { useAccount } from "wagmi";

const Faucet: React.FC = () => {
  const account = useAccount();
  const [amount, setAmount] = useState(10);
  const [address, setAddress] = useState(account.address || "0xabcde12345...");

  useEffect(() => {
    setAddress(account.address || "0x");
  }, [account]);

  return (
    <div className="sm:col-span-6 flex flex-col items-center">
      <Address setAddress={setAddress} />
      <Amount amount={amount} setAmount={setAmount} />
      <Chains />
      <Preview amount={amount} address={account.address || ""} />
      <MintUSDC amount={amount} address={address} />
    </div>
  );
};

export default Faucet;
