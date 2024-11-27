import { useFundWallet } from "../hooks/useFundWallet";
import Faucet from "./Faucet";
import DeliveryComplete from "./DeliveryComplete";

export default function FaucetRouter() {
    const { fundWalletResponse } = useFundWallet();

    if (fundWalletResponse) {
        return <DeliveryComplete />;
    }

    return <Faucet />;
}
