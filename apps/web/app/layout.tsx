import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Creative Hub",
    template: "%s | Creative Hub"
  },
  description: "A creative hub for all your digital projects and collaborations",
  keywords: ["creative", "hub", "collaboration", "digital", "projects"],
  authors: [{ name: "Creative Hub Team" }],
  creator: "Creative Hub",
  publisher: "Creative Hub",
  metadataBase: new URL("https://creative-hub.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creative-hub.com",
    title: "Creative Hub",
    description: "A creative hub for all your digital projects and collaborations",
    siteName: "Creative Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Hub",
    description: "A creative hub for all your digital projects and collaborations",
    creator: "@creativehub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
