'use client'

import { BadgeCheck, Heart, MessageCircle, ShieldCheck } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'
import { BotanicalSprig } from '@/components/botanical'

const PROMISES = [
  {
    icon: Heart,
    title: 'Primero te escucho',
    desc: 'Energía, defensas, descanso, hábitos o prevención. Tu punto de partida importa.',
  },
  {
    icon: ShieldCheck,
    title: 'Te hablo claro',
    desc: 'Sin promesas milagrosas, sin tecnicismos y sin presión para comprar.',
  },
  {
    icon: BadgeCheck,
    title: 'Compra segura',
    desc: 'Si decides empezar, te guío por canales oficiales y productos originales.',
  },
]

export function Consultant() {
  const text = useReveal<HTMLDivElement>()
  const cards = useReveal<HTMLDivElement>({ delay: 140 })

  return (
    <section id="consultora" className="relative overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
        <div ref={text}>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            La persona detrás de la recomendación
          </p>
          <h2 className="mx-auto max-w-[20ch] font-heading text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Cuidarte se siente distinto cuando alguien te acompaña.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-[1.85] text-muted-foreground">
            Soy Juliana. Convierto la información en una conversación sencilla:
            qué quieres mejorar, qué hábitos puedes sostener y qué alternativas
            podrían ayudarte a sentirte mejor cada día. Sin presión, sin
            tecnicismos, a tu ritmo.
          </p>
        </div>

        <div ref={cards} className="mx-auto mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {PROMISES.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-[18px]" />
              </span>
              <p className="mt-4 font-heading text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <BotanicalSprig className="mx-auto mt-12 h-14 w-44 text-olive" />

        <a
          href={CONTACT.whatsappGeneral}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.03]"
        >
          <MessageCircle className="size-4" />
          Hablar con Juliana
        </a>
      </div>
    </section>
  )
}