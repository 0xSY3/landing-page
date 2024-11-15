"use client";

import { useEffect, useState } from "react";

import localFont from "next/font/local";
import "./globals.css";

import { Navigation } from "@/components/Navigation";
import { HelloNearContract, NetworkId } from "@/config";

import { NearContext, Wallet } from "@/wallets/near";

const wallet = new Wallet({
  networkId: NetworkId,
  createAccessKeyFor: HelloNearContract,
});

const giuconda = localFont({
  src: "./fonts/Giuconda Regular.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [signedAccountId, setSignedAccountId] = useState("");

  useEffect(() => {
    wallet.startUp(setSignedAccountId);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${giuconda.variable} antialiased bg-[#fbfbe4] text-[#151515]`}
      >
        <NearContext.Provider value={{ wallet, signedAccountId }}>
          <Navigation />
          {children}
        </NearContext.Provider>
      </body>
    </html>
  );
}
