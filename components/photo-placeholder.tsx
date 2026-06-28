'use client'

import { ImagePlus } from 'lucide-react'
import { cn } from '@/lib/utils'

type PhotoPlaceholderProps = {
  label: string
  dimensions?: string
  aspect?: string
  className?: string
  rotate?: 'left' | 'right' | 'none'
  caption?: string
}

/**
 * Marco "polaroid" para fotos reales que el usuario sube después.
 * Diseñado para convivir con el fondo botánico (no para reemplazarlo):
 * la foto es siempre el elemento real y protagonista; el SVG de fondo
 * es solo ambiente.
 *
 * Reemplazar por <img src="/fotos/..." /> cuando tengas el archivo final.
 */
export function PhotoPlaceholder({
  label,
  dimensions,
  aspect = 'aspect-[4/5]',
  className,
  rotate = 'none',
  caption,
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
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-olive/30 bg-secondary/60 p-6 text-center',
          aspect,
        )}
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-card text-primary shadow-sm">
          <ImagePlus className="size-[18px]" />
        </span>
        <div>
          <p className="font-sans text-sm font-medium text-foreground/75">{label}</p>
          {dimensions && (
            <p className="mt-1 font-mono text-[11px] text-muted-foreground">{dimensions}</p>
          )}
        </div>
      </div>
      {caption && (
        <p className="mt-3 text-center font-heading text-sm italic text-foreground/70">{caption}</p>
      )}
    </div>
  )
}