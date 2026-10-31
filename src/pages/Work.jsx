// src/pages/Work.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const FILTERS = ["All", "Full‑Stack", "Frontend"];

function normalizeCategory(project) {
  if (project?.category) return project.category;
  const t = (project?.type || "").toLowerCase();
  if (t.includes("full")) return "Full‑Stack";
  if (t.includes("front")) return "Frontend";
  return "All";
}

export default function Work() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => normalizeCategory(p) === active);
  }, [active]);

  return (
    <div className="relative">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.20),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.16),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-zinc-500">SELECTED WORK</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Projects & case studies
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
              A curated set of websites I’ve built. Clean UI, smooth interactions, and practical features.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={[
                    "rounded-full border px-4 py-2 text-xs font-medium transition",
                    isActive
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white/60 text-zinc-700 hover:border-zinc-300 hover:bg-white",
                  ].join(" ")}
                  type="button"
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {filtered.map((project, index) => {
            const wide = index === 0;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={[
                  "group relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/70 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur",
                  "hover:shadow-[0_18px_60px_rgba(0,0,0,0.10)]",
                  wide ? "lg:col-span-2" : "",
                ].join(" ")}
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-2xl" />
                  <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_60%)] blur-2xl" />
                </div>

                {/* TOP PREVIEW IMAGE */}
                <div
                  className={[
                    "relative w-full overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100",
                    wide ? "h-[260px] sm:h-[320px]" : "h-[220px]",
                  ].join(" ")}
                >
                  {project.cover ? (
                    <img
                      src={project.cover}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : null}

                  {/* number chip */}
                  <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur">
                    {project.number || String(index + 1).padStart(2, "0")}
                  </div>

                  {/* live chip */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-5 top-5 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur transition hover:bg-white"
                    >
                      Live ↗
                    </a>
                  ) : null}
                </div>

                {/* Content */}
                <div className="relative p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.22em] text-zinc-500">{project.type}</p>
                      <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                        {project.title}
                      </h2>
                    </div>

                    <Link
                      to={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50"
                    >
                      View case ↗
                    </Link>
                  </div>

                  {project.summary ? (
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">{project.summary}</p>
                  ) : null}

                  {project.tags?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.slice(0, wide ? 8 : 6).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}