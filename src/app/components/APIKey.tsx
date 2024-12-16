import React, { useState } from "react";

const APIKey: React.FC<{ apiKey: string; setApiKey: (apiKey: string) => void }> = ({ apiKey, setApiKey }) => {
    const [apiKeyTouched, setApiKeyTouched] = useState(false);

    return (
        <div className="sm:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-md">
                <input
                    id="apiKey"
                    className="w-full text-center p-3 rounded-full font-mono text-lg bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={apiKey}
                    onChange={(e) => {
                        setApiKeyTouched(true);
                        setApiKey(e.target.value);
                    }}
                    placeholder="Enter your API key"
                />
                {apiKeyTouched && !apiKey.trim() && (
                    <div className="text-red-500 text-sm mt-1 text-center">Please enter your API key</div>
                )}
            </div>
            <div className="text-sm text-center text-gray-500 mt-2">
                Get your API key from{" "}
                <a
                    href="https://staging.crossmint.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                >
                    staging.crossmint.com
                </a>
                <div className="mt-1">
                    Follow the guide at{" "}
                    <a
                        href="https://docs.crossmint.com/introduction/platform/api-keys/server-side"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600"
                    >
                        Crossmint API Keys Documentation
                    </a>{" "}
                    to create your server-side key.
                </div>
                <div className="mt-1">
                    Make sure to use the <b>wallets.fund</b> scope.
                </div>
            </div>
        </div>
    );
};

export default APIKey;
