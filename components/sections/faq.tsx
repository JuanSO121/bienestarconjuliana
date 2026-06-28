'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    category: 'Acompañamiento',
    q: '¿Cómo es el proceso si escribo por WhatsApp?',
    a: 'Primero te pregunto por tu rutina, tu energía, tus hábitos y lo que te gustaría mejorar. Con eso puedo orientarte con calma y decirte si alguna alternativa de Immunotec tiene sentido para ti.',
  },
  {
    category: 'Bienestar',
    q: '¿Tengo que estar enferma para empezar?',
    a: 'No. Muchas personas llegan porque quieren cuidarse antes, tener más energía, mejorar hábitos o sentirse más fuertes en su día a día. La idea es prevenir, acompañar y tomar mejores decisiones.',
  },
  {
    category: 'Producto',
    q: '¿Qué es Immunocal?',
    a: 'Es un suplemento de Immunotec que apoya la producción natural de glutatión, un antioxidante que tu propio cuerpo fabrica. Juliana te lo explica en palabras simples y te ayuda a entender si encaja contigo.',
  },
  {
    category: 'Tiempo',
    q: '¿Cuándo podría notar cambios?',
    a: 'Cada cuerpo responde distinto. Algunas personas notan señales en pocas semanas, como energía más estable o mejor descanso. Lo importante es hacer seguimiento y observar tu proceso con paciencia.',
  },
  {
    category: 'Salud',
    q: '¿Puedo tomarlo si uso medicamentos?',
    a: 'Si tienes una condición médica, estás embarazada, lactando o tomas medicamentos, lo responsable es consultar con tu médico. Juliana puede compartirte información para que la revises con tranquilidad.',
  },
  {
    category: 'Compra',
    q: '¿Tengo que comprar de inmediato?',
    a: 'No. Puedes escribir solo para resolver dudas. Si decides empezar, Juliana te guía para comprar por canales oficiales y saber cómo usarlo.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-3xl px-6 sm:px-10">
        <div ref={header} className="mb-12 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Preguntas frecuentes
          </p>
          <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Dudas normales antes de empezar.
          </h2>
        </div>

        <div className="divide-y divide-border rounded-3xl border border-border bg-card">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-primary/70">
                      {f.category}
                    </span>
                    <span className="mt-1 block text-[15px] font-semibold leading-snug text-foreground">
                      {f.q}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 text-muted-foreground transition-transform duration-300',
                      isOpen && 'rotate-180 text-primary',
                    )}
                  />
                </button>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-[1.85] text-muted-foreground sm:px-8">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">¿Tu duda no está aquí? Te respondo personalmente.</p>
          <a
            href={CONTACT.whatsappGeneral}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/8 px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="size-4" />
            Hacer mi pregunta
          </a>
        </div>
      </div>
    </section>
  )
}