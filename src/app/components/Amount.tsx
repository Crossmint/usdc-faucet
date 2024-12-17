import React from "react";
import { Input } from "@/components/ui/input";

interface AmountProps {
    amount: number;
    setAmount: (value: number) => void;
}

const Amount: React.FC<AmountProps> = ({ amount, setAmount }) => {
    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value) && value >= 0) {
            setAmount(value);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <Input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="w-40 font-mono"
                min={0}
                placeholder="Enter amount"
            />
        </div>
    );
};

export default Amount;
