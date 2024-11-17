const contractPerNetwork = {
  mainnet: "hello.near-examples.near",
  testnet: "indexer-3.testnet",
};

const tokenContractPerNetwork = {
  mainnet: "wrap.near",
  testnet: "index-4.testnet",
};

// Chains for EVM Wallets
const evmWalletChains = {
  mainnet: {
    chainId: 397,
    name: "Near Mainnet",
    explorer: "https://eth-explorer.near.org",
    rpc: "https://eth-rpc.mainnet.near.org",
  },
  testnet: {
    chainId: 398,
    name: "Near Testnet",
    explorer: "https://eth-explorer-testnet.near.org",
    rpc: "https://eth-rpc.testnet.near.org",
  },
};

export const NetworkId = "testnet";
export const IndexFundContract = contractPerNetwork[NetworkId];
export const IndexFundTokenContract = tokenContractPerNetwork[NetworkId];
export const EVMWalletChain = evmWalletChains[NetworkId];
