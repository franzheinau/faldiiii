import projects from "../../data/projects";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params }) {
  const { slug } = params;

  // cari project berdasarkan slug
  const project = projects.find(
    (item) => item.slug === slug
  );

  // kalau slug tidak ditemukan → 404
  if (!project) {
    return notFound();
  }

  return (
    <section className="project-detail">
      <h1>{project.title}</h1>

      <p style={{ marginTop: "1rem" }}>
        {project.content}
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a
          href={project.link}
          target="_blank"
          className="btn-primary"
        >
          View Repository
        </a>
      </div>
    </section>
  );
}
