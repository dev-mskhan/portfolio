import { ArrowUpRight } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { posts, calendar } from "../data"

export default function Research() {
  return (
    <section id="research" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="// 04"
          title="Writing"
          subtitle="Thoughts on web performance, build decisions, and what actually moves the needle — for teams and clients alike."
        />

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {posts.map((post, i) => (
            <article key={post.title} className="group flex flex-col bg-card p-6 md:p-8 hover:bg-accent transition-colors border-l-2 border-l-transparent hover:border-l-primary">
              <div className="mb-4 flex items-baseline gap-4">
                <span className="font-mono text-3xl font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">{post.title}</h3>
              </div>

              <p className="flex-1 text-pretty leading-relaxed text-muted-foreground">
                {post.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <li key={t} className="border border-border px-2.5 py-1 font-mono text-xs text-primary">
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                Read on Medium <ArrowUpRight size={13} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={calendar.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            {calendar.label} <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
