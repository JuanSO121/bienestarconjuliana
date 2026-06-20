'use client'

import { useRef, useEffect, useState } from 'react'
import { Award, BookOpen, FlaskConical, Globe, HeartPulse, ShieldCheck } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'

const CREDENTIALS = [
  {
    icon: FlaskConical,
    value: '92+',
    label: 'estudios clínicos',
    sub: 'publicados y revisados por pares desde 1978',
    color: 'text-primary bg-primary/10',
  },
  {
    icon: Award,
    value: '79',
    label: 'patentes',
    sub: 'registradas a nivel mundial por Immunotec',
    color: 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950',
  },
  {
    icon: Globe,
    value: '23+',
    label: 'países',
    sub: 'donde Immunocal está disponible oficialmente',
    color: 'text-primary bg-primary/10',
  },
  {
    icon: HeartPulse,
    value: '45+',
    label: 'años',
    sub: 'de investigación iniciada en la Universidad McGill',
    color: 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950',
  },
  {
    icon: ShieldCheck,
    value: '35%',
    label: 'aumento de glutatión',
    sub: 'demostrado en ensayos clínicos revisados por pares',
    color: 'text-primary bg-primary/10',
  },
  {
    icon: BookOpen,
    value: 'PDR',
    label: 'listado',
    sub: 'en el Physician\'s Desk Reference de EE. UU.',
    color: 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950',
  },
]

function Counter({ value }: { value: string }) {
  const isStatic = isNaN(parseInt(value.replace(/[^0-9]/g, '')))
  const num = parseInt(value.replace(/[^0-9]/g, ''))
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? ''
  const suffix = value.match(/[^0-9]*$/)?.[0] ?? ''

  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (isStatic) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1200
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setCount(Math.round(ease * num))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [num, isStatic])

  if (isStatic) return <>{value}</>
  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

export function TrustStrip() {
  const header = useReveal<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,theme(colors.primary/5%),transparent_60%),radial-gradient(ellipse_at_bottom_right,oklch(0.55_0.15_175/5%),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={header} className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Ciencia que respalda
          </p>
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            No lo decimos nosotros.<br />Lo dice la ciencia.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CREDENTIALS.map((c, i) => (
            <CredentialCard key={i} {...c} delay={i * 80} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Immunocal es un suplemento alimenticio. No es un medicamento ni sustituye tratamientos médicos.
        </p>
      </div>
    </section>
  )
}

function CredentialCard({
  icon: Icon, value, label, sub, color, delay,
}: (typeof CREDENTIALS)[0] & { delay: number }) {
  const ref = useReveal<HTMLDivElement>({ delay })

  return (
    <div
      ref={ref}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-black/[0.04]"
    >
      <span className={`inline-flex size-10 items-center justify-center rounded-xl ${color}`}>
        <Icon className="size-5" />
      </span>
      <div>
        <p className="font-heading text-2xl font-extrabold text-foreground">
          <Counter value={value} />
        </p>
        <p className="text-xs font-semibold text-foreground/80">{label}</p>
        <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{sub}</p>
      </div>
    </div>
  )
}