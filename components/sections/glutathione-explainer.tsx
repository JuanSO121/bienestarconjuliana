'use client'

import { useEffect, useRef, useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────
   STAGE DATA
───────────────────────────────────────────── */
const STAGES = [
  {
    id: 'what',
    index: '01',
    label: '¿Qué es?',
    kicker: 'Origen',
    title: 'El antioxidante que\ntu cuerpo fabrica solo',
    body: 'El glutatión es una molécula producida dentro de cada célula. Actúa como la primera defensa contra el daño oxidativo, las toxinas y el desgaste diario. No viene de afuera: tu cuerpo lo fabrica.',
    stat: { value: '37 T', label: 'células producen\nglutation en tu cuerpo' },
    accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    glow: 'rgba(6,182,212,0.35)',
    glowSecondary: 'rgba(59,130,246,0.2)',
    orb: 'bg-gradient-to-br from-cyan-400 to-blue-600',
    orbRing: 'border-cyan-400/30',
    statColor: 'text-cyan-400',
    stepActive: 'bg-cyan-400',
    lineColor: '#22d3ee',
  },
  {
    id: 'role',
    index: '02',
    label: 'Para qué sirve',
    kicker: 'Funciones',
    title: 'Protege, repara\ny fortalece',
    body: 'Neutraliza los radicales libres que dañan las células. Apoya la desintoxicación del hígado. Mantiene el sistema inmune activo. Y ayuda a regenerar la vitamina C y la vitamina E.',
    stat: { value: '3', label: 'sistemas críticos\nbajo su protección' },
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    glow: 'rgba(16,185,129,0.35)',
    glowSecondary: 'rgba(20,184,166,0.2)',
    orb: 'bg-gradient-to-br from-emerald-400 to-teal-600',
    orbRing: 'border-emerald-400/30',
    statColor: 'text-emerald-400',
    stepActive: 'bg-emerald-400',
    lineColor: '#34d399',
  },
  {
    id: 'decline',
    index: '03',
    label: 'El problema',
    kicker: 'Declive',
    title: 'Los niveles bajan\ncon la edad',
    body: 'A partir de los 20 años, tu cuerpo produce menos glutatión cada año. El estrés, la contaminación y la mala alimentación lo agotan más rápido. Hacia la mediana edad los niveles pueden caer un 60%.',
    stat: { value: '−60%', label: 'de caída posible\nhacia la mediana edad' },
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    glow: 'rgba(245,158,11,0.35)',
    glowSecondary: 'rgba(249,115,22,0.2)',
    orb: 'bg-gradient-to-br from-amber-400 to-orange-600',
    orbRing: 'border-amber-400/30',
    statColor: 'text-amber-400',
    stepActive: 'bg-amber-400',
    lineColor: '#fbbf24',
  },
  {
    id: 'solution',
    index: '04',
    label: 'La solución',
    kicker: 'Immunocal',
    title: 'Immunocal activa\ntu producción celular',
    body: 'El glutatión tomado directo se digiere antes de llegar a la célula. Immunocal entrega cisteína enlazada, el precursor clave, para que tu cuerpo produzca su propio glutatión donde más lo necesita.',
    stat: { value: '+35%', label: 'de aumento demostrado\nen ensayos clínicos' },
    accent: 'from-violet-500/20 via-purple-500/10 to-transparent',
    glow: 'rgba(139,92,246,0.35)',
    glowSecondary: 'rgba(168,85,247,0.2)',
    orb: 'bg-gradient-to-br from-violet-400 to-purple-600',
    orbRing: 'border-violet-400/30',
    statColor: 'text-violet-400',
    stepActive: 'bg-violet-400',
    lineColor: '#a78bfa',
  },
]

/* ─────────────────────────────────────────────
   SCENE VISUALS
───────────────────────────────────────────── */

function SceneWhat() {
  return (
    <div className="relative flex h-full w-full items-center justify-center" aria-hidden>
      {/* Outer pulse rings */}
      <div className="absolute h-72 w-72 rounded-full border border-cyan-400/10 animate-ping-slow" />
      <div className="absolute h-56 w-56 rounded-full border border-cyan-400/15" />
      <div className="absolute h-40 w-40 rounded-full border border-cyan-400/25" />
      {/* Central orb */}
      <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-600/30 backdrop-blur-sm border border-cyan-400/40 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-90" />
        <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl" />
      </div>
      {/* Floating GSH particles */}
      {[
        { top: '12%', left: '18%', delay: '0s', size: 'h-10 w-10' },
        { top: '10%', right: '20%', delay: '0.6s', size: 'h-8 w-8' },
        { top: '50%', left: '8%', delay: '1.2s', size: 'h-9 w-9' },
        { top: '52%', right: '10%', delay: '0.3s', size: 'h-11 w-11' },
        { bottom: '14%', left: '28%', delay: '0.9s', size: 'h-8 w-8' },
        { bottom: '18%', right: '26%', delay: '1.5s', size: 'h-7 w-7' },
      ].map((p, i) => (
        <div
          key={i}
          className={cn('absolute rounded-full backdrop-blur-sm border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center', p.size)}
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom, animationDelay: p.delay }}
        >
          <span className="text-[9px] font-bold tracking-tight text-cyan-300">GSH</span>
        </div>
      ))}
      {/* Label */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <span className="text-xs font-medium tracking-widest text-white/30 uppercase">Antioxidante maestro</span>
      </div>
    </div>
  )
}

