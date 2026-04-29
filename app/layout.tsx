import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Yapu Aroma | Modelo Multidisciplinario de Desarrollo Comunitario Productivo",
  description:
    "Proyecto universitario UMSA aplicado en las comunidades productoras de quinua de Sica Sica y Patacamaya, Bolivia. Innovación y tradición para el agro.",
  generator: "v0.app",
  keywords: [
    "Quinua",
    "Bolivia",
    "Sica Sica",
    "Patacamaya",
    "UMSA",
    "Desarrollo Comunitario",
    "Yapu Aroma",
    "Agro",
  ],
}

export const viewport = {
  themeColor: "#3a5a3a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
