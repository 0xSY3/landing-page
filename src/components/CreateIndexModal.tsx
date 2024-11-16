"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { X, Plus, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export enum Symbols {
  BTC = "PYTH:BTCUSD",
  ETH = "PYTH:ETHUSD",
  AURORA = "PYTH:AURORAUSD",
  USDT = "PYTH:USDTUSD",
  ARB = "PYTH:ARBUSD",
  OP = "PYTH:OPUSD",
}

interface Symbol {
  symbol: string;
  icon: string;
  percentange: number;
}

interface CreateIndexModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateIndex: (index: { symbols: Symbol[] }) => void;
}

const ICON_MAP: Record<string, string> = {
  BTC: "/icons/bitcoin.png",
  ETH: "/icons/ethereum.png",
  AURORA: "/icons/aurora.png",
  USDT: "/icons/usdt.png",
  ARB: "/icons/arbitrum.png",
  OP: "/icons/optimism.png",
};

export const CreateIndexModal: React.FC<CreateIndexModalProps> = ({
  open,
  onOpenChange,
  onCreateIndex,
}) => {
  const [tokens, setTokens] = React.useState<Symbol[]>([
    { symbol: "BTC", icon: ICON_MAP["BTC"], percentange: 50 },
  ]);
  const [error, setError] = React.useState<string | null>(null);

  const availableTokens = React.useMemo(() => {
    return Object.keys(Symbols).filter(
      (symbol) => !tokens.find((t) => t.symbol === symbol)
    );
  }, [tokens]);

  const totalPercentage = React.useMemo(() => {
    return tokens.reduce((sum, token) => sum + token.percentange, 0);
  }, [tokens]);

  const handleAddToken = () => {
    if (availableTokens.length === 0) return;
    const newToken = {
      symbol: availableTokens[0],
      icon: ICON_MAP[availableTokens[0]],
      percentange: 0,
    };
    setTokens([...tokens, newToken]);
  };

  const handleRemoveToken = (index: number) => {
    if (tokens.length === 1) {
      setError("Index must have at least one token");
      return;
    }
    const newTokens = tokens.filter((_, i) => i !== index);
    setTokens(newTokens);
    setError(null);
  };

  const handleTokenChange = (index: number, symbol: string) => {
    const newTokens = [...tokens];
    newTokens[index] = {
      ...newTokens[index],
      symbol,
      icon: ICON_MAP[symbol],
    };
    setTokens(newTokens);
  };

  const handlePercentageChange = (index: number, value: number[]) => {
    const newValue = value[0];

    if (newValue > 100) {
      const newTokens = [...tokens];
      newTokens[index] = {
        ...newTokens[index],
        percentange: 100,
      };
      setTokens(newTokens);
      setError("Individual token percentage cannot exceed 100%");
      setTimeout(() => setError(null), 2000);
      return;
    }

    const otherTokensTotal = tokens.reduce(
      (sum, token, i) => (i !== index ? sum + token.percentange : sum),
      0
    );

    if (otherTokensTotal + newValue > 100) {
      setError("Total percentage cannot exceed 100%");
      setTimeout(() => setError(null), 2000);
      return;
    }

    const newTokens = [...tokens];
    newTokens[index] = {
      ...newTokens[index],
      percentange: newValue,
    };
    setTokens(newTokens);
    setError(null);
  };

  const handleCreateIndex = () => {
    if (totalPercentage !== 100) {
      setError("Total percentage must equal 100%");
      return;
    }
    if (tokens.length === 0) {
      setError("Index must have at least one token");
      return;
    }
    setError(null);
    onCreateIndex({ symbols: tokens });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" p-8 bg-[#fdfdf2] border-2 border-[#151515]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-semibold">
            Create New Index
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div
            className={`${
              tokens.length > 3 ? "grid grid-cols-2 gap-4" : "space-y-2"
            }`}
          >
            {tokens.map((token, index) => (
              <div
                key={index}
                className="p-4 border border-[#151515] rounded-lg space-y-4 h-full"
              >
                <div className="flex items-center justify-between">
                  <Select
                    value={token.symbol}
                    onValueChange={(value) => handleTokenChange(index, value)}
                  >
                    <SelectTrigger className="w-[180px] border border-[#151515]">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <img
                            src={token.icon}
                            alt={token.symbol}
                            className="h-6 w-6"
                          />
                          {token.symbol}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={token.symbol}>
                        <div className="flex items-center gap-2">
                          <img
                            src={token.icon}
                            alt={token.symbol}
                            className="h-6 w-6"
                          />
                          {token.symbol}
                        </div>
                      </SelectItem>
                      {availableTokens.map((symbol) => (
                        <SelectItem key={symbol} value={symbol}>
                          <div className="flex items-center gap-2">
                            <img
                              src={ICON_MAP[symbol]}
                              alt={symbol}
                              className="h-6 w-6"
                            />
                            {symbol}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveToken(index)}
                    disabled={tokens.length === 1}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Weight</span>
                    <span className="flex items-center gap-1">
                      <span>{token.percentange}%</span>
                    </span>
                  </div>
                  <Slider
                    value={[token.percentange]}
                    onValueChange={(value) =>
                      handlePercentageChange(index, value)
                    }
                    max={100}
                    min={0}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handleAddToken}
              disabled={availableTokens.length === 0}
              className="bg-[#fdfdf2] border-[#151515]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Token
            </Button>
            <span
              className={`font-medium ${
                totalPercentage === 100
                  ? "text-green-500"
                  : totalPercentage > 100
                  ? "text-red-500"
                  : "text-yellow-500"
              }`}
            >
              Total: {totalPercentage}%
            </span>
          </div>

          <Button
            className="w-full bg-black hover:bg-black/90"
            onClick={handleCreateIndex}
            disabled={totalPercentage !== 100}
          >
            Create Index
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
