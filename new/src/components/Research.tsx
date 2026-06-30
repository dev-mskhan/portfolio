import SectionHeading from "./SectionHeading"
import { research } from "../data"

export default function Research() {
  return (
    <section id="research" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="// 03"
          title="Research & Focus Areas"
          subtitle="Ongoing explorations at the intersection of agentic AI, retrieval systems, and trustworthy software."
        />

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {research.map((item) => (
            <div key={item.index} className="group relative bg-card p-6 md:p-8">
              <div className="mb-4 flex items-baseline gap-4">
                <span className="font-mono text-3xl font-bold text-muted/80 transition-colors group-hover:text-primary">
                  {item.index}
                </span>
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">{item.title}</h3>
              </div>

              <p className="text-pretty leading-relaxed text-muted-foreground">{item.summary}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {item.keywords.map((k) => (
                  <li key={k} className="border border-border px-2.5 py-1 font-mono text-xs text-primary">
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
