import SectionHeading from "./SectionHeading"
import { skillGroups } from "../data"

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="// 01"
          title="Skills & Stack"
          subtitle="The tools and technologies I reach for when shipping production software and AI systems."
        />

        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-card p-6">
              <h3 className="mb-4 font-mono text-sm font-semibold text-primary">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {item}
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
