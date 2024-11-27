import React from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });
const Navigation: React.FC = () => {
  return (
    <div className="sm:col-span-6 flex justify-between">
      <div className="flex">
        <Image
          src="/crossmint-logo.svg"
          width={246}
          height={55}
          className="rounded-lg shrink"
          alt="Crossmint logo"
          priority={true}
        />
        <div className={`ml-5 pt-2 text-2xl text-blue-500 ${oswald.className}`}>
          USDC Testnet Faucet
        </div>
      </div>
    </div>
  );
};

export default Navigation;
