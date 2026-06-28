'use client'

import Image from 'next/image'
import { ArrowRight, CheckCircle2, MessageCircle, NotebookPen } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'

const SIGNS = [
  'Te cansas más de lo normal, aunque duermas bien',
  'Te enfermas seguido o te demoras en recuperarte',
  'Sientes que deberías cuidarte más, pero no sabes por dónde empezar',
]

const CHECK_IN = [
  'Energía durante el día',
  'Defensas y recuperación',
  'Sueño, rutina y alimentación',
]

export function Hero() {
  const left = useReveal<HTMLDivElement>()
  const right = useReveal<HTMLDivElement>({ delay: 180 })

  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border/70 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,theme(colors.background)_0%,theme(colors.background)_56%,theme(colors.secondary/55%)_56%,theme(colors.secondary/55%)_100%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div ref={left}>
          <div className="mb-6 inline-flex items-center gap-2 border-y border-border py-2 pr-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
            <span className="h-px w-8 bg-primary/50" />
            ¿Te ha pasado esto?
          </div>

          <h1 className="max-w-[14ch] font-heading text-[clamp(2.7rem,5.7vw,4.7rem)] font-medium leading-[1.02] tracking-tight text-foreground">
            Últimamente no te sientes como antes.
          </h1>

          <p className="mt-7 max-w-[48ch] text-[1.05rem] leading-[1.8] text-muted-foreground">
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
              className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageCircle className="size-4" />
              Contarle a Juliana cómo me siento
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => document.getElementById('consultora')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-md border border-border bg-card/70 px-6 py-3.5 text-sm font-semibold text-foreground/75 transition-colors hover:border-primary/30 hover:text-foreground"
            >
              ¿Quién es Juliana?
            </button>
          </div>
        </div>

        <div ref={right} className="relative mx-auto w-full max-w-[520px] lg:mr-0">
          <div className="relative min-h-[540px] border border-border bg-card p-4 shadow-[0_24px_70px_-38px_oklch(0.22_0.025_155/45%)] sm:p-6">
            <div className="grid h-full min-h-[500px] grid-rows-[auto_1fr_auto] gap-4">
              <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Primera conversación
                  </p>
                  <p className="mt-2 max-w-[24ch] font-heading text-2xl font-medium leading-tight text-foreground">
                    Entender tu bienestar antes de recomendar.
                  </p>
                </div>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <NotebookPen className="size-5" />
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1fr_0.82fr]">
                <div className="flex flex-col justify-between bg-secondary/55 p-5">
                  <div className="space-y-3">
                    {CHECK_IN.map((item) => (
                      <div key={item} className="flex items-center gap-3 border-b border-border/80 pb-3 last:border-0 last:pb-0">
                        <CheckCircle2 className="size-4 shrink-0 text-olive" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    Juliana escucha tu contexto y traduce la información en pasos posibles.
                  </p>
                </div>

                <div className="relative min-h-[260px] overflow-hidden bg-background">
                  <Image
                    src="/products/immunocal-regular.png"
                    alt="Producto Immunocal original"
                    fill
                    sizes="(min-width: 1024px) 220px, 45vw"
                    className="object-contain p-5"
                    priority
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
                {['Escuchar', 'Explicar', 'Orientar'].map((step) => (
                  <span key={step} className="bg-background px-2 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/65">
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 max-w-[240px] border border-border bg-background px-4 py-3 shadow-lg shadow-black/[0.05] sm:left-8">
            <p className="text-sm leading-relaxed text-foreground/80">
              No empiezas por comprar. Empiezas por entender qué puede estar pasando.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
