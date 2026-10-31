// src/pages/Contact.jsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease },
  }),
};

// ✅ Your WhatsApp
const WHATSAPP_DISPLAY = "+92 326 9643299";
const WHATSAPP_WAME = "923269643299";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_WAME}`;

function IconSearch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
      <path d="M16.3 16.3 21 21" />
    </svg>
  );
}

function IconWhatsApp({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.95.56 3.83 1.62 5.45L2 22l4.76-1.66a9.9 9.9 0 0 0 5.28 1.5h.01c5.49 0 9.94-4.45 9.94-9.94C21.99 6.45 17.54 2 12.04 2Zm5.8 14.03c-.24.68-1.18 1.24-1.94 1.4-.52.11-1.2.2-3.49-.75-2.93-1.21-4.83-4.2-4.98-4.4-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.6-.36.8-.36h.58c.19 0 .45-.07.7.53.24.6.84 2.06.91 2.21.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.48.13.66-.08.19-.2.76-.88.96-1.18.2-.3.4-.25.66-.15.27.1 1.7.8 1.99.94.29.15.49.22.56.34.07.12.07.7-.17 1.38Z"
      />
    </svg>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[color:var(--text)]">
        {label}
      </label>
      <div className="mt-3">{children}</div>
      {error ? (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      ) : (
        <div className="mt-2 h-5" />
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    search: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    else if (form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    return e;
  }, [form]);

  const onSubmit = (ev) => {
    ev.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (errors.name || errors.email || errors.message) return;

    const subject = encodeURIComponent(
      form.search?.trim()
        ? `Portfolio Inquiry — ${form.search.trim()}`
        : "Portfolio Inquiry"
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${
        form.search?.trim() ? `Search/Topic: ${form.search.trim()}\n\n` : ""
      }Message:\n${form.message}`
    );

    window.location.href = `mailto:noorfatima327970@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="pt-24 lg:pt-28">
      <Container>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="pb-10 sm:pb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
            Contact
          </p>

          <h1 className="mt-5 font-[family-name:var(--font-head)] text-[clamp(2.6rem,6vw,4.6rem)] font-semibold tracking-[-0.05em] text-[color:var(--text)]">
            Let&apos;s work together.
          </h1>

          <p className="mt-5 max-w-[78ch] text-sm leading-6 text-[color:var(--muted)] sm:text-base">
            Have a project or opportunity in mind? Send details below—or email
            me directly at{" "}
            <a
              href="mailto:noorfatima327970@gmail.com"
              className="border-b border-[color:var(--text)] text-[color:var(--text)] hover:opacity-70 transition"
            >
              noorfatima327970@gmail.com
            </a>
            .
          </p>

          <div className="mt-10 h-px w-full bg-[color:var(--border)]" />
        </motion.div>

        {/* Content */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Form */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="rounded-[2.25rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-7 sm:p-10"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <Field label="Your name" error={touched.name ? errors.name : ""}>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, name: e.target.value }))
                  }
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  placeholder="Noor Fatima"
                  className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface2)] px-5 py-4 text-sm outline-none transition focus:border-black/20"
                />
              </Field>

              <Field label="Email" error={touched.email ? errors.email : ""}>
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface2)] px-5 py-4 text-sm outline-none transition focus:border-black/20"
                />
              </Field>

              {/* Search/Topic */}
              <Field label="Search / Topic" error="">
                <div className="relative">
                  <IconSearch className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]" />
                  <input
                    type="search"
                    value={form.search}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, search: e.target.value }))
                    }
                    placeholder="Search what you need (e.g. portfolio, e‑commerce, dashboard)…"
                    className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface2)] pl-12 pr-5 py-4 text-sm outline-none transition focus:border-black/20"
                  />
                </div>
              </Field>

              <Field label="Message" error={touched.message ? errors.message : ""}>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, message: e.target.value }))
                  }
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  rows={6}
                  placeholder="Tell me about your project, timeline, and requirements…"
                  className="w-full resize-none rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface2)] px-5 py-4 text-sm outline-none transition focus:border-black/20"
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-full bg-[color:var(--text)] px-6 py-4 text-sm font-medium text-[color:var(--bg)] transition hover:opacity-90 disabled:opacity-50"
              >
                Send message
              </button>
            </form>
          </motion.section>

          {/* Direct */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.06 }}
            className="rounded-[2.25rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-7 sm:p-10"
          >
            <h2 className="font-[family-name:var(--font-head)] text-2xl font-semibold tracking-tight text-[color:var(--text)]">
              Direct
            </h2>

            <div className="mt-6 divide-y divide-[color:var(--border)]">
              {/* Email */}
              <div className="flex items-center justify-between gap-6 py-4">
                <p className="text-sm text-[color:var(--muted)]">Email</p>
                <a
                  href="mailto:noorfatima327970@gmail.com"
                  className="text-sm font-medium text-[color:var(--text)] hover:opacity-70 transition"
                >
                  noorfatima327970@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-between gap-6 py-4">
                <p className="text-sm text-[color:var(--muted)]">WhatsApp</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--text)] hover:opacity-70 transition"
                  title="Chat on WhatsApp"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  <span>{WHATSAPP_DISPLAY}</span>
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </main>
  );
}