'use client'

// Forma decorativa detrás del retrato: un arco orgánico sólido en
// blue-muted, un anillo fino en clay que lo "abraza", una retícula de
// puntos en una esquina (referencia editorial, no decoración aleatoria)
// y un par de acentos tipo destello. Pensado para que la foto del Hero
// se vea como un recorte (PNG sin fondo) flotando sobre estas formas,
// no metida en un marco. Vive detrás de <PhotoPlaceholder>, en z-0.
export function HeroPortraitField({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 640"
      preserveAspectRatio="none"
      className={`${className} h-full w-full`}
      aria-hidden="true"
    >
      {/* Arco sólido principal — llega hasta el borde inferior real del
          contenedor (sin truncarse en una línea recta a mitad de figura) */}
      <path
        d="M 60 640 V 280 C 60 156.45 159.45 57 283 57 S 506 156.45 506 280 V 640 Z"
        fill="var(--blue-muted)"
      />

      {/* Anillo fino en clay, levemente desfasado — da profundidad sin ruido */}
      <path
        d="M 24 640 V 300 C 24 178.5 122.5 80 244 80 S 464 178.5 464 300 V 640"
        fill="none"
        stroke="var(--clay)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />

      {/* Retícula de puntos — corrida arriba-izquierda, lejos del rostro */}
      <g fill="var(--primary)" opacity="0.2">
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={4 + col * 13} cy={4 + row * 13} r="1.3" />
          )),
        )}
      </g>

      {/* Destello — uno solo, dialogando con la retícula, sin elemento suelto abajo */}
      <g stroke="var(--clay)" strokeWidth="1.4" strokeLinecap="round" className="animate-sway">
        <path d="M 470 96 V 116 M 460 106 H 480" />
      </g>

      {/* Línea base — ancla el arco al "suelo" de la composición */}
      <line x1="0" y1="639" x2="520" y2="639" stroke="var(--border)" strokeWidth="1" />
    </svg>
  )
}