import SectionHeading from "./SectionHeading";
import { showreel } from "../data";

const LOOM_PARAMS = "hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1";

export default function Showreel() {
  if (!showreel.id) return null;

  return (
    <section id="demo" className="content-section">
      <div className="page-width section-space">
        <SectionHeading title={showreel.title} subtitle={showreel.subtitle} />

        <div className="showreel-frame relative aspect-video overflow-hidden rounded-[1.4rem] border border-border bg-muted">
          <iframe
            src={`https://www.loom.com/embed/${showreel.id}?${LOOM_PARAMS}`}
            title={showreel.title}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
