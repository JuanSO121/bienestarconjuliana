import { CONTACT } from '@/lib/site-data'
import { FacebookIcon, InstagramIcon } from '@/components/brand-icons'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
                  <path
                    d="M12 2.5c-1.6 2.2-4 3-6.5 3.2.2 6.4 2.6 11 6.5 13.8 3.9-2.8 6.3-7.4 6.5-13.8C16 5.5 13.6 4.7 12 2.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-heading text-base font-extrabold text-foreground">
                Immunocal Colombia
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Juliana — Consultora Oficial de Immunotec. Bienestar real,
              asesoría cercana y productos originales en toda Colombia.
            </p>
          </div>

          <nav className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Navegación
            </span>
            {[
              { label: 'Productos', href: '#productos' },
              { label: 'Beneficios', href: '#beneficios' },
              { label: 'Sobre Juliana', href: '#consultora' },
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
            © {new Date().getFullYear()} Immunocal Colombia. Distribuidora
            independiente de Immunotec.
          </p>
          <p className="text-xs text-muted-foreground">
            Estos productos no sustituyen una alimentación balanceada ni un
            tratamiento médico.
          </p>
        </div>
      </div>
    </footer>
  )
}
