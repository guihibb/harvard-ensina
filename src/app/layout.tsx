import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harvard Ensina | CS50',
  description: 'Explore o mundo da ciência da computação com o renomado curso CS50 da Universidade Harvard. Em nosso site, você encontrará recursos valiosos, informações detalhadas e insights exclusivos sobre o CS50, um curso inovador que mergulha nos fundamentos da programação e resolução de problemas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
