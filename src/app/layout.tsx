"use client";

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { IndexFundContract, NetworkId } from "@/config";
import { NearContext, Wallet } from "@/wallets/near";
import { Footer } from "@/components/Footer";

const wallet = new Wallet({
  networkId: NetworkId,
  createAccessKeyFor: IndexFundContract,
});

// Using a more modern font stack
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    wallet.startUp(setSignedAccountId);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#4ADE80" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${giuconda.variable} antialiased bg-gradient-to-b from-white to-gray-50 text-gray-900 min-h-screen flex flex-col`}
      >
        <NearContext.Provider value={{ wallet, signedAccountId }}>
          {/* Smooth gradient overlay for navigation */}
          <div className="fixed inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Navigation */}
          <Navigation />

          {/* Main content */}
          <div className="flex-grow relative">
            {children}
          </div>

          {/* Smooth gradient overlay for footer */}
          <div className="fixed inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Footer */}
          <Footer />
        </NearContext.Provider>

        {/* Global background glow effects */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4ADE80] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#4ADE80] opacity-10 rounded-full blur-3xl"></div>
        </div>
      </body>
    </html>
  );
}