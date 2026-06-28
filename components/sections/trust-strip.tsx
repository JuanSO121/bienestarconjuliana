'use client'

import { Award, BookOpen, FlaskConical, Globe, HeartPulse, ShieldCheck } from 'lucide-react'
import { useReveal } from '@/hooks/use-reveal'

const CREDENTIALS = [
  {
    icon: ShieldCheck,
    value: 'Oficial',
    label: 'consultoría Immunotec',
    sub: 'compra guiada por canales confiables',
  },
  {
    icon: FlaskConical,
    value: '92+',
    label: 'estudios clínicos',
    sub: 'respaldo para profundizar cuando lo necesites',
  },
  {
    icon: Award,
    value: '79',
    label: 'patentes',
    sub: 'tecnología desarrollada por Immunotec',
  },
  {
    icon: Globe,
    value: '23+',
    label: 'países',
    sub: 'presencia internacional de la compañía',
  },
  {
    icon: HeartPulse,
    value: '35%',
    label: 'glutatión',
    sub: 'aumento reportado en estudios clínicos',
  },
  {
    icon: BookOpen,
    value: 'Claro',
    label: 'sin saturarte',
    sub: 'información simple para decidir mejor',
  },
]

export function TrustStrip() {
  const header = useReveal<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden border-y border-border bg-card py-16 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={header} className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-olive">
              Confianza sin ruido
            </p>
            <h2 className="font-heading text-2xl font-medium tracking-tight text-foreground sm:text-4xl">
              Cercanía para escucharte. Respaldo para decidir.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
            La marca se siente humana porque empieza en Juliana. La tranquilidad
            llega cuando sabes que detrás también hay investigación, trayectoria y canales oficiales.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CREDENTIALS.map((c, i) => (
            <CredentialCard key={c.label} {...c} delay={i * 70} />
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Immunocal es un suplemento alimenticio. No es un medicamento ni
          sustituye tratamientos médicos. Si tienes una condición de salud,
          estás embarazada o tomas medicamentos, consulta a tu médico.
        </p>
      </div>
    </section>
  )
}

function CredentialCard({
  icon: Icon,
  value,
  label,
  sub,
  delay,
}: (typeof CREDENTIALS)[0] & { delay: number }) {
  const ref = useReveal<HTMLDivElement>({ delay })

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-background p-4 sm:p-5">
      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-olive/10 text-olive">
        <Icon className="size-5" />
      </span>
      <p className="mt-4 font-heading text-xl font-semibold text-foreground">{value}</p>
      <p className="text-xs font-semibold text-foreground/80">{label}</p>
      <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{sub}</p>
    </div>
  )
}