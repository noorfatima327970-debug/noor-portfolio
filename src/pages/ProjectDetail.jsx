// src/pages/ProjectDetail.jsx
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-600">Project not found.</p>
        <Link
          to="/work"
          className="mt-4 inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
        >
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        {/* top row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/work"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-900 backdrop-blur hover:bg-white"
          >
            ← Back to Work
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              View live ↗
            </a>
          ) : null}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-8"
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-zinc-500">{project.type}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{project.title}</h1>
          {project.summary ? (
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600">{project.summary}</p>
          ) : null}
        </motion.div>

        {/* cover/banner */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/60 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur">
          <div className="relative h-[240px] w-full sm:h-[360px] bg-gradient-to-br from-zinc-50 via-white to-zinc-100">
            {project.cover ? (
              <img
                src={project.cover}
                alt={`${project.title} banner`}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : null}
          </div>
        </div>

        {/* details */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur sm:p-7">
            <h2 className="text-lg font-semibold text-zinc-900">Overview</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{project.summary}</p>

            {project.highlights?.length ? (
              <>
                <h3 className="mt-6 text-sm font-semibold text-zinc-900">Key features</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-zinc-900" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur sm:p-7">
            <h2 className="text-lg font-semibold text-zinc-900">Tech stack</h2>

            {project.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm text-zinc-600">—</p>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Open website ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}