export default function RoleBadge({ className = "" }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full",
        "border border-[color:var(--border)] bg-[color:var(--surface)]/75 backdrop-blur",
        "px-4 py-2 text-xs sm:text-sm",
        "font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]",
        className,
      ].join(" ")}
    >
      <span
        className="h-2.5 w-2.5 rounded-full"
        style={{ background: "var(--accent)" }}
      />
      Full-Stack Web Developer
    </span>
  );
}