"use client";

import { useState } from "react";
import projects from "@/app/data/projects";
import ProjectCard from "./ProjectCard";

const categories = ["all", "web", "ui"];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filteredProjects =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects">
      {/* FILTER */}
      <div className="project-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="project-grid">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </section>
  );
}
