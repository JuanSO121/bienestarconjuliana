'use client'

import { ArrowRight, ShieldCheck } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'

export function Hero() {
  const left  = useReveal<HTMLDivElement>()
  const right = useReveal<HTMLDivElement>({ delay: 180 })

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 size-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="absolute -bottom-20 -right-20 size-[400px] rounded-full bg-emerald-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-0">

        <div ref={left}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5">
            <ShieldCheck className="size-3.5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Consultora oficial Immunotec Colombia
            </span>
          </div>

          <h1 className="font-heading text-[clamp(2.6rem,5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight text-foreground">
            No eres tú.<br />
            Es tu glutatión.
          </h1>

          <p className="mt-6 max-w-[40ch] text-[1.05rem] leading-[1.85] text-muted-foreground">
            Immunocal es el único precursor de glutatión con patente internacional,
            respaldado por 92 estudios clínicos y 79 patentes a nivel mundial.
            Te acompaño para que empieces con el producto correcto para tu cuerpo.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={CONTACT.whatsappGeneral}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              Hablar con Juliana
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.immunotec.com/es-CO/juocamu/enrollment/packs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground/70 transition-colors hover:border-primary/30 hover:text-foreground"
            >
              Comprar en sitio oficial
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
            {[
              { value: '45 años', label: 'de investigación científica' },
              { value: '92+',     label: 'estudios clínicos publicados' },
              { value: '79',      label: 'patentes a nivel mundial' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-xl font-extrabold text-foreground">{s.value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={right} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[380px]">
            <div className="absolute inset-8 rounded-full bg-primary/[0.07]" />
            <img
              src="/placeholder.svg"
              alt="Immunocal, precursor de glutatión de Immunotec"
              className="animate-float-slow relative w-full object-contain drop-shadow-2xl"
            />
            <div className="absolute -bottom-4 left-0 rounded-2xl border border-border bg-card px-5 py-3 shadow-xl">
              <p className="font-heading text-base font-extrabold text-foreground">Producto original</p>
              <p className="mt-0.5 text-xs text-muted-foreground">Distribuidora oficial Immunotec</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}