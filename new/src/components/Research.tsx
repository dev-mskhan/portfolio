import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { posts, calendar } from "../data";

export default function Research() {
  return (
    <section id="research" className="content-section">
      <div className="page-width section-space writing-section-space">
        <SectionHeading
          title="Writing"
          subtitle="Thoughts on web performance, build decisions, and what actually moves the needle, for teams and clients alike."
        />

        <div className="writing-list">
          {posts.map((post) => (
            <article key={post.title} className="writing-item" data-scroll-reveal>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <ul className="writing-tags" aria-label="Topics">
                {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="writing-link"
              >
                Read on Medium <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-9">
          <a
            href={calendar.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            {calendar.label}
            <span className="button-arrow" aria-hidden="true"><ArrowUpRight size={15} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
