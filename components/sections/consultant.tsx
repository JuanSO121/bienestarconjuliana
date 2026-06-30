'use client'

import { BadgeCheck, Heart, ShieldCheck } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'

const PROMISES = [
  {
    icon: Heart,
    title: 'Te escucho primero',
    desc: 'Edad, energia, habitos y objetivo antes de recomendar.',
  },
  {
    icon: ShieldCheck,
    title: 'Sin promesas raras',
    desc: 'Informacion clara, responsable y sin presion.',
  },
  {
    icon: BadgeCheck,
    title: 'Compra oficial',
    desc: 'Si decides empezar, te guio por canales seguros.',
  },
]

export function Consultant() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="consultora" className="relative overflow-hidden py-16 sm:py-20">
      <div ref={ref} className="mx-auto grid max-w-6xl gap-8 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Cómo funciona
          </p>
          <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Empezamos por conocerte.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-[1.8] text-muted-foreground">
            Antes de recomendar cualquier producto, quiero entender qué buscas, cómo es tu día a día y qué esperas conseguir.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {PROMISES.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-[18px]" />
              </span>
              <p className="mt-4 font-heading text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
