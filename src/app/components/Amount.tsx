import React from "react";
import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";
import { Input } from "@/components/ui/input";

interface AmountProps {
    amount: number;
    setAmount: (value: number) => void;
    currency: CryptoCurrency;
}

const Amount: React.FC<AmountProps> = ({ amount, setAmount, currency }) => {
    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value) && value >= 0) {
            setAmount(value);
        }
    };

    return (
        <div className="flex items-center space-x-2 mt-8">
            <Input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="w-40 font-mono"
                min={0}
                placeholder="Enter amount"
            />
            <span className="text-gray-600 font-mono">{currency}</span>
        </div>
    );
};

export default Amount;
