import { Globe, Brain, Server, Zap, type LucideIcon } from "lucide-react";
import { services } from "../data";

const iconMap: Record<string, LucideIcon> = { Globe, Brain, Server, Zap };

export default function Services() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-border bg-border">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.title} className="bg-card p-6">
                {Icon && <Icon size={20} className="text-primary mb-3" />}
                <p className="font-semibold text-sm">{s.title}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
