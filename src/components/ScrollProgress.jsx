import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[55] h-[2px] w-full origin-left bg-transparent"
      style={{ scaleX }}
    >
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--accent) 0%, rgba(214,255,63,0.2) 100%)",
        }}
      />
    </motion.div>
  );
}