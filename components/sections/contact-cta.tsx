/* ─────────────────────────────────────────────────────────────────────────────
   ContactCta.tsx — corregido
   ───────────────────────────────────────────────────────────────────────────── */
'use client'

import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/brand-icons'

export function ContactCta() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contacto" className="relative px-5 pb-24 sm:px-8 lg:px-10 overflow-hidden">

      {/* Ola superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 overflow-hidden">
        <svg viewBox="0 0 1400 96" className="absolute bottom-0 w-full" preserveAspectRatio="none" aria-hidden>
          <path
            d="M0,48 C250,10 500,86 700,48 C900,10 1150,86 1400,48 L1400,96 L0,96Z"
            fill="#3aa87e"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-card shadow-2xl shadow-primary/8">

          {/* SVG blobs dentro de la card */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <svg viewBox="0 0 1000 400" className="absolute -left-20 -top-10 h-full opacity-[0.15]" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <path d="M200,20 C310,-10 430,60 450,180 C470,300 390,400 250,420 C110,440 -10,380 -10,240 C-10,100 80,50 200,20Z" fill="#2d5fd4"/>
            </svg>
            <svg viewBox="0 0 800 400" className="absolute -right-10 -bottom-10 h-full opacity-[0.10]" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <path d="M600,380 C700,340 780,260 790,160 C800,60 730,-10 610,2 C490,14 420,100 450,220 C480,340 520,410 600,380Z" fill="#3aa87e"/>
            </svg>
            {/* Hoja ornamental */}
            <svg viewBox="0 0 120 180" className="absolute right-[18%] top-6 w-14 opacity-[0.07]" aria-hidden>
              <path d="M60,10 C80,30 100,60 95,100 C90,140 70,165 60,170 C50,165 30,140 25,100 C20,60 40,30 60,10Z"
                stroke="#2d5fd4" strokeWidth="2.5" fill="none"/>
              <line x1="60" y1="10" x2="60" y2="170" stroke="#2d5fd4" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="relative px-8 py-14 text-center sm:px-14 sm:py-20">
            <span className="inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              ¿Empezamos?
            </span>
            <h2 className="mx-auto mt-5 max-w-xl font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Siente la diferencia de cuidarte{' '}
              <span className="text-primary italic">desde adentro</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground leading-relaxed">
              Escríbeme y resolvemos todas tus dudas. Sin compromiso, con la
              confianza de tratar con una distribuidora oficial.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CONTACT.whatsappGeneral}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/25 transition-transform hover:scale-[1.04]"
              >
                <MessageCircle className="size-4" />
                Hablar por WhatsApp
              </a>

              <div className="flex items-center gap-2">
                <SocialBtn href={CONTACT.instagram} label="Instagram">
                  <InstagramIcon className="size-4" />
                </SocialBtn>
                <SocialBtn href={CONTACT.facebook} label="Facebook">
                  <FacebookIcon className="size-4" />
                </SocialBtn>
                <SocialBtn href={CONTACT.tiktok} label="TikTok">
                  <TikTokIcon className="size-4" />
                </SocialBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-all hover:scale-110 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
    >
      {children}
    </a>
  )
}


/* ─────────────────────────────────────────────────────────────────────────────
   Products.tsx — corregido
   ───────────────────────────────────────────────────────────────────────────── */
import { ArrowUpRight, Check } from 'lucide-react'
import { PRODUCTS, waLink, type Product } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Accent = Product['accent']

const ACCENT: Record<Accent, { check: string; tag: string; bar: string }> = {
  blue:     { check: 'text-primary',     tag: 'bg-primary/8 text-primary',                                                   bar: 'bg-primary' },
  platinum: { check: 'text-slate-400',   tag: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',           bar: 'bg-slate-400' },
  green:    { check: 'text-emerald-500', tag: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',    bar: 'bg-emerald-500' },
  coffee:   { check: 'text-amber-500',   tag: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400',            bar: 'bg-amber-500' },
}

export function Products() {
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="productos" className="relative overflow-hidden py-24 sm:py-32">

      {/* SVG BACKGROUND — hex directos */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {/* Fondo de sección ligeramente diferenciado */}
        <rect width="1440" height="800" fill="#3aa87e" fillOpacity="0.03" />
        {/* Ola superior */}
        <path
          d="M0,0 C360,40 720,-20 1080,30 C1260,50 1380,20 1440,0 L1440,60 L0,60Z"
          fill="white"
          className="dark:fill-[#1a2e3a]"
        />
        {/* Ola inferior */}
        <path
          d="M0,800 C360,760 720,810 1080,770 C1260,750 1380,780 1440,800 L1440,740 L0,740Z"
          fill="white"
          className="dark:fill-[#1a2e3a]"
        />
        {/* Dot cluster */}
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <circle key={`${r}-${c}`}
              cx={60 + c * 24} cy={100 + r * 24}
              r="2"
              fill="#2d5fd4" fillOpacity="0.13"
            />
          ))
        )}
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={header} className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Nuestra línea
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Encuentra el que<br />tu cuerpo necesita
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-right">
            Cuéntame tu objetivo y te ayudo a elegir la opción ideal para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 80} />
          ))}
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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/[0.06]"
    >
      <div className={cn('h-[3px] w-full', a.bar)} />

      {product.badge && (
        <span className={cn('absolute left-4 top-5 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide', a.tag)}>
          {product.badge}
        </span>
      )}

      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
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
          className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-[13px] font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary hover:text-white"
        >
          {product.cta}
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </div>
  )
}