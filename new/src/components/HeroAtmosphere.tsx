import MicroSlats from "./MicroSlats";
import { useSlatPalette } from "./useSlatPalette";

export default function HeroAtmosphere() {
  const palette = useSlatPalette();

  return (
    <div className="hero-atmosphere" aria-hidden="true">
      <MicroSlats
        preset="swell"
        color={palette.color}
        glintColor={palette.glintColor}
        backgroundColor={palette.backgroundColor}
        slatWidth={10}
        slatHeight={25}
        gap={3}
        roundness={0.75}
        speed={0.12}
        interactive
        cursorStrength={0.45}
        cursorSize={40}
        swirl={0}
        trail={1.4}
        lean={0}
        intro
      />
    </div>
  );
}
