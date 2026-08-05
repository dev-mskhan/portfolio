import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { showreel } from "../data";

const LOOM_PARAMS = "hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1";

export default function Showreel() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="demo" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="// 03"
          title={showreel.title}
          subtitle={showreel.subtitle}
        />

        <div
          ref={boxRef}
          className="relative aspect-video w-full overflow-hidden border border-border bg-muted"
        >
          {inView ? (
            <iframe
              src={`https://www.loom.com/embed/${showreel.id}?${LOOM_PARAMS}`}
              title={showreel.title}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 font-mono text-sm text-muted-foreground">
              <span className="flex h-12 w-12 items-center justify-center border border-border bg-card text-primary">
                <Play size={20} />
              </span>
              Loading video…
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
