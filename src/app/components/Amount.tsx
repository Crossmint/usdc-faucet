import { CryptoCurrency } from "../types/currencies/CryptoCurrencies";

interface AmountProps {
  amount: number;
  setAmount: Function;
  currency: CryptoCurrency;
}

const Amount: React.FC<AmountProps> = ({ amount, setAmount, currency }) => {
  const amounts = [30, 70, 100];

  return (
    <div className="flex space-x-4 mt-8">
      {amounts.map((value) => (
        <button
          key={value}
          onClick={() => setAmount(value)}
          className={`w-40 px-4 py-2 rounded-md text-white font-mono ${
            amount === value ? "bg-black" : "bg-gray-400 hover:bg-black"
          }`}
        >
          {value} {currency} {amount === value && <span>&#10003;</span>}
        </button>
      ))}
    </div>
  );
};

export default Amount;
