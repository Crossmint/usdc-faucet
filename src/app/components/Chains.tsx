import { UsdcEnabledTestnet } from "../types/blockchain/BlockChains";
import { UsdcEnabledTestnetChains } from "../types/blockchain/BlockChains";

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
