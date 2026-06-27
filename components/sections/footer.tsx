import { FacebookIcon, InstagramIcon } from '@/components/brand-icons'
import { BRAND, CONTACT } from '@/lib/site-data'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="flex size-9 items-center justify-center rounded-xl bg-foreground text-background">
                <span className="font-heading text-sm font-extrabold">BJ</span>
              </span>
              <span className="font-heading text-base font-extrabold text-foreground">{BRAND.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Ideas, hábitos y acompañamiento para sentirte mejor cada día, con
              cercanía y productos Immunotec originales cuando tienen sentido
              para tu proceso.
            </p>
          </div>

          <nav className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Navegación
            </span>
            {[
              { label: 'Sobre mí', href: '#consultora' },
              { label: 'Beneficios', href: '#beneficios' },
              { label: 'Opciones', href: '#productos' },
              { label: 'Contacto', href: '#contacto' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Síguenos
            </span>
            <div className="flex gap-2">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND.name}. {BRAND.legal}.
          </p>
          <p className="text-xs text-muted-foreground">
            Los suplementos no sustituyen una alimentación balanceada ni un tratamiento médico.
          </p>
        </div>
      </div>
    </footer>
  )
}
