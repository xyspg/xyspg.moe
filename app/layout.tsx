import './globals.css'
import './clerk.css'
import './prism.css'

import { ClerkProvider } from '@clerk/nextjs'
import {Analytics} from "@vercel/analytics/react";
import type { Metadata, Viewport } from 'next'
import Script from "next/script";

import { ThemeProvider } from '~/app/(main)/ThemeProvider'
import { url } from '~/lib'
import { zhCN } from '~/lib/clerkLocalizations'
import { sansFont } from '~/lib/font'
import { seo } from '~/lib/seo'

export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    template: '%s | xyspg.moe',
    default: seo.title,
  },
  description: seo.description,
  keywords: 'xyspg',
  manifest: '/site.webmanifest',
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
  openGraph: {
    title: {
      default: seo.title,
      template: '%s | xyspg 的小窝',
    },
    description: seo.description,
    siteName: 'xyspg 的小窝',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://xyspg.moe',
  },
  twitter: {
    site: '@xyspgUwU',
    creator: '@xyspgUwU',
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  alternates: {
    canonical: url('/'),
    types: {
      'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }],
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={zhCN}>
      <Script
        async
        src="https://analytics.xyspg.moe/script.js"
        data-website-id="5893cf93-d9b0-4d73-ac08-24d987b9d7db"
        data-domains="xyspg.moe"
      />
      <html
        lang="zh-CN"
        className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
        suppressHydrationWarning
      >
        <body className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
