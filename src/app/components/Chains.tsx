import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UsdcEnabledTestnet, UsdcEnabledTestnetChains } from "../types/blockchain/BlockChains";

interface ChainsProps {
    chain: UsdcEnabledTestnet;
    onChainChange: (chain: UsdcEnabledTestnet) => void;
}

export const CrossmintChains: React.FC<ChainsProps> = ({ chain, onChainChange }) => {
    return (
        <div className="w-full max-w-xs">
            <Select value={chain} onValueChange={onChainChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a chain" />
                </SelectTrigger>
                <SelectContent>
                    {Object.values(UsdcEnabledTestnetChains).map((chainOption) => (
                        <SelectItem key={chainOption} value={chainOption}>
                            {chainOption}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};
