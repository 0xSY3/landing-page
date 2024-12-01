"use client";

import { motion } from "framer-motion";
import { Twitter, Github, ArrowUpRight, Phone, Brain, Shield, HeartPulse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "AI Calls", href: "/ai-calls" },
    { name: "Travel Assistant", href: "/travel" },
    { name: "Healthcare", href: "/healthcare" },
    { name: "AI Twins", href: "/ai-twins" },
    { name: "Enterprise", href: "/enterprise" },
  ],
  technology: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "System Status", href: "/status" },
    { name: "Github", href: "https://github.com" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-[#4ADE80] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-[#4ADE80] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-12"
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 md:col-span-4"
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="p-2 bg-[#4ADE80]/10 rounded-xl">
                <Brain className="w-6 h-6 text-[#4ADE80]" />
              </div>
              <span className="text-xl font-semibold">AlphaVox</span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              24/7 AI-powered voice assistance for travel, healthcare, and personal support. Your intelligent companion is just a call away.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="p-2 rounded-xl bg-white hover:bg-[#4ADE80]/10 transition-colors duration-300
                    group flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-[#4ADE80] transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="col-span-1 md:col-span-2"
            >
              <h3 className="text-gray-900 font-semibold mb-4 tracking-tight">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#4ADE80] transition-colors duration-300 
                        inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      {link.href.startsWith("http") && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 
                          group-hover:opacity-100 group-hover:translate-y-0 
                          transition-all duration-300" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 
            border-t border-gray-200"
        >
          <p className="text-gray-600 text-sm">© 2024 AlphaVox. All rights reserved.</p>
          <div className="flex items-center gap-8">
            {['Cookie Settings', 'Accessibility', 'Sitemap'].map((item, index) => (
              <button
                key={item}
                className="text-sm text-gray-600 hover:text-[#4ADE80] transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-[#4ADE80]/5 rounded-full">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#4ADE80]" />
              <span className="text-sm font-medium">Enterprise-grade Security</span>
            </div>
            <div className="h-4 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-[#4ADE80]" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}