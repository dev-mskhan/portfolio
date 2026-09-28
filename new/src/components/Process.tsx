import SectionHeading from "./SectionHeading";
import { workProcess } from "../data";

export default function Process() {
  return (
    <section id="process" className="content-section">
      <div className="page-width section-space">
        <SectionHeading
          title="How I Work"
          subtitle="Simple process, no surprises, whether you're a client or a team."
        />
        <ol className="process-list">
          {workProcess.map((item) => (
            <li className="process-item" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
