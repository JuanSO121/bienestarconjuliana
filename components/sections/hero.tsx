'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import { BotanicalBranch } from '../botanical'


const SIGNS = [
  'Te cansas más de lo normal, aunque duermas bien',
  'Te enfermas seguido o te demoras en recuperarte',
  'Sientes que "deberías" cuidarte más, pero no sabes por dónde empezar',
]

export function Hero() {
  const left = useReveal<HTMLDivElement>()
  const right = useReveal<HTMLDivElement>({ delay: 180 })

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Rama botánica: columna ambiental fija a la derecha, recorre el hero
          y se asoma en la siguiente sección. Elemento de fondo — la foto
          real de Juliana es la protagonista, no esto. */}
      <BotanicalBranch className="botanical-draw pointer-events-none absolute -right-6 top-0 hidden h-[760px] w-auto opacity-90 sm:block lg:right-8" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div ref={left}>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            ¿Te ha pasado esto?
          </p>

          <h1 className="max-w-[15ch] font-heading text-[clamp(2.5rem,5.6vw,4.1rem)] font-medium leading-[1.08] tracking-tight text-foreground">
            Últimamente no te sientes como antes.
          </h1>

          <p className="mt-7 max-w-[46ch] text-[1.05rem] leading-[1.8] text-muted-foreground">
            No es algo que sepas explicar bien, pero lo sientes: menos energía,
            defensas que fallan más de lo que deberían, días que se sienten
            cuesta arriba. No estás exagerando. Y no tienes que resolverlo sola.
          </p>

          <ul className="mt-7 flex flex-col gap-2.5">
            {SIGNS.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm text-foreground/75">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT.whatsappGeneral}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <MessageCircle className="size-4" />
              Contarle a Juliana cómo me siento
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => document.getElementById('consultora')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/70 px-6 py-3.5 text-sm font-semibold text-foreground/75 transition-colors hover:border-primary/30 hover:text-foreground"
            >
              ¿Quién es Juliana?
            </button>
          </div>
        </div>

        <div ref={right} className="flex justify-center lg:justify-end">
          {/* Única foto de Juliana en toda la apertura de la página.
              Retrato cercano, luz natural, sin bata blanca ni pose de catálogo. */}
          <PhotoPlaceholder
            label="Foto de Juliana — retrato cercano, luz natural"
            dimensions="1080 × 1350 px (4:5)"
            aspect="aspect-[4/5]"
            rotate="right"
            caption="Juliana, asesora de bienestar"
            className="w-full max-w-[400px] animate-sway"
          />
        </div>
      </div>
    </section>
  )
}