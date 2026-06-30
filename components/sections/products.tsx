'use client'

import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react'
import { ArrowRight, ArrowUpRight, MessageCircle, X } from 'lucide-react'
import { PRODUCTS, waLink, type Product } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

// ─── Accent tokens ────────────────────────────────────────────────────────────
type Accent = Product['accent']

type AccentTokens = {
  cardGradient: string
  nameColor: string
  hintColor: string
  tagBg: string
  tagText: string
  arrowBg: string
  arrowText: string
  circleFill: string
  circleOpacity: string
  eyebrowColor: string
  accentBar: string
  checkBg: string
  chipText: string
  trustColor: string
}

const ACCENT: Record<Accent, AccentTokens> = {
  blue: {
    cardGradient:  'from-[#d8e8f5] to-[#b6cfe9]',
    nameColor:     'text-[#0e2c50]',
    hintColor:     'text-[#2a4a6a]/70',
    tagBg:         'bg-[#0e2c50]/10',
    tagText:       'text-[#0e2c50]',
    arrowBg:       'bg-[#0e2c50]/12',
    arrowText:     'text-[#0e2c50]',
    circleFill:    '#1a3a5c',
    circleOpacity: '0.13',
    eyebrowColor:  '#7ab0d4',
    accentBar:     '#185FA5',
    checkBg:       'bg-[#185FA5]',
    chipText:      'text-[#2a4a6a]',
    trustColor:    '#7ab0d4',
  },
  platinum: {
    cardGradient:  'from-[#e0e2e6] to-[#c6cad2]',
    nameColor:     'text-[#2a2f3a]',
    hintColor:     'text-[#3a4050]/70',
    tagBg:         'bg-[#2a2f3a]/10',
    tagText:       'text-[#2a2f3a]',
    arrowBg:       'bg-[#2a2f3a]/12',
    arrowText:     'text-[#2a2f3a]',
    circleFill:    '#4a4e58',
    circleOpacity: '0.14',
    eyebrowColor:  '#a8aab0',
    accentBar:     '#6a6d74',
    checkBg:       'bg-[#6a6d74]',
    chipText:      'text-[#3a4050]',
    trustColor:    '#a8aab0',
  },
  green: {
    cardGradient:  'from-[#cce8ce] to-[#a4c9a8]',
    nameColor:     'text-[#1a3a1e]',
    hintColor:     'text-[#2a4a2e]/70',
    tagBg:         'bg-[#1a3a1e]/10',
    tagText:       'text-[#1a3a1e]',
    arrowBg:       'bg-[#1a3a1e]/12',
    arrowText:     'text-[#1a3a1e]',
    circleFill:    '#0F6E56',
    circleOpacity: '0.14',
    eyebrowColor:  '#6ec97a',
    accentBar:     '#0F6E56',
    checkBg:       'bg-[#0F6E56]',
    chipText:      'text-[#2a4a2e]',
    trustColor:    '#6ec97a',
  },
  coffee: {
    cardGradient:  'from-[#eadcc8] to-[#d2b894]',
    nameColor:     'text-[#3a1e08]',
    hintColor:     'text-[#4a2e10]/70',
    tagBg:         'bg-[#3a1e08]/10',
    tagText:       'text-[#3a1e08]',
    arrowBg:       'bg-[#3a1e08]/12',
    arrowText:     'text-[#3a1e08]',
    circleFill:    '#5c2e08',
    circleOpacity: '0.14',
    eyebrowColor:  '#c9a06a',
    accentBar:     '#854F0B',
    checkBg:       'bg-[#854F0B]',
    chipText:      'text-[#4a2e10]',
    trustColor:    '#c9a06a',
  },
}

// ─── Copy ─────────────────────────────────────────────────────────────────────
const CHIPS: Record<string, { icon: string; label: string }[]> = {
  regular:   [
    { icon: '🛡️', label: 'Defensas' },
    { icon: '⚡',  label: 'Energía' },
    { icon: '🔬', label: 'Antioxidante' },
  ],
  platinum:  [
    { icon: '💪', label: 'Recuperación' },
    { icon: '🦴', label: 'Articulaciones' },
    { icon: '🎯', label: '+50 años' },
  ],
  optimizer: [
    { icon: '🌿', label: 'Frutas y verduras' },
    { icon: '🔬', label: 'Activación Nrf2' },
    { icon: '🥗', label: 'Nutrición diaria' },
  ],
  cafe:      [
    { icon: '☕', label: 'Café soluble' },
    { icon: '🇨🇴', label: 'Colombiano' },
    { icon: '⏱',  label: 'Rutina diaria' },
  ],
}

