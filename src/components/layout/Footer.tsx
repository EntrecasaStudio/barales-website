'use client'

export function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-xs tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors uppercase"
      >
        Volver arriba
      </button>
    </footer>
  )
}
