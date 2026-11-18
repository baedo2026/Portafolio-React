import { projectsData } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import StatusMessage from "../components/StatusMessage/StatusMessage";
import useFetchApi from "../hooks/useFetchApi";
import type { GitHubRepository } from "../types";
import "./ProjectsPage.css";

function ProjectsPage() {
  const { data, loading, error } = useFetchApi<GitHubRepository[]>(
    "https://api.github.com/users/baedo2026/repos?sort=updated&per_page=6"
  );

  return (
    <main className="projects-page">
      <section className="projects-page__section">
        <p className="projects-page__eyebrow">Mi trabajo</p>
        <h1 className="projects-page__title">Mis proyectos</h1>
        <p className="projects-page__description">Una selección de trabajos y experiencias desarrolladas durante mi formación.</p>
        <div className="projects-page__grid">
          {projectsData.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>
      <section className="projects-page__github">
        <p className="projects-page__eyebrow">Código y desarrollo</p>
        <h2>Mis repositorios de GitHub</h2>
        {loading && <StatusMessage type="loading" message="Cargando repositorios..." />}
        {error && <StatusMessage type="error" message={error} />}
        {data && data.length === 0 && <StatusMessage type="success" message="No hay repositorios públicos disponibles." />}
        {data && data.length > 0 && (
          <div className="projects-page__github-grid">
            {data.map((repository) => (
              <article className="projects-page__github-card" key={repository.id}>
                <h3>{repository.name}</h3>
                <p>{repository.description || "Sin descripción disponible."}</p>
                <div>
                  <span>{repository.language || "Sin lenguaje definido"}</span>
                  <span>★ {repository.stargazers_count}</span>
                </div>
                <a href={repository.html_url} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositorio ${repository.name} en GitHub`}>Ver repositorio</a>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default ProjectsPage;