function SceneRole() {
  const cards = [
    { icon: '🛡', label: 'Proteger', sub: 'Radicales libres', delay: '0s' },
    { icon: '🔬', label: 'Reparar', sub: 'Daño celular', delay: '0.15s' },
    { icon: '⚡', label: 'Fortalecer', sub: 'Sistema inmune', delay: '0.3s' },
  ]
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-2" aria-hidden>
      {/* Glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
      {cards.map((c, i) => (
        <div
          key={i}
          className="relative w-full max-w-[260px] rounded-2xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-sm px-5 py-4 flex items-center gap-4"
          style={{ animationDelay: c.delay }}
        >
          <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center text-lg">
            {c.icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">{c.label}</p>
            <p className="text-xs text-white/40">{c.sub}</p>
          </div>
          <div className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
      ))}
    </div>
  )
}

function SceneDecline() {
  // Minimalist spark-line chart
  const points = [
    [0, 8], [12, 10], [25, 18], [38, 32], [52, 52], [65, 68], [78, 80], [92, 88], [100, 92],
  ]
  const w = 260
  const h = 120
  const toX = (v: number) => (v / 100) * w
  const toY = (v: number) => h - (v / 100) * h
  const d = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${toX(x)},${toY(y)}`).join(' ')
  const area = `${d} L${toX(100)},${h} L${toX(0)},${h} Z`

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-6" aria-hidden>
      {/* Big metric */}
      <div className="flex flex-col items-center">
        <span className="text-[72px] font-black leading-none tracking-tighter text-amber-400" style={{ fontVariantNumeric: 'tabular-nums' }}>−60%</span>
        <span className="mt-1 text-xs tracking-widest text-white/30 uppercase">producción perdida</span>
      </div>
      {/* Sparkline */}
      <div className="w-full max-w-[260px]">
        <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#spark-fill)" />
          <path d={d} fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* End dot */}
          <circle cx={toX(100)} cy={toY(92)} r="4" fill="#fbbf24" />
        </svg>
        <div className="mt-1 flex justify-between text-[10px] text-white/25">
          <span>20 años</span>
          <span>50+ años</span>
        </div>
      </div>
    </div>
  )
}

function SceneSolution() {
  const steps = [
    { label: 'Immunocal', sub: 'Proteína de suero' },
    { label: 'Cisteína enlazada', sub: 'Precursor clave' },
    { label: 'Producción celular', sub: 'Síntesis natural' },
    { label: '+35% glutatión', sub: 'Demostrado clínicamente' },
  ]
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-0 px-4" aria-hidden>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
      {steps.map((step, i) => (
        <div key={i} className="relative flex w-full max-w-[240px] flex-col items-center">
          {/* Node */}
          <div className="relative z-10 flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.04] backdrop-blur-sm px-4 py-3 w-full">
            <div className={cn(
              'h-7 w-7 shrink-0 rounded-full border flex items-center justify-center text-[10px] font-bold',
              i === steps.length - 1
                ? 'bg-violet-500/30 border-violet-400/50 text-violet-300'
                : 'bg-white/5 border-white/10 text-white/40',
            )}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <p className={cn(
                'text-sm font-semibold',
                i === steps.length - 1 ? 'text-violet-300' : 'text-white/80',
              )}>{step.label}</p>
              <p className="text-[11px] text-white/30">{step.sub}</p>
            </div>
          </div>
          {/* Connector */}
          {i < steps.length - 1 && (
            <div className="h-5 w-px bg-gradient-to-b from-white/10 to-white/5 my-0.5" />
          )}
        </div>
      ))}
    </div>
  )
}

