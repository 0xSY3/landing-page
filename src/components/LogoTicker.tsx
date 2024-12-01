"use client";

import NearLogo from "@/assets/logo-near.png";
import EthereumLogo from "@/assets/logo-ethereum.png";
import OptimismLogo from "@/assets/logo-optimism.png";
import ArbitrumLogo from "@/assets/logo-arbitrum.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Shield, Brain } from "lucide-react";

const GlowingBadge = () => (
  <div className="absolute -top-3 -right-3 bg-[#4ADE80] text-white text-xs px-3 py-1 
    rounded-full shadow-lg animate-pulse">
    24/7 Live
  </div>
);

export function LogoTicker() {
  return (
    <section className="relative py-16 text-[#151515] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ADE80] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4ADE80] opacity-10 rounded-full blur-3xl"></div>

      <div className="container relative">
        <div className="flex items-center gap-8">
          <div className="flex-1 md:flex-none">
            <div className="relative bg-white p-6 rounded-xl shadow-lg 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <GlowingBadge />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4ADE80] to-transparent rounded-t-xl"></div>
              <h2 className="font-bold flex items-center gap-3">
                <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                  <Brain className="text-[#4ADE80] w-5 h-5" />
                </div>
                <span>Integrated With Leading Chains</span>
              </h2>
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#4ADE80] rounded-full opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="flex-1 overflow-hidden 
            [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[
                NearLogo,
                EthereumLogo,
                OptimismLogo,
                ArbitrumLogo,
                NearLogo,
                EthereumLogo,
                OptimismLogo,
                ArbitrumLogo,
              ].map((logo, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-[#4ADE80] opacity-0 group-hover:opacity-10 
                    rounded-lg transition-opacity duration-300"></div>
                  <Image
                    src={logo}
                    alt={`${logo}`}
                    className="h-6 w-auto filter drop-shadow-sm transition-all duration-300 
                      group-hover:drop-shadow-lg"
                  />
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                      w-1 h-1 bg-[#4ADE80] rounded-full opacity-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}