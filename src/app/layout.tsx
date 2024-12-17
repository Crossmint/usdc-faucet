import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Crossmint USDC Testnet Faucet",
    description: "Mint testnet USDC compatible with Crossmint NFT Checkout tools",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
