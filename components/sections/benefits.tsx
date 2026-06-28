'use client'

import { BatteryCharging, Leaf, ShieldCheck, Sparkles } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'
import { BotanicalBranch } from '@/components/botanical'

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
    <section id="beneficios" className="relative overflow-hidden bg-secondary/40 py-24 sm:py-32">
      <BotanicalBranch
        flip
        className="pointer-events-none absolute -left-10 top-0 hidden h-[640px] w-auto opacity-70 sm:block lg:left-2"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={header} className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Bienestar que se siente cercano
          </p>
          <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
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
    <div ref={ref} className="group relative bg-card p-8 transition-colors duration-300 hover:bg-primary/[0.04]">
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-6 font-heading text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <p className="mt-4 text-xs font-medium leading-relaxed text-primary/80">{note}</p>
    </div>
  )
}