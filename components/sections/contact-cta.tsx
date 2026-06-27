'use client'

import { MessageCircle } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon } from '@/components/brand-icons'
import { CONTACT } from '@/lib/site-data'
import { useReveal } from '@/hooks/use-reveal'

export function ContactCta() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contacto" className="relative overflow-hidden px-5 pb-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 overflow-hidden">
        <svg viewBox="0 0 1400 96" className="absolute bottom-0 w-full" preserveAspectRatio="none" aria-hidden>
          <path
            d="M0 48C250 10 500 86 700 48C900 10 1150 86 1400 48V96H0Z"
            fill="#3aa87e"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card shadow-2xl shadow-primary/8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,theme(colors.primary/8%),transparent_55%),radial-gradient(ellipse_at_bottom_right,oklch(0.55_0.15_175/8%),transparent_55%)]" />

          <div className="relative grid gap-8 px-8 py-12 sm:px-12 lg:grid-cols-[1fr_auto] lg:items-center lg:py-16">
            <div>
              <span className="inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Tu siguiente paso
              </span>
              <h2 className="mt-5 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Cuéntame cómo te sientes. Empezamos por ahí.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                Sin compromiso. Sin presión. Una conversación clara para mirar
                hábitos, bienestar y opciones que puedan ayudarte.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <a
                href={CONTACT.whatsappGeneral}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/25 transition-transform hover:scale-[1.04]"
              >
                <MessageCircle className="size-4" />
                Escribirle a Juliana
              </a>

              <div className="flex items-center gap-2">
                <SocialBtn href={CONTACT.instagram} label="Instagram">
                  <InstagramIcon className="size-4" />
                </SocialBtn>
                <SocialBtn href={CONTACT.facebook} label="Facebook">
                  <FacebookIcon className="size-4" />
                </SocialBtn>
                {CONTACT.tiktok && (
                  <SocialBtn href={CONTACT.tiktok} label="TikTok">
                    <TikTokIcon className="size-4" />
                  </SocialBtn>
                )}
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
