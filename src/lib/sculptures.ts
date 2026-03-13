import { Sculpture } from './types'

const sculptures: Sculpture[] = [
  {
    slug: 'taita',
    title: 'Taita',
    year: 2019,
    materials: ['Arcilla'],
    category: 'figurativa',
    featured: true,
    order: 1,
    images: [{ src: '/images/sculptures/taita/hero.png', alt: 'Taita - escultura en arcilla', width: 4032, height: 4032 }],
  },
  {
    slug: 'fez',
    title: 'Fez',
    year: 2018,
    materials: ['Plasticera con láminas de plomo'],
    category: 'figurativa',
    featured: true,
    order: 2,
    images: [{ src: '/images/sculptures/fez/hero.png', alt: 'Fez - escultura en plasticera con láminas de plomo', width: 3024, height: 3024 }],
  },
  {
    slug: 'puente',
    title: 'Puente',
    year: 2017,
    materials: ['Plasticera con láminas de plomo'],
    category: 'figurativa',
    featured: true,
    order: 3,
    images: [{ src: '/images/sculptures/puente/hero.png', alt: 'Puente - escultura en plasticera con láminas de plomo', width: 1920, height: 1920 }],
  },
  {
    slug: 'molpe',
    title: 'Molpe',
    year: 2015,
    materials: ['Arcilla'],
    category: 'figurativa',
    featured: false,
    order: 4,
    images: [
      { src: '/images/sculptures/molpe/hero.png', alt: 'Molpe - escultura en arcilla', width: 2200, height: 2200 },
      { src: '/images/sculptures/molpe/02.png', alt: 'Molpe - vista alternativa', width: 1920, height: 1920 },
    ],
  },
  {
    slug: 'chakrasana',
    title: 'Chakrasana',
    year: 2015,
    materials: ['Arcilla'],
    category: 'figurativa',
    featured: true,
    order: 5,
    images: [{ src: '/images/sculptures/chakrasana/hero.jpg', alt: 'Chakrasana - escultura en arcilla', width: 1920, height: 1920 }],
  },
  {
    slug: 'urdhva-padmasana',
    title: 'Urdhva Padmasana',
    year: 2014,
    materials: ['Arcilla'],
    dimensions: '16cm x 50cm x 16cm',
    category: 'figurativa',
    featured: false,
    order: 6,
    images: [
      { src: '/images/sculptures/urdhva-padmasana/hero.jpg', alt: 'Urdhva Padmasana - escultura en arcilla', width: 695, height: 695 },
      { src: '/images/sculptures/urdhva-padmasana/02.jpg', alt: 'Urdhva Padmasana - vista alternativa', width: 694, height: 694 },
    ],
  },
  {
    slug: 'foco',
    title: 'Foco',
    year: 2014,
    materials: ['Arcilla'],
    dimensions: '13cm x 23cm x 17cm',
    category: 'figurativa',
    featured: false,
    order: 7,
    images: [
      { src: '/images/sculptures/foco/hero.png', alt: 'Foco - escultura en arcilla', width: 695, height: 695 },
      { src: '/images/sculptures/foco/02.jpg', alt: 'Foco - vista alternativa', width: 695, height: 695 },
    ],
  },
  {
    slug: 'mesa-ratona',
    title: 'Mesa Ratona',
    year: 2013,
    materials: ['Resina Poliester'],
    dimensions: '55cm x 95cm x 80cm',
    category: 'funcional',
    featured: false,
    order: 8,
    images: [
      { src: '/images/sculptures/mesa-ratona/hero.jpg', alt: 'Mesa Ratona - escultura en resina poliester', width: 695, height: 695 },
      { src: '/images/sculptures/mesa-ratona/02.jpg', alt: 'Mesa Ratona - vista alternativa', width: 695, height: 695 },
    ],
  },
  {
    slug: 'venus',
    title: 'Venus',
    year: 2011,
    materials: ['Resina Poliester'],
    dimensions: '20cm x 105cm x 18cm',
    category: 'figurativa',
    featured: true,
    order: 9,
    images: [
      { src: '/images/sculptures/venus/hero.png', alt: 'Venus - escultura en resina poliester', width: 695, height: 695 },
      { src: '/images/sculptures/venus/02.png', alt: 'Venus - vista alternativa', width: 695, height: 695 },
    ],
  },
  {
    slug: 'pichon',
    title: 'Pichón',
    year: 2009,
    materials: ['Resina Poliester'],
    dimensions: '16cm x 50cm x 16cm',
    category: 'figurativa',
    featured: false,
    order: 10,
    images: [
      { src: '/images/sculptures/pichon/hero.jpg', alt: 'Pichón - escultura en resina poliester', width: 695, height: 695 },
      { src: '/images/sculptures/pichon/02.jpg', alt: 'Pichón - vista alternativa', width: 695, height: 695 },
    ],
  },
  {
    slug: 'escorpio',
    title: 'Escorpio',
    year: 2010,
    materials: ['Resina Poliester'],
    dimensions: '68cm x 48cm x 61cm',
    category: 'figurativa',
    featured: false,
    order: 11,
    images: [
      { src: '/images/sculptures/escorpio/hero.png', alt: 'Escorpio - escultura en resina poliester', width: 1920, height: 1920 },
      { src: '/images/sculptures/escorpio/02.png', alt: 'Escorpio - vista alternativa', width: 1920, height: 1843 },
    ],
  },
  {
    slug: 'satiro',
    title: 'Sátiro',
    year: 2009,
    materials: ['Resina Poliester'],
    dimensions: '25cm x 35cm x 30cm',
    category: 'figurativa',
    featured: false,
    order: 12,
    images: [
      { src: '/images/sculptures/satiro/hero.jpg', alt: 'Sátiro - escultura en resina poliester', width: 695, height: 695 },
      { src: '/images/sculptures/satiro/02.jpg', alt: 'Sátiro - vista alternativa', width: 695, height: 695 },
    ],
  },
  {
    slug: 'bicicleta-fija',
    title: 'Bicicleta Fija',
    year: 2008,
    materials: ['Resina Poliester'],
    dimensions: '16cm x 50cm x 16cm',
    category: 'figurativa',
    featured: false,
    order: 13,
    images: [
      { src: '/images/sculptures/bicicleta-fija/hero.jpg', alt: 'Bicicleta Fija - escultura en resina poliester', width: 695, height: 695 },
      { src: '/images/sculptures/bicicleta-fija/02.jpg', alt: 'Bicicleta Fija - vista alternativa', width: 695, height: 695 },
    ],
  },
  {
    slug: 'primer-amor',
    title: 'Primer Amor',
    year: 2007,
    materials: ['Resina Poliester'],
    dimensions: '12cm x 30cm x 8cm',
    category: 'figurativa',
    featured: false,
    order: 14,
    images: [{ src: '/images/sculptures/primer-amor/hero.jpg', alt: 'Primer Amor - escultura en resina poliester', width: 695, height: 695 }],
  },
  {
    slug: 'huevo-serpiente',
    title: 'El huevo de la serpiente',
    year: 2006,
    materials: [],
    dimensions: '19cm x 33cm x 25cm',
    category: 'figurativa',
    featured: false,
    order: 15,
    images: [{ src: '/images/sculptures/huevo-serpiente/hero.jpg', alt: 'El huevo de la serpiente', width: 695, height: 695 }],
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
