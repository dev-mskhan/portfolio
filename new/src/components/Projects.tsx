import { useState } from "react";
import { ChevronDown } from "lucide-react";
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

        <div className="flex flex-col border border-border">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="border-b border-border bg-card last:border-b-0"
            >
              <button
                onClick={() => toggleCaseStudy(i)}
                className="group grid w-full cursor-pointer grid-cols-1 gap-6 p-6 text-left transition-colors hover:bg-muted md:grid-cols-[auto_1fr] md:p-8"
              >
                <div className="font-mono text-2xl text-muted-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {project.title}
                    </h3>
                    <span className="border border-primary px-2.5 py-1 font-mono text-xs text-primary">
                      {project.tag}
                    </span>
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
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === i ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="border-t border-border px-6 pb-6 pt-5 md:px-8 md:pb-8">
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
