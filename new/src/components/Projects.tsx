import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import { track } from "@vercel/analytics";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import BrowserFrame from "./BrowserFrame";
import { projects } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const motion = gsap.matchMedia();

    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-project-artwork]").forEach((artwork) => {
          const project = artwork.closest<HTMLElement>("[data-project]");
          if (!project) return;

          gsap.from(artwork, {
            clipPath: "inset(0 100% 0 0)",
            scale: 1.025,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: project,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          });
        });
      }, sectionRef);

      return () => context.revert();
    });

    return () => motion.revert();
  }, []);

  const renderProject = (project: (typeof projects)[number], index: number) => (
    <article
      key={project.slug}
      data-project
      className="project-story"
    >
      <a
        href={`/work/${project.slug}`}
        className="project-art-shell"
        aria-label={`Read the ${project.title} case study`}
        data-project-artwork
        onClick={() => track("project_case_study_click", { project: project.slug })}
      >
        <BrowserFrame
          src={project.image}
          alt={`${project.title} project preview`}
          fallbackTitle={project.title}
          fallbackLabel={project.tag}
          priority={index === 0}
          className="project-artwork h-full"
        />
      </a>

      <div className="project-content" data-scroll-reveal>
        <p className="project-eyebrow">{project.tag}</p>
        <h3>
          <a href={`/work/${project.slug}`}>{project.title}</a>
        </h3>
        <p className="project-outcome">{project.outcome}</p>
        <ul className="project-stack" aria-label="Technology stack">
          {project.stack.slice(0, 4).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
          {project.stack.length > 4 && (
            <li className="project-stack-more">+{project.stack.length - 4}</li>
          )}
        </ul>

        <div className="project-actions">
          <a
            className="project-read-link"
            href={`/work/${project.slug}`}
            onClick={() => track("project_case_study_click", { project: project.slug })}
          >
            Read case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <div className="project-source-links">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("project_external_click", { project: project.slug, destination: "live" })}
              aria-label={`Open ${project.title} live demo`}
            >
              <ExternalLink size={15} aria-hidden="true" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("project_external_click", { project: project.slug, destination: "source" })}
              aria-label={`View ${project.title} source code`}
            >
              <GitBranch size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section ref={sectionRef} id="work" className="content-section">
      <div className="page-width section-space project-section-space">
        <SectionHeading
          title="Projects"
          subtitle="Full-stack products where engineering rigor meets applied AI."
        />

        <div className="project-gallery">
          {projects.map((project, index) => renderProject(project, index))}
        </div>
      </div>
    </section>
  );
}
