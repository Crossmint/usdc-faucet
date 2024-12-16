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
            <div className="text-sm text-center text-gray-600 mt-4 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                            >
                                staging.crossmint.com
                            </a>
                        </span>
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                            >
                                Crossmint API Keys Documentation
                            </a>
                        </span>
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>
                            Make sure to use the{" "}
                            <code className="px-2 py-1 bg-gray-200 rounded-md font-mono text-sm">wallets.fund</code>{" "}
                            scope
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default APIKey;
