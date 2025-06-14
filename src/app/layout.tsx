import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollToTop from '../components/ScrollToTop'
import Navigation from '../components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Antoine Landon',
  description: 'Portfolio d\'Antoine Landon, étudiant en BUT Informatique',
  keywords: ['développeur web',"développeur d'application", 'React', 'Next.js', 'TypeScript', 'portfolio'],
  authors: [{ name: 'Antoine Landon' }],
  creator: 'Antoine Landon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ScrollToTop />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}