import { FeaturesSection } from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import { LogoTicker } from "@/components/LogoTicker";
import { RoadmapSection } from "@/components/Roadmap";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Add subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>

      {/* Main content with proper spacing */}
      <div className="relative z-10">
        <HeroSection />
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4ADE80]/20 to-transparent"></div>
          <LogoTicker />
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4ADE80]/20 to-transparent"></div>
          <FeaturesSection />
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4ADE80]/20 to-transparent"></div>
          <RoadmapSection />
        </div>
      </div>
    </main>
  );
}
