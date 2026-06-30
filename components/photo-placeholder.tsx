'use client'

import Image from 'next/image'
import { ImagePlus } from 'lucide-react'
import { cn } from '@/lib/utils'

type PhotoPlaceholderProps = {
  label: string
  dimensions?: string
  aspect?: string
  className?: string
  rotate?: 'left' | 'right' | 'none'
  caption?: string
  /** Versión reducida: oculta el texto y achica el ícono — para
   *  thumbnails pequeños donde el label completo no cabe bien. */
  compact?: boolean
  /**
   * Ruta de la foto real (ej: "/images/juliana-hero.jpg").
   * Si se pasa, se renderiza la imagen en lugar del placeholder gris.
   * El resto del marco (rotación, caption, polaroid) se mantiene igual.
   */
  src?: string
  /** Texto alternativo de la imagen — requerido si se usa `src`. */
  alt?: string
  /**
   * Prioridad de carga para next/image. Pon `true` solo en la foto
   * que aparece en el primer viewport (ej. la del Hero) para que
   * Next la precargue; déjalo en `false` (default) en el resto.
   */
  priority?: boolean
}

/**
 * Marco "polaroid" para fotos reales.
 * Si recibe `src`, muestra la foto real con next/image.
 * Si no recibe `src`, muestra el placeholder punteado (para secciones
 * donde aún no se tiene la foto final).
 */
export function PhotoPlaceholder({
  label,
  dimensions,
  aspect = 'aspect-[4/5]',
  className,
  rotate = 'none',
  caption,
  compact = false,
  src,
  alt,
  priority = false,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        'polaroid inline-block',
        rotate === 'left' && '-rotate-2',
        rotate === 'right' && 'rotate-2',
        className,
      )}
    >
      {src ? (
        /* ── Foto real ── */
        <div className={cn('relative overflow-hidden rounded-sm', aspect)}>
          <Image
            src={src}
            alt={alt ?? label}
            fill
            priority={priority}
            sizes="(max-width: 640px) 90vw, 360px"
            className="object-cover"
          />
        </div>
      ) : (
        /* ── Placeholder punteado ── */
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-olive/30 bg-secondary/60 text-center',
            compact ? 'gap-0 p-3' : 'p-6',
            aspect,
          )}
        >
          <span
            className={cn(
              'flex items-center justify-center rounded-full bg-card text-primary shadow-sm',
              compact ? 'size-7' : 'size-11',
            )}
          >
            <ImagePlus className={compact ? 'size-3.5' : 'size-[18px]'} />
          </span>
          {!compact && (
            <div>
              <p className="font-sans text-sm font-medium text-foreground/75">{label}</p>
              {dimensions && (
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">{dimensions}</p>
              )}
            </div>
          )}
        </div>
      )}

      {caption && (
        <p className="mt-3 text-center font-heading text-sm italic text-foreground/70">{caption}</p>
      )}
    </div>
  )
}