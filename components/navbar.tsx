'use client'

import { useEffect, useState } from 'react'
import { Menu, MessageCircle, Moon, Sun, X } from 'lucide-react'
import { BRAND, CONTACT } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Inicio',    href: 'inicio' },
  { label: 'Productos', href: 'productos' },
  { label: 'Asesoría',  href: 'consultora' },
  { label: 'Dudas',     href: 'faq' },
]

const NAV_HEIGHT = 60

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 8
  window.scrollTo({ top, behavior: 'smooth' })
}

export function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('inicio')
  const [dark,     setDark]     = useState(false)

  useEffect(() => {
    const saved       = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark      = saved === 'dark' || (!saved && prefersDark)
    document.documentElement.classList.toggle('dark', isDark)
    setDark(isDark)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href)
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      let current = 'inicio'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= NAV_HEIGHT + 24) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-border bg-background/92 shadow-sm shadow-black/[0.04] backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            aria-label="Ir al inicio"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <span className="font-heading text-[10.5px] font-semibold">BJ</span>
            </span>
            <div className="leading-none text-left">
              <span className="block font-heading text-[13px] font-semibold tracking-tight text-foreground">
                {BRAND.name}
              </span>
              <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground/70">
                Bienestar · Immunotec
              </span>
            </div>
          </button>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollToSection(l.href)}
                  className={cn(
                    'relative rounded-md px-3.5 py-2 text-[13px] font-medium transition-colors duration-200',
                    active === l.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground/80',
                  )}
                >
                  {l.label}
                  {active === l.href && (
                    <span className="absolute inset-x-3.5 bottom-1 h-[1.5px] rounded-full bg-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleDark}
              aria-label={dark ? 'Modo claro' : 'Modo oscuro'}
              className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {dark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
            </button>
            <a
              href={CONTACT.whatsappGeneral}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-[var(--clay)] px-4 py-2 text-[12.5px] font-semibold text-white shadow-sm shadow-[var(--clay)]/20 transition-all hover:opacity-90 hover:shadow-md lg:inline-flex"
            >
              <MessageCircle className="size-3.5" />
              Escríbeme
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out lg:hidden',
            open
              ? 'max-h-[380px] border-t border-border bg-background/98 backdrop-blur-xl'
              : 'max-h-0',
          )}
        >
          <div className="px-5 pb-6 pt-2">
            <ul className="flex flex-col divide-y divide-border/50">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => { scrollToSection(l.href); setOpen(false) }}
                    className={cn(
                      'flex w-full items-center justify-between py-3.5 text-sm font-medium transition-colors',
                      active === l.href ? 'font-semibold text-primary' : 'text-muted-foreground',
                    )}
                  >
                    {l.label}
                    {active === l.href && <span className="size-1.5 rounded-full bg-primary" />}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href={CONTACT.whatsappGeneral}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[var(--clay)] py-3.5 text-sm font-bold text-white"
            >
              <MessageCircle className="size-4" />
              Escribirle a Juliana
            </a>
          </div>
        </div>
      </header>
      <div className="h-[60px]" aria-hidden />
    </>
  )
}