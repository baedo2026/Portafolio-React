import type { Project } from "../../types";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__image-container">
        <img className="project-card__image" src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
      <div className="project-card__content">
        <span className="project-card__number">{project.number}</span>
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__tags">
          {project.tags.map((tag) => <li className="project-card__tag" key={tag}>{tag}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
