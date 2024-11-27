import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";

interface CurrenciesProps {
    currency: CryptoCurrency;
    onChangeCurrency: (currency: CryptoCurrency) => void;
}

const Currencies: React.FC<CurrenciesProps> = ({ currency, onChangeCurrency }) => {
    return (
        <div className="flex space-x-4 mt-4">
            <button
                onClick={() => onChangeCurrency(CryptoCurrency.USDC)}
                className={`px-4 py-2 rounded-full text-white font-mono ${
                    currency === CryptoCurrency.USDC ? "bg-green-700" : "bg-green-400 hover:bg-green-700"
                }`}
            >
                USDC {currency === CryptoCurrency.USDC && <span>&#10003;</span>}
            </button>
            <button
                onClick={() => onChangeCurrency(CryptoCurrency.USDXM)}
                className={`px-4 py-2 rounded-full text-white font-mono ${
                    currency === CryptoCurrency.USDXM ? "bg-blue-700" : "bg-blue-400 hover:bg-blue-700"
                }`}
            >
                USDXM {currency === CryptoCurrency.USDXM && <span>&#10003;</span>}
            </button>
        </div>
    );
};

export default Currencies;
