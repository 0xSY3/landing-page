"use client";

import { motion } from "framer-motion";
import { Brain, HeartPulse, Globe, Phone, Clock, Shield } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q3 2024",
    title: "AI Voice Platform Launch",
    description: "Launch of core AI voice platform with initial features and capabilities",
    milestones: [
      "24/7 AI call assistance",
      "Voice recognition system",
      "Basic AI twin creation",
    ],
    Icon: Phone,
    status: "current",
  },
  {
    quarter: "Q4 2024",
    title: "Advanced AI Features",
    description: "Introduction of sophisticated AI models and expanded service categories",
    milestones: [
      "Healthcare assistance integration",
      "Travel planning features",
      "Enhanced AI personalization",
    ],
    Icon: Brain,
    status: "upcoming",
  },
  {
    quarter: "Q1 2025",
    title: "Enhanced Security & Scale",
    description: "Implementation of advanced security features and global expansion",
    milestones: [
      "End-to-end encryption",
      "Multi-language support",
      "Global infrastructure deployment",
    ],
    Icon: Shield,
    status: "upcoming",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
    },
  },
};

export function RoadmapSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ADE80] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4ADE80] opacity-10 rounded-full blur-3xl"></div>

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
            Roadmap
          </span>
          <h2 className="text-4xl font-bold mb-4">Building the Future of AI Assistance</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our journey to revolutionize voice-based AI interactions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4ADE80]/30 to-transparent" />

          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.quarter}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-20 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <div className={`absolute left-8 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full
                ${item.status === "current" 
                  ? "bg-[#4ADE80]/20 ring-2 ring-[#4ADE80]" 
                  : "bg-white ring-2 ring-gray-200"}`}
              >
                <item.Icon className={`w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  ${item.status === "current" ? "text-[#4ADE80]" : "text-gray-400"}`} />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0 ${
                index % 2 === 0 ? "md:text-right" : ""
              }`}>
                <motion.div
                  className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500
                    group hover:-translate-y-1"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Quarter Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold
                      ${item.status === "current" 
                        ? "bg-[#4ADE80] text-white" 
                        : "bg-gray-100 text-gray-600"}`}
                    >
                      {item.quarter}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>

                  {/* Milestones */}
                  <ul className={`space-y-3 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {item.milestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                        <span className="flex-grow">{milestone}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effects */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r 
                    from-transparent via-[#4ADE80]/50 to-transparent scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-500"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}