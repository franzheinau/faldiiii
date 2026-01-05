"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      {/* CONTAINER WAJIB */}
      <div className="container">
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Hi, Saya <span>Rifaldi</span>
          </h1>

          <p>
            Selamat Datang di Portofolio Saya.
          </p>

          <div className="hero-actions">
            <a href="/projects" className="btn-primary">
              Lihat Proyek Saya
            </a>
            <a href="/contact" className="btn-secondary">
                Hubungi Saya
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
