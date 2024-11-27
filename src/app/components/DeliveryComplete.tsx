import { useFundWallet } from "../hooks/useFundWallet";

export default function DeliveryComplete() {
    const { resetState, fundWalletResponse } = useFundWallet();
    return (
        <div className="sm:col-span-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-8">
                {successIcon}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">Tokens sent</h1>

            <p className="text-2xl text-gray-600 mb-8">
                Your tokens are on the way to your wallet and should appear shortly.
            </p>

            {fundWalletResponse?.txId && (
                <p className="text-gray-600 mb-4">Transaction hash: {fundWalletResponse.txId}</p>
            )}

            <button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-blue-700 transition-colors"
                onClick={resetState}
            >
                Get more tokens
            </button>
        </div>
    );
}

const successIcon = (
    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);
