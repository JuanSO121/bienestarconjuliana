'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

const TESTIMONIALS = [
  {
    name: 'María Fernanda L.',
    city: 'Bogotá',
    initials: 'MF',
    text: 'Yo no quería que me vendieran algo. Juliana me preguntó por mi rutina, me explicó con calma y pude decidir sin sentir presión.',
    product: 'Acompañamiento inicial',
    colorClass: 'bg-primary/10 text-primary',
  },
  {
    name: 'Sandra P.',
    city: 'Cali',
    initials: 'SP',
    text: 'Me gustó que no empezó por el producto. Primero entendió qué quería mejorar y después me mostró opciones que tenían sentido para mí.',
    product: 'Orientación personalizada',
    colorClass: 'bg-olive/10 text-olive',
  },
  {
    name: 'Alejandra T.',
    city: 'Bucaramanga',
    initials: 'AT',
    text: 'Tenía muchas dudas sobre Immunocal. Juliana me lo explicó en palabras sencillas y me ayudó a conversar el tema con más tranquilidad.',
    product: 'Dudas y seguimiento',
    colorClass: 'bg-primary/10 text-primary',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const header = useReveal<HTMLDivElement>()

  const next = useCallback(() => setActive((a) => (a + 1) % TESTIMONIALS.length), [])
  const prev = useCallback(() => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5200)
    return () => clearInterval(id)
  }, [paused, next])

  const t = TESTIMONIALS[active]

  return (
    <section id="testimonios" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-6 sm:px-10">
        <div ref={header} className="mb-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Confianza antes que venta
            </p>
            <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Lo que más se recuerda es cómo te sentiste al preguntar.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-[1.85] text-muted-foreground lg:justify-self-end">
            La experiencia debe sonar humana: claridad, escucha y decisiones
            con calma. Eso posiciona a Juliana como asesora, no como vendedora.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden border border-border bg-card shadow-xl shadow-black/[0.04]">
            <div className="p-8 sm:p-12">
              <Quote className="mb-6 size-10 text-primary/20" />

              <blockquote
                key={active}
                className="animate-fade-in font-heading text-xl font-medium leading-relaxed text-foreground sm:text-2xl"
              >
                "{t.text}"
              </blockquote>

              <div className="mt-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={cn('flex size-12 shrink-0 items-center justify-center rounded-md text-sm font-bold', t.colorClass)}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city} / {t.product}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[3px] w-full bg-border">
              <div
                key={active}
                className="h-full bg-primary"
                style={{
                  animation: paused ? 'none' : 'progress-bar 5.2s linear forwards',
                }}
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setPaused(true) }}
                  aria-label={`Testimonio ${i + 1}`}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === active ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-primary/30',
                  )}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => { prev(); setPaused(true) }}
                aria-label="Anterior"
                className="flex size-10 items-center justify-center rounded-md border border-border text-foreground/60 transition-all hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => { next(); setPaused(true) }}
                aria-label="Siguiente"
                className="flex size-10 items-center justify-center rounded-md border border-border text-foreground/60 transition-all hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-bar {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </section>
  )
}
