'use client'

import { BatteryCharging, Leaf, ShieldCheck, Sparkles } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: 'Sistema inmune más activo',
    desc: 'Tu cuerpo produce más glutatión dentro de las células, lo que fortalece la respuesta inmune frente a lo que encuentres cada día.',
    num: '01',
  },
  {
    icon: BatteryCharging,
    title: 'Energía que se mantiene',
    desc: 'Estudios con la fórmula Platinum muestran un aumento del 13% en fuerza y resistencia. Con Classic, los usuarios reportan menos bajones de energía.',
    num: '02',
  },
  {
    icon: Leaf,
    title: 'Desintoxicación celular',
    desc: 'El glutatión apoya los procesos naturales de eliminación de toxinas en el organismo. Immunocal entrega los precursores que tus células necesitan para producirlo.',
    num: '03',
  },
  {
    icon: Sparkles,
    title: 'Antioxidante maestro',
    desc: 'Pruebas clínicas confirman un aumento del 35% en los niveles de glutatión. Eso se traduce en una protección celular real, medible y constante.',
    num: '04',
  },
]

export function Benefits() {
  const header = useReveal<HTMLDivElement>()

  return (
    <section id="beneficios" className="relative overflow-hidden py-24 sm:py-32">

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M-80,80 C60,20 220,60 260,200 C300,340 200,460 80,460 C-40,460 -140,360 -120,220 Z"
          fill="#3aa87e"
          fillOpacity="0.07"
        />
        <path
          d="M1320,60 C1420,30 1500,120 1480,240 C1460,360 1360,420 1260,390 C1160,360 1140,260 1200,160 Z"
          fill="#2d5fd4"
          fillOpacity="0.06"
        />
        <circle cx="1360" cy="120" r="80" fill="#2d5fd4" fillOpacity="0.04" />
        <circle cx="100" cy="600" r="60" fill="#3aa87e" fillOpacity="0.05" />
        <circle cx="1400" cy="380" r="32" fill="#2d5fd4" fillOpacity="0.06" />
        <g opacity="0.07" transform="translate(1340, 520) rotate(-30)">
          <path d="M20,0 C34,14 44,38 40,62 C36,86 24,100 20,102 C16,100 4,86 0,62 C-4,38 6,14 20,0Z" fill="#2d5fd4" />
          <line x1="20" y1="0" x2="20" y2="102" stroke="#2d5fd4" strokeWidth="1" />
        </g>
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <circle
              key={`dot-${r}-${c}`}
              cx={80 + c * 22}
              cy={80 + r * 22}
              r="1.8"
              fill="#2d5fd4"
              fillOpacity="0.12"
            />
          ))
        )}
        <line x1="0" y1="1" x2="1440" y2="1" stroke="#3aa87e" strokeOpacity="0.08" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={header} className="mb-16 max-w-lg">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Por qué Immunocal
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Lo que tu cuerpo<br />empieza a notar
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Resultados respaldados por más de 45 años de investigación clínica
            y por miles de usuarios en más de 23 países.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <BenefitCard key={b.title} {...b} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({
  icon: Icon,
  title,
  desc,
  num,
  delay,
}: {
  icon: typeof ShieldCheck
  title: string
  desc: string
  num: string
  delay: number
}) {
  const ref = useReveal<HTMLDivElement>({ delay })
  return (
    <div
      ref={ref}
      className="group relative bg-background p-8 transition-colors duration-300 hover:bg-primary/[0.03]"
    >
      <span className="absolute right-6 top-5 select-none font-heading text-6xl font-extrabold text-primary/[0.05] transition-all duration-500 group-hover:text-primary/[0.10]">
        {num}
      </span>
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-6 font-heading text-base font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {desc}
      </p>
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </div>
  )
}