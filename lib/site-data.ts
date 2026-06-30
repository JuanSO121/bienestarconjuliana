export const BRAND = {
  name: 'Bienestar con Juliana',
  tagline: 'Hábitos, energía y bienestar real',
  legal: 'Distribuidora independiente de Immunotec',
}

export const WHATSAPP_NUMBER = '573185102087'

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const CONTACT = {
  whatsappGeneral: waLink(
    'Hola Juliana, quiero contarte cómo me he sentido y saber por dónde podría empezar.',
  ),
  instagram: 'https://www.instagram.com/bienestarconjuliana/',
  facebook: 'https://www.facebook.com/profile.php?id=61590846119909',
  tiktok: '',
  immunotecOfficial: 'https://www.immunotec.com/es-CO/juocamu/products',
  immunotecEnrollment: 'https://www.immunotec.com/es-CO/juocamu/enrollment/packs',
}

export type Product = {
  id: string
  name: string
  tagline: string
  image: string
  badge?: string
  accent: 'blue' | 'platinum' | 'green' | 'coffee'
  benefits: string[]
  cta: string
  waText: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'regular',
    name: 'Immunocal',
    tagline: 'Para empezar con intención',
    image: '/products/immunocal-regular.svg',  // ← .svg
    accent: 'blue',
    benefits: [
      'Apoya tus defensas día a día',
      'Ayuda a producir glutatión',
      'Ideal para una rutina simple',
      'Buen punto de partida si buscas energía',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Immunocal y quiero saber si puede ir conmigo según lo que estoy buscando.',
  },
  {
    id: 'platinum',
    name: 'Immunocal Platinum',
    tagline: 'Un paso más profundo',
    image: '/products/immunocal-platinum.svg', // ← .svg
    badge: 'Muy consultado',
    accent: 'platinum',
    benefits: [
      'Pensado para objetivos más exigentes',
      'Apoya fuerza y recuperación',
      'Interesa mucho después de los 50',
      'Conviene revisarlo según tu rutina',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Immunocal Platinum y quiero saber si tiene sentido para mi edad y mi rutina.',
  },
  {
    id: 'optimizer',
    name: 'Optimizer Rojos y Verdes',
    tagline: 'Nutrición fácil de sostener',
    image: '/products/immunocal-optimizer.svg', // ← .svg
    accent: 'green',
    benefits: [
      'Más de 50 frutas y verduras',
      'Complementa tu alimentación diaria',
      'Práctico para días ocupados',
      'Acompaña una rutina de bienestar',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Optimizer Rojos y Verdes y quiero saber si encaja con mi rutina.',
  },
  {
    id: 'cafe',
    name: 'Immunotec Café',
    tagline: 'Tu ritual diario con propósito',
    image: '/products/immunotec-cafe.svg',      // ← .svg
    badge: '100% colombiano',
    accent: 'coffee',
    benefits: [
      'Café soluble colombiano',
      'Se integra a tu mañana',
      'Un hábito simple y agradable',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Immunotec Café y quiero saber cómo podría integrarlo a mi rutina.',
  },
]