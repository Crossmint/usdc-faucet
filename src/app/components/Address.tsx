import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddressProps {
    address: string;
    onChange: (address: string) => void;
}

export default function Address({ address, onChange }: AddressProps) {
    return (
        <div className="grid w-full items-center space-y-1">
            <Label htmlFor="address">Wallet Address</Label>
            <Input
                type="text"
                id="address"
                placeholder="Enter wallet address"
                value={address}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
