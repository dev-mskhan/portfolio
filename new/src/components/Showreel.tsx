import { CirclePlay } from "lucide-react";
import { showreel } from "../data";

const LOOM_PARAMS = "hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1";

export default function Showreel() {
  return (
    <div className="showreel-frame">
      {showreel.id ? (
        <iframe
          src={`https://www.loom.com/embed/${showreel.id}?${LOOM_PARAMS}`}
          title={showreel.title}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="showreel-embed"
        />
      ) : (
        <div
          className="showreel-placeholder"
          role="img"
          aria-label="Video placeholder"
        >
          <CirclePlay size={48} strokeWidth={1.25} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
