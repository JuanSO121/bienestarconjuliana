'use client'

import { BadgeCheck, Heart, MessageCircle, ShieldCheck } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'

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
  const img = useReveal<HTMLDivElement>()
  const text = useReveal<HTMLDivElement>({ delay: 160 })

  return (
    <section id="consultora" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.primary/6%),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div ref={img} className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[380px]">
            <div className="absolute -left-4 top-8 h-full w-full rounded-[2rem] border border-primary/15" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">
              <JulianaPortraitSvg />
            </div>
            <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-border bg-card px-5 py-3 text-center shadow-xl">
              <p className="font-heading text-base font-extrabold text-foreground">
                Juliana
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                Bienestar con acompañamiento
              </p>
            </div>
          </div>
        </div>

        <div ref={text}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            La persona detrás de la recomendación
          </p>
          <h2 className="max-w-[13ch] font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Cuidarte se siente distinto cuando alguien te acompaña.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-[1.85] text-muted-foreground">
            Juliana convierte la información en una conversación sencilla:
            qué quieres mejorar, qué hábitos puedes sostener y qué alternativas
            podrían ayudarte a sentirte mejor cada día.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PROMISES.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-[18px]" />
                </span>
                <p className="mt-4 font-heading text-sm font-bold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href={CONTACT.whatsappGeneral}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.03]"
          >
            <MessageCircle className="size-4" />
            Hablar con Juliana
          </a>
        </div>
      </div>
    </section>
  )
}

function JulianaPortraitSvg() {
  return (
    <svg viewBox="0 0 420 520" className="block w-full" role="img" aria-label="Retrato ilustrado de Juliana">
      <defs>
        <linearGradient id="portraitBg" x1="60" x2="360" y1="40" y2="480" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#eef8f4" />
        </linearGradient>
        <linearGradient id="portraitAccent" x1="122" x2="302" y1="126" y2="372" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2d5fd4" />
          <stop offset="1" stopColor="#3aa87e" />
        </linearGradient>
      </defs>

      <rect width="420" height="520" fill="url(#portraitBg)" />
      <circle cx="332" cy="92" r="78" fill="#2d5fd4" fillOpacity=".08" />
      <circle cx="78" cy="420" r="96" fill="#3aa87e" fillOpacity=".10" />
      <path d="M82 120C132 52 262 34 337 92C414 151 384 294 297 344C211 394 86 338 62 246C50 198 54 159 82 120Z" fill="url(#portraitAccent)" fillOpacity=".10" />

      <path d="M210 96C152 96 112 140 112 202C112 265 156 310 210 310C264 310 308 265 308 202C308 140 268 96 210 96Z" fill="#1a3a4a" fillOpacity=".12" />
      <path d="M138 210C138 152 168 116 212 116C256 116 284 152 284 210V250C284 298 252 334 212 334C172 334 138 298 138 250V210Z" fill="#f4c7aa" />
      <path d="M126 207C128 136 164 90 219 90C268 90 304 130 303 201C276 178 230 170 181 185C158 192 141 201 126 207Z" fill="#1a3a4a" />
      <path d="M142 210C153 203 169 197 190 192C234 181 273 187 303 210V172C303 124 268 84 219 84C159 84 124 132 124 198C124 203 124 207 125 212C130 212 136 210 142 210Z" fill="#1a3a4a" />
      <circle cx="171" cy="226" r="5" fill="#1a3a4a" fillOpacity=".72" />
      <circle cx="248" cy="226" r="5" fill="#1a3a4a" fillOpacity=".72" />
      <path d="M194 260C204 268 219 268 230 260" stroke="#1a3a4a" strokeOpacity=".55" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M171 248C158 249 148 244 143 236" stroke="#e7ad90" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M249 248C262 249 272 244 277 236" stroke="#e7ad90" strokeWidth="4" strokeLinecap="round" fill="none" />

      <path d="M116 430C126 364 164 326 212 326C260 326 296 364 306 430V520H116V430Z" fill="#1a3a4a" />
      <path d="M156 345C174 372 248 372 266 345C251 331 232 324 212 324C192 324 172 331 156 345Z" fill="#ffffff" fillOpacity=".92" />
      <path d="M142 420C180 438 242 439 282 420" stroke="#3aa87e" strokeWidth="8" strokeLinecap="round" fill="none" />

      <g>
        <rect x="264" y="350" width="112" height="56" rx="18" fill="#ffffff" stroke="#d6e7e2" strokeWidth="2" />
        <circle cx="292" cy="378" r="12" fill="#3aa87e" fillOpacity=".22" />
        <path d="M314 378h36" stroke="#1a3a4a" strokeOpacity=".35" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  )
}
