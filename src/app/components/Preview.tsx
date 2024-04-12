import { useChainId } from "wagmi";

interface PreviewProps {
  amount: number;
  address: string;
}

const Preview: React.FC<PreviewProps> = ({ amount, address }) => {
  const chainId = useChainId();

  const chainIdMap: { [key: string]: string } = {
    "84532": "base-sepolia",
    "11155111": "ethereum-sepolia",
    "80002": "polygon-amoy",
  };

  return (
    <div className="flex p-8 bg-gray-100 rounded-md m-5">
      Mint <strong className="px-1">{amount}</strong> USDC on
      <strong className="px-1">
        {chainIdMap[chainId.toString()] || "____"}
      </strong>
      to wallet
      <strong className="px-1">{address}</strong>
    </div>
  );
};

export default Preview;
