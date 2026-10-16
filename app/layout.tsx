import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://akshadit.in'),
  title: 'Akshayaditya K R — Backend Developer & Agentic Systems Engineer',
  description:
    'Portfolio of Akshayaditya K R. Aspiring backend engineer specializing in scalable APIs, microservices, database architectures, and agentic AI systems.',
  authors: [{ name: 'Akshayaditya K R', url: 'https://akshadit.in' }],
  creator: 'Akshayaditya K R',
  keywords: [
    'Akshayaditya K R',
    'Akshayaditya',
    'Backend Developer',
    'AI Engineer',
    'Agentic Systems',
    'PostgreSQL',
    'Node.js',
    'Python',
    'Software Engineer Portfolio',
  ],
  alternates: {
    canonical: 'https://akshadit.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akshadit.in',
    title: 'Akshayaditya K R — Backend Developer & Agentic Systems Engineer',
    description:
      'Backend architectures, APIs, and AI agentic workflows engineered beneath the surface.',
    siteName: 'Akshayaditya K R Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshayaditya K R — Backend Developer & Agentic Systems Engineer',
    description:
      'Backend architectures, APIs, and AI agentic workflows engineered beneath the surface.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eee8d8' },
    { media: '(prefers-color-scheme: dark)', color: '#13211b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#13211b] bg-[#eee8d8] selection:bg-[#b9db78] selection:text-[#13211b]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

