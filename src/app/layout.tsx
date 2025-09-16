import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

// Components import
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/footer"
import { WhatsAppFloat } from "./components/whatsapp-float"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Fence Masters | Where Design Meets Innovation",
  description:
    "Fence Masters is a modern creative agency delivering stunning visuals, innovative design, and digital experiences that captivate audiences.",
  keywords: [
    "Fence Masters",
    "Creative Studio",
    "Design Agency",
    "Digital Marketing",
    "Branding",
    "Web Design",
    "UI UX",
  ],
  authors: [{ name: "Fence Masters Team" }],
  generator: "Next.js",
  metadataBase: new URL("https://www.fencemasters.com"), // apna domain daalna
  alternates: {
    canonical: "https://www.fencemasters.com",
  },
  openGraph: {
    title: "Fence Masters | Creative Studio",
    description:
      "Fence Masters is a creative agency where design meets innovation. We build brands with visuals that leave a mark.",
    url: "https://www.fencemasters.com",
    siteName: "Fence Masters",
    images: [
      {
        url: "/logo.png", // apni website ke liye OG image daalna (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Fence Masters Creative Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Creative Agency",
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="icon" type="image/webp" href="/favicon.webp" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data (JSON-LD for SEO) */}
        <script          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fence Masters",
              url: "https://www.fencemasters.com",
              logo: "https://www.fencemasters.com/logo.png",
              sameAs: [
                "https://www.facebook.com/fencemasters",
                "https://twitter.com/fencemasters",
                "https://www.instagram.com/fencemasters",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <WhatsAppFloat />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
