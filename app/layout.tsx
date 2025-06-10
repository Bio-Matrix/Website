import type { Metadata } from 'next'
import './globals.css'
import './fonts.css'
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
