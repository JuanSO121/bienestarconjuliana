'use client'

import { useEffect, useState } from 'react'
import { Menu, MessageCircle, Moon, Sun, X } from 'lucide-react'
import { BRAND, CONTACT } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Inicio', href: 'inicio' },
  { label: 'Sobre mí', href: 'consultora' },
  { label: 'Beneficios', href: 'beneficios' },
  { label: 'Historias', href: 'testimonios' },
  { label: 'Preguntas', href: 'faq' },
  { label: 'Opciones', href: 'productos' },
]

const NAV_HEIGHT = 64

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 8
  window.scrollTo({ top, behavior: 'smooth' })
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('inicio')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = saved === 'dark' || (!saved && prefersDark)
    document.documentElement.classList.toggle('dark', isDark)
    setDark(isDark)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href)
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
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
            ? 'border-b border-border bg-background/95 shadow-sm shadow-black/[0.04] backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-3 focus:outline-none"
            aria-label="Ir al inicio"
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="font-heading text-sm font-semibold tracking-tight">BJ</span>
            </div>
            <div className="leading-none text-left">
              <span className="block font-heading text-[14px] font-semibold tracking-tight text-foreground">
                {BRAND.name}
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                Bienestar personal
              </span>
            </div>
          </button>

          <ul className="hidden items-center lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href} className="relative">
                <button
                  onClick={() => scrollToSection(l.href)}
                  className={cn(
                    'relative px-4 py-5 text-sm transition-colors duration-200',
                    active === l.href
                      ? 'font-semibold text-primary'
                      : 'font-medium text-foreground/60 hover:text-foreground',
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-primary transition-all duration-300',
                      active === l.href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0',
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleDark}
              aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
              className="flex size-9 items-center justify-center rounded-lg text-foreground/50 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            <a
              href={CONTACT.whatsappGeneral}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg lg:inline-flex"
            >
              <MessageCircle className="size-3.5" />
              Escríbeme
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              className="flex size-9 items-center justify-center rounded-lg text-foreground/60 transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out lg:hidden',
            open ? 'max-h-[400px] border-t border-border bg-background/98 backdrop-blur-md' : 'max-h-0',
          )}
        >
          <div className="px-5 pb-6 pt-3">
            <ul className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => {
                      scrollToSection(l.href)
                      setOpen(false)
                    }}
                    className={cn(
                      'flex w-full items-center justify-between border-b border-border/50 py-3.5 text-sm font-medium transition-colors last:border-0',
                      active === l.href ? 'font-semibold text-primary' : 'text-foreground/70',
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
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20"
            >
              <MessageCircle className="size-4" />
              Escribirle a Juliana
            </a>
          </div>
        </div>
      </header>

      <div className="h-16" aria-hidden />
    </>
  )
}