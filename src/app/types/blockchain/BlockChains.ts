import { BlockchainIncludingTestnet, ObjectValues } from "@crossmint/common-sdk-base";

export const EvmUsdcEnabledTestnetChains = {
    ARBITRUM_SEPOLIA: BlockchainIncludingTestnet.ARBITRUM_SEPOLIA,
    AVALANCHE_FUJI: "avalanche-fuji",
    BASE_SEPOLIA: BlockchainIncludingTestnet.BASE_SEPOLIA,
    BARRET_TESTNET: "barret-testnet",
    ETHEREUM_SEPOLIA: BlockchainIncludingTestnet.ETHEREUM_SEPOLIA,
    OPTIMISM_SEPOLIA: BlockchainIncludingTestnet.OPTIMISM_SEPOLIA,
    POLYGON_AMOY: BlockchainIncludingTestnet.POLYGON_AMOY,
    SEI_ATLANTIC_2_TESTNET: "SEI_ATLANTIC_2_TESTNET",
    SKALE_NEBULA_TESTNET: "skale-nebula-testnet",
    SONEIUM_MINATO_TESTNET: "soneium-minato-testnet",
    VICTION_TESTNET: "viction-testnet",
} as const;

export const NonEVMChain = { SOLANA: "solana" } as const;

export const UsdcEnabledTestnetChains = {
    ...EvmUsdcEnabledTestnetChains,
    ...NonEVMChain,
} as const;

export type EvmUsdcEnabledTestnet = ObjectValues<typeof EvmUsdcEnabledTestnetChains>;

export type NonEVMChain = ObjectValues<typeof NonEVMChain>;
export type UsdcEnabledTestnet = ObjectValues<typeof UsdcEnabledTestnetChains>;
