"use client";

import { motion } from "framer-motion";
import { ChartBar, Shield, Coins, HeartPulse, Brain, Globe } from "lucide-react";

const features = [
  {
    title: "Smart AI Assistance",
    description: "24/7 voice-powered AI support for all your needs",
    icon: Brain,
    stats: {
      value: "99.9%",
      label: "Response Rate",
    },
  },
  {
    title: "Enhanced Privacy",
    description: "End-to-end encrypted calls and secure data handling",
    icon: Shield,
    stats: {
      value: "1M+",
      label: "Secure Calls",
    },
  },
  {
    title: "Multi-domain Support",
    description: "Travel, healthcare, and personal assistance in one place",
    icon: Globe,
    stats: {
      value: "10+",
      label: "Service Categories",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const BackgroundGlow = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#4ADE80] opacity-10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4ADE80] opacity-10 rounded-full blur-3xl"></div>
  </div>
);

export function FeaturesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <BackgroundGlow />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-[#4ADE80]/10 text-[#4ADE80] 
            rounded-full text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-4xl font-bold mb-4">Intelligent Assistance, Simplified</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the future of AI assistance with powerful voice-based support
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 bg-white rounded-2xl transition-all duration-500
                  hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(74,222,128,0.1)]"
              >
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#4ADE80]/10 rounded-xl flex items-center justify-center
                      group-hover:bg-[#4ADE80]/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-[#4ADE80]/20 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-end gap-2">
                      <div className="text-3xl font-bold text-[#4ADE80]">
                        {feature.stats.value}
                      </div>
                      <div className="text-gray-500 text-sm mb-1">
                        {feature.stats.label}
                      </div>
                    </div>
                  </div>

                  {/* Hover effects */}
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r 
                    from-transparent via-[#4ADE80]/50 to-transparent scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                    from-[#4ADE80]/50 via-transparent to-[#4ADE80]/50 scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-500 delay-100"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Stats Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-2xl shadow-sm">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#4ADE80]" />
              <span className="text-sm font-semibold">Powered by Advanced AI</span>
            </div>
            <div className="h-6 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#4ADE80]" />
              <span className="text-sm font-semibold">Enterprise-Grade Security</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}