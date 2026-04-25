import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Node = { x: number; y: number; size: number; pulse: number };
type Edge = [number, number];

const DESKTOP_NODES: Node[] = [
  { x: 10, y: 20, size: 2.2, pulse: 5.2 },
  { x: 18, y: 14, size: 1.9, pulse: 4.9 },
  { x: 25, y: 24, size: 2.4, pulse: 5.8 },
  { x: 33, y: 18, size: 2, pulse: 5.1 },
  { x: 42, y: 28, size: 2.5, pulse: 6.2 },
  { x: 54, y: 22, size: 2.3, pulse: 5.5 },
  { x: 63, y: 14, size: 2, pulse: 5.7 },
  { x: 72, y: 26, size: 2.4, pulse: 6.3 },
  { x: 84, y: 18, size: 2.1, pulse: 5.2 },
  { x: 90, y: 30, size: 1.8, pulse: 4.8 },
  { x: 14, y: 48, size: 2.1, pulse: 5.9 },
  { x: 24, y: 58, size: 2.4, pulse: 6.1 },
  { x: 34, y: 50, size: 2.2, pulse: 5.4 },
  { x: 44, y: 62, size: 2.6, pulse: 6.4 },
  { x: 56, y: 52, size: 2.3, pulse: 5.8 },
  { x: 66, y: 64, size: 2.5, pulse: 6.6 },
  { x: 76, y: 54, size: 2.2, pulse: 5.7 },
  { x: 87, y: 62, size: 2, pulse: 5.1 },
  { x: 20, y: 80, size: 1.9, pulse: 4.9 },
  { x: 30, y: 72, size: 2.1, pulse: 5.6 },
  { x: 40, y: 84, size: 2, pulse: 5 },
  { x: 52, y: 76, size: 2.3, pulse: 6 },
  { x: 64, y: 86, size: 2, pulse: 5.2 },
  { x: 76, y: 74, size: 2.2, pulse: 5.8 },
  { x: 88, y: 84, size: 1.9, pulse: 4.7 }
];

const MOBILE_NODES: Node[] = [
  { x: 10, y: 22, size: 2, pulse: 5.1 },
  { x: 22, y: 16, size: 1.8, pulse: 4.8 },
  { x: 34, y: 26, size: 2.2, pulse: 5.7 },
  { x: 48, y: 20, size: 2, pulse: 5.2 },
  { x: 62, y: 28, size: 2.3, pulse: 5.9 },
  { x: 78, y: 20, size: 2, pulse: 5.1 },
  { x: 16, y: 54, size: 1.9, pulse: 5.3 },
  { x: 32, y: 60, size: 2.2, pulse: 6 },
  { x: 48, y: 52, size: 2.1, pulse: 5.6 },
  { x: 64, y: 62, size: 2.3, pulse: 6.2 },
  { x: 82, y: 56, size: 2, pulse: 5.1 },
  { x: 24, y: 82, size: 1.8, pulse: 4.8 },
  { x: 48, y: 78, size: 2.1, pulse: 5.7 },
  { x: 72, y: 84, size: 1.9, pulse: 5 }
];

const DESKTOP_EDGES: Edge[] = [
  [0, 2], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
  [2, 10], [3, 12], [4, 13], [5, 14], [7, 16], [8, 17], [10, 11], [11, 12],
  [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [11, 19], [13, 21], [15, 23],
  [19, 20], [20, 21], [21, 22], [22, 23], [23, 24], [12, 14], [14, 16], [5, 13], [6, 14]
];

const MOBILE_EDGES: Edge[] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [2, 6], [3, 8], [4, 9], [6, 7],
  [7, 8], [8, 9], [9, 10], [7, 11], [8, 12], [9, 13], [11, 12], [12, 13]
];

function buildBezierPath(a: Node, b: Node, index: number) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const distance = Math.hypot(dx, dy) || 1;
  const nx = -dy / distance;
  const ny = dx / distance;
  const curveStrength = 1.4 + (index % 4) * 0.45;
  const mx = (a.x + b.x) / 2 + nx * curveStrength;
  const my = (a.y + b.y) / 2 + ny * curveStrength;
  return `M${a.x} ${a.y} Q${mx} ${my} ${b.x} ${b.y}`;
}

