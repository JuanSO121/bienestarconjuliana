'use client'

import { BadgeCheck, HeartHandshake, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'

export function Consultant() {
  const img  = useReveal<HTMLDivElement>()
  const text = useReveal<HTMLDivElement>({ delay: 160 })

  return (
    <section id="consultora" className="relative overflow-hidden py-24 sm:py-32">

      {/* SVG BACKGROUND — hex directos */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M-60,60 C80,-20 260,40 300,200 C340,360 240,480 80,480 C-80,480 -160,360 -140,220 Z"
          fill="#2d5fd4"
          fillOpacity="0.05"
        />
        <path
          d="M1380,500 C1480,440 1540,320 1500,200 C1460,80 1340,40 1220,80 C1100,120 1080,240 1140,350 Z"
          fill="#3aa87e"
          fillOpacity="0.07"
        />
        {/* Hoja decorativa top-right */}
        <g opacity="0.07" transform="translate(1310, 50) rotate(-15)">
          <path d="M24,0 C38,16 50,44 46,72 C42,100 28,116 24,118 C20,116 6,100 2,72 C-2,44 10,16 24,0Z" fill="#2d5fd4"/>
          <line x1="24" y1="0" x2="24" y2="118" stroke="#2d5fd4" strokeWidth="1"/>
          <path d="M24,35 Q36,46 42,60" stroke="#2d5fd4" strokeWidth="0.8" fill="none"/>
          <path d="M24,35 Q12,46  6,60" stroke="#2d5fd4" strokeWidth="0.8" fill="none"/>
          <path d="M24,62 Q36,72 41,86" stroke="#2d5fd4" strokeWidth="0.8" fill="none"/>
          <path d="M24,62 Q12,72  7,86" stroke="#2d5fd4" strokeWidth="0.8" fill="none"/>
        </g>
        {/* Dot grid bottom-left */}
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={60 + c * 22}
              cy={580 + r * 22}
              r="1.8"
              fill="#2d5fd4"
              fillOpacity="0.13"
            />
          ))
        )}
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-2">

        {/* Foto */}
        <div ref={img} className="relative order-2 lg:order-1 flex justify-center">
          <div className="relative w-full max-w-[380px]">
            {/* Blob frame */}
            <svg viewBox="0 0 380 400" className="absolute inset-0 w-full h-full -z-10" aria-hidden>
              <path
                d="M190,16 C268,-4 352,54 368,162 C384,270 326,374 210,396 C94,418 -4,358 0,238 C4,118 66,34 160,12 C175,7 185,20 190,16Z"
                fill="#2d5fd4"
                fillOpacity="0.07"
              />
            </svg>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10 ring-1 ring-primary/10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juliana-hCDe76ej3XgP1sSRS3BrR8EagovCMA.png"
                alt="Juliana, consultora oficial de Immunotec en Colombia"
                crossOrigin="anonymous"
                className="w-full object-cover"
              />
            </div>

            {/* Chip flotante — fondo sólido garantizado */}
            <div className="animate-float-soft absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-border bg-card px-5 py-2.5 text-center shadow-xl">
              <p className="text-sm font-bold text-foreground">Juliana</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Consultora Oficial Immunotec
              </p>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div ref={text} className="order-1 lg:order-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Conóceme
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Te acompaño en cada<br />paso de tu bienestar
          </h2>
          <div className="my-6 h-px w-16 bg-primary/30" />
          <p className="leading-[1.8] text-muted-foreground">
            Soy Juliana, consultora oficial de Immunotec en Colombia. Mi
            propósito es simple: ayudarte a sentirte mejor con información
            honesta, productos respaldados por la ciencia y un acompañamiento
            cercano de principio a fin.
          </p>

          <ul className="mt-9 space-y-6">
            {[
              { icon: BadgeCheck,     title: 'Distribuidora oficial',  desc: 'Productos 100% originales con respaldo de Immunotec.' },
              { icon: HeartHandshake, title: 'Asesoría personalizada', desc: 'Te ayudo a elegir según tu objetivo y tu rutina.' },
              { icon: MessageCircle,  title: 'Acompañamiento real',    desc: 'Estoy contigo antes, durante y después de tu compra.' },
            ].map((item) => (
              <li key={item.title} className="group flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <item.icon className="size-[18px]" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={CONTACT.whatsappGeneral}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.03]"
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}