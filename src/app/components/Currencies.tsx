import React from "react";
import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface CurrenciesProps {
    currency: CryptoCurrency;
    onChangeCurrency: (currency: CryptoCurrency) => void;
}

const Currencies: React.FC<CurrenciesProps> = ({ currency, onChangeCurrency }) => {
    return (
        <ToggleGroup
            type="single"
            value={currency}
            onValueChange={(value) => {
                if (value) {
                    onChangeCurrency(value as CryptoCurrency);
                }
            }}
            className="space-x-4"
        >
            <ToggleGroupItem value={CryptoCurrency.USDC}>USDC</ToggleGroupItem>
            <ToggleGroupItem value={CryptoCurrency.USDXM}>USDXM</ToggleGroupItem>
        </ToggleGroup>
    );
};

export default Currencies;
