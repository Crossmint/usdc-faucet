interface AmountProps {
  amount: number;
  setAmount: Function;
}

const Chains: React.FC<AmountProps> = ({ amount, setAmount }) => {
  return (
    <div className="flex space-x-4 mt-8">
      <button
        onClick={() => setAmount(10)}
        className={`w-40 px-4 py-2 rounded-md text-white font-mono ${
          amount === 10 ? "bg-black" : "bg-gray-400 hover:bg-black"
        }`}
      >
        10 USDC {amount === 10 && <span>&#10003;</span>}
      </button>
      <button
        onClick={() => setAmount(100)}
        className={`w-40 px-4 py-2 rounded-md text-white font-mono ${
          amount === 100 ? "bg-black" : "bg-gray-400 hover:bg-black"
        }`}
      >
        100 USDC {amount === 100 && <span>&#10003;</span>}
      </button>
      <button
        onClick={() => setAmount(1000)}
        className={`w-40 px-4 py-2 rounded-md text-white font-mono ${
          amount === 1000 ? "bg-black" : "bg-gray-400 hover:bg-black"
        }`}
      >
        1,000 USDC {amount === 1000 && <span>&#10003;</span>}
      </button>
    </div>
  );
};

export default Chains;
