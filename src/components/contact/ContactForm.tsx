'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    // TODO: integrate with form service (Formspree, Netlify Forms, etc.)
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-16">
        <p className="text-2xl text-text-primary font-light">Gracias!</p>
        <p className="mt-3 text-sm text-text-secondary">Tu mensaje fue enviado.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          required
          placeholder="Nombre"
          className="w-full border-b border-border bg-transparent py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full border-b border-border bg-transparent py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors"
        />
      </div>
      <div>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Mensaje"
          className="w-full border-b border-border bg-transparent py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors resize-none"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="text-sm tracking-[0.15em] uppercase text-text-secondary hover:text-text-primary transition-colors disabled:opacity-50"
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  )
}
