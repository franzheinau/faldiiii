import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main>
      <div className="container">
        <header className="projects-header">
          <h1>My Projects</h1>
          <p>
            Here are some projects I’ve built, focusing on modern web
            development and UI.
          </p>
        </header>

        <Projects />
      </div>
    </main>
  );
}
