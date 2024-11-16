"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { X, Lock } from "lucide-react";
import { Index } from "@/types";
import Image from "next/image";

interface ConfirmationModalProps {
  index: Index;
  visible: boolean;
  onClose: () => void;
}
export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  index,
}) => {
  const [open, setOpen] = React.useState(true);
  const [amount, setAmount] = React.useState("50");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] p-8 bg-[#fdfdf2] border-2 border-[#151515]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-semibold">
            {index.symbols.map((symbol) => symbol.symbol).join("-")}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-base font-medium">Enter Amount</label>
              <span className="text-muted-foreground">Available: $0</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="relative ">
                <Input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pr-16 border-[#151515]"
                />
                <span className="absolute right-3 top-2.5 text-orange-500">
                  Max
                </span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/icons/usdc.png"
                  alt="USDC"
                  width={32}
                  height={32}
                />
                <span className="font-semibold">USDC</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Token Composition</h3>
            <div className="grid gap-4">
              {index.symbols.map((symbol, symbolKey) => (
                <div className="p-4 border border-[#151515] rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={symbol.icon}
                        alt="symbol"
                        className="h-8 w-8 rounded-full"
                      />
                      <div className="font-medium">{symbol.symbol}</div>
                    </div>
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="mb-2 text-right">50%</div>
                  <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="mb-2"
                  />
                  <div className="font-medium">$25.00</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="bg-[#fdfdf2] border-[#151515]">
              Reset Compositions
            </Button>
            <Button className="bg-[#151515] hover:bg-black/90">Buy</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
