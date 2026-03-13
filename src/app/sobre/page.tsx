import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Sobre Leandro Barales, escultor argentino.',
}

export default function SobrePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display text-4xl md:text-5xl font-normal text-text-primary">
          Sobre
        </h1>

        <div className="mt-12 space-y-8 text-text-secondary leading-relaxed">
          <p className="text-lg">
            Leandro Barales es un escultor argentino que trabaja con cemento, resina, bronce y técnica mixta.
            Su obra explora la figura humana, las emociones y la conexión entre lo orgánico y lo construido.
          </p>

          <p>
            Cada pieza nace de un proceso artesanal que combina técnicas tradicionales
            con experimentación material. El resultado son esculturas que invitan
            al espectador a una experiencia sensorial y contemplativa.
          </p>

          <div className="border-t border-border pt-8 mt-12">
            <h2 className="font-display text-2xl font-normal text-text-primary mb-6">
              Materiales
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Cemento', 'Resina', 'Bronce', 'Metal', 'Pan de oro', 'Vidrio'].map((material) => (
                <div key={material} className="px-4 py-3 border border-border text-sm text-text-primary">
                  {material}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="font-display text-2xl font-normal text-text-primary mb-6">
              Contacto
            </h2>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-text-muted uppercase tracking-wider">Email: </span>
                <a href={`mailto:${SITE.email}`} className="text-accent hover:text-accent-hover transition-colors">
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="text-text-muted uppercase tracking-wider">Instagram: </span>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors">
                  {SITE.instagramHandle}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
