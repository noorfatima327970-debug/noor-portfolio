import { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function InteractiveGirl({ className = "", size = 260 }) {
  const containerRef = useRef(null);

  // Springs for smooth head tilt and eye tracking
  const springConfig = { stiffness: 180, damping: 20, mass: 0.2 };
  const headX = useSpring(0, springConfig);
  const headY = useSpring(0, springConfig);
  const rotateZ = useSpring(0, springConfig);
  const pupilX = useSpring(0, springConfig);
  const pupilY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.hypot(deltaX, deltaY) || 1;

      // Pupil movement limit
      const maxPupil = 7;
      const px = (deltaX / distance) * Math.min(maxPupil, Math.abs(deltaX) * 0.04);
      const py = (deltaY / distance) * Math.min(maxPupil, Math.abs(deltaY) * 0.04);
      pupilX.set(px);
      pupilY.set(py);

      // Head slight tilt
      const hx = Math.max(-12, Math.min(12, deltaX * 0.025));
      const hy = Math.max(-10, Math.min(10, deltaY * 0.025));
      const rz = Math.max(-8, Math.min(8, deltaX * 0.015));

      headX.set(hx);
      headY.set(hy);
      rotateZ.set(rz);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [headX, headY, pupilX, pupilY, rotateZ]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none ${className}`}
      style={{ width: size, height: Math.round(size * 1.05) }}
      aria-label="Interactive Developer Avatar"
    >
      {/* Background Soft Glow Aura */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-2xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, rgba(214,255,63,0) 70%)",
        }}
      />

      {/* SVG Avatar with tracking elements */}
      <svg
        viewBox="0 0 240 240"
        className="h-full w-full drop-shadow-[0_18px_35px_rgba(0,0,0,0.12)]"
        fill="none"
      >
        {/* Base Body / Shoulders */}
        <path
          d="M50 238 C 52 195, 82 170, 120 170 C 158 170, 188 195, 190 238 Z"
          fill="#111113"
        />

        {/* Hoodie / Top Collar Accent */}
        <path
          d="M102 170 Q 120 195 138 170 Q 120 176 102 170 Z"
          fill="var(--accent)"
        />

        {/* Head Motion Wrapper */}
        <motion.g
          style={{
            x: headX,
            y: headY,
            rotate: rotateZ,
            originX: "120px",
            originY: "120px",
          }}
        >
          {/* Hair Back */}
          <ellipse cx="178" cy="78" rx="28" ry="34" fill="#111113" />
          <path
            d="M 175 92 Q 200 135 188 165 Q 170 140 162 105 Z"
            fill="#111113"
          />

          {/* Neck */}
          <rect x="111" y="132" width="18" height="30" rx="9" fill="#f4ebd9" />

          {/* Face */}
          <ellipse cx="120" cy="108" rx="36" ry="40" fill="#fcf6ec" />

          {/* Hair Front / Bangs */}
          <path
            d="M 82 100 C 82 58, 158 58, 158 100 C 148 74, 134 76, 118 78 C 98 80, 88 88, 82 100 Z"
            fill="#111113"
          />
          <path d="M 82 102 Q 80 132 86 142 Q 90 120 90 102 Z" fill="#111113" />
          <path d="M 158 102 Q 160 132 154 142 Q 150 120 150 102 Z" fill="#111113" />

          {/* Cheeks */}
          <ellipse cx="98" cy="120" rx="5" ry="2.5" fill="#f8b4b4" opacity="0.6" />
          <ellipse cx="142" cy="120" rx="5" ry="2.5" fill="#f8b4b4" opacity="0.6" />

          {/* Nose */}
          <path
            d="M 119 114 Q 120 118 122 118"
            stroke="#d6b89c"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Smile */}
          <path
            d="M 113 126 Q 120 132 127 126"
            stroke="#111113"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* Left eye */}
          <ellipse cx="102" cy="108" rx="9" ry="8" fill="#ffffff" stroke="#111113" strokeWidth="1.8" />
          <motion.circle cx="102" cy="108" r="4.8" fill="#111113" style={{ x: pupilX, y: pupilY }} />
          <motion.circle cx="100.5" cy="106" r="1.5" fill="#ffffff" style={{ x: pupilX, y: pupilY }} />

          {/* Right eye */}
          <ellipse cx="138" cy="108" rx="9" ry="8" fill="#ffffff" stroke="#111113" strokeWidth="1.8" />
          <motion.circle cx="138" cy="108" r="4.8" fill="#111113" style={{ x: pupilX, y: pupilY }} />
          <motion.circle cx="136.5" cy="106" r="1.5" fill="#ffffff" style={{ x: pupilX, y: pupilY }} />

          {/* Eyebrows */}
          <path d="M 94 96 Q 102 93 110 96" stroke="#111113" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 130 96 Q 138 93 146 96" stroke="#111113" strokeWidth="2.2" strokeLinecap="round" />

          {/* Glasses */}
          <rect x="90" y="98" width="25" height="20" rx="6" stroke="#111113" strokeWidth="2.2" fill="none" />
          <rect x="125" y="98" width="25" height="20" rx="6" stroke="#111113" strokeWidth="2.2" fill="none" />
          <path d="M 115 107 L 125 107" stroke="#111113" strokeWidth="2.2" />

          {/* Headphones */}
          <path
            d="M 80 110 C 80 50, 160 50, 160 110"
            stroke="#111113"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="74" y="98" width="10" height="24" rx="5" fill="#111113" />
          <rect x="76" y="103" width="6" height="14" rx="3" fill="var(--accent)" />
          <rect x="156" y="98" width="10" height="24" rx="5" fill="#111113" />
          <rect x="158" y="103" width="6" height="14" rx="3" fill="var(--accent)" />
        </motion.g>
      </svg>
    </div>
  );
}