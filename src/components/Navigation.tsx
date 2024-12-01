"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NearContext } from "@/wallets/near";
import { Github, ChevronDown, Phone, Brain, Settings, LogOut, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useDebounce } from "@/hooks/debounce";
import { Ethereum } from "@/lib/ethereum";

const Sepolia = 11155111;
const Eth = new Ethereum("https://rpc2.sepolia.org", Sepolia);

export const Navigation = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [action, setAction] = useState<() => void>(() => {});
  const [label, setLabel] = useState("Loading...");
  const pathName = usePathname();

  const [ethAddress, setEthAddress] = useState<string>("");
  const [derivation, setDerivation] = useState("ethereum-1");


  const renderWalletButton = () => {
    if (!signedAccountId) {
      return (
        <button
          onClick={wallet?.signIn}
          className="relative group px-8 py-3 bg-[#4ADE80] text-white rounded-full 
            shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300
            flex items-center gap-2 font-medium"
        >
          <Phone className="w-4 h-4" />
          Start AI Call
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full 
            opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
        </button>
      );
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="relative group px-6 py-3 bg-white text-gray-800 rounded-full 
          shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300
          inline-flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4ADE80]/10 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-[#4ADE80]" />
          </div>
          <span className="font-medium">{label.slice(0, 6)}...{label.slice(-4)}</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[400px] bg-white rounded-xl shadow-xl border border-gray-100 p-2"
        >
          <DropdownMenuLabel className="px-3 py-2 text-gray-500 text-sm">Account Details</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-100" />
          
          <DropdownMenuItem className="flex flex-col items-start p-3 focus:bg-[#4ADE80]/5 rounded-lg">
            <span className="text-sm font-medium text-gray-600">NEAR Address</span>
            <span className="text-sm text-gray-500 break-all mt-1">
              {signedAccountId}
            </span>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="flex flex-col items-start p-3 focus:bg-[#4ADE80]/5 rounded-lg">
            <span className="text-sm font-medium text-gray-600">ETH Address</span>
            <span className="text-sm text-gray-500 break-all mt-1">
              {ethAddress || "Loading..."}
            </span>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator className="bg-gray-100" />
          
          <DropdownMenuItem 
            onClick={wallet?.signOut}
            className="p-3 text-red-500 focus:text-red-600 focus:bg-red-50 rounded-lg
              flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <nav className="w-full">
      <div className="fixed w-full flex flex-row items-center justify-between px-8 py-6 
        bg-white/80 backdrop-blur-lg z-40 border-b border-gray-100">
        <div className="flex items-center gap-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-[#4ADE80]/10 rounded-xl 
              group-hover:bg-[#4ADE80]/20 transition-colors duration-300">
              <Brain className="w-6 h-6 text-[#4ADE80]" />
            </div>
            <span className="text-xl font-semibold">AlphaVox</span>
          </Link>

          <div className="flex items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-gray-600 hover:text-[#4ADE80] transition-colors duration-300
                  ${pathName === item.href ? 'text-[#4ADE80]' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {pathName === "/" ? (
            <Link
              href="/dashboard"
              className="px-8 py-3 bg-[#4ADE80] text-white rounded-full 
                shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300
                flex items-center gap-2 font-medium"
            >
              <Phone className="w-4 h-4" />
              Start AI Call
            </Link>
          ) : (
            <>
              {renderWalletButton()}
              <Link
                href="https://github.com/alphavox"
                className="p-3 bg-white text-gray-700 rounded-full shadow-lg
                  hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300
                  flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};