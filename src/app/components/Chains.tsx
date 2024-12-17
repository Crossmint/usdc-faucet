import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { UsdcEnabledTestnet, UsdcEnabledTestnetChains } from "../types/blockchain/BlockChains";

interface ChainsProps {
    chain: UsdcEnabledTestnet;
    onChainChange: (chain: UsdcEnabledTestnet) => void;
}

export const CrossmintChains: React.FC<ChainsProps> = ({ chain, onChainChange }) => {
    return (
        <div className="w-full max-w-xs">
            <div className="space-y-0.5">
                <Label htmlFor="chain">Chain</Label>
                <Select value={chain} onValueChange={onChainChange}>
                    <SelectTrigger id="chain">
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
        </div>
    );
};
