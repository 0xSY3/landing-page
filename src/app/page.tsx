import { HeroSection } from "@/components/HeroSection";
import { LogoTicker } from "@/components/LogoTicker";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbe4] pt-28 px-40">
      <HeroSection />
      <LogoTicker />
    </div>
  );
}
