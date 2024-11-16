import BigNumber from "bignumber.js";

interface Symbol {
  symbol: string;
  icon: string;
  percentange: number;
}

enum PythID {
  BTC = "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
  ETH = "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
  AURORA = "0x2f7c4f738d498585065a4b87b637069ec99474597da7f0ca349ba8ac3ba9cac5",
  USDT = "0x7e10170c23d7df62d301b2ade26854200ee584f3f3b84cb2e5195adf35c5b97f",
  ARB = "0x3fa4252848f9f0a1480be62745a4629d9eb1322aebab8a791e344b3b9c1adcf5",
  OP = "0x385f64d993f7b77d8182ed5003d97c60aa3361f3cecfe711544d2d59165e9bdf",
}

const processPriceData = (priceRaw: string, expo: number): number => {
  const price = new BigNumber(priceRaw);
  let finalPrice: BigNumber;

  if (expo >= 0) {
    finalPrice = price.multipliedBy(new BigNumber(10).pow(expo));
  } else {
    finalPrice = price.dividedBy(new BigNumber(10).pow(-expo));
  }

  return parseFloat(finalPrice.toFixed());
};

export const getIndexChange = async (symbols: Symbol[]): Promise<number> => {
  try {
    const priceChanges = await Promise.all(
      symbols.map(async (symbolData) => {
        const pythID = PythID[symbolData.symbol as keyof typeof PythID];
        if (!pythID) {
          throw new Error(`Invalid symbol: ${symbolData.symbol}`);
        }

        const timestamp24hAgo = Math.floor(Date.now() / 1000) - 24 * 60 * 60;

        // Fetch both prices in parallel
        const [currentPriceRes, historicalPriceRes] = await Promise.all([
          fetch(
            `https://hermes.pyth.network/v2/updates/price/latest?ids%5B%5D=${pythID}`
          ),
          fetch(
            `https://hermes.pyth.network/v2/updates/price/${timestamp24hAgo}?ids%5B%5D=${pythID}`
          ),
        ]);

        const [currentPriceData, historicalPriceData] = await Promise.all([
          currentPriceRes.json(),
          historicalPriceRes.json(),
        ]);

        const currentPrice = processPriceData(
          currentPriceData.parsed[0].price.price,
          currentPriceData.parsed[0].price.expo
        );

        const price24hAgo = processPriceData(
          historicalPriceData.parsed[0].price.price,
          historicalPriceData.parsed[0].price.expo
        );

        const percentageChange =
          ((currentPrice - price24hAgo) / price24hAgo) * 100;
        return percentageChange * (symbolData.percentange / 100); // Apply weight
      })
    );

    // Sum up all weighted percentage changes
    return priceChanges.reduce(
      (sum, weightedChange) => sum + weightedChange,
      0
    );
  } catch (error) {
    console.error("Error calculating index change:", error);
    throw error;
  }
};
