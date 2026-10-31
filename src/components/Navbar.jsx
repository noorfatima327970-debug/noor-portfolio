// src/components/Navbar.jsx
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";

const CV_PATH = "/Noor-Fatima-CV.pdf";

const navLinkBase =
  "text-sm tracking-wide text-neutral-700 hover:text-neutral-950 transition-colors relative";

const activeUnderline =
  "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-neutral-900";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const items = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Work", to: "/work" },
      { label: "Contact", to: "/contact" },
    ],
    []
  );

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-neutral-950"
          >
            Noor Fatima
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.to === "/"}
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? activeUnderline : ""}`
                }
              >
                {it.label}
              </NavLink>
            ))}

            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkBase}
            >
              CV
            </a>
          </nav>

          {/* Mobile menu button only */}
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50 transition-colors"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-lime-400" />
            Menu
          </button>
        </div>
      </Container>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50"
          >
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-0 left-0 right-0 bg-white border-b border-black/10"
            >
              <Container>
                <div className="py-6">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-neutral-950">
                      Menu
                    </span>
                    <button
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-neutral-50 transition-colors"
                      type="button"
                    >
                      Close
                    </button>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {items.map((it, idx) => (
                      <motion.div
                        key={it.to}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.05 * idx }}
                      >
                        <NavLink
                          to={it.to}
                          end={it.to === "/"}
                          className={({ isActive }) =>
                            `block text-[18px] tracking-wide ${
                              isActive ? "text-neutral-950" : "text-neutral-700"
                            }`
                          }
                        >
                          {it.label}
                        </NavLink>
                      </motion.div>
                    ))}

                    <motion.a
                      href={CV_PATH}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="block text-[18px] tracking-wide text-neutral-700"
                      onClick={() => setOpen(false)}
                    >
                      CV
                    </motion.a>
                  </div>
                </div>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}