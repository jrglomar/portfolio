/**
 * Button — anchor styled as a button. `variant` is "solid" (accent) or
 * "ghost" (bordered). Used for all CTAs so styling stays consistent.
 */
export default function Button({
  href,
  variant = 'solid',
  className = '',
  children,
  ...rest
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none'

  const variants = {
    solid:
      'bg-accent text-accent-foreground shadow-sm hover:-translate-y-0.5 hover:opacity-90',
    ghost:
      'border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:border-border-strong',
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
