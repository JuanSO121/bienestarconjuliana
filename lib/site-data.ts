// Central place for contact + social links so they're easy to update.

// ⚠️ Confirmar: tu archivo anterior tenía 573026668123. Usando aquí el número
// que confirmaste por chat (+57 318 5102087). Avísame si el correcto es el otro.
export const WHATSAPP_NUMBER = '573185102087'

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const CONTACT = {
  whatsappGeneral: waLink(
    'Hola Juliana, quiero más información sobre Immunocal e Immunotec.',
  ),
  instagram: 'https://www.instagram.com/bienestarconjuliana/',
  facebook: 'https://www.facebook.com/profile.php?id=61590846119909',
  // ⚠️ Aún no me has dado una cuenta de TikTok real.
  // Dejo vacío para que no quede un link muerto — ver nota en el chat.
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
  benefits: string[]
  image: string
  cta: string
  waText: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'regular',
    name: 'Immunocal®',
    tagline: 'El original — Caja Azul',
    accent: 'blue',
    benefits: [
      'Apoya el sistema inmunológico',
      'Aumenta el glutatión un 35%',
      'Protección antioxidante diaria',
      'Aislado de proteína de suero no desnaturalizada',
    ],
    image: '/products/immunocal-regular.png',
    cta: 'Preguntar por Immunocal',
    waText:
      'Hola Juliana, me interesa el Immunocal (caja azul). ¿Puedes darme más información?',
  },
  {
    id: 'platinum',
    name: 'Immunocal® Platinum',
    tagline: 'Fórmula avanzada',
    badge: 'Más vendido',
    accent: 'platinum',
    benefits: [
      'Todo lo del original, más',
      'Apoya la resistencia muscular',
      'Cuida huesos y equilibrio ácido-base',
      'Ideal para mayores de 50 y deportistas',
    ],
    image: '/products/immunocal-platinum.png',
    cta: 'Preguntar por Platinum',
    waText:
      'Hola Juliana, me interesa el Immunocal Platinum. ¿Puedes darme más información?',
  },
  {
    id: 'optimizer',
    name: 'Optimizer Rojos y Verdes',
    tagline: 'Superalimento diario',
    accent: 'green',
    benefits: [
      'Más de 50 frutas y verduras',
      'Rico en fitonutrientes',
      'Complementa tu ingesta nutricional',
      'Fácil de tomar cada día',
    ],
    image: '/products/immunocal-optimizer.png',
    cta: 'Preguntar por Optimizer',
    waText:
      'Hola Juliana, me interesa el Optimizer Rojos y Verdes. ¿Puedes darme más información?',
  },
  {
    id: 'cafe',
    name: 'Immunotec Café',
    tagline: 'Tu café de cada día',
    badge: '100% Colombiano',
    accent: 'coffee',
    benefits: [
      'Café soluble colombiano',
      'Parte de tu rutina de bienestar',
      'Desarrollado por Immunotec',
    ],
    image: '/products/immunotec-cafe.png',
    cta: 'Preguntar por el Café',
    waText:
      'Hola Juliana, me interesa el Immunotec Café. ¿Puedes darme más información?',
  },
]