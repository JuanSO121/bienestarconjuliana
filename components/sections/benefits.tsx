'use client'

import { BookOpenText, HeartHandshake, MessageCircleQuestion, Route, Sparkles } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'

const STEPS = [
  {
    icon: MessageCircleQuestion,
    title: 'Reconocer lo que sientes',
    desc: 'Nombramos señales concretas: energía, defensas, descanso, alimentación y ritmo de vida.',
  },
  {
    icon: BookOpenText,
    title: 'Entender sin saturarte',
    desc: 'Juliana traduce la información en palabras claras para que puedas tomar mejores decisiones.',
  },
  {
    icon: HeartHandshake,
    title: 'Elegir con confianza',
    desc: 'Si una alternativa tiene sentido para ti, la recomendación llega después de escuchar tu contexto.',
  },
  {
    icon: Route,
    title: 'Acompañarte en el proceso',
    desc: 'La idea no es comprar y desaparecer. Es observar cómo te va y ajustar hábitos posibles.',
  },
]

export function Benefits() {
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="beneficios" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={header} className="mb-14 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              La ruta de la conversación
            </p>
            <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
              No se trata de cambiarlo todo. Se trata de empezar mejor.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-[1.85] text-muted-foreground lg:justify-self-end">
            El contenido debe acompañar el momento mental de la persona: primero
            se reconoce, luego entiende, después confía y finalmente pregunta.
          </p>
        </div>

        <div className="grid grid-cols-1 border border-border bg-card md:grid-cols-4">
          {STEPS.map((step, i) => (
            <StepCard key={step.title} {...step} index={i + 1} delay={i * 90} />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-l-2 border-primary bg-card px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            La venta no desaparece: cambia de lugar. Primero hay comprensión y
            confianza; después una recomendación personalizada.
          </p>
          <Sparkles className="size-5 shrink-0 text-primary" />
        </div>
      </div>
    </section>
  )
}

function StepCard({
  icon: Icon,
  title,
  desc,
  index,
  delay,
}: {
  icon: typeof MessageCircleQuestion
  title: string
  desc: string
  index: number
  delay: number
}) {
  const ref = useReveal<HTMLDivElement>({ delay })

  return (
    <div ref={ref} className="relative border-b border-border p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-7">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Paso {index}
        </span>
        <span className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="size-5" />
        </span>
      </div>
      <h3 className="mt-8 font-heading text-lg font-medium leading-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  )
}
