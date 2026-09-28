import {
  Bot,
  CloudCog,
  Code2,
  Database,
  PlugZap,
  TestTube2,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups, education } from "../data";

const groupIcons: Record<string, LucideIcon> = {
  "Frameworks & Libraries": Code2,
  "AI & LLM Integration": Bot,
  Databases: Database,
  "API Development": PlugZap,
  "Testing & QA": TestTube2,
  "DevOps & Deployment": CloudCog,
};

export default function Skills() {
  return (
    <section id="skills" className="content-section">
      <div className="page-width section-space skills-section-space">
        <SectionHeading
          title="Skills & Stack"
          subtitle="The tools and technologies I reach for when shipping production software and AI systems."
        />

        <div className="skills-list">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.label] ?? Code2;

            return (
              <div className="skill-row" key={group.label}>
                <Icon className="skill-row-icon" size={17} aria-hidden="true" />
                <h3>{group.label}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="education-line">
          <p>
            <strong>{education.degree}</strong>
            {", "}{education.school}
            {", "}{education.period}
          </p>
        </div>
      </div>
    </section>
  );
}
