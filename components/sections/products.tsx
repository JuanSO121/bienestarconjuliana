'use client'

import { ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import { CONTACT, PRODUCTS, waLink, type Product } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

type Accent = Product['accent']

const ACCENT: Record<Accent, { check: string; tag: string; bar: string; svg: string }> = {
  blue: {
    check: 'text-primary',
    tag: 'bg-primary/8 text-primary',
    bar: 'bg-primary',
    svg: '#2d5fd4',
  },
  platinum: {
    check: 'text-slate-400',
    tag: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
    bar: 'bg-slate-400',
    svg: '#94a3b8',
  },
  green: {
    check: 'text-emerald-500',
    tag: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
    bar: 'bg-emerald-500',
    svg: '#10b981',
  },
  coffee: {
    check: 'text-amber-500',
    tag: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
    bar: 'bg-amber-500',
    svg: '#b7791f',
  },
}

export function Products() {
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="productos" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={header} className="mb-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Alternativas Immunotec
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Opciones para distintos momentos de bienestar.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-[1.85] text-muted-foreground lg:justify-self-end">
            No tienes que escoger sola. Estos productos son puntos de partida
            para una conversacion: energia, defensas, nutricion diaria o una
            rutina mas facil de sostener.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 80} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="font-heading text-lg font-bold text-foreground">
              Si no sabes por donde empezar, perfecto.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Me escribes, me cuentas que quieres mejorar y vemos una ruta
              sencilla para tu caso.
            </p>
          </div>
          <a
            href={CONTACT.whatsappGeneral}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20"
          >
            <MessageCircle className="size-4" />
            Pedir orientacion
          </a>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const ref = useReveal<HTMLDivElement>({ delay })
  const a = ACCENT[product.accent]

  return (
    <div
      ref={ref}
      className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-black/[0.05]"
    >
      <div className={cn('h-[3px] w-full', a.bar)} />

      {product.badge && (
        <span className={cn('absolute left-4 top-5 z-10 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide', a.tag)}>
          {product.badge}
        </span>
      )}

      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-secondary/35">
        <ProductSvg product={product} color={a.svg} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className={cn('mb-2 self-start rounded-full px-2.5 py-0.5 text-[10px] font-semibold', a.tag)}>
          {product.tagline}
        </span>
        <h3 className="font-heading text-[15px] font-bold leading-snug text-foreground">
          {product.name}
        </h3>

        <ul className="mt-4 flex-1 space-y-2">
          {product.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[13px] leading-relaxed text-foreground/75">
              <Check className={cn('mt-0.5 size-3.5 shrink-0', a.check)} />
              {b}
            </li>
          ))}
        </ul>

        <a
          href={waLink(product.waText)}
          target="_blank"
          rel="noreferrer"
          className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-[13px] font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary hover:text-white"
        >
          {product.cta}
          <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </div>
  )
}

function ProductSvg({ product, color }: { product: Product; color: string }) {
  const isCoffee = product.id === 'cafe'
  const isOptimizer = product.id === 'optimizer'

  return (
    <svg viewBox="0 0 320 240" className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" aria-hidden>
      <defs>
        <linearGradient id={`pack-${product.id}`} x1="83" x2="220" y1="31" y2="203" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#f3faf7" />
        </linearGradient>
        <filter id={`shadow-${product.id}`} x="40" y="18" width="240" height="210" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#1a3a4a" floodOpacity=".14" />
        </filter>
      </defs>

      <circle cx="246" cy="48" r="52" fill={color} fillOpacity=".10" />
      <circle cx="74" cy="190" r="48" fill="#3aa87e" fillOpacity=".10" />

      {isCoffee ? (
        <g filter={`url(#shadow-${product.id})`}>
          <path d="M112 82h104l-13 104c-2 17-16 30-34 30h-10c-18 0-32-13-34-30L112 82Z" fill={`url(#pack-${product.id})`} stroke="#d6e7e2" strokeWidth="2" />
          <path d="M109 72h110c6 0 10 4 10 10s-4 10-10 10H109c-6 0-10-4-10-10s4-10 10-10Z" fill={color} />
          <path d="M140 128c18 18 48 18 66 0" stroke={color} strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M143 151h61" stroke="#1a3a4a" strokeOpacity=".22" strokeWidth="6" strokeLinecap="round" />
        </g>
      ) : (
        <g filter={`url(#shadow-${product.id})`}>
          <rect x="96" y="42" width="128" height="166" rx="24" fill={`url(#pack-${product.id})`} stroke="#d6e7e2" strokeWidth="2" />
          <rect x="114" y="60" width="92" height="28" rx="14" fill={color} fillOpacity=".14" />
          <path d="M139 74h42" stroke={color} strokeWidth="5" strokeLinecap="round" />
          <circle cx="160" cy="124" r="34" fill={color} fillOpacity=".12" />
          {isOptimizer ? (
            <>
              <circle cx="148" cy="124" r="12" fill="#ef4444" fillOpacity=".72" />
              <circle cx="170" cy="122" r="13" fill="#22c55e" fillOpacity=".75" />
              <circle cx="160" cy="141" r="10" fill="#f59e0b" fillOpacity=".75" />
            </>
          ) : (
            <>
              <path d="M160 93c21 17 35 38 31 63c-3 21-17 36-31 44c-14-8-28-23-31-44c-4-25 10-46 31-63Z" fill={color} fillOpacity=".22" />
              <path d="M160 102v90" stroke={color} strokeWidth="5" strokeLinecap="round" />
              <path d="M160 138c14-3 24-12 31-24" stroke={color} strokeWidth="5" strokeLinecap="round" />
              <path d="M160 158c-14-4-24-14-31-27" stroke={color} strokeWidth="5" strokeLinecap="round" />
            </>
          )}
          <path d="M124 174h72" stroke="#1a3a4a" strokeOpacity=".18" strokeWidth="6" strokeLinecap="round" />
          <path d="M136 190h48" stroke="#1a3a4a" strokeOpacity=".14" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}
    </svg>
  )
}
