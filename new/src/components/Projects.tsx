import { useState } from "react";
import { ChevronDown, ExternalLink, GitBranch } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCaseStudy = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="// 02"
          title="Work Experience"
          subtitle="Full-stack products where engineering rigor meets applied AI."
        />

        <div className="flex flex-col gap-0 border border-border">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="border-b border-border bg-card last:border-b-0"
            >
              <button
                onClick={() => toggleCaseStudy(i)}
                className="group w-full h-full cursor-pointer text-left transition-colors hover:bg-muted"
              >
                <div className="flex flex-col h-full md:flex-row">
                  <div className="relative w-full md:w-[300px] md:self-stretch overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 md:absolute md:inset-0 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 md:opacity-60" />
                  </div>

                  <div className="flex-1 p-6 md:p-8">
                    <div className="font-mono text-2xl text-muted-foreground transition-colors group-hover:text-primary md:text-3xl">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="flex flex-wrap items-start justify-between gap-3 mt-3">
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors inline-flex items-center gap-1.5"
                        >
                          <ExternalLink size={12} />
                          Live
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors inline-flex items-center gap-1.5"
                        >
                          <GitBranch size={12} />
                          Code
                        </a>
                        <span className="border border-primary px-2.5 py-1 font-mono text-xs text-primary">
                          {project.tag}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                      <span>Case study</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          expandedIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === i ? "max-h-[600px]" : "max-h-0"
                }`}
              >
                <div className="border-t border-border px-6 pb-6 pt-5 md:px-8 md:pb-8">
                  <div className="flex items-center gap-3 mb-5">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-primary px-3 py-1.5 font-mono text-xs text-primary hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-1.5"
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
          ))}
        </div>
      </div>
    </section>
  );
}
