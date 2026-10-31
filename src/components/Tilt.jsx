import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Tilt({
  children,
  className = "",
  max = 10, // tilt angle
  perspective = 900,
  scale = 1.02,
}) {
  const ref = useRef(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    // touch devices ignore
    if (!ref.current || "ontouchstart" in window) return;

    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1

    const tiltY = (px - 0.5) * (max * 2);      // left/right
    const tiltX = -(py - 0.5) * (max * 2);     // up/down

    rx.set(tiltX);
    ry.set(tiltY);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: perspective,
        rotateX: srx,
        rotateY: sry,
      }}
      whileHover={{ y: -8, scale }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}