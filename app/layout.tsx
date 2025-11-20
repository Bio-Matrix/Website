import type { Metadata } from 'next'
import './globals.css'
import './fonts.css'
import { Inter } from "next/font/google"
import NavigationBar from '@/components/navigation-bar'

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Biomatrix Club',
  description: 'Biomatrix Club - Advancing Computational Biology',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} style={{ backgroundColor: "" }}>
        {children}
      </body>
    </html>
  )
}
