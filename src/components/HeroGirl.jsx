import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export default function HeroGirl() {
  const reduceMotion = useReducedMotion();

  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const x = useSpring(targetX, {
    stiffness: 90,
    damping: 18,
    mass: 0.7,
  });

  const y = useSpring(targetY, {
    stiffness: 90,
    damping: 18,
    mass: 0.7,
  });

  useEffect(() => {
    if (reduceMotion) return;

    function handleMouseMove(event) {
      const screenX = event.clientX / window.innerWidth;
      const screenY = event.clientY / window.innerHeight;

      /*
        Girl cursor ki direction me smoothly move karegi,
        lekin zyada door nahi jayegi.
      */
      targetX.set((screenX - 0.5) * 52);
      targetY.set((screenY - 0.5) * 32);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [reduceMotion, targetX, targetY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute right-[-10px] top-14 z-0 hidden w-[270px] xl:block"
      style={reduceMotion ? {} : { x, y }}
    >
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, -8, 0],
                rotate: [0, -1, 0, 1, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 280 340"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle
            cx="145"
            cy="160"
            r="122"
            fill="var(--surface)"
            stroke="var(--border)"
            strokeWidth="2"
          />

          {/* Soft accent decoration */}
          <circle cx="226" cy="70" r="18" fill="var(--accent)" />
          <circle
            cx="58"
            cy="264"
            r="10"
            fill="var(--accent)"
            opacity="0.8"
          />

          {/* Hair back */}
          <path
            d="M91 143C72 124 72 79 94 57C114 37 150 31 178 45C208 60 216 98 204 138L197 190H92L91 143Z"
            fill="var(--text)"
          />

          {/* Long hair right side */}
          <path
            d="M183 103C207 117 213 145 204 183C198 208 203 225 216 239C198 245 177 233 170 208L166 139L183 103Z"
            fill="var(--text)"
          />

          {/* Face */}
          <ellipse
            cx="145"
            cy="111"
            rx="47"
            ry="55"
            fill="var(--bg)"
          />

          {/* Hair front / fringe */}
          <path
            d="M97 98C102 61 126 49 153 54C183 59 198 83 195 111C181 101 168 89 162 72C148 95 124 103 97 98Z"
            fill="var(--text)"
          />

          {/* Ear */}
          <circle cx="191" cy="118" r="8" fill="var(--bg)" />

          {/* Eyes */}
          <circle cx="128" cy="116" r="3.5" fill="var(--text)" />
          <circle cx="161" cy="116" r="3.5" fill="var(--text)" />

          {/* Nose */}
          <path
            d="M145 122L141 139L148 140"
            stroke="var(--text)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Smile */}
          <path
            d="M128 151C137 158 151 158 161 150"
            stroke="var(--text)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Earring */}
          <circle cx="191" cy="130" r="4.5" fill="var(--accent)" />

          {/* Neck */}
          <path
            d="M127 160H163V189C153 201 137 201 127 189V160Z"
            fill="var(--bg)"
          />

          {/* Body / shirt */}
          <path
            d="M100 184C116 173 129 170 145 170C161 170 179 175 193 187C209 201 217 232 219 272H71C74 233 82 202 100 184Z"
            fill="var(--text)"
          />

          {/* Shirt collar */}
          <path
            d="M121 176L145 205L169 176"
            stroke="var(--bg)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Left arm */}
          <path
            d="M101 196C81 208 75 232 80 251L100 248C98 231 105 216 118 207L101 196Z"
            fill="var(--text)"
          />

          {/* Right arm */}
          <path
            d="M190 197C209 212 214 235 208 253L189 248C193 230 185 215 173 207L190 197Z"
            fill="var(--text)"
          />

          {/* Laptop */}
          <rect
            x="62"
            y="225"
            width="167"
            height="78"
            rx="11"
            fill="var(--surface2)"
            stroke="var(--text)"
            strokeWidth="4"
          />

          <path
            d="M53 304H238C239 304 240 306 239 308C236 315 229 319 220 319H71C62 319 55 315 52 308C51 306 52 304 53 304Z"
            fill="var(--text)"
          />

          {/* Laptop logo */}
          <circle cx="145" cy="264" r="13" fill="var(--accent)" />
          <path
            d="M139 264L144 269L153 258"
            stroke="var(--text)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}