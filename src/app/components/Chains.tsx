import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { UsdcEnabledTestnet, UsdcEnabledTestnetChains, ChainNames } from "../types/blockchain/BlockChains";

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
                        <SelectValue placeholder="Select a chain">{ChainNames[chain]}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        {Object.entries(UsdcEnabledTestnetChains).map(([_key, value]) => (
                            <SelectItem key={value} value={value}>
                                {ChainNames[value]}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};
