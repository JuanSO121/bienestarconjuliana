'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    category: 'Ciencia',
    q: '¿Qué hace Immunocal que otros suplementos no hacen?',
    a: 'Immunocal no es glutatión, es su precursor patentado a nivel mundial. El glutatión tomado directo se digiere antes de llegar a donde se necesita; Immunocal entrega la cisteína enlazada para que tus propias células lo produzcan. Pruebas clínicas revisadas por pares confirman un aumento del 35%.',
  },
  {
    category: 'Tiempo',
    q: '¿Cuándo empiezo a notar los efectos?',
    a: 'Las primeras señales — mejor sueño y energía más estable — suelen aparecer entre las semanas 2 y 4. La mejora en defensas y recuperación se consolida entre el mes 2 y 3. Por eso hago seguimiento personal a cada persona que acompaño, para ajustar la dosis según la respuesta de tu cuerpo.',
  },
  {
    category: 'Salud',
    q: '¿Puedo tomarlo con medicamentos o si tengo una enfermedad?',
    a: 'En la mayoría de los casos sí, es un suplemento alimenticio, no un medicamento. Personas con trasplante de órganos o en tratamiento con inmunosupresores deben consultar primero a su médico. Tengo acceso a la ficha técnica completa y a los estudios clínicos para compartir con tu médico.',
  },
  {
    category: 'Productos',
    q: '¿Cuál es la diferencia entre Classic y Platinum?',
    a: 'Classic es la fórmula original, con todos los precursores de glutatión. Platinum agrega CMP y RMF para apoyar densidad ósea y resistencia muscular — ideal para mayores de 50, deportistas o quienes viven con alto estrés. Te ayudo a elegir el tuyo según tu objetivo.',
  },
  {
    category: 'Compra',
    q: '¿Cómo compro y a qué precio?',
    a: 'Te recomiendo escribirme primero por WhatsApp: te cuento tu mejor opción según tu objetivo y, si quieres, también cómo funciona la suscripción mensual con descuento. Si ya sabes lo que necesitas, también puedes comprar directo en el sitio oficial de Immunotec.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-3xl px-6 sm:px-10">

        <div ref={header} className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Preguntas frecuentes
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Lo que la gente pregunta<br />antes de empezar
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
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-primary/70">
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
          <p className="text-sm text-muted-foreground">
            ¿Tu duda no está aquí? Te respondo en minutos.
          </p>
          <a
            href={CONTACT.whatsappGeneral}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary/8 border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:border-primary"
          >
            <MessageCircle className="size-4" />
            Hacer mi pregunta
          </a>
        </div>
      </div>
    </section>
  )
}