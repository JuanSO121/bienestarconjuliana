export const BRAND = {
  name: 'Bienestar con Juliana',
  tagline: 'Habitos, energia y bienestar real',
  legal: 'Distribuidora independiente de Immunotec',
}

export const WHATSAPP_NUMBER = '573185102087'

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const CONTACT = {
  whatsappGeneral: waLink(
    'Hola Juliana, quiero contarte como me he sentido y saber por donde podria empezar.',
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
      'Ayuda a producir glutation',
      'Simple de integrar al dia a dia',
      'Buen punto de partida para conversar',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Immunocal y quiero saber si puede ir conmigo segun lo que estoy buscando.',
  },
  {
    id: 'platinum',
    name: 'Immunocal Platinum',
    tagline: 'Objetivos mas especificos',
    badge: 'Muy consultado',
    accent: 'platinum',
    image: '/products/immunocal-platinum.png',
    benefits: [
      'Para revisar con mas contexto',
      'Interesa en rutinas exigentes',
      'Puede acompanarse con seguimiento',
      'Conviene mirarlo segun edad y habitos',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Immunocal Platinum y quiero saber si tiene sentido para mi edad y mi rutina.',
  },
  {
    id: 'optimizer',
    name: 'Optimizer Rojos y Verdes',
    tagline: 'Nutricion practica',
    accent: 'green',
    image: '/products/immunocal-optimizer.png',
    benefits: [
      'Complementa la alimentacion diaria',
      'Practico para dias ocupados',
      'Acompana habitos sostenibles',
      'Bueno para revisar junto a tu rutina',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Optimizer Rojos y Verdes y quiero saber si encaja con mi rutina.',
  },
  {
    id: 'cafe',
    name: 'Immunotec Cafe',
    tagline: 'Ritual cotidiano',
    badge: '100% colombiano',
    accent: 'coffee',
    image: '/products/immunotec-cafe.png',
    benefits: [
      'Cafe soluble colombiano',
      'Se integra a tu manana',
      'Un habito simple y agradable',
      'Ideal para conversar como ritual',
    ],
    cta: 'Preguntar si va conmigo',
    waText:
      'Hola Juliana, vi Immunotec Cafe y quiero saber como podria integrarlo a mi rutina.',
  },
]