const EXTENDED: Record<string, string> = {
  regular:
    'El punto de partida más común. Para quien quiere sentir más estabilidad en su energía y acompañar sus defensas día a día, sin complicarse.',
  platinum:
    'Para quien ya conoce Immunocal y busca un paso más. Muy consultado en personas mayores de 50 años o con rutinas físicas exigentes.',
  optimizer:
    'Complemento práctico, no reemplazo de tu alimentación. Aporta frutas y verduras para los días donde comer bien es difícil de sostener.',
  cafe:
    'La forma más simple de empezar: un hábito que ya tienes, el café de la mañana, con un propósito distinto detrás.',
}

const MODAL_PHOTOS: Record<string, { src: string; position: string } | null> = {
  regular:   { src: '/images/modal-immunocal.png', position: 'center 35%' },
  platinum:  { src: '/images/modal-platinum.png',  position: 'center 40%' },
  optimizer: { src: '/images/modal-booster.png',   position: 'center 30%' },
  cafe:      { src: '/images/modal-cafe.png',       position: 'center 25%' },
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function Products() {
  const header = useReveal<HTMLDivElement>()
  const [modalId, setModalId] = useState<string | null>(null)

  const activeProduct = PRODUCTS.find((p) => p.id === modalId) ?? null
  const closeModal = useCallback(() => setModalId(null), [])

  useEffect(() => {
    document.body.style.overflow = modalId ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalId])

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [closeModal])

  return (
    <>
      <section id="productos" className="relative overflow-hidden py-16 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">

          <div ref={header} className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                La línea Immunotec
              </p>
              <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
                Encuentra el producto que mejor se adapta a ti.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-[1.85] text-muted-foreground lg:justify-self-end">
              Cada producto responde a una necesidad distinta. Explora la línea y conoce cuándo se recomienda.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {PRODUCTS.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                delay={i * 70}
                onSelect={() => setModalId(p.id)}
              />
            ))}
          </div>

          <p className="mt-6 text-center text-[11px] leading-relaxed text-muted-foreground">
            Immunocal es un suplemento alimenticio. No es un medicamento ni sustituye tratamientos médicos.
            Si tienes una condición de salud, estás embarazada o tomas medicamentos, consulta a tu médico.
          </p>
        </div>
      </section>

      {typeof window !== 'undefined' &&
        activeProduct &&
        createPortal(
          <ProductModal product={activeProduct} onClose={closeModal} />,
          document.body,
        )}
    </>
  )
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function ProductCard({
  product,
  delay,
  onSelect,
}: {
  product: Product
  delay: number
  onSelect: () => void
}) {
  const ref = useReveal<HTMLButtonElement>({ delay })
  const a = ACCENT[product.accent]
  const chips = CHIPS[product.id] ?? []

  return (
    <button
      ref={ref}
      onClick={onSelect}
      // overflow-visible: el SVG del empaque desborda hacia arriba
      className={cn(
        'group relative flex min-h-[320px] flex-col overflow-visible rounded-2xl bg-gradient-to-br text-left',
        'transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45',
        a.cardGradient,
      )}
      aria-label={`Ver detalle de ${product.name}`}
    >
      {/* Área de imagen */}
      <div className="relative flex flex-1 items-end justify-center">

        {/* Círculo decorativo detrás del empaque */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[46%]"
          aria-hidden
        >
          <svg
            width="168"
            height="168"
            viewBox="0 0 168 168"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-500 group-hover:scale-[1.04]"
          >
            <circle cx="84" cy="84" r="81" fill={a.circleFill} fillOpacity={a.circleOpacity} />
            <circle cx="84" cy="84" r="65" stroke={a.circleFill} strokeOpacity="0.09" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className={cn(
            'absolute left-4 top-4 z-20 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide',
            a.tagBg, a.tagText,
          )}>
            {product.badge}
          </span>
        )}

        {/*
          SVG del empaque — usa <img> en lugar de <Image> para SVG.
          -translate-y-5: desborda ~20px fuera del card hacia arriba.
          En hover sube otros 6px más.
        */}
        <div className={cn(
          'relative z-10 -translate-y-5 transition-transform duration-500',
          'group-hover:-translate-y-7',
        )}>
          <img
            src={product.image}
            alt={`Empaque de ${product.name}`}
            className="h-[164px] w-auto object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.18)] sm:h-[184px]"
            draggable={false}
          />
        </div>
      </div>

      {/* Footer — clip para respetar border-radius inferior del card */}
      <div className="relative z-10 overflow-hidden rounded-b-2xl px-4 pb-4 pt-2">
        <span className={cn(
          'mb-1.5 inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold',
          a.tagBg, a.tagText,
        )}>
          {product.tagline}
        </span>
        <p className={cn('font-heading text-[15px] font-semibold leading-snug', a.nameColor)}>
          {product.name}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {chips.map((c) => (
            <span key={c.label} className={cn('rounded-full px-2 py-0.5 text-[10px] font-medium', a.tagBg, a.hintColor)}>
              {c.label}
            </span>
          ))}
        </div>
      </div>

      {/* Flecha */}
      <div className={cn(
        'absolute bottom-4 right-4 z-20 flex size-7 items-center justify-center rounded-full',
        'transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
        a.arrowBg, a.arrowText,
      )}>
        <ArrowRight className="size-3.5" />
      </div>
    </button>
  )
}

