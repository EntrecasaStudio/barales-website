import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

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
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen pt-16 lg:pt-0 lg:pl-[233px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
