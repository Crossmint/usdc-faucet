import { useChainId, useSwitchChain } from "wagmi";
import { UsdcEnabledTestnet } from "../types/blockchain/BlockChains";
import { UsdcEnabledTestnetChains } from "../types/blockchain/BlockChains";

export const Chains: React.FC = () => {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  return (
    <div className="flex space-x-4 mt-8">
      <button
        onClick={() => switchChain({ chainId: 84532 })}
        className={`px-4 py-2 rounded-full text-white font-mono ${
          chainId === 84532 ? "bg-blue-700" : "bg-blue-400 hover:bg-blue-700"
        }`}
      >
        Base Sepolia {chainId === 84532 && <span>&#10003;</span>}
      </button>
      <button
        onClick={() => switchChain({ chainId: 11155111 })}
        className={`px-4 py-2 rounded-full text-white font-mono ${
          chainId === 11155111 ? "bg-teal-700" : "bg-teal-400 hover:bg-teal-700"
        }`}
      >
        Ethereum Sepolia {chainId === 11155111 && <span>&#10003;</span>}
      </button>
      <button
        onClick={() => switchChain({ chainId: 421614 })}
        className={`px-4 py-2 rounded-full text-white font-mono ${
          chainId === 421614 ? "bg-blue-900" : "bg-blue-700 hover:bg-blue-900"
        }`}
      >
        Arbitrum Sepolia {chainId === 421614 && <span>&#10003;</span>}
      </button>
      <button
        onClick={() => switchChain({ chainId: 80002 })}
        className={`px-4 py-2 rounded-full text-white font-mono ${
          chainId === 80002
            ? "bg-purple-700"
            : "bg-purple-400 hover:bg-purple-700"
        }`}
      >
        Polygon Amoy {chainId === 80002 && <span>&#10003;</span>}
      </button>
    </div>
  );
};

interface ChainsProps {
  chain: UsdcEnabledTestnet;
  onChainChange: (chain: UsdcEnabledTestnet) => void;
}

export const CrossmintChains: React.FC<ChainsProps> = ({
  chain,
  onChainChange: onChainChange,
}) => {
  return (
    <div className="w-full max-w-xs mt-4">
      <select
        value={chain}
        onChange={(e) => onChainChange(e.target.value as UsdcEnabledTestnet)}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Object.values(UsdcEnabledTestnetChains).map((chainOption) => (
          <option key={chainOption} value={chainOption}>
            {chainOption}
          </option>
        ))}
      </select>
    </div>
  );
};
