import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'TRIBE Club - Running Santa Barbara',
  description: 'Club de running de Santa Barbara. Nos reunimos los miercoles y viernes a correr. Comunidad, apoyo y crecimiento personal.',
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.variable} ${_oswald.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
