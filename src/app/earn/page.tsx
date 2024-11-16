import { Card } from "@/components/Card";
import { Index } from "@/types";

const indices: Index[] = [
  {
    symbols: [
      {
        symbol: "BTC",
        icon: "/icons/bitcoin.png",
        percentange: 50.0,
      },
      {
        symbol: "ETH",
        icon: "/icons/ethereum.png",
        percentange: 30.0,
      },
    ],
  },
  {
    symbols: [
      {
        symbol: "ETH",
        icon: "/icons/ethereum.png",
        percentange: 40.0,
      },
      {
        symbol: "BTC",
        icon: "/icons/bitcoin.png",
        percentange: 40.0,
      },
      {
        symbol: "AURORA",
        icon: "/icons/aurora.png",
        percentange: 20.0,
      },
    ],
  },
  {
    symbols: [
      {
        symbol: "ARB",
        icon: "/icons/arbitrum.png",
        percentange: 60.0,
      },
      {
        symbol: "OP",
        icon: "/icons/optimism.png",
        percentange: 40.0,
      },
    ],
  },
];

export default function Earn() {
  return (
    <div className="min-h-screen pt-28 px-20">
      <h1 className="text-2xl">Earn</h1>
      <div className="flex flex-row justify-between mt-10 gap-5">
        {indices.map((index, indexKey) => (
          <Card key={indexKey} index={index} />
        ))}
      </div>
    </div>
  );
}
