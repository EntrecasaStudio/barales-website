import { Sculpture } from './types'

const sculptures: Sculpture[] = [
  {
    slug: 'taita',
    title: 'Taita',
    year: 2023,
    materials: ['Cemento'],
    description: 'Máscara escultórica en cemento con mano integrada.',
    category: 'figurativa',
    featured: true,
    order: 1,
    images: [{ src: '/images/sculptures/taita/hero.png', alt: 'Taita - escultura en cemento', width: 4032, height: 4032 }],
  },
  {
    slug: 'fez',
    title: 'Fez',
    year: 2023,
    materials: ['Cemento'],
    description: 'Rostro fragmentado en cemento oscuro con texturas orgánicas.',
    category: 'figurativa',
    featured: true,
    order: 2,
    images: [{ src: '/images/sculptures/fez/hero.png', alt: 'Fez - escultura en cemento', width: 3024, height: 3024 }],
  },
  {
    slug: 'puente',
    title: 'Puente',
    year: 2023,
    materials: ['Resina', 'Metal'],
    description: 'Brazo alargado en resina oscura con terminación en mano abierta.',
    category: 'figurativa',
    featured: true,
    order: 3,
    images: [{ src: '/images/sculptures/puente/hero.png', alt: 'Puente - escultura en resina y metal', width: 1920, height: 1920 }],
  },
  {
    slug: 'molpe',
    title: 'Molpe',
    year: 2023,
    materials: ['Cemento'],
    description: 'Máscara expresiva en tonos tierra con textura rugosa.',
    category: 'figurativa',
    featured: false,
    order: 4,
    images: [{ src: '/images/sculptures/molpe/hero.png', alt: 'Molpe - escultura en cemento', width: 2200, height: 2200 }],
  },
  {
    slug: 'chakrasana',
    title: 'Chakrasana',
    year: 2023,
    materials: ['Resina'],
    description: 'Figura en posición de yoga chakrasana con elementos orgánicos.',
    category: 'figurativa',
    featured: true,
    order: 5,
    images: [{ src: '/images/sculptures/chakrasana/hero.jpg', alt: 'Chakrasana - escultura en resina', width: 1920, height: 1920 }],
  },
  {
    slug: 'urdhva-padmasana',
    title: 'Urdhva Padmasana',
    year: 2023,
    materials: ['Resina', 'Pan de oro'],
    description: 'Torso estilizado con acabado en pan de oro.',
    category: 'figurativa',
    featured: false,
    order: 6,
    images: [{ src: '/images/sculptures/urdhva-padmasana/hero.jpg', alt: 'Urdhva Padmasana - escultura en resina y pan de oro', width: 695, height: 695 }],
  },
  {
    slug: 'foco',
    title: 'Foco',
    year: 2022,
    materials: ['Cemento'],
    description: 'Cabeza masculina en cemento con expresión contemplativa.',
    category: 'figurativa',
    featured: false,
    order: 7,
    images: [{ src: '/images/sculptures/foco/hero.png', alt: 'Foco - escultura en cemento', width: 695, height: 695 }],
  },
  {
    slug: 'mesa-ratona',
    title: 'Mesa Ratona',
    year: 2022,
    materials: ['Resina', 'Vidrio'],
    description: 'Mesa funcional con base escultórica en resina.',
    category: 'funcional',
    featured: false,
    order: 8,
    images: [{ src: '/images/sculptures/mesa-ratona/hero.jpg', alt: 'Mesa Ratona - mesa escultórica', width: 695, height: 695 }],
  },
  {
    slug: 'venus',
    title: 'Venus',
    year: 2022,
    materials: ['Resina'],
    description: 'Figura femenina de cuerpo completo en resina blanca.',
    category: 'figurativa',
    featured: true,
    order: 9,
    images: [{ src: '/images/sculptures/venus/hero.png', alt: 'Venus - escultura en resina', width: 695, height: 695 }],
  },
  {
    slug: 'pichon',
    title: 'Pichón',
    year: 2022,
    materials: ['Cemento'],
    description: 'Figura compacta con formas redondeadas.',
    category: 'figurativa',
    featured: false,
    order: 10,
    images: [{ src: '/images/sculptures/pichon/hero.jpg', alt: 'Pichón - escultura en cemento', width: 695, height: 695 }],
  },
  {
    slug: 'escorpio',
    title: 'Escorpio',
    year: 2022,
    materials: ['Resina'],
    description: 'Figura dinámica inspirada en la constelación de Escorpio.',
    category: 'figurativa',
    featured: false,
    order: 11,
    images: [{ src: '/images/sculptures/escorpio/hero.png', alt: 'Escorpio - escultura en resina', width: 1920, height: 1920 }],
  },
  {
    slug: 'satiro',
    title: 'Sátiro',
    year: 2021,
    materials: ['Bronce'],
    description: 'Figura mitológica en bronce con pátina.',
    category: 'figurativa',
    featured: false,
    order: 12,
    images: [{ src: '/images/sculptures/satiro/hero.jpg', alt: 'Sátiro - escultura en bronce', width: 695, height: 695 }],
  },
  {
    slug: 'bicicleta-fija',
    title: 'Bicicleta Fija',
    year: 2021,
    materials: ['Metal', 'Resina'],
    description: 'Pieza que combina elementos mecánicos y orgánicos.',
    category: 'abstracta',
    featured: false,
    order: 13,
    images: [{ src: '/images/sculptures/bicicleta-fija/hero.jpg', alt: 'Bicicleta Fija - escultura en metal y resina', width: 695, height: 695 }],
  },
  {
    slug: 'primer-amor',
    title: 'Primer Amor',
    year: 2021,
    materials: ['Resina'],
    description: 'Figura expresiva que evoca la emoción del primer amor.',
    category: 'figurativa',
    featured: false,
    order: 14,
    images: [{ src: '/images/sculptures/primer-amor/hero.jpg', alt: 'Primer Amor - escultura en resina', width: 695, height: 695 }],
  },
  {
    slug: 'huevo-serpiente',
    title: 'El huevo de la serpiente',
    year: 2021,
    materials: ['Resina', 'Metal'],
    description: 'Pieza conceptual inspirada en la dualidad creación-destrucción.',
    category: 'abstracta',
    featured: false,
    order: 15,
    images: [{ src: '/images/sculptures/huevo-serpiente/hero.jpg', alt: 'El huevo de la serpiente - escultura en resina y metal', width: 695, height: 695 }],
  },
]

export function getAllSculptures(): Sculpture[] {
  return sculptures.sort((a, b) => a.order - b.order)
}

export function getSculptureBySlug(slug: string): Sculpture | undefined {
  return sculptures.find((s) => s.slug === slug)
}

export function getFeaturedSculptures(): Sculpture[] {
  return sculptures.filter((s) => s.featured).sort((a, b) => a.order - b.order)
}

export function getAdjacentSculptures(slug: string): { prev: Sculpture | undefined; next: Sculpture | undefined } {
  const all = getAllSculptures()
  const idx = all.findIndex((s) => s.slug === slug)
  return {
    prev: idx > 0 ? all[idx - 1] : undefined,
    next: idx < all.length - 1 ? all[idx + 1] : undefined,
  }
}
