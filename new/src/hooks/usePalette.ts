import { useEffect, useState } from "react";

export const palettes = [
  { id: "forest", label: "Forest", color: "#c3df8c" },
  { id: "ocean", label: "Ocean", color: "#91bfe3" },
  { id: "plum", label: "Plum", color: "#c5a3dc" },
  { id: "amber", label: "Amber", color: "#e1bf78" },
] as const;

export type Palette = (typeof palettes)[number]["id"];

function isPalette(value: string | null): value is Palette {
  return palettes.some((palette) => palette.id === value);
}

function getInitialPalette(): Palette {
  if (typeof window === "undefined") return "forest";
  const saved = window.localStorage.getItem("palette");
  return isPalette(saved) ? saved : "forest";
}

export function usePalette() {
  const [palette, setPalette] = useState<Palette>(getInitialPalette);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.palette = palette;
    window.localStorage.setItem("palette", palette);
    document
      .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute(
        "content",
        getComputedStyle(root).getPropertyValue("--color-background").trim(),
      );
  }, [palette]);

  return [palette, setPalette] as const;
}
