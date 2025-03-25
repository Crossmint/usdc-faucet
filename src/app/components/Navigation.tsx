import React from "react";
import Image from "next/image";
import Banner from "./Banner";

const Navigation: React.FC = () => {
    return (
        <div className="sm:col-span-6 flex justify-center">
            <div className="flex flex-col gap-6 items-center">
                <Image
                    src="/crossmint-logo.svg"
                    width={179}
                    height={40}
                    className="shrink"
                    alt="Crossmint logo"
                    priority={true}
                />
                <div className={`text-4xl font-bold`}>USDC Testnet Faucet</div>
                <Banner
                    color="info"
                    title="Notice"
                    body="This faucet is currently only accepting requests for USDXM."
                />
            </div>
        </div>
    );
};

export default Navigation;
