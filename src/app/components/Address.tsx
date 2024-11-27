import { useState } from "react";
import { useAccount } from "wagmi";

interface AddressProps {
  address: string;
  setAddress: Function;
}

const Address: React.FC<AddressProps> = ({ address, setAddress }) => {
  const [error, setError] = useState(false);

  return (
    <>
      <input
        type="text"
        defaultValue={address}
        onChange={(e) => {
          const value = e.target.value;
          if (value.startsWith("0x") && value.length === 42) {
            setError(false);
            setAddress(value as `0x${string}`);
          } else {
            setError(true);
          }
        }}
        className={`w-full text-center p-3 rounded-full font-mono text-lg bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
          error ? "border border-red-500" : ""
        }`}
        placeholder="Enter wallet address"
      />
      {error && (
        <span className="mt-3">You must enter a valid wallet address</span>
      )}
    </>
  );
};

export default Address;
