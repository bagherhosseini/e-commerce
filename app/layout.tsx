import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hakim Livs',
  description: 'Hakim Livs är en livsmedelsbutik i Stockholm som erbjuder ett brett sortiment av matvaror från olika delar av världen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className}>
        {children}
      </body>
    </html>
  )
}
