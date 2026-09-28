import { useEffect, useState } from "react";
import Particles from "./Particles";
import { useParticlePalette } from "./useParticlePalette";

export default function SiteParticles() {
  const palette = useParticlePalette();
  const [particleCount, setParticleCount] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches
      ? 60
      : 120,
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateCount = () => setParticleCount(mobileQuery.matches ? 60 : 120);

    updateCount();
    mobileQuery.addEventListener("change", updateCount);

    return () => mobileQuery.removeEventListener("change", updateCount);
  }, []);

  return (
    <div className="site-particles" aria-hidden="true">
      <Particles
        particleColors={palette.particleColors}
        particleCount={particleCount}
        particleSpread={10}
        speed={0.08}
        particleBaseSize={80}
        sizeRandomness={1}
        cameraDistance={20}
        alphaParticles={palette.alphaParticles}
        pixelRatio={Math.min(window.devicePixelRatio || 1, 1.5)}
      />
    </div>
  );
}
