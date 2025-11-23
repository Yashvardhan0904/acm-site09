// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import ClientLoaderWrapper from '@/components/ui/ClientLoaderWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ACM Tech Society - Innovation Through Collaboration',
  description:
    'Join the premier tech society at our college. Explore events, workshops, and connect with like-minded developers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col relative">
          <Navbar />
          <main className="flex-1 relative z-0">
            <ClientLoaderWrapper>{children}</ClientLoaderWrapper>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
