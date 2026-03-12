export interface SculptureImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface SculptureModel {
  url: string
  sizeKb: number
  triangleCount: number
}

export interface Sculpture {
  slug: string
  title: string
  year: number
  materials: string[]
  dimensions?: string
  description?: string
  category: 'figurativa' | 'abstracta' | 'funcional'
  featured: boolean
  order: number
  images: SculptureImage[]
  model?: SculptureModel
}