export function GlobalTechBackground() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(45);
  const smoothPointerX = useSpring(pointerX, { stiffness: 28, damping: 20, mass: 0.8 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 28, damping: 20, mass: 0.8 });
  const parallaxX = useTransform(smoothPointerX, [0, 100], [-3, 3]);
  const parallaxY = useTransform(smoothPointerY, [0, 100], [-3, 3]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handlePointerMove = (event: MouseEvent) => {
      pointerX.set((event.clientX / window.innerWidth) * 100);
      pointerY.set((event.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", handlePointerMove);
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, [pointerX, pointerY, shouldReduceMotion]);

  const nodes = isMobile ? MOBILE_NODES : DESKTOP_NODES;
  const edges = isMobile ? MOBILE_EDGES : DESKTOP_EDGES;

  const paths = useMemo(
    () =>
      edges.map(([from, to], index) => ({
        d: buildBezierPath(nodes[from], nodes[to], index),
        isSecondary: index % 3 === 0
      })),
    [edges, nodes]
  );

  const flowPaths = useMemo(
    () =>
      paths.filter((_, index) => index % 2 === 0).map((path, index) => ({
        d: path.d,
        duration: 8 + (index % 4) * 1.5,
        delay: index * 0.7
      })),
    [paths]
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#020617,#0b1120)]" />

      <motion.div
        className="absolute -inset-24 opacity-42"
        animate={shouldReduceMotion ? undefined : { x: [0, 26, 0], y: [0, 22, 0] }}
        transition={shouldReduceMotion ? undefined : { duration: 38, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full w-full bg-[linear-gradient(rgba(34,211,238,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.16)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={shouldReduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-75 mix-blend-screen"
          animate={shouldReduceMotion ? undefined : { opacity: [0.5, 0.68, 0.5] }}
          transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <g stroke="rgba(34,211,238,0.3)" strokeWidth="0.24" fill="none">
            {paths.map((path) => (
              <path
                key={path.d}
                d={path.d}
                strokeDasharray={path.isSecondary ? "1.2 2.2" : "0"}
                strokeOpacity={path.isSecondary ? 0.55 : 0.85}
              />
            ))}
          </g>

          {!shouldReduceMotion && (
            <>
              <defs>
                <radialGradient id="flowDot" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(186,230,253,0.95)" />
                  <stop offset="100%" stopColor="rgba(34,211,238,0.15)" />
                </radialGradient>
              </defs>
              {flowPaths.map((flow) => (
                <g key={flow.d}>
                  <circle r="0.45" fill="url(#flowDot)">
                    <animateMotion path={flow.d} dur={`${flow.duration}s`} begin={`${flow.delay}s`} repeatCount="indefinite" />
                  </circle>
                  <circle r="0.32" fill="rgba(186,230,253,0.75)">
                    <animateMotion
                      path={flow.d}
                      dur={`${flow.duration * 1.2}s`}
                      begin={`${flow.delay + 1.4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
            </>
          )}
        </motion.svg>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(34,211,238,0.2),transparent_34%),radial-gradient(circle_at_78%_26%,rgba(59,130,246,0.2),transparent_38%),radial-gradient(circle_at_58%_76%,rgba(34,211,238,0.12),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.22),rgba(2,6,23,0.54))]" />

      <motion.div className="absolute inset-0 mix-blend-screen">
        {nodes.map((node, index) => (
          <motion.span
            key={`${node.x}-${node.y}`}
            className="absolute rounded-full bg-cyan-100/90 shadow-[0_0_12px_rgba(103,232,249,0.65)]"
            style={{ left: `${node.x}%`, top: `${node.y}%`, width: `${node.size}px`, height: `${node.size}px` }}
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: [0.18, 0.72, 0.26, 0.95, 0.18], scale: [0.9, 1.08, 0.96, 1.18, 0.9] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: node.pulse, delay: index * 0.18, repeat: Infinity, ease: "easeInOut" }
            }
          />
        ))}
      </motion.div>
    </div>
  );
}
