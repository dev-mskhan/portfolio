import { ArrowLeft, ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import BrowserFrame from "./BrowserFrame";
import { projects } from "../data";

type Project = (typeof projects)[number];

export default function ProjectDetail({ project }: { project?: Project }) {
  if (!project) {
    return (
      <section className="project-page page-width">
        <a className="project-back-link" href="/#work">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </a>
        <div className="project-not-found">
          <h1>Project not found</h1>
          <p>This project page is no longer available.</p>
          <a className="button button-primary" href="/#work">
            View projects
            <span className="button-arrow" aria-hidden="true">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </section>
    );
  }

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <article className="project-page page-width">
      <a className="project-back-link" href="/#work">
        <ArrowLeft size={16} aria-hidden="true" />
        All projects
      </a>

      <header className="project-page-heading">
        <p className="project-page-category">{project.tag}</p>
        <h1>{project.title}</h1>
        <p className="project-page-outcome">{project.outcome}</p>
        <div className="project-page-actions">
          <a
            className="button button-primary"
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit live project
            <span className="button-arrow" aria-hidden="true">
              <ExternalLink size={15} />
            </span>
          </a>
          <a
            className="button button-secondary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source
            <span className="button-arrow" aria-hidden="true">
              <GitBranch size={15} />
            </span>
          </a>
        </div>
      </header>

      <div className="project-detail-art">
        <BrowserFrame
          src={project.image}
          alt={`${project.title} project preview`}
          fallbackTitle={project.title}
          fallbackLabel={project.tag}
          priority
          className="h-full"
        />
      </div>

      <div className="project-detail-grid">
        <section className="project-detail-intro">
          <h2>Overview</h2>
          <p>{project.description}</p>
          <ul className="project-detail-stack" aria-label="Technology stack">
            {project.stack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>

        <div className="project-detail-study">
          <section aria-labelledby="project-challenge">
            <h2 id="project-challenge">The challenge</h2>
            <p>{project.caseStudy?.challenge}</p>
          </section>
          <section aria-labelledby="project-approach">
            <h2 id="project-approach">The approach</h2>
            <p>{project.caseStudy?.approach}</p>
          </section>
          <section aria-labelledby="project-highlights">
            <h2 id="project-highlights">Highlights</h2>
            <ul>
              {project.caseStudy?.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <nav className="project-pagination" aria-label="Other projects">
        {previous ? (
          <a href={`/work/${previous.slug}`}>
            <span>Previous project</span>
            <strong>{previous.title}</strong>
          </a>
        ) : <span aria-hidden="true" />}
        {next && (
          <a className="project-pagination-next" href={`/work/${next.slug}`}>
            <span>Next project</span>
            <strong>
              {next.title}
              <ArrowUpRight size={16} aria-hidden="true" />
            </strong>
          </a>
        )}
      </nav>
    </article>
  );
}
