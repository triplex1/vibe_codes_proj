import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PortfolioHub - Create Your Professional Portfolio in Minutes',
  description: 'Build beautiful, responsive portfolios without coding. Perfect for designers, developers, and creative professionals.',
  keywords: ['portfolio', 'resume', 'creative', 'professional', 'website builder'],
  authors: [{ name: 'PortfolioHub Team' }],
  openGraph: {
    title: 'PortfolioHub - Create Your Professional Portfolio',
    description: 'Build beautiful, responsive portfolios without coding.',
    type: 'website',
    url: 'https://portfoliohub.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}