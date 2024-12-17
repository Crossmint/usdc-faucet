import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <div className="flex flex-col space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
                id="amount"
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