const SCENES = [SceneWhat, SceneRole, SceneDecline, SceneSolution]

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export function GlutathioneExplainer() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)
  const header = useReveal<HTMLDivElement>()
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!auto) return
    intervalRef.current = setInterval(() => {
      setActive(a => (a + 1) % STAGES.length)
    }, 6000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [auto])

  const goTo = (i: number) => {
    setActive(i)
    setAuto(false)
  }

  const s = STAGES[active]
  const Scene = SCENES[active]

  return (
    <section
      id="glutation"
      className="relative overflow-hidden bg-[#080a0f] py-24 sm:py-32"
    >
      {/* ── Background depth layer ── */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        {/* Primary glow — shifts per stage */}
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[120px] transition-all duration-1000"
          style={{ background: s.glow, opacity: 0.25 }}
        />
        <div
          className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full blur-[100px] transition-all duration-1000"
          style={{ background: s.glowSecondary, opacity: 0.2 }}
        />
        {/* Noise grain overlay */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }} />
        {/* Horizontal separator line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10">

        {/* ── Header ── */}
        <div ref={header} className="mb-20 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              La ciencia detrás
            </span>
          </div>
          <h2 className="font-heading text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            ¿Qué es el glutatión<br />
            <span className="bg-gradient-to-r from-white/90 to-white/50 bg-clip-text text-transparent">
              y por qué importa?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/40">
            Todo empieza aquí. Antes de hablar de Immunocal, es importante entender
            qué hace el glutatión en tu cuerpo y por qué con los años deja de ser suficiente.
          </p>
        </div>

        {/* ── Main layout: stepper + panel ── */}
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">

            {/* ── LEFT: Vertical stepper ── */}
            <nav
              className="flex shrink-0 flex-row gap-2 lg:flex-col lg:gap-0 lg:w-[200px]"
              aria-label="Navegación de pasos"
            >
              {STAGES.map((st, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    'group relative flex flex-1 lg:flex-none items-center gap-3 rounded-xl p-3 text-left transition-all duration-200 lg:rounded-none lg:p-4',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20',
                    active === i
                      ? 'bg-white/[0.05] lg:bg-transparent'
                      : 'hover:bg-white/[0.03]',
                  )}
                >
                  {/* Vertical line connector — desktop only */}
                  {i < STAGES.length - 1 && (
                    <div
                      className="absolute left-[27px] top-[52px] bottom-[-16px] hidden w-px lg:block transition-all duration-700"
                      style={{
                        background: active > i
                          ? `linear-gradient(to bottom, ${st.lineColor}60, transparent)`
                          : 'rgba(255,255,255,0.06)',
                      }}
                    />
                  )}
                  {/* Step indicator */}
                  <div className={cn(
                    'relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold transition-all duration-300',
                    active === i
                      ? cn('border-transparent text-[#080a0f]', st.stepActive)
                      : active > i
                        ? 'border-white/10 text-white/60'
                        : 'border-white/[0.08] bg-white/[0.03] text-white/25',
                  )}>
                    {active > i ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : st.index}
                  </div>
                  {/* Label — hidden on very small screens, shown on md+ and desktop */}
                  <div className="hidden md:block lg:block">
                    <p className={cn(
                      'text-sm font-semibold transition-colors duration-200',
                      active === i ? 'text-white/90' : 'text-white/30',
                    )}>
                      {st.label}
                    </p>
                    {active === i && (
                      <p className="mt-0.5 text-[11px] text-white/30">{st.kicker}</p>
                    )}
                  </div>
                </button>
              ))}

              {/* Auto-play control */}
              <button
                onClick={() => setAuto(a => !a)}
                className="mt-2 hidden lg:flex items-center gap-2 rounded-xl px-4 py-2 text-left transition-colors hover:bg-white/[0.03]"
                aria-pressed={auto}
              >
                <div className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  auto ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]' : 'bg-white/20',
                )} />
                <span className="text-[11px] text-white/30">
                  {auto ? 'Reproduciendo' : 'Pausado'}
                </span>
              </button>
            </nav>

            {/* ── RIGHT: Stage panel ── */}
            <div className="min-w-0 flex-1">
              {/* Progress bar — mobile only */}
              <div className="mb-4 flex gap-1.5 lg:hidden">
                {STAGES.map((st, i) => (
                  <div key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className={cn('h-full rounded-full transition-all duration-700', st.stepActive)}
                      style={{ width: i <= active ? '100%' : '0%' }}
                    />
                  </div>
                ))}
              </div>

              <div
                key={active}
                className="overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl"
                style={{ animation: 'stage-in 0.45s cubic-bezier(0.22,1,0.36,1)' }}
              >
                {/* Top accent bar */}
                <div
                  className={cn('h-px w-full bg-gradient-to-r to-transparent transition-all duration-700', s.accent)}
                  style={{ background: `linear-gradient(to right, ${s.glow}, transparent)` }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2">

                  {/* ── Visual scene ── */}
                  <div
                    className="relative flex min-h-[300px] items-center justify-center overflow-hidden p-8 sm:min-h-[380px]"
                    aria-hidden
                  >
                    {/* Scene ambient glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-l-3xl transition-all duration-1000"
                      style={{
                        background: `radial-gradient(ellipse at 50% 50%, ${s.glow.replace('0.35)', '0.12)')}, transparent 70%)`,
                      }}
                    />
                    <div className="relative z-10 h-full w-full">
                      <Scene />
                    </div>
                  </div>

                  {/* ── Text content ── */}
                  <div className="flex flex-col justify-between gap-8 border-t border-white/[0.04] p-8 sm:border-t-0 sm:border-l sm:p-10">
                    <div>
                      {/* Kicker */}
                      <p
                        className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500"
                        style={{ color: s.lineColor }}
                      >
                        {s.kicker}
                      </p>
                      {/* Title */}
                      <h3 className="font-heading text-2xl font-black leading-tight text-white sm:text-3xl">
                        {s.title.split('\n').map((line, i) => (
                          <span key={i}>{line}{i === 0 && <br />}</span>
                        ))}
                      </h3>
                      {/* Body */}
                      <p className="mt-4 text-sm leading-[1.9] text-white/45">
                        {s.body}
                      </p>
                    </div>

                    {/* ── Metric ── */}
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5">
                      <div
                        className="font-heading text-5xl font-black leading-none tracking-tighter transition-colors duration-500 sm:text-6xl"
                        style={{ color: s.lineColor, textShadow: `0 0 40px ${s.glow}` }}
                        aria-label={`${s.stat.value}: ${s.stat.label.replace('\n', ' ')}`}
                      >
                        {s.stat.value}
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/30 whitespace-pre-line">
                        {s.stat.label}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Mobile step counter + play */}
              <div className="mt-4 flex items-center justify-between px-1 lg:hidden">
                <span className="text-xs tabular-nums text-white/25">{active + 1} / {STAGES.length}</span>
                <button
                  onClick={() => setAuto(a => !a)}
                  className="flex items-center gap-2 text-xs text-white/30 transition-colors"
                >
                  <span className={cn('h-1.5 w-1.5 rounded-full', auto ? 'bg-emerald-400' : 'bg-white/20')} />
                  {auto ? 'Reproduciendo' : 'Pausado'}
                </button>
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl">
            {/* Top glow line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="flex flex-col items-center gap-8 px-8 py-12 text-center sm:flex-row sm:items-center sm:text-left sm:px-12">
              {/* Stats row */}
              <div className="flex shrink-0 flex-row gap-8 sm:flex-col sm:gap-4">
                {[
                  { value: '92+', label: 'estudios clínicos' },
                  { value: '30+', label: 'años de investigación' },
                ].map((m, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-3xl font-black text-white sm:text-4xl">{m.value}</div>
                    <div className="mt-0.5 text-xs text-white/30">{m.label}</div>
                  </div>
                ))}
              </div>
              {/* Separator */}
              <div className="hidden h-20 w-px bg-white/[0.06] sm:block" />
              {/* Text */}
              <div className="flex-1">
                <p className="font-heading text-xl font-bold text-white sm:text-2xl">
                  La ciencia habla por sí sola
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/40">
                  Immunotec tiene más de 92 estudios clínicos publicados y revisados por pares.
                  Cada afirmación tiene respaldo científico.
                </p>
              </div>
              {/* Button */}
              <a
                href="https://www.immunotec.com/es-CO/juocamu/studies-and-standards"
                target="_blank"
                rel="noreferrer"
                className="group shrink-0 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#080a0f] transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Ver estudios oficiales
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes stage-in {
          from { opacity: 0; transform: translateY(12px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50%       { transform: scale(1.08); opacity: 0.06; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}