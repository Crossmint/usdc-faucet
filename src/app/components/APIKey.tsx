import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

interface APIKeyProps {
    apiKey: string;
    onChange: (apiKey: string) => void;
}

export default function APIKey({ apiKey, onChange }: APIKeyProps) {
    const [error, setError] = useState<string | null>(null);

    const validateAPIKey = (value: string) => {
        if (!value.trim()) {
            setError("API key is required");
        } else if (!value.startsWith("sk_")) {
            setError("Invalid API key");
        } else {
            setError(null);
        }
    };

    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="apiKey" className={error ? "text-red-500" : ""}>
                API Key
            </Label>
            <Input
                type="text"
                id="apiKey"
                placeholder="Enter API Key"
                value={apiKey}
                className={error ? "border-red-500" : ""}
                onChange={(e) => {
                    onChange(e.target.value);
                    setError(null);
                }}
                onBlur={(e) => {
                    validateAPIKey(e.target.value);
                }}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Alert>
                <AlertDescription>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-[#04C768]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                                />
                            </svg>
                            <span>
                                Get your API key from{" "}
                                <a
                                    href="https://staging.crossmint.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#04C768] hover:text-[#0AAF5C] font-medium transition-colors"
                                >
                                    staging.crossmint.com
                                </a>
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-[#04C768]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                            <span>
                                Follow the guide at{" "}
                                <a
                                    href="https://docs.crossmint.com/introduction/platform/api-keys/server-side"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#04C768] hover:text-[#0AAF5C] font-medium transition-colors"
                                >
                                    Crossmint API Keys Documentation
                                </a>
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-[#04C768]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>
                                Make sure to enable the{" "}
                                <code className="px-2 py-1 bg-stone-900 rounded-md font-mono text-sm">
                                    wallets.fund
                                </code>{" "}
                                scope
                            </span>
                        </div>
                    </div>
                </AlertDescription>
            </Alert>
        </div>
    );
}
