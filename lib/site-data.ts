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
  badge?: string
  accent: 'blue' | 'platinum' | 'green' | 'coffee'
  image: string
  benefits: string[]
  cta: string
  waText: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'regular',
    name: 'Immunocal',
    tagline: 'Base diaria',
    accent: 'blue',
    image: '/products/immunocal-regular.png',
    benefits: [
      'Apoya tu rutina de bienestar',
      'Ayuda a producir glutatión',
      'Simple de integrar al día a día',
      'Buen punto de partida para conversar',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Immunocal y quiero saber si puede ir conmigo según lo que estoy buscando.',
  },
  {
    id: 'platinum',
    name: 'Immunocal Platinum',
    tagline: 'Objetivos más específicos',
    badge: 'Muy consultado',
    accent: 'platinum',
    image: '/products/immunocal-platinum.png',
    benefits: [
      'Para revisar con más contexto',
      'Interesa en rutinas exigentes',
      'Puede acompañarse con seguimiento',
      'Conviene mirarlo según edad y hábitos',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Immunocal Platinum y quiero saber si tiene sentido para mi edad y mi rutina.',
  },
  {
    id: 'optimizer',
    name: 'Optimizer Rojos y Verdes',
    tagline: 'Nutrición práctica',
    accent: 'green',
    image: '/products/immunocal-optimizer.png',
    benefits: [
      'Complementa la alimentación diaria',
      'Práctico para días ocupados',
      'Acompaña hábitos sostenibles',
      'Bueno para revisar junto a tu rutina',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Optimizer Rojos y Verdes y quiero saber si encaja con mi rutina.',
  },
  {
    id: 'cafe',
    name: 'Immunotec Café',
    tagline: 'Ritual cotidiano',
    badge: '100% colombiano',
    accent: 'coffee',
    image: '/products/immunotec-cafe.png',
    benefits: [
      'Café soluble colombiano',
      'Se integra a tu mañana',
      'Un hábito simple y agradable',
      'Ideal para conversar como ritual',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Immunotec Café y quiero saber cómo podría integrarlo a mi rutina.',
  },
]
