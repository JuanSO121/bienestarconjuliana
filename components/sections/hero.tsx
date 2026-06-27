'use client'

import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { BRAND, CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'

export function Hero() {
  const left = useReveal<HTMLDivElement>()
  const right = useReveal<HTMLDivElement>({ delay: 180 })

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,theme(colors.background)_0%,theme(colors.secondary/45%)_45%,theme(colors.background)_100%)]" />
        <svg className="absolute right-0 top-0 h-full w-[58%] opacity-80" viewBox="0 0 760 900" fill="none" aria-hidden>
          <path d="M510 34C650 120 730 285 690 444C648 612 484 715 319 748C182 776 54 735 18 629C-18 522 40 360 151 235C252 121 370 -52 510 34Z" fill="#3aa87e" fillOpacity=".10" />
          <path d="M687 143C734 238 708 354 625 420C535 492 400 475 321 398C247 326 232 216 303 139C382 53 626 19 687 143Z" fill="#2d5fd4" fillOpacity=".08" />
        </svg>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-8">
        <div ref={left}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/70 px-4 py-1.5 shadow-sm backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {BRAND.tagline}
            </span>
          </div>

          <h1 className="max-w-[13ch] font-heading text-[clamp(3.1rem,7vw,5.9rem)] font-extrabold leading-[0.96] tracking-tight text-foreground">
            Vuelve a sentirte en casa en tu cuerpo.
          </h1>

          <p className="mt-7 max-w-[46ch] text-[1.08rem] leading-[1.8] text-muted-foreground">
            Inspiracion, habitos y acompañamiento cercano para cuidar tu energia,
            tus defensas y tu bienestar diario. Si algo resuena contigo, lo
            conversamos con calma por WhatsApp.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT.whatsappGeneral}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <MessageCircle className="size-4" />
              Contarle a Juliana como me siento
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/70 px-6 py-3.5 text-sm font-semibold text-foreground/75 transition-colors hover:border-primary/30 hover:text-foreground"
            >
              Ver como puedo empezar
            </button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 border-t border-border pt-7 sm:grid-cols-3">
            {[
              'Bienestar antes que venta',
              'Orientacion 1 a 1',
              'Productos originales',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <ShieldCheck className="size-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div ref={right} className="flex justify-center lg:justify-end">
          <WellnessHeroSvg />
        </div>
      </div>
    </section>
  )
}

function WellnessHeroSvg() {
  return (
    <div className="relative w-full max-w-[500px]">
      <div className="absolute inset-6 rounded-[2.25rem] bg-primary/[0.06] blur-2xl" />
      <svg
        viewBox="0 0 520 620"
        className="relative w-full drop-shadow-2xl"
        role="img"
        aria-label="Ilustracion moderna de bienestar con Juliana"
      >
        <defs>
          <linearGradient id="heroCard" x1="85" x2="438" y1="43" y2="548" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#eef8f4" />
          </linearGradient>
          <linearGradient id="heroBlue" x1="130" x2="404" y1="123" y2="434" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2d5fd4" />
            <stop offset="1" stopColor="#3aa87e" />
          </linearGradient>
          <filter id="softShadow" x="35" y="22" width="460" height="560" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="30" stdDeviation="24" floodColor="#1a3a4a" floodOpacity=".16" />
          </filter>
        </defs>

        <g filter="url(#softShadow)">
          <rect x="68" y="48" width="384" height="510" rx="46" fill="url(#heroCard)" />
          <rect x="86" y="68" width="348" height="470" rx="34" fill="none" stroke="#d6e7e2" strokeWidth="2" />
        </g>

        <circle cx="260" cy="222" r="118" fill="url(#heroBlue)" fillOpacity=".13" />
        <circle cx="260" cy="222" r="88" fill="#ffffff" />
        <path d="M260 126C221 169 187 206 206 260C223 309 268 336 313 315C358 294 379 243 360 198C343 158 304 136 260 126Z" fill="#2d5fd4" fillOpacity=".10" />
        <path d="M262 141C294 166 321 199 318 240C315 284 288 315 263 330C238 315 211 284 208 240C205 199 230 166 262 141Z" fill="#3aa87e" fillOpacity=".22" />
        <path d="M262 151V320" stroke="#3aa87e" strokeWidth="5" strokeLinecap="round" />
        <path d="M262 204C284 198 301 185 315 165" stroke="#3aa87e" strokeWidth="5" strokeLinecap="round" />
        <path d="M262 238C239 231 224 215 213 194" stroke="#3aa87e" strokeWidth="5" strokeLinecap="round" />
        <path d="M262 274C287 266 306 248 320 224" stroke="#3aa87e" strokeWidth="5" strokeLinecap="round" />

        <rect x="126" y="382" width="268" height="20" rx="10" fill="#1a3a4a" fillOpacity=".12" />
        <rect x="126" y="417" width="206" height="14" rx="7" fill="#1a3a4a" fillOpacity=".09" />
        <rect x="126" y="449" width="242" height="14" rx="7" fill="#1a3a4a" fillOpacity=".09" />

        <g>
          <rect x="315" y="95" width="116" height="58" rx="18" fill="#ffffff" stroke="#d6e7e2" strokeWidth="2" />
          <circle cx="344" cy="124" r="14" fill="#2d5fd4" fillOpacity=".14" />
          <path d="M342 124h42" stroke="#1a3a4a" strokeOpacity=".35" strokeWidth="5" strokeLinecap="round" />
        </g>

        <g>
          <rect x="44" y="338" width="146" height="70" rx="22" fill="#ffffff" stroke="#d6e7e2" strokeWidth="2" />
          <path d="M79 374c13-22 36-22 50 0c9-11 23-13 33-4" stroke="#3aa87e" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="78" cy="373" r="5" fill="#2d5fd4" />
        </g>

        <g>
          <rect x="344" y="466" width="128" height="58" rx="18" fill="#1a3a4a" />
          <path d="M374 496h62" stroke="#ffffff" strokeOpacity=".72" strokeWidth="6" strokeLinecap="round" />
          <circle cx="445" cy="496" r="7" fill="#3aa87e" />
        </g>
      </svg>
    </div>
  )
}
