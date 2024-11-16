export interface Index {
  symbols: Symbol[];
}

interface Symbol {
  symbol: string;
  icon: string;
  percentange: number;
}

export enum Symbols {
  BTC = "PYTH:BTCUSD",
  ETH = "PYTH:ETHUSD",
  AURORA = "PYTH:AURORAUSD",
}
