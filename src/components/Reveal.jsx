import { useEffect, useRef, useState } from 'react'

/**
 * Wraps content and fades/slides it in once it scrolls into view.
 * Renders as `as` (default "div"), merging the "reveal" class with any
 * className passed in, so it can drop into existing markup without
 * adding extra DOM nesting where a tag swap is enough.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' in-view' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
