import { motion } from "framer-motion";
import Container from "./Container";

export default function Section({ title, id, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="font-[family-name:var(--font-head)] text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {title}
          </motion.h2>
        )}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={title ? "mt-8" : ""}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}