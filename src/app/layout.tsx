"use client";

import { useEffect, useState } from "react";

import localFont from "next/font/local";
import "./globals.css";

import { Navigation } from "@/components/navigation";
import { HelloNearContract, NetworkId } from "@/config";

import { NearContext, Wallet } from "@/wallets/near";

const wallet = new Wallet({
  networkId: NetworkId,
  createAccessKeyFor: HelloNearContract,
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NearContext.Provider value={{ wallet, signedAccountId }}>
          <Navigation />
          {children}
        </NearContext.Provider>
      </body>
    </html>
  );
}
