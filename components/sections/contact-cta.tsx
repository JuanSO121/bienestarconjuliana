'use client'

import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'

export function ContactCta() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      id="contacto"
      className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-10"
    >
      <div
        ref={ref}
        className="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-card px-7 py-10 text-center shadow-xl shadow-primary/8 sm:px-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Hablemos
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-heading text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
          Estoy aquí para ayudarte.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Si tienes preguntas sobre la línea Immunotec o no sabes por dónde empezar, conversemos por WhatsApp.
        </p>

        <a
          href={CONTACT.whatsappGeneral}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:scale-[1.04]"
        >
          <MessageCircle className="size-4" />
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  )
}