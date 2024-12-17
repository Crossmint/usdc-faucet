import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface AmountProps {
    amount: number;
    setAmount: (value: number) => void;
    currency: CryptoCurrency;
    onChangeCurrency: (currency: CryptoCurrency) => void;
}

const Amount: React.FC<AmountProps> = ({ amount, setAmount, currency, onChangeCurrency }) => {
    const [error, setError] = useState<string | null>(null);

    const validateAmount = (value: string) => {
        const num = parseFloat(value);
        if (isNaN(num)) {
            setError("Please enter a valid number");
        } else if (num <= 0) {
            setError("Amount must be greater than 0");
        } else if (num > 100) {
            setError("Amount must be less than 100");
        } else {
            setError(null);
        }
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value) && value >= 0) {
            setAmount(value);
        }
    };

    return (
        <div className="flex flex-col space-y-2">
            <Label htmlFor="amount" className={error ? "text-red-500" : ""}>
                Amount
            </Label>
            <div className="flex items-center space-x-4">
                <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => {
                        handleAmountChange(e);
                        setError(null);
                    }}
                    onBlur={(e) => {
                        validateAmount(e.target.value);
                    }}
                    className={`w-40 font-mono hover:border-[#04C768] ${error ? "border-red-500" : ""}`}
                    min={0}
                    placeholder="Enter amount"
                />
                <ToggleGroup
                    type="single"
                    value={currency}
                    onValueChange={(value) => {
                        if (value) {
                            onChangeCurrency(value as CryptoCurrency);
                        }
                    }}
                >
                    <ToggleGroupItem value={CryptoCurrency.USDC}>USDC</ToggleGroupItem>
                    <ToggleGroupItem value={CryptoCurrency.USDXM}>USDXM</ToggleGroupItem>
                </ToggleGroup>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Amount;
