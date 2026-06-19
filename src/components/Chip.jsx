/** Chip — small pill used for tech-stack tags and skills. */
export default function Chip({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground ${className}`}
    >
      {children}
    </span>
  )
}
