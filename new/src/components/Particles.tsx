import { useEffect, useRef } from "react";
import { Camera, Geometry, Mesh, Program, Renderer } from "ogl";
import "./Particles.css";

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  varying vec4 vRandom;
  varying vec3 vColor;
  void main() {
    vRandom = random;
    vColor = color;
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    if (d > 0.5) discard;
    float alpha = uAlphaParticles > 0.5 ? smoothstep(0.5, 0.35, d) * 0.8 : 1.0;
    vec3 color = vColor + 0.12 * sin(uv.yxx + uTime + vRandom.y * 6.28);
    gl_FragColor = vec4(color, alpha);
  }
`;

type ParticlesProps = {
  particleColors?: string[];
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  alphaParticles?: boolean;
  disableRotation?: boolean;
  pixelRatio?: number;
  className?: string;
};

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.trim().replace(/^#/, "");
  if (!/^(?:[\da-f]{3}|[\da-f]{6})$/i.test(normalized)) {
    if (import.meta.env.DEV) {
      console.warn("Particles expects resolved 3- or 6-digit hex colors.", hex);
    }
    return [1, 1, 1];
  }

  const expanded = normalized.length === 3
    ? normalized.split("").map((character) => character + character).join("")
    : normalized;
  const value = Number.parseInt(expanded.slice(0, 6), 16);

  if (!Number.isFinite(value)) return [1, 1, 1];
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

export default function Particles({
  particleColors = ["#ffffff"],
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  alphaParticles = false,
  disableRotation = false,
  pixelRatio = 1,
  className = "",
}: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const paletteKey = particleColors.join(",");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({ dpr: pixelRatio, depth: false, alpha: true, antialias: false });
    } catch (error) {
      console.warn("Particles could not initialize WebGL; the background remains static.", error);
      return;
    }

    const gl = renderer.gl;
    if (!renderer.isWebgl2) {
      console.warn("Particles requires WebGL 2; the background remains static.");
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      return;
    }

    const canvas = gl.canvas;
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.appendChild(canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
      requestFrame();
    };

    const count = Math.max(0, Math.min(400, Math.floor(particleCount)));
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);
    const palette = paletteKey.split(",").filter(Boolean);
    const usablePalette = palette.length > 0 ? palette : ["#ffffff"];

    for (let index = 0; index < count; index += 1) {
      let x = 0;
      let y = 0;
      let z = 0;
      let length = 0;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        length = x * x + y * y + z * z;
      } while (length > 1 || length === 0);

      const radius = Math.cbrt(Math.random());
      positions.set([x * radius, y * radius, z * radius], index * 3);
      randoms.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        index * 4,
      );
      colors.set(
        hexToRgb(usablePalette[Math.floor(Math.random() * usablePalette.length)]),
        index * 3,
      );
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 },
      },
      transparent: true,
      depthTest: false,
    });
    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;
    let lastTime = performance.now();
    let elapsed = 0;
    let visible = true;
    let alive = true;

    const render = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      if (!reducedMotion.matches) elapsed += delta * speed;

      program.uniforms.uTime.value = elapsed * 0.001;
      if (!disableRotation && !reducedMotion.matches) {
        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.035;
        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.055;
        particles.rotation.z += 0.001 * speed;
      }
      renderer.render({ scene: particles, camera });
    };

    const requestFrame = () => {
      if (!alive || !visible || frameId) return;
      if (reducedMotion.matches) {
        render(performance.now());
        return;
      }
      frameId = requestAnimationFrame((time) => {
        frameId = 0;
        render(time);
        requestFrame();
      });
    };

    const onMotionChange = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
      requestFrame();
    };
    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      } else {
        requestFrame();
      }
    };
    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) requestFrame();
      else {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
    });

    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    reducedMotion.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    resize();

    return () => {
      alive = false;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      reducedMotion.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      geometry.remove();
      program.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      if (container.contains(canvas)) container.removeChild(canvas);
    };
  }, [
    alphaParticles,
    cameraDistance,
    disableRotation,
    particleBaseSize,
    particleCount,
    particleSpread,
    paletteKey,
    pixelRatio,
    sizeRandomness,
    speed,
  ]);

  return <div ref={containerRef} className={`particles-container ${className}`.trim()} />;
}
