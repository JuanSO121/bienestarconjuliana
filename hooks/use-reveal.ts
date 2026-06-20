'use client'

import { useEffect, useRef } from 'react'

/**
 * Reveals an element when it scrolls into view by toggling the
 * `is-visible` class (see `.reveal` in globals.css).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { delay?: number; once?: boolean },
) {
  const ref = useRef<T>(null)
  const { delay = 0, once = true } = options ?? {}

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('reveal')
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, once])

  return ref
}
