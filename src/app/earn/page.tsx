"use client";
import { Card } from "@/components/Card";
import { ConfirmationModal } from "@/components/ConfirmationModal";
import { Index } from "@/types";
import { useState } from "react";

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
        percentange: 50.0,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<Index | null>(null);

  const handleSelectIndex = (index: Index) => {
    setSelectedIndex(index);
    handleModal();
  };

  const handleModal = () => {
    setModalVisible(true);
  };

  return (
    <div className="min-h-screen pt-28 px-20">
      <h1 className="text-2xl">Earn</h1>
      <div className="flex flex-row justify-between mt-10 gap-5">
        {indices.map((index, indexKey) => (
          <div
            key={indexKey}
            onClick={() => handleSelectIndex(index)}
            className="cursor-pointer w-full"
          >
            <Card key={indexKey} index={index} />
          </div>
        ))}
      </div>
      {selectedIndex && (
        <ConfirmationModal
          index={selectedIndex}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )}
    </div>
  );
}
