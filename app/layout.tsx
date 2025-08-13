import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Providers } from './providers'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import BackToTop from '@/app/components/ui/BackToTop'
import { Toaster } from 'react-hot-toast'
import { siteMetadata } from '@/lib/data'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: 'Fadli Nofrizal' }],
  creator: 'Fadli Nofrizal',
  // metadataBase: new URL(siteMetadata.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: 'Fadli Nofrizal Portfolio',
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
    creator: '@fadlinofrizal', // ganti dengan Twitter handle Anda jika ada
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // ganti dengan kode verifikasi Google Search Console
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col`}>
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgb(var(--bg-secondary))',
                color: 'rgb(var(--text-primary))',
                border: '1px solid rgb(var(--accent-primary) / 0.2)',
              },
              success: {
                iconTheme: {
                  primary: 'rgb(var(--accent-primary))',
                  secondary: 'rgb(var(--bg-secondary))',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: 'rgb(var(--bg-secondary))',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}