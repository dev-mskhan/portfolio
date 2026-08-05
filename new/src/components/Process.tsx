import SectionHeading from "./SectionHeading";
import { workProcess } from "../data";

export default function Process() {
  return (
    <section id="process" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="// 05"
          title="How I Work"
          subtitle="Simple process, no surprises — whether you're a client or a team."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-border bg-border">
          {workProcess.map((p) => (
            <div key={p.step} className="bg-card p-6">
              <span className="font-mono text-3xl font-bold text-primary">{p.step}</span>
              <p className="font-semibold text-sm mt-3">{p.title}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
