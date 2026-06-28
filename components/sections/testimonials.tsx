'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

const TESTIMONIALS = [
  {
    name: 'María Fernanda L.',
    city: 'Bogotá',
    initials: 'MF',
    rating: 5,
    text: 'Llevaba meses sintiéndome agotada. A las tres semanas con Immunocal noté una energía diferente, más estable, sin los bajones de antes. No me lo hubiera creído si no lo viviera yo misma.',
    product: 'Immunocal Classic',
    colorClass: 'bg-primary/10 text-primary',
  },
  {
    name: 'Carlos Arturo M.',
    city: 'Medellín',
    initials: 'CA',
    rating: 5,
    text: 'Tengo 58 años y soy diabético. Mi médico me autorizó tomarlo y los resultados en mis niveles de energía y en las defensas han sido notables. Lo recomiendo sin dudarlo.',
    product: 'Immunocal Platinum',
    colorClass: 'bg-olive/10 text-olive',
  },
  {
    name: 'Sandra P.',
    city: 'Cali',
    initials: 'SP',
    rating: 5,
    text: 'Juliana me explicó todo con mucha paciencia y honestidad. No me intentó vender más de lo que necesitaba. Hoy llevo 6 meses con Immunocal y me siento increíble.',
    product: 'Immunocal Classic',
    colorClass: 'bg-primary/10 text-primary',
  },
  {
    name: 'Roberto V.',
    city: 'Barranquilla',
    initials: 'RV',
    rating: 5,
    text: 'Mi esposa y yo empezamos juntos. Los dos notamos mejoría en el sueño y en nuestra resistencia. Es un producto serio, con ciencia detrás. Vale cada peso.',
    product: 'Immunocal Platinum',
    colorClass: 'bg-olive/10 text-olive',
  },
  {
    name: 'Alejandra T.',
    city: 'Bucaramanga',
    initials: 'AT',
    rating: 5,
    text: 'Empecé con dudas, pero Juliana me mostró los estudios clínicos y me convenció. Tres meses después mis defensas son mucho más fuertes y casi no me he enfermado este invierno.',
    product: 'Immunocal Classic',
    colorClass: 'bg-primary/10 text-primary',
  },
]

export function Testimonials() {
  const [active, setActive]   = useState(0)
  const [paused, setPaused]   = useState(false)
  const header = useReveal<HTMLDivElement>()

  const next = useCallback(() => setActive(a => (a + 1) % TESTIMONIALS.length), [])
  const prev = useCallback(() => setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  const t = TESTIMONIALS[active]

  return (
    <section id="testimonios" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-6 sm:px-10">
        <div ref={header} className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Resultados reales
          </p>
          <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Lo que dicen quienes<br />ya lo viven
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/[0.04]">
            <div className="p-10 sm:p-14">
              <Quote className="mb-6 size-10 text-primary/20" />

              <blockquote
                key={active}
                className="animate-fade-in font-heading text-xl font-medium leading-relaxed text-foreground sm:text-2xl"
              >
                "{t.text}"
              </blockquote>

              <div className="mt-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    'flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                    t.colorClass,
                  )}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city} · {t.product}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[3px] w-full bg-border">
              <div
                key={active}
                className="h-full bg-primary"
                style={{
                  animation: paused ? 'none' : 'progress-bar 5s linear forwards',
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
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/60 transition-all hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => { next(); setPaused(true) }}
                aria-label="Siguiente"
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/60 transition-all hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
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
          to   { width: 100%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </section>
  )
}