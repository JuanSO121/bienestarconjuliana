type BranchProps = {
  className?: string
  flip?: boolean
}

/**
 * Rama botánica de línea suelta, trazo continuo de 2px.
 * Elemento AMBIENTAL — vive detrás o al margen del contenido, nunca
 * sustituye una foto real. Pensado para correr como columna lateral
 * fija a lo largo de varias secciones, como el margen ilustrado de
 * un cuaderno de bienestar.
 */
export function BotanicalBranch({ className, flip }: BranchProps) {
  return (
    <svg
      viewBox="0 0 200 1400"
      fill="none"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden
    >
      <path
        d="M100 0
           C 96 90, 108 160, 92 240
           C 80 300, 112 340, 100 410
           C 90 470, 118 520, 96 590
           C 82 640, 110 690, 98 760
           C 88 810, 116 860, 100 930
           C 90 980, 114 1030, 98 1100
           C 86 1150, 112 1200, 100 1260
           C 92 1310, 108 1350, 100 1400"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-olive/35"
      />

      {/* Hojas — pares alternos a lo largo del tallo, trazo abierto, no rellenas */}
      {[
        { y: 130, side: 1 },
        { y: 130, side: -1 },
        { y: 320, side: 1 },
        { y: 470, side: -1 },
        { y: 470, side: 1 },
        { y: 650, side: -1 },
        { y: 820, side: 1 },
        { y: 980, side: -1 },
        { y: 980, side: 1 },
        { y: 1160, side: -1 },
        { y: 1320, side: 1 },
      ].map((leaf, i) => (
        <path
          key={i}
          d={
            leaf.side === 1
              ? `M100 ${leaf.y} C 130 ${leaf.y - 18}, 156 ${leaf.y - 6}, 150 ${leaf.y + 22} C 144 ${leaf.y + 44}, 116 ${leaf.y + 40}, 100 ${leaf.y}Z`
              : `M100 ${leaf.y} C 70 ${leaf.y - 18}, 44 ${leaf.y - 6}, 50 ${leaf.y + 22} C 56 ${leaf.y + 44}, 84 ${leaf.y + 40}, 100 ${leaf.y}Z`
          }
          stroke="currentColor"
          strokeWidth="2"
          className="text-olive/30"
        />
      ))}

      {/* Pequeñas semillas / brotes redondos, detalle del cuaderno botánico */}
      {[210, 560, 900, 1240].map((y, i) => (
        <ellipse
          key={i}
          cx={i % 2 === 0 ? 124 : 76}
          cy={y}
          rx="4.5"
          ry="6"
          stroke="currentColor"
          strokeWidth="1.8"
          className="text-primary/45"
        />
      ))}
    </svg>
  )
}

/**
 * Versión corta, para usar como acento de cierre de sección o en el
 * footer — misma vocabulary visual, menor huella vertical.
 */
export function BotanicalSprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 90" fill="none" className={className} aria-hidden>
      <path
        d="M4 70 C 50 76, 70 40, 110 46 C 150 52, 170 20, 216 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-olive/40"
      />
      {[
        { x: 40, y: 68 },
        { x: 95, y: 44 },
        { x: 150, y: 36 },
        { x: 195, y: 20 },
      ].map((p, i) => (
        <path
          key={i}
          d={`M${p.x} ${p.y} C ${p.x + 6} ${p.y - 16}, ${p.x + 26} ${p.y - 14}, ${p.x + 22} ${p.y + 6} C ${p.x + 18} ${p.y + 22}, ${p.x - 2} ${p.y + 14}, ${p.x} ${p.y}Z`}
          stroke="currentColor"
          strokeWidth="1.8"
          className="text-olive/35"
        />
      ))}
      <ellipse cx="206" cy="22" rx="4" ry="5.4" stroke="currentColor" strokeWidth="1.6" className="text-primary/50" />
    </svg>
  )
}