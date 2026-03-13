import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Barales Escultor",
    template: "%s | Barales Escultor",
  },
  description: "Portfolio de esculturas de Leandro Barales. Obras en arcilla, plasticera y resina poliester.",
  metadataBase: new URL("https://barales.ar"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Barales Escultor",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ujq2gda.css" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-16 lg:pt-0 lg:pl-[233px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
