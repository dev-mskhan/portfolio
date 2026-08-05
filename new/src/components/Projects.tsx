import { useState } from "react";
import { ChevronDown, ExternalLink, GitBranch } from "lucide-react";
import SectionHeading from "./SectionHeading";
import BrowserFrame from "./BrowserFrame";
import { projects } from "../data";

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="// 02"
          title="Work Experience"
          subtitle="Full-stack products where engineering rigor meets applied AI."
        />

        <div className="grid grid-cols-1 gap-5">
          {projects.map((project, i) => {
            const isOpen = expandedIndex === i;

            return (
              <article
                key={project.title}
                className="group border border-border bg-card overflow-hidden transition-colors hover:border-border/80 border-l-2 border-l-transparent hover:border-l-primary"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full aspect-video flex-shrink-0 md:aspect-auto md:w-1/2 md:self-stretch">
                    <BrowserFrame src={project.image} alt={project.title} ratio="" className="h-full" />
                  </div>

                  <div className="flex flex-1 flex-col p-5 md:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-1 text-lg font-semibold tracking-tight md:text-xl">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 text-sm font-medium text-foreground/75">
                          {project.outcome}
                        </p>
                      </div>

                      <span className="shrink-0 border border-primary px-2.5 py-1 font-mono text-[11px] text-primary">
                        {project.tag}
                      </span>
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-border bg-muted px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <ExternalLink size={12} />
                        Live
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-border bg-muted px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <GitBranch size={12} />
                        Code
                      </a>

                      <span className="h-4 w-px bg-border" />

                      <button
                        onClick={() =>
                          setExpandedIndex(isOpen ? null : i)
                        }
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                      >
                        Case study
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[600px]" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-border px-5 pb-5 pt-5 md:px-7 md:pb-7">
                    <div className="flex items-center gap-3 mb-5">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-primary px-3 py-1.5 font-mono text-xs text-primary hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-1.5"
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors inline-flex items-center gap-1.5"
                      >
                        <GitBranch size={12} />
                        Source Code
                      </a>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-mono text-xs tracking-wider text-primary">
                          CHALLENGE
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.caseStudy?.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-mono text-xs tracking-wider text-primary">
                          APPROACH
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.caseStudy?.approach}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h4 className="mb-2 font-mono text-xs tracking-wider text-primary">
                        KEY HIGHLIGHTS
                      </h4>
                      <ul className="grid gap-1.5 md:grid-cols-2">
                        {project.caseStudy?.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="inline-block h-1 w-1 bg-primary" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
