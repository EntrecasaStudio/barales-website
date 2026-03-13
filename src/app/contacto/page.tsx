import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contactá a Leandro Barales para consultas sobre obras y comisiones.',
}

export default function ContactoPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="text-sm tracking-[0.35em] text-text-secondary mb-12 page-fade-in" style={{ animationDelay: '0.1s' }}>
          C o n t a c t o
        </h1>

        <div className="page-fade-in" style={{ animationDelay: '0.2s' }}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
