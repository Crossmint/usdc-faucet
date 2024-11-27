import React from "react";
import { type BaseError, useWaitForTransactionReceipt, useWriteContract } from "wagmi";

interface MintProps {
    amount: number;
    address: `0x${string}`;
}

const MintUSDXM: React.FC<MintProps> = ({ amount, address }) => {
    const { data: hash, error, isPending, writeContract } = useWriteContract();
    const abi = [
        {
            inputs: [
                { internalType: "address", name: "_recipient", type: "address" },
                { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
    ];

    const mintUSXM = () => {
        console.log("mint USDXM");
        writeContract({
            address: "0x14196F08a4Fa0B66B7331bC40dd6bCd8A1dEeA9F",
            abi,
            functionName: "mint",
            args: [address, amount * 10 ** 6],
        });
    };

    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
        hash,
    });

    return (
        <>
            <button
                onClick={mintUSXM}
                className="w-40 px-4 py-2 my-4 rounded-md text-white font-mono bg-green-500"
                disabled={isPending}
            >
                {isPending ? "Confirming..." : "Mint USDC"}
            </button>
            {hash && <div className="m-4">Transaction hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
            {error && <div>Error: {(error as BaseError).shortMessage || error.message}</div>}
        </>
    );
};

export default MintUSDXM;
