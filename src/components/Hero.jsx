"use client";

import { motion } from "framer-motion";
import { use } from "react";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-inner"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I’m <span>Web Developer</span>
        </h1>
        <p>
          I build modern, fast, and responsive websites.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/contact" className="btn-secondary">Contact</a>
        </div>
      </motion.div>
    </section>
  );
}
