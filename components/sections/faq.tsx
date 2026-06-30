'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'Que pasa si escribo por WhatsApp?',
    a: 'Te hago unas preguntas simples sobre energia, rutina, edad y objetivo. Con eso te digo que opcion puede tener sentido y cual no.',
  },
  {
    q: 'Tengo que comprar de inmediato?',
    a: 'No. Puedes escribir solo para resolver dudas. La idea es que decidas con claridad, no por presion.',
  },
  {
    q: 'Que es Immunocal?',
    a: 'Es un suplemento de Immunotec asociado al apoyo de glutathion, un antioxidante que el cuerpo produce. Te explico lo importante en palabras simples.',
  },
  {
    q: 'Y si tengo una condicion medica?',
    a: 'Si estas embarazada, lactando, tomas medicamentos o tienes una condicion de salud, lo responsable es revisarlo con tu medico antes de empezar.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="faq" className="relative overflow-hidden bg-secondary/40 py-16 sm:py-20">
      <div className="relative mx-auto max-w-3xl px-6 sm:px-10">
        <div ref={header} className="mb-9 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Antes de empezar
          </p>
          <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Estoy para escuchar cualqueira de tus incquietudes.
          </h2>
        </div>

        <div className="divide-y divide-border rounded-2xl border border-border bg-card shadow-sm">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold leading-snug text-foreground">
                    {f.q}
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
                    <p className="px-6 pb-6 text-sm leading-[1.75] text-muted-foreground sm:px-7">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
