import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-7xl font-light text-accent">404</h1>
      <p className="mt-4 text-text-secondary">Página no encontrada</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-text-primary hover:text-accent transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Volver al inicio
      </Link>
    </div>
  )
}
