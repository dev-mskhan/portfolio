import { useEffect, useRef, useState } from "react";

type ProjectVideoProps = {
  src: string;
  poster: string;
  title: string;
};

export default function ProjectVideo({ src, poster, title }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (
      !video ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let isVisible = false;
    let autoplayAttempted = false;

    const syncPlayback = () => {
      if (!isVisible || document.hidden) {
        video.pause();
        return;
      }

      if (video.paused && !autoplayAttempted) {
        autoplayAttempted = true;
        video.play().catch((error: unknown) => {
          if (!(error instanceof DOMException && error.name === "NotAllowedError")) {
            console.error("Project video autoplay failed:", error);
          }
          setAutoplayBlocked(true);
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        if (!isVisible) autoplayAttempted = false;
        syncPlayback();
      },
      { threshold: [0, 0.35] },
    );

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        syncPlayback();
      }
    };

    const handlePlay = () => setAutoplayBlocked(false);
    observer.observe(video);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    video.addEventListener("play", handlePlay);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      video.removeEventListener("play", handlePlay);
      video.pause();
    };
  }, []);

  return (
    <div className="project-detail-video" data-scroll-reveal>
      <video
        ref={videoRef}
        src={src}
        controls
        muted
        playsInline
        preload="none"
        poster={poster}
        aria-label={`${title} project walkthrough`}
      />
      {autoplayBlocked && (
        <p className="project-video-status" role="status">
          Press play to start the walkthrough.
        </p>
      )}
    </div>
  );
}
