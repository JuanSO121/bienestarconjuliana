type SceneProps = { className?: string }

/**
 * Ilustraciones de escena para el panel interactivo de Beneficios.
 * Mismo lenguaje de línea suelta que BotanicalBranch (trazo de
 * ~2.5px, sin relleno sólido, gestual) — para que las personas y
 * las plantas se sientan parte del mismo mundo visual.
 */

// Defensas — figura erguida, escudo orgánico de hojas alrededor
export function SceneShield({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 280 280" fill="none" className={className} aria-hidden>
      <circle cx="140" cy="140" r="118" stroke="currentColor" strokeWidth="1.5" className="text-olive/20" />
      {/* hojas en círculo, como escudo */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2 - Math.PI / 2
        const cx = 140 + Math.cos(angle) * 96
        const cy = 140 + Math.sin(angle) * 96
        return (
          <path
            key={i}
            d={`M${cx} ${cy} q 14 -10 14 -24 q -18 4 -22 20 q -4 16 8 4Z`}
            stroke="currentColor"
            strokeWidth="2"
            className="text-olive/55"
            transform={`rotate(${(angle * 180) / Math.PI + 90} ${cx} ${cy})`}
          />
        )
      })}
      {/* figura simple, postura erguida y tranquila */}
      <circle cx="140" cy="108" r="16" stroke="currentColor" strokeWidth="2.5" className="text-foreground/70" />
      <path
        d="M140 124 C 118 130, 108 154, 110 182 M140 124 C 162 130, 172 154, 170 182"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-foreground/70"
      />
      <path d="M122 150 C 132 158, 148 158, 158 150" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary/70" />
    </svg>
  )
}

// Energía estable — figura con brazos abiertos, líneas de "energía" suaves, no rayos agresivos
export function SceneEnergy({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 280 280" fill="none" className={className} aria-hidden>
      <circle cx="140" cy="140" r="118" stroke="currentColor" strokeWidth="1.5" className="text-primary/15" />
      {/* ondas de energía estables, no picos */}
      <path d="M40 180 C 80 165, 110 195, 140 180 C 170 165, 200 195, 240 180" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
      <path d="M48 204 C 86 190, 114 216, 140 204 C 166 192, 196 216, 232 204" stroke="currentColor" strokeWidth="2" className="text-primary/25" />
      {/* figura con brazos abiertos, postura relajada */}
      <circle cx="140" cy="92" r="16" stroke="currentColor" strokeWidth="2.5" className="text-foreground/70" />
      <path
        d="M140 108 L140 158 M140 120 C 118 112, 100 100, 88 86 M140 120 C 162 112, 180 100, 192 86 M140 158 C 128 168, 120 178, 118 192 M140 158 C 152 168, 160 178, 162 192"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-foreground/70"
      />
    </svg>
  )
}

// Hábitos sostenibles — pequeño calendario/maceta con brote, ritmo simple
export function SceneHabits({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 280 280" fill="none" className={className} aria-hidden>
      <circle cx="140" cy="140" r="118" stroke="currentColor" strokeWidth="1.5" className="text-olive/20" />
      {/* maceta */}
      <path d="M104 188 L116 232 L164 232 L176 188Z" stroke="currentColor" strokeWidth="2.2" className="text-foreground/60" />
      <path d="M98 188h84" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="text-foreground/60" />
      {/* brote saliendo, sencillo */}
      <path d="M140 188 C 136 158, 144 140, 140 116" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="text-olive/70" />
      <path d="M140 150 C 124 144, 114 130, 112 114 C 130 116, 142 128, 140 150Z" stroke="currentColor" strokeWidth="2" className="text-olive/55" />
      <path d="M140 130 C 156 124, 166 110, 168 94 C 150 96, 138 108, 140 130Z" stroke="currentColor" strokeWidth="2" className="text-olive/55" />
      {/* tres marcas pequeñas, ritmo de hábito sin ser "calendario corporativo" */}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={112 + i * 28} cy={210} r="3.2" stroke="currentColor" strokeWidth="1.8" className="text-primary/60" />
      ))}
    </svg>
  )
}

// Cuidado desde adentro — figura sentada en quietud, espiral suave al centro
export function SceneInner({ className }: SceneProps) {
  return (
    <svg viewBox="0 0 280 280" fill="none" className={className} aria-hidden>
      <circle cx="140" cy="140" r="118" stroke="currentColor" strokeWidth="1.5" className="text-primary/15" />
      {/* espiral suave, quietud interior */}
      <path
        d="M140 140 C 148 134, 156 138, 156 148 C 156 160, 144 166, 132 160 C 118 154, 114 138, 124 126 C 136 112, 158 116, 168 132"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary/45"
      />
      {/* figura sentada, postura tranquila */}
      <circle cx="140" cy="98" r="15" stroke="currentColor" strokeWidth="2.5" className="text-foreground/70" />
      <path
        d="M140 113 C 120 120, 112 138, 116 160 C 118 172, 128 180, 140 182 C 152 180, 162 172, 164 160 C 168 138, 160 120, 140 113Z"
        stroke="currentColor"
        strokeWidth="2.5"
        className="text-foreground/70"
      />
      <path d="M122 168 C 130 174, 150 174, 158 168" stroke="currentColor" strokeWidth="2" className="text-olive/55" />
    </svg>
  )
}