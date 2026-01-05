"use client";

import { projects } from "../app/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            className="project-card"
            whileHover={{ y: -8 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
