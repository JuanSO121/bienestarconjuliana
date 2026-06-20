'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'

export function WhatsappFloat() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={CONTACT.whatsappGeneral}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 font-semibold text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 ${
        show
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="relative flex size-6 items-center justify-center">
        <span className="absolute inline-flex size-6 rounded-full bg-primary-foreground/40 [animation:pulse-ring_2s_ease-out_infinite]" />
        <MessageCircle className="relative size-6" />
      </span>
      <span className="hidden text-sm sm:inline">Escríbeme</span>
    </a>
  )
}
