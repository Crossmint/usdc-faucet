export const CryptoCurrency = {
    USDC: "usdc",
    USDXM: "usdxm",
} as const;

export type CryptoCurrency = (typeof CryptoCurrency)[keyof typeof CryptoCurrency];
