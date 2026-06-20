'use client'

import { ArrowUpRight, BatteryCharging, Check, ShieldCheck, Sparkles } from 'lucide-react'
import { CONTACT, PRODUCTS, waLink, type Product } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

type Accent = Product['accent']

const ACCENT: Record<Accent, { check: string; tag: string; bar: string }> = {
  blue:     { check: 'text-primary',     tag: 'bg-primary/8 text-primary',                                                bar: 'bg-primary' },
  platinum: { check: 'text-slate-400',   tag: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',        bar: 'bg-slate-400' },
  green:    { check: 'text-emerald-500', tag: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400', bar: 'bg-emerald-500' },
  coffee:   { check: 'text-amber-500',   tag: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400',        bar: 'bg-amber-500' },
}

const QUICK_BENEFITS = [
  { icon: ShieldCheck,     label: 'Sistema inmune más fuerte' },
  { icon: BatteryCharging, label: 'Energía que se mantiene' },
  { icon: Sparkles,        label: 'Antioxidante celular' },
]

export function Products() {
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="productos" className="relative overflow-hidden py-24 sm:py-32">

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M0,0 C360,32 720,-16 1080,24 C1260,40 1380,16 1440,0 L1440,48 L0,48Z"
          fill="#3aa87e"
          fillOpacity="0.05"
        />
        <path
          d="M0,800 C360,768 720,800 1080,772 C1260,756 1380,780 1440,800 L1440,756 L0,756Z"
          fill="#2d5fd4"
          fillOpacity="0.05"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">

        <div ref={header} className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Nuestra línea
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Encuentra el que<br />tu cuerpo necesita
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Cuéntame tu objetivo — energía, defensas, recuperación — y te ayudo
            a elegir la opción ideal para ti, sin compromiso.
          </p>
        </div>

        {/* Chips de beneficios — reemplaza la sección Benefits completa */}
        <div className="mb-12 flex flex-wrap gap-3">
          {QUICK_BENEFITS.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground/80"
            >
              <b.icon className="size-3.5 text-primary" />
              {b.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 80} />
          ))}
        </div>

        {/* Nota legal + acceso discreto al sitio oficial */}
        <div className="mt-10 text-center">
          <p className="text-xs text-muted-foreground">
            Este producto es un suplemento dietario. No es un medicamento. Consulta a tu médico si estás embarazada, en lactancia o bajo tratamiento farmacológico.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70">
            ¿Ya conoces Immunocal y prefieres comprarlo directo?{' '}
            <a
              href={CONTACT.immunotecOfficial}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline decoration-border underline-offset-2 transition-colors hover:text-primary"
            >
              Ir al sitio oficial
            </a>
          </p>
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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/[0.06] hover:border-primary/20"
    >
      <div className={cn('h-[3px] w-full', a.bar)} />

      {product.badge && (
        <span className={cn('absolute left-4 top-5 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide', a.tag)}>
          {product.badge}
        </span>
      )}

      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
        <img
          src={product.image || '/placeholder.svg'}
          alt={`${product.name} — ${product.tagline}`}
          crossOrigin="anonymous"
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
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
            <li key={b} className="flex items-start gap-2 text-[13px] text-foreground/75">
              <Check className={cn('mt-0.5 size-3.5 shrink-0', a.check)} />
              {b}
            </li>
          ))}
        </ul>

        <a
          href={waLink(product.waText)}
          target="_blank"
          rel="noreferrer"
          className="group/btn mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-[13px] font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary hover:text-white"
        >
          {product.cta}
          <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </div>
  )
}