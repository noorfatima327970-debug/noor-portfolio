import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const word = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RevealText({ text, className = "", accent = "" }) {
  // Supports: single-line text
  const words = String(text).split(" ");

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
      aria-label={text}
    >
      {words.map((w, i) => {
        const isAccent = accent && w.startsWith(accent);
        return (
          <motion.span
            key={`${w}-${i}`}
            variants={word}
            className="inline-block"
            style={{ marginRight: "0.28em" }}
          >
            {isAccent ? (
              <span style={{ color: "var(--accent)" }}>{w}</span>
            ) : (
              w
            )}
          </motion.span>
        );
      })}
    </motion.span>
  );
}