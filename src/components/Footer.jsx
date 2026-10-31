// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "./Container";

const footerLink =
  "relative inline-flex w-fit text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--text)] " +
  "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-[color:var(--text)] after:transition-all after:duration-300 hover:after:w-full";

// ✅ Your WhatsApp
const WHATSAPP_WAME = "923269643299";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_WAME}`;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--border)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white/60" />

        <div
          className="absolute -left-28 -top-28 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(214,255,63,0.22) 0%, rgba(214,255,63,0) 70%)",
          }}
        />
        <div
          className="absolute -right-32 top-6 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(78,205,196,0.14) 0%, rgba(78,205,196,0) 70%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            background: "radial-gradient(rgba(0,0,0,0.6) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1), rgba(0,0,0,0) 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1), rgba(0,0,0,0) 65%)",
          }}
        />
      </div>

      <Container className="py-14 sm:py-20">
        {/* Gradient ring */}
        <div className="rounded-[2.5rem] p-[1px] bg-gradient-to-br from-lime-200/70 via-black/10 to-teal-200/55 shadow-[0_30px_70px_rgba(0,0,0,0.10)]">
          <div className="rounded-[2.5rem] border border-white/50 bg-white/55 backdrop-blur-2xl">
            <div
              className="h-px w-full opacity-80"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(214,255,63,0.55) 35%, rgba(78,205,196,0.35) 70%, transparent 100%)",
              }}
            />

            <div className="p-7 sm:p-10">
              {/* CTA */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    Let’s work together
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-head)] text-2xl font-semibold tracking-tight text-[color:var(--text)]">
                    Have a project in mind?
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex w-fit items-center gap-3 rounded-full border border-[color:var(--border)] bg-white/65 px-6 py-3 text-sm font-medium text-[color:var(--text)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
                >
                  Let’s talk
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--border)] transition group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>

              <div className="mt-8 h-px w-full bg-[color:var(--border)]" />

              {/* Grid */}
              <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_.6fr_.6fr_.6fr]">
                <div>
                  <p className="font-[family-name:var(--font-head)] text-3xl font-bold tracking-tight text-[color:var(--text)]">
                    Noor Fatima
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[color:var(--muted)]">
                    Full-stack web developer building clean, responsive, and user-friendly web applications.
                  </p>
                  <div className="mt-6 h-px w-16 bg-[color:var(--border)]" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    Pages
                  </p>
                  <div className="mt-4 grid gap-2">
                    <Link to="/" className={footerLink}>Home</Link>
                    <Link to="/work" className={footerLink}>Work</Link>
                    <Link to="/contact" className={footerLink}>Contact</Link>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    Contact
                  </p>
                  <div className="mt-4 grid gap-2">
                    <a
                      href="mailto:noorfatima327970@gmail.com"
                      className={`${footerLink} break-all`}
                    >
                      noorfatima327970@gmail.com
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={footerLink}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    Resume
                  </p>
                  <div className="mt-4">
                    <a
                      href="/Noor-Fatima-CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={footerLink}
                    >
                      View CV <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--border)] pt-6"
              >
                <p className="text-xs text-[color:var(--muted)]">
                  © {new Date().getFullYear()} Noor Fatima. All rights reserved.
                </p>

                <p className="flex items-center gap-2 text-xs text-[color:var(--muted)]">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                  Built with React &amp; Tailwind CSS
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}