import Link from "next/link";

export default function ProjectCard({ title, desc, slug }) {
  return (
    <article className="project-card">
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <Link href={`/projects/${slug}`} className="project-link">
        View details →
      </Link>
    </article>
  );
}
