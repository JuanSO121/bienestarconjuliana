'use client'

// Capa decorativa que conecta visualmente las dos columnas del Hero
// (texto + foto). Ribbons orgánicos con movimiento continuo tipo
// "cinta flotando" + un trazo de energía que fluye encima (dashoffset)
// + partículas que respiran. Todo a opacidades muy bajas para no competir
// con el contenido. Vive en z-0, detrás del grid.
export function HeroConnectiveField({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 640"
      preserveAspectRatio="none"
      className={`${className} h-full w-full`}
      aria-hidden="true"
    >
      {/* Ribbon 1 — ola lenta, color primary */}
      <path
        d="M -120 180 C 120 70, 340 250, 620 180 S 980 110, 1320 240"
        className="hero-ribbon ribbon-1"
        stroke="var(--primary)"
        strokeOpacity="0.08"
        strokeWidth="14"
      />

      {/* Ribbon 2 — ola lenta inversa, color clay */}
      <path
        d="M -100 430 C 180 520, 430 320, 700 430 S 980 520, 1320 390"
        className="hero-ribbon ribbon-2"
        stroke="var(--clay)"
        strokeOpacity="0.05"
        strokeWidth="10"
      />

      {/* Ribbon highlight — destello blanco que respira */}
      <path
        d="M -60 300 C 260 240, 500 380, 760 300 S 1080 250, 1280 320"
        className="hero-ribbon ribbon-3"
        stroke="white"
        strokeOpacity="0.18"
        strokeWidth="3"
      />

      {/*
        Trazo de energía — sigue el mismo camino que ribbon-1 pero con
        dash pattern + animación de dashoffset, dando la sensación de
        que algo "viaja" a lo largo de la cinta en lugar de dibujarse
        una sola vez. Stroke fino, opacidad baja, encima de los ribbons.
      */}
      <path
        d="M -120 180 C 120 70, 340 250, 620 180 S 980 110, 1320 240"
        className="connective-flow"
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.22"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Partículas dispersas — fila superior */}
      {[
        { cx: 150, cy: 130, r: 2.4, c: 'var(--primary)', o: 0.16 },
        { cx: 330, cy: 195, r: 1.6, c: 'var(--primary)', o: 0.12 },
        { cx: 520, cy: 150, r: 2,   c: 'var(--clay)',    o: 0.14 },
        { cx: 700, cy: 230, r: 1.8, c: 'var(--primary)', o: 0.13 },
        { cx: 880, cy: 175, r: 2.6, c: 'var(--clay)',    o: 0.11 },
        { cx: 1040, cy: 250, r: 1.6, c: 'var(--primary)', o: 0.15 },
        { cx: 1150, cy: 195, r: 2.1, c: 'var(--primary)', o: 0.1 },
      ].map((p, i) => (
        <circle
          key={`top-${i}`}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill={p.c}
          className="particle-anim"
          style={{
            // --p-opacity alimenta el keyframe particle-twinkle
            '--p-opacity': p.o,
            opacity: p.o,
            animationDelay: `${i * 0.4}s, ${i * 0.4}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Partículas dispersas — fila inferior */}
      {[
        { cx: 110, cy: 460, r: 1.8, c: 'var(--clay)',    o: 0.13 },
        { cx: 300, cy: 410, r: 2.3, c: 'var(--primary)', o: 0.11 },
        { cx: 480, cy: 480, r: 1.5, c: 'var(--clay)',    o: 0.14 },
        { cx: 660, cy: 430, r: 2,   c: 'var(--primary)', o: 0.15 },
        { cx: 860, cy: 490, r: 1.7, c: 'var(--clay)',    o: 0.12 },
        { cx: 1040, cy: 430, r: 2.4, c: 'var(--primary)', o: 0.13 },
      ].map((p, i) => (
        <circle
          key={`bottom-${i}`}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill={p.c}
          className="particle-anim"
          style={{
            '--p-opacity': p.o,
            opacity: p.o,
            animationDelay: `${0.2 + i * 0.5}s, ${0.2 + i * 0.5}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Mini-brotes — eco discreto del BotanicalBranch, en la zona de transición */}
      <g opacity="0.09" transform="translate(610, 70)">
        <path d="M 0 40 Q 8 20 0 0" stroke="var(--primary)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M 0 40 Q -8 20 0 0" stroke="var(--primary)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <circle cx="0" cy="0" r="1.3" fill="var(--primary)" />
      </g>
      <g opacity="0.08" transform="translate(860, 560) rotate(180)">
        <path d="M 0 40 Q 8 20 0 0" stroke="var(--clay)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M 0 40 Q -8 20 0 0" stroke="var(--clay)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <circle cx="0" cy="0" r="1.3" fill="var(--clay)" />
      </g>
    </svg>
  )
}