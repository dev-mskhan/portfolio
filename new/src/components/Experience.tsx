import { experiences } from "../data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="content-section experience-section">
      <div className="page-width section-space">
        <SectionHeading
          title="Experience"
          subtitle="Where I’ve applied my engineering skills in a professional team."
        />

        <ol className="experience-timeline">
          {experiences.map((experience) => (
            <li className="experience-entry" data-scroll-reveal key={`${experience.company}-${experience.period}`}>
              <span className="experience-marker" aria-hidden="true" />
              <div className="experience-entry-heading">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="experience-company">{experience.company}</p>
                </div>
                <p className="experience-period">{experience.period}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
