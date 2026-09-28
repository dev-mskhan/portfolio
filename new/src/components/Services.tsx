import { Brain, Globe, Server, Zap, type LucideIcon } from "lucide-react";
import { services } from "../data";

const iconMap: Record<string, LucideIcon> = { Globe, Brain, Server, Zap };

export default function Services() {
  return (
    <section id="services" className="services-section content-section">
      <div className="page-width">
        <h2 className="services-heading">Services</h2>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article className="service-item" key={service.title}>
                {Icon && <Icon size={19} strokeWidth={1.7} aria-hidden="true" />}
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
