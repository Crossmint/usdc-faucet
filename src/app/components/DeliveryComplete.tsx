import { useFundWallet } from "../hooks/useFundWallet";
import { Button } from "@/components/ui/button";

export default function DeliveryComplete() {
    const { resetState, fundWalletResponse } = useFundWallet();
    return (
        <div className="sm:col-span-6 flex flex-col items-center p-6 gap-12">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">{successIcon}</div>
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-xl font-bold text-gray-100">Tokens sent</h1>

                <div className="flex flex-col items-center gap-1">
                    <p className=" text-gray-100">
                        Your tokens are on the way to your wallet and should appear shortly.
                    </p>
                    {fundWalletResponse?.txId && (
                        <p className="text-gray-400">Transaction hash: {fundWalletResponse.txId}</p>
                    )}
                </div>
                <Button size="lg" onClick={resetState}>
                    Get more tokens
                </Button>
            </div>
        </div>
    );
}

const successIcon = (
    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);
