import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Name
      </motion.h1>
      <motion.p 
        className="mt-4 text-lg text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Portfolio Website
      </motion.p>
      <div className="mt-8 flex space-x-4">
        <Link href="/work" className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300">
          View Work
        </Link>
        <Link href="/contact" className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
