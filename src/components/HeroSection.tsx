"use client";

import { motion } from "framer-motion";
import { Phone, Brain, HeartPulse, Globe, Clock, Shield, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featureCards = [
  {
    icon: Globe,
    title: "Travel Planning",
    description: "AI-powered journey planning and real-time travel assistance available 24/7."
  },
  {
    icon: HeartPulse,
    title: "Healthcare Support",
    description: "Instant medical guidance and health monitoring through voice calls."
  },
  {
    icon: Brain,
    title: "AI Twin",
    description: "Your digital twin for seamless task management and personal assistance."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade encryption for all your conversations and data."
  }
];

const statsData = [
  { value: "99.9%", label: "Success Rate" },
  { value: "24/7", label: "Availability" },
  { value: "50K+", label: "Active Users" }
];

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4ADE80] opacity-[0.07] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4ADE80] opacity-[0.07] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#4ADE80]/10 text-[#4ADE80] px-4 py-2 
                rounded-full text-sm font-medium mb-6"
            >
              <Clock className="w-4 h-4" />
              24/7 AI Voice Assistance
            </motion.div>

            {/* Heading */}
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Your Personal
              <span className="block text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#4ADE80] to-[#4ADE80]/70">
                AI Assistant
              </span>
              One Call Away
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience seamless AI assistance through voice calls for travel planning,
              healthcare support, and your personalized AI twin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/start-call"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4ADE80] text-white 
                  rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all 
                  duration-300 font-medium group"
              >
                <Phone className="w-5 h-5" />
                Start AI Call
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link href="/create-twin"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-800 
                  rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all 
                  duration-300 font-medium border border-gray-100"
              >
                <Brain className="w-5 h-5" />
                Create AI Twin
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#4ADE80] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 grid grid-cols-2 gap-6 relative"
          >
            <div className="absolute inset-0 bg-[#4ADE80] opacity-[0.03] blur-3xl rounded-full" />
            
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Card Content */}
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-[#4ADE80]/10 rounded-xl flex items-center 
                    justify-center group-hover:bg-[#4ADE80]/20 transition-colors duration-300">
                    <card.icon className="w-6 h-6 text-[#4ADE80]" />
                  </div>

                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent 
                  via-[#4ADE80]/50 to-transparent scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-sm">
            <Shield className="w-5 h-5 text-[#4ADE80]" />
            <span className="text-sm font-medium">Powered by Advanced AI Models</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}