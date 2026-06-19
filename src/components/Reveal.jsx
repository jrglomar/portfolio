import { useReveal } from '../hooks/useReveal'

/**
 * Reveal — wraps children in a scroll-triggered fade + rise.
 * `delay` (ms) staggers grouped items. Renders as `as` element (default div).
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isVisible] = useReveal()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      className={[
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  )
}
