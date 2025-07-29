import { BlockchainIncludingTestnet, ObjectValues } from "@crossmint/common-sdk-base";

export const EvmUsdcEnabledTestnetChains = {
    ARBITRUM_SEPOLIA: BlockchainIncludingTestnet.ARBITRUM_SEPOLIA,
    AVALANCHE_FUJI: "avalanche-fuji",
    BASE_SEPOLIA: BlockchainIncludingTestnet.BASE_SEPOLIA,
    BARRET_TESTNET: "barret-testnet",
    ETHEREUM_SEPOLIA: BlockchainIncludingTestnet.ETHEREUM_SEPOLIA,
    OPTIMISM_SEPOLIA: BlockchainIncludingTestnet.OPTIMISM_SEPOLIA,
    POLYGON_AMOY: BlockchainIncludingTestnet.POLYGON_AMOY,
    SEI_ATLANTIC_2_TESTNET: "sei-atlantic-2-testnet",
    SKALE_NEBULA_TESTNET: "skale-nebula-testnet",
    SONEIUM_MINATO_TESTNET: "soneium-minato-testnet",
    VICTION_TESTNET: "viction-testnet",
} as const;

export const NonEVMChain = { SOLANA: "solana" } as const;

export const UsdcEnabledTestnetChains = {
    ...NonEVMChain,
    ...EvmUsdcEnabledTestnetChains,
} as const;

export type EvmUsdcEnabledTestnet = ObjectValues<typeof EvmUsdcEnabledTestnetChains>;

export type NonEVMChain = ObjectValues<typeof NonEVMChain>;
export type UsdcEnabledTestnet = ObjectValues<typeof UsdcEnabledTestnetChains>;

export type ChainType = "evm" | "solana";

export function getChainType(chain: UsdcEnabledTestnet): ChainType {
    if (chain === "solana") {
        return "solana";
    }
    if (Object.values(EvmUsdcEnabledTestnetChains).includes(chain)) {
        return "evm";
    }
    throw new Error("Invalid chain");
}

export const ChainNames: Record<UsdcEnabledTestnet, string> = {
    [BlockchainIncludingTestnet.ARBITRUM_SEPOLIA]: "Arbitrum Sepolia",
    "avalanche-fuji": "Avalanche Fuji",
    [BlockchainIncludingTestnet.BASE_SEPOLIA]: "Base Sepolia",
    "barret-testnet": "Barret Testnet",
    [BlockchainIncludingTestnet.ETHEREUM_SEPOLIA]: "Ethereum Sepolia",
    [BlockchainIncludingTestnet.OPTIMISM_SEPOLIA]: "Optimism Sepolia",
    [BlockchainIncludingTestnet.POLYGON_AMOY]: "Polygon Amoy",
    SEI_ATLANTIC_2_TESTNET: "Sei Atlantic 2 Testnet",
    "skale-nebula-testnet": "Skale Nebula Testnet",
    "soneium-minato-testnet": "Soneium Minato Testnet",
    "viction-testnet": "Viction Testnet",
    solana: "Solana",
} as const;
