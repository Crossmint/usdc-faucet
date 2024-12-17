import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChainType } from "../types/blockchain/BlockChains";
import { isAddress } from "viem";
import { useState, useEffect } from "react";

interface AddressProps {
    address: string;
    chainType: ChainType;
    onChange: (address: string) => void;
}

function isBase58(str: string): boolean {
    const base58Alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    for (const char of str) {
        if (!base58Alphabet.includes(char)) {
            return false;
        }
    }
    return true;
}

function validateSolanaAddress(address: string): boolean {
    // Check if the address is a string
    if (typeof address !== "string") {
        return false;
    }

    // Check the length of the address
    if (address.length !== 44) {
        return false;
    }

    // Check if the address is a valid base58 string
    return isBase58(address);
}

export default function Address({ address, chainType, onChange }: AddressProps) {
    const [error, setError] = useState<string | null>(null);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        setError(null);
    }, [chainType]);

    const validateAddress = (addr: string) => {
        if (chainType === "evm") {
            if (!isAddress(addr)) {
                setError("Invalid Ethereum address");
            } else {
                setError(null);
            }
        } else if (chainType === "solana") {
            if (!validateSolanaAddress(addr)) {
                setError("Invalid Solana address");
            } else {
                setError(null);
            }
        }
    };

    return (
        <div className="grid w-full items-center space-y-1">
            <Label htmlFor="address" className={error ? "text-red-500" : ""}>
                Wallet Address
            </Label>
            <Input
                type="text"
                id="address"
                placeholder="Enter wallet address"
                value={address}
                className={error ? "border-red-500" : ""}
                onChange={(e) => {
                    onChange(e.target.value);
                    setError(null);
                }}
                onBlur={(e) => {
                    validateAddress(e.target.value);
                }}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}
