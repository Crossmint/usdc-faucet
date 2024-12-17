import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface APIKeyProps {
    apiKey: string;
    onChange: (apiKey: string) => void;
}

export default function APIKey({ apiKey, onChange }: APIKeyProps) {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
                type="text"
                id="apiKey"
                placeholder="Enter API Key"
                value={apiKey}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
