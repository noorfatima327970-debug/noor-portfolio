// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/Container";
import Tilt from "../components/Tilt";
import RoleBadge from "../components/RoleBadge";
import InteractiveGirl from "../components/InteractiveGirl";
import { projects } from "../data/projects";
import { education } from "../data/education";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const labelPill =
  "inline-flex w-fit items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--surface2)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--text)] sm:text-base";

const hoverColors = [
  "#d6ff3f",
  "#ff6b6b",
  "#4ecdc4",
  "#45b7d1",
  "#ff9f43",
  "#a29bfe",
  "#fd79a8",
  "#00cec9",
  "#ffeaa7",
  "#6c5ce7",
  "#e17055",
  "#00b894",
];

function MiniAvatar({ className = "", size = 82 }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className={[
        "relative flex items-center justify-center rounded-full border border-[color:var(--border)] bg-white shadow-sm overflow-hidden p-1",
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      <InteractiveGirl size={size} />
      <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500 animate-pulse" />
    </motion.div>
  );
}

function NameHeading() {
  const line1 = ["N", "O", "O", "R"];
  const line2 = ["F", "A", "T", "I", "M", "A"];

  const letterAnim = (i, baseDelay = 0) => ({
    initial: { opacity: 0, y: 60, rotateX: -60, scale: 0.8 },
    animate: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
    transition: {
      duration: 0.8,
      delay: baseDelay + i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <div className="select-none relative">
      {/* Line 1 */}
      <div className="flex items-baseline font-[family-name:var(--font-head)] text-[clamp(4.2rem,12vw,10.5rem)] font-bold leading-[0.78] tracking-[-0.07em] text-[color:var(--text)]">
        {line1.map((ch, i) => (
          <motion.span
            key={`n${i}`}
            {...letterAnim(i)}
            className="inline-block cursor-pointer transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-110"
            style={{ transformOrigin: "bottom center", textShadow: `0 0 0px transparent` }}
            onMouseEnter={(e) => {
              const color = hoverColors[i % hoverColors.length];
              e.currentTarget.style.color = color;
              e.currentTarget.style.textShadow = `0 8px 25px ${color}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "";
              e.currentTarget.style.textShadow = `0 0 0px transparent`;
            }}
          >
            {ch}
          </motion.span>
        ))}
      </div>

      {/* Line 2 */}
      <div className="flex items-baseline ml-[0.06em] font-[family-name:var(--font-head)] text-[clamp(4.2rem,12vw,10.5rem)] font-bold leading-[0.80] tracking-[-0.07em]">
        {line2.map((ch, i) => (
          <motion.span
            key={`f${i}`}
            {...letterAnim(i, 0.35)}
            className="inline-block cursor-pointer transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-110"
            style={{
              transformOrigin: "bottom center",
              ...(i % 2 === 1
                ? { color: "transparent", WebkitTextStroke: "2px var(--text)" }
                : { color: "var(--text)" }),
            }}
            onMouseEnter={(e) => {
              const color = hoverColors[(i + 4) % hoverColors.length];
              if (i % 2 === 1) {
                e.currentTarget.style.color = color;
                e.currentTarget.style.WebkitTextStroke = `2px ${color}`;
              } else {
                e.currentTarget.style.color = color;
              }
              e.currentTarget.style.textShadow = `0 8px 25px ${color}40`;
            }}
            onMouseLeave={(e) => {
              const color = i % 2 === 1 ? "transparent" : "var(--text)";
              e.currentTarget.style.color = color;
              if (i % 2 === 1) e.currentTarget.style.WebkitTextStroke = "2px var(--text)";
              e.currentTarget.style.textShadow = "0 0 0px transparent";
            }}
          >
            {ch}
          </motion.span>
        ))}

        <motion.span
          initial={{ opacity: 0, scale: 0, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.35 + line2.length * 0.08 + 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:scale-150"
          style={{ transformOrigin: "bottom center", color: "var(--accent)" }}
        >
          .
        </motion.span>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 h-[3px] w-full origin-left rounded-full"
        style={{
          background:
            "linear-gradient(90deg, var(--text) 0%, var(--accent) 40%, #4ecdc4 70%, #ff6b6b 100%)",
        }}
      />

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
        className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--muted)]"
      >
        Full-Stack Web Developer
      </motion.p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-end overflow-hidden pb-10 pt-20 sm:pb-14">
        <div
          className="pointer-events-none absolute right-[-80px] top-10 h-[380px] w-[380px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(214,255,63,0.32) 0%, rgba(214,255,63,0) 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute left-[-60px] bottom-20 h-[250px] w-[250px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(78,205,196,0.15) 0%, rgba(78,205,196,0) 70%)",
          }}
        />

        <Container className="relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--border)] pb-5"
          >
            <div className="flex items-center gap-3">
              <MiniAvatar className="hidden sm:flex h-11 w-11" size={82} />
              <RoleBadge className="sm:px-5 sm:py-2.5" />
            </div>

            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--muted)]">
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
              Available for opportunities
            </p>
          </motion.div>

          <div className="pt-8 sm:pt-12">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.08}
              className="max-w-md text-sm leading-6 text-[color:var(--muted)] sm:text-base"
            >
              I create clean, responsive, and user-friendly web applications
              with modern frontend experiences and reliable backend systems.
            </motion.p>

            <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <NameHeading />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="self-center lg:self-end lg:mb-2"
              >
                <InteractiveGirl />
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.22}
              className="mt-10 flex flex-wrap items-center justify-between gap-6"
            >
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/work"
                  className="rounded-full bg-[color:var(--text)] px-6 py-3 text-sm font-medium text-[color:var(--bg)] transition hover:-translate-y-1 hover:opacity-85"
                >
                  View selected work ↗
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-medium transition hover:-translate-y-1 hover:bg-[color:var(--surface)]"
                >
                  Let&apos;s talk
                </Link>

                <a
                  href="/Noor-Fatima-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-medium transition hover:-translate-y-1 hover:bg-[color:var(--surface)]"
                >
                  View CV ↗
                </a>
              </div>

              <a href="#featured-work" className="group flex items-center gap-3 text-sm text-[color:var(--muted)]">
                <span className="transition group-hover:text-[color:var(--text)]">Scroll to explore</span>
                <span className="text-xl transition group-hover:translate-y-1">↓</span>
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface2)]">
        <Container className="py-8 sm:py-10">
          <div className="grid gap-6 md:grid-cols-[1.15fr_.85fr] md:items-end">
            <p className="font-[family-name:var(--font-head)] text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
              Building digital experiences that are simple, useful, and made to perform.
            </p>

            <p className="max-w-md text-sm leading-6 text-[color:var(--muted)]">
              I work with React, modern UI systems, APIs, authentication, and full-stack development.
            </p>
          </div>
        </Container>
      </section>

      {/* FEATURED WORK */}
      <section id="featured-work" className="py-24 sm:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="flex flex-wrap items-end justify-between gap-5"
          >
            <div>
              <p className={labelPill}>
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                Selected work
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-head)] text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                A few things I&apos;ve built.
              </h2>
            </div>

            <Link to="/work" className="border-b border-[color:var(--text)] pb-1 text-sm font-medium transition hover:opacity-60">
              View all work →
            </Link>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => {
              const hasCover = Boolean(project.cover);
              const statusText = project.liveUrl ? "Live" : "Coming soon";

              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={index === 0 ? "md:col-span-2" : ""}
                >
                  <Tilt className="h-full">
                    <Link
                      to={`/work/${project.slug}`}
                      className="group block h-full overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 transition duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.10)] sm:p-7"
                    >
                      {/* PREVIEW */}
                      <div className="relative flex aspect-[16/9] items-end overflow-hidden rounded-[1.35rem] p-5">
                        {/* fallback gradient */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              index === 0
                                ? "linear-gradient(135deg, #1b1b1b 0%, #424242 55%, #d6ff3f 180%)"
                                : index === 1
                                ? "linear-gradient(135deg, #dbdbd5 0%, #ffffff 55%, #8f8f86 160%)"
                                : "linear-gradient(135deg, #d6ff3f 0%, #efffd5 48%, #f4f4ef 100%)",
                          }}
                        />

                        {/* cover image */}
                        {hasCover ? (
                          <img
                            src={project.cover}
                            alt={`${project.title} preview`}
                            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : null}

                        {/* overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                        {/* number */}
                        <span
                          className="relative z-10 font-[family-name:var(--font-head)] text-5xl font-semibold tracking-[-0.08em] drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]"
                          style={{
                            color: "#ffffff",
                            opacity: 0.92,
                          }}
                        >
                          {project.number}
                        </span>

                        {/* arrow */}
                        <span
                          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full text-lg transition duration-300 group-hover:rotate-45"
                          style={{
                            background: index === 0 ? "#d6ff3f" : "#111111",
                            color: index === 0 ? "#111111" : "#ffffff",
                          }}
                        >
                          ↗
                        </span>
                      </div>

                      <div className="mt-5 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-[family-name:var(--font-head)] text-2xl font-semibold tracking-[-0.04em]">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm text-[color:var(--muted)]">{project.type}</p>
                        </div>

                        <p className="text-xs uppercase tracking-widest text-[color:var(--muted)]">
                          {statusText}
                        </p>
                      </div>
                    </Link>
                  </Tilt>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section className="border-t border-[color:var(--border)] py-24 sm:py-32 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-24 -top-28 h-[440px] w-[440px] rounded-full blur-3xl -z-10"
          style={{
            background: "radial-gradient(circle, rgba(214,255,63,0.14) 0%, rgba(214,255,63,0) 70%)",
          }}
        />

        <Container>
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="md:sticky md:top-24 h-fit"
            >
              <div className="flex items-center gap-3">
                <MiniAvatar className="hidden sm:flex h-11 w-11" size={82} />
                <p className={labelPill}>
                  <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                  About
                </p>
              </div>

              <p className="mt-5 max-w-[26ch] text-sm leading-6 text-[color:var(--muted)]">
                Clean UI, responsive layouts, and reliable full‑stack systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-[family-name:var(--font-head)] text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                I enjoy turning ideas into{" "}
                <span className="relative inline-block">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-x-2 bottom-[0.18em] -z-10 h-[0.32em] rounded-full"
                    style={{ background: "rgba(214,255,63,0.45)" }}
                  />
                  polished
                </span>{" "}
                web experiences.
              </h2>

              <div className="mt-7 rounded-[2rem] border border-[color:var(--border)] bg-white/60 backdrop-blur px-7 py-6 shadow-sm shadow-black/5">
                <p className="text-base leading-7 text-[color:var(--muted)] sm:text-lg">
                  I&apos;m Noor Fatima, a full-stack web developer focused on responsive interfaces, clean code,
                  scalable backend systems, and projects that feel easy to use.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  { title: "Frontend", desc: "React + UI + animations" },
                  { title: "Backend", desc: "Node/Express + APIs + auth" },
                  { title: "UI Polish", desc: "Spacing + motion + UX" },
                ].map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="group rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm shadow-black/5 transition"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                      <p className="text-sm font-semibold tracking-tight text-[color:var(--text)]">{c.title}</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{c.desc}</p>
                    <div className="mt-4 h-px w-10 bg-[color:var(--border)] transition group-hover:w-14" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "REST APIs", "Authentication"].map(
                  (skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: i * 0.03 }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-2 text-sm text-[color:var(--muted)] shadow-sm shadow-black/5 transition hover:border-[color:var(--accent)] hover:text-[color:var(--text)]"
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </div>

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-sm font-medium text-[color:var(--text)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              >
                Start a conversation
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--border)]">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* EDUCATION */}
      <section id="education" className="border-t border-[color:var(--border)] py-24 sm:py-32 relative overflow-hidden">
        <div
          className="pointer-events-none absolute right-[-120px] top-10 h-[360px] w-[360px] rounded-full blur-3xl -z-10"
          style={{
            background: "radial-gradient(circle, rgba(214,255,63,0.12) 0%, rgba(214,255,63,0) 70%)",
          }}
        />

        <Container>
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="md:sticky md:top-24 h-fit"
            >
              <div className="flex items-center gap-3">
                <MiniAvatar className="hidden sm:flex h-11 w-11" size={82} />
                <p className={labelPill}>
                  <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                  Education
                </p>
              </div>

              <p className="mt-5 max-w-[26ch] text-sm leading-6 text-[color:var(--muted)]">
                My academic journey so far.
              </p>
            </motion.div>

            <div className="relative pl-7 sm:pl-10">
              <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-[color:var(--border)]" />

              <div className="space-y-6">
                {education.map((ed, idx) => (
                  <motion.article
                    key={`${ed.period}-${ed.title}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <div className="absolute left-3 sm:left-4 top-8 -translate-x-1/2">
                      <div className="h-3 w-3 rounded-full" style={{ background: "var(--accent)" }} />
                      <div className="absolute inset-0 -m-2 rounded-full border border-[color:var(--border)] bg-white/70 backdrop-blur" />
                    </div>

                    <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-7 shadow-sm shadow-black/5 transition hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h3 className="font-[family-name:var(--font-head)] text-2xl font-semibold tracking-[-0.04em]">
                            {ed.title}
                          </h3>
                          <p className="mt-2 text-sm text-[color:var(--muted)]">{ed.institute}</p>
                        </div>

                        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
                          <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                          {ed.period}
                        </span>
                      </div>

                      {ed.details?.length ? (
                        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-[color:var(--muted)]">
                          {ed.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      ) : (
                        <div className="mt-5 h-px w-16 bg-[color:var(--border)]" />
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}