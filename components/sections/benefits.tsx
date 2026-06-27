'use client'

import { BatteryCharging, Leaf, ShieldCheck, Sparkles } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: 'Defensas más acompañadas',
    desc: 'Pequeños cambios diarios pueden ayudar a que tu cuerpo se sienta mejor preparado para el ritmo de todos los días.',
    note: 'La ciencia entra como respaldo, no como ruido.',
  },
  {
    icon: BatteryCharging,
    title: 'Energía más estable',
    desc: 'La meta no es vivir acelerada. Es llegar al final del día con más claridad, menos bajón y una rutina que puedas sostener.',
    note: 'El seguimiento ayuda a observar cómo responde tu cuerpo.',
  },
  {
    icon: Leaf,
    title: 'Hábitos que sí caben en tu vida',
    desc: 'Bienestar no debería sentirse como una lista imposible. Buscamos opciones sencillas para tu edad, horarios y prioridades.',
    note: 'Menos perfección. Más constancia.',
  },
  {
    icon: Sparkles,
    title: 'Cuidado desde adentro',
    desc: 'Cuando entiendes qué necesita tu cuerpo, tomar decisiones se vuelve más tranquilo y mucho más personal.',
    note: 'Primero escuchamos. Después elegimos.',
  },
]

export function Benefits() {
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="beneficios" className="relative overflow-hidden py-24 sm:py-32">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M-80 80C60 20 220 60 260 200C300 340 200 460 80 460C-40 460-140 360-120 220Z"
          fill="#3aa87e"
          fillOpacity="0.07"
        />
        <path
          d="M1320 60C1420 30 1500 120 1480 240C1460 360 1360 420 1260 390C1160 360 1140 260 1200 160Z"
          fill="#2d5fd4"
          fillOpacity="0.06"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={header} className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Bienestar que se siente cercano
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            No se trata de cambiarlo todo. Se trata de empezar mejor.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Juliana te ayuda a convertir dudas sueltas en una ruta simple:
            hábitos, información clara y alternativas que puedan apoyar tu día a día.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <BenefitCard key={b.title} {...b} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({
  icon: Icon,
  title,
  desc,
  note,
  delay,
}: {
  icon: typeof ShieldCheck
  title: string
  desc: string
  note: string
  delay: number
}) {
  const ref = useReveal<HTMLDivElement>({ delay })
  return (
    <div ref={ref} className="group relative bg-background p-8 transition-colors duration-300 hover:bg-primary/[0.03]">
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-6 font-heading text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <p className="mt-4 text-xs font-medium leading-relaxed text-primary/75">{note}</p>
    </div>
  )
}
