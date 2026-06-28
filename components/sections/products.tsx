'use client'

import Image from 'next/image'
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import { CONTACT, PRODUCTS, waLink, type Product } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

type Accent = Product['accent']

const ACCENT: Record<Accent, { check: string; tag: string; bar: string }> = {
  blue: {
    check: 'text-[oklch(0.45_0.17_264)]',
    tag: 'bg-[oklch(0.45_0.17_264/0.08)] text-[oklch(0.45_0.17_264)]',
    bar: 'bg-[oklch(0.45_0.17_264)]',
  },
  platinum: {
    check: 'text-slate-400',
    tag: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
    bar: 'bg-slate-400',
  },
  green: {
    check: 'text-olive',
    tag: 'bg-olive/10 text-olive',
    bar: 'bg-olive',
  },
  coffee: {
    check: 'text-amber-600',
    tag: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
    bar: 'bg-amber-600',
  },
}

export function Products() {
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="productos" className="relative overflow-hidden border-t border-border bg-secondary/40 py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={header} className="mb-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Según lo que me cuentes
            </p>
            <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
              Cada caso es distinto. Aquí algunos puntos de partida.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-[1.85] text-muted-foreground lg:justify-self-end">
            Esto no es para que adivines cuál te sirve. Es para que veas qué
            existe. La recomendación puntual la conversamos juntas, según tu
            energía, tus defensas y tu rutina.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 80} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 border border-border bg-card p-6 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              Si no sabes por dónde empezar, perfecto.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Me escribes, me cuentas qué quieres mejorar y vemos juntas cuál
              de estas opciones, si alguna, tiene sentido para tu caso.
            </p>
          </div>
          <a
            href={CONTACT.whatsappGeneral}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20"
          >
            <MessageCircle className="size-4" />
            Pedir orientación
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
    <article
      ref={ref}
      className="group relative flex min-h-[440px] flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-black/[0.05]"
    >
      <div className={cn('h-[3px] w-full', a.bar)} />

      {product.badge && (
        <span className={cn('absolute left-4 top-5 z-10 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide', a.tag)}>
          {product.badge}
        </span>
      )}

      <div className="relative aspect-[4/3] w-full border-b border-border bg-background">
        <Image
          src={product.image}
          alt={`Empaque de ${product.name}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className={cn('mb-2 self-start rounded-full px-2.5 py-0.5 text-[10px] font-semibold', a.tag)}>
          {product.tagline}
        </span>
        <h3 className="font-heading text-[15px] font-semibold leading-snug text-foreground">
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
          className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-[13px] font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
        >
          {product.cta}
          <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </article>
  )
}
