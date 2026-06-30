'use client'

import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'
import { HeroPortraitField } from '@/components/hero-portrait-field'

const TRUST = [
  'Más de 90 estudios científicos',
  'Presencia internacional',
  'Asesoría personalizada',
]

export function Hero() {
  const left = useReveal<HTMLDivElement>()
  const right = useReveal<HTMLDivElement>({ delay: 150 })

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr]">

        <div ref={left}>

          <h1 className="mt-6 max-w-[13ch] font-heading text-[clamp(2.6rem,4.8vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-foreground">
            La salud no se construye
            <span className="block text-primary/80">
              corrigiendo síntomas.
            </span>
          </h1>

          <p className="mt-6 max-w-[36ch] text-lg leading-relaxed text-muted-foreground">
            Se construye entendiendo cómo funciona tu cuerpo y apoyándolo
            desde su origen, con una nutrición respaldada por décadas de
            investigación científica.
          </p>

          {/* <div className="mt-8 flex flex-wrap gap-2">
            {TRUST.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] font-medium text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div> */}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">

            <button
              onClick={() =>
                document
                  .getElementById('productos')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--clay)] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              Explorar la línea Immunotec
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href={CONTACT.whatsappGeneral}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/25 hover:text-primary"
            >
              <MessageCircle className="size-4" />
              Hablar con Juliana
            </a>

          </div>

        </div>

        {/* Cita corta — ocupa el aire muerto entre columnas en desktop ancho,
            sin recurrir a decoración suelta. Solo visible desde lg. */}
        <p className="pointer-events-none absolute left-[46%] top-1/2 hidden max-w-[14ch] -translate-y-1/2 font-heading text-sm italic leading-snug text-muted-foreground/70 xl:block">
          &ldquo;No se trata de tomar más, sino de entender mejor.&rdquo;
        </p>

        {/* Retrato recortado (PNG sin fondo) flotando sobre una forma SVG,
            en vez del polaroid genérico. La forma vive detrás (z-0), la
            foto encima (z-10), sin marco ni rotación artificial. */}
        <div
          ref={right}
          className="relative mx-auto aspect-[13/15] w-full max-w-[420px]"
        >
          <HeroPortraitField className="absolute inset-0 z-0" />
          <Image
            src="/images/juliana_l.png"
            alt="Juliana, consultora oficial Immunotec"
            fill
            priority
            sizes="(max-width: 640px) 80vw, 420px"
            className="product-hero-image relative z-10 object-contain object-bottom drop-shadow-[0_18px_28px_rgba(17,24,39,0.18)]"
          />
        </div>

      </div>
    </section>
  )
}