// ─── Modal split ──────────────────────────────────────────────────────────────
function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const a = ACCENT[product.accent]
  const chips = CHIPS[product.id] ?? []
  const extended = EXTENDED[product.id]
  const photo = MODAL_PHOTOS[product.id]

  // ── Animación sin flash ──────────────────────────────────────────────────
  // Problema anterior: rAF simple no garantiza que el browser haya pintado
  // el estado inicial (opacity-0 / translate) antes de transicionar.
  // Solución: doble rAF — el primero espera el próximo frame de layout,
  // el segundo espera el frame de paint. Así la transición CSS siempre
  // parte desde el estado "oculto" visible en pantalla.
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    // Asegura que el estado inicial está pintado antes de animar
    let id1: number
    let id2: number
    id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setReady(true))
    })
    return () => {
      cancelAnimationFrame(id1)
      cancelAnimationFrame(id2)
    }
  }, [])

  return (
    /*
      Backdrop — fondo del modal.
      bg-card en lugar de bg-black para que si el panel tarda 1 frame
      en aparecer, el fondo ya sea blanco/crema, no negro.
    */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/55 p-4 backdrop-blur-[3px] sm:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${product.name}`}
    >
      {/*
        Contenedor split.
        bg-[#fcfbf9] como fallback: si la foto no carga o el panel
        aún no se ha animado, el fondo ya es crema, nunca negro.
      */}
      <div className={cn(
        'relative flex w-full max-w-[680px] overflow-hidden rounded-2xl',
        'bg-[#fcfbf9]',                          // ← fallback crema, no negro
        'shadow-[0_48px_96px_rgba(0,0,0,0.32)]',
        'flex-col sm:flex-row',
        'max-h-[92dvh] sm:h-[500px]',
      )}>

        {/* ── Lado foto 45% ── */}
        <div
          className={cn(
            'relative overflow-hidden',
            // Sin bg-black aquí — usa bg-[#0a0a0a] solo en la foto
            'bg-[#0d0a08]',
            'h-[230px] w-full flex-shrink-0 sm:h-auto sm:w-[45%]',
            // Microinteracción: la foto entra con zoom + leve rotación
            'transition-[transform,opacity] duration-[520ms] ease-[cubic-bezier(.22,1,.36,1)]',
            ready
              ? 'scale-100 rotate-0 opacity-100'
              : 'scale-[1.05] -rotate-1 opacity-0',  // ← opacity-0 desde el inicio
          )}
        >
          {photo ? (
            <Image
              src={photo.src}
              alt={`Foto de ${product.name}`}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 306px"
              className="object-cover"
              style={{ objectPosition: photo.position }}
            />
          ) : (
            <div className="flex h-full w-full translate-x-[15px] items-center justify-center">
              <img
                src={product.image}
                alt={`Empaque de ${product.name}`}
                className="h-[160px] w-auto object-contain drop-shadow-[0_28px_48px_rgba(0,0,0,0.65)] sm:h-[190px]"
              />
            </div>
          )}

          {/* Gradiente de fusión */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-x-0 bottom-0 h-24 sm:hidden"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))' }}
            />
            <div
              className="absolute inset-y-0 right-0 hidden w-14 sm:block"
              style={{ background: 'linear-gradient(to right, transparent, rgba(252,251,249,0.08))' }}
            />
          </div>

          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-2.5 py-[3px] font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
              {product.badge}
            </span>
          )}

          <button
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex size-[30px] items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="Cerrar"
          >
            <X className="size-[13px]" />
          </button>
        </div>

        {/* ── Panel info 55% ── */}
        <div
          className={cn(
            'flex flex-1 flex-col overflow-hidden',
            'bg-[linear-gradient(180deg,#fcfbf9_0%,#f7f5f2_100%)]',
            // El panel entra desde abajo en mobile, desde la derecha en desktop
            // will-change para que el browser reserve la capa GPU antes del paint
            'will-change-[transform,opacity]',
            'transition-[transform,opacity] duration-[480ms] ease-[cubic-bezier(.22,1,.36,1)]',
            // delay de 80ms: la foto ya está empezando a aparecer antes que el panel
            'delay-[80ms]',
            ready
              ? 'translate-x-0 translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0 sm:translate-y-0 sm:translate-x-6',
          )}
        >
          {/* Contenido scrolleable */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-4 pt-5 sm:pt-6">

            {/* Confianza */}
            <div className="mb-4 flex items-center gap-1.5">
              <span style={{ color: a.trustColor }} className="text-[11px] tracking-tight">★★★★★</span>
              <span className="text-[10px] font-medium text-muted-foreground">
                Miles de clientes en Latinoamérica
              </span>
            </div>

            {/* Eyebrow + Título */}
            <p
              className="mb-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em]"
              style={{ color: a.eyebrowColor }}
            >
              {product.tagline}
            </p>
            <h3 className="font-heading text-[22px] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0f0a06] sm:text-[26px]">
              {product.name}
            </h3>

            {/* Barra de acento */}
            <div className="mb-4 mt-3 h-[3px] w-6 rounded-full" style={{ background: a.accentBar }} />

            {/* Descripción */}
            {extended && (
              <p className="mb-5 text-[12.5px] leading-[1.78] text-[#6b6560]">{extended}</p>
            )}

            {/* Beneficios — sin cajas */}
            <ul className="mb-5 flex flex-col gap-[10px]">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-[10px]">
                  <span className={cn(
                    'mt-[2px] inline-flex size-[17px] flex-shrink-0 items-center justify-center rounded-full',
                    a.checkBg,
                  )}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <polyline
                        points="1,4.5 3,6.5 7,2"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[13px] font-[500] leading-[1.45] text-[#1a1410]">{b}</span>
                </li>
              ))}
            </ul>

            {/* Chips livianos */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {chips.map((c) => (
                <span key={c.label} className={cn('flex items-center gap-1.5 text-[11px] font-[500]', a.chipText)}>
                  <span className="text-[12px] leading-none">{c.icon}</span>
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs — fijos abajo */}
          <div className="flex flex-shrink-0 flex-col gap-2 px-6 pb-5 pt-4">
            <a
              href={waLink(product.waText)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-[13px] text-[13px] font-bold text-primary-foreground transition-all hover:scale-[1.012] hover:shadow-lg hover:shadow-primary/22 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <MessageCircle className="size-[14px]" />
              {product.cta}
              <ArrowRight className="size-[14px] transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.immunotec.com/es-ES/juocamu/longevity"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-1.5 py-2 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none"
            >
              <ArrowUpRight className="size-3.5" />
              Ver tienda oficial Immunotec
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}