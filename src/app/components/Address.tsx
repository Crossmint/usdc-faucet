interface AddressProps {
    address: string;
    setAddress: (value: string) => void;
}

const Address: React.FC<AddressProps> = ({ address, setAddress }) => {
    return (
        <>
            <input
                type="text"
                defaultValue={address}
                onChange={(e) => {
                    setAddress(e.target.value);
                }}
                className="w-full text-center p-3 rounded-full font-mono text-lg bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter wallet address"
            />
        </>
    );
};

export default Address;
