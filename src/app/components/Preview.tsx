import { UsdcEnabledTestnet } from "../types/blockchain/BlockChains";
import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";
interface PreviewProps {
  amount: number;
  address: string;
  chain: UsdcEnabledTestnet;
  currency: CryptoCurrency;
}

const Preview: React.FC<PreviewProps> = ({
  amount,
  address,
  chain,
  currency,
}) => {
  return (
    <div className="flex p-8 bg-gray-100 rounded-md m-5">
      Mint <strong className="px-1">{amount}</strong> {currency} on
      <strong className="px-1">{chain}</strong>
      to wallet
      <strong className="px-1">{address}</strong>
    </div>
  );
};

export default Preview;
