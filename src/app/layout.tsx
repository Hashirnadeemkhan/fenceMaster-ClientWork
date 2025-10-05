import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import Script from "next/script";

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
  title: "Fence Masters — Fencing & Gate Installations, London",
  description: "Fence Masters is a London-based fencing company offering secure, stylish fence and gate installations, repairs, and free quotes — trusted local experts with 7+ years’ experience.",
  keywords: [ "Fence Masters", "Fencing", "Gate Installations", "London", "Home Improvement", "Outdoor Living", "Custom Fences", "Metal Fences", "Wooden Fences", "Fence Repairs", "Free Quotes", "Professional Service", "Experienced Installers", "Residential Fencing", "Commercial Fencing" ],
  authors: [{ name: "Fence Masters Team" }],
  generator: "Next.js",
  metadataBase: new URL("https://www.fencemasters804ltd.com"), // ✅ correct domain
  alternates: {
    canonical: "https://www.fencemasters804ltd.com",
  },
  openGraph: {
    title: "Fence Masters — Fencing & Gate Installations, London",
    description: "Fence Masters is a creative fencing company delivering timber & metal fence installations, gates, repairs and free on-site quotes across London.",
    url: "https://www.fencemasters804ltd.com",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Fence Masters - Fencing & Gate Installations",
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
  category: "Fencing & Gate Installations",
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
        <meta name="google-site-verification" content="nO0PtlaN8GTTOmG6MKuIUK9vgcy8XI7n9BBPu3RMCJM" />
        {/* ✅ Favicon & App icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Structured Data (Organization Logo for Google) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fence Masters",
              url: "https://www.fencemasters804ltd.com",
              logo: "https://www.fencemasters804ltd.com/logo.webp", // ✅ WebP logo full URL
              sameAs: [
                "https://www.facebook.com/fencemasters",
                "https://twitter.com/fencemasters",
                "https://www.instagram.com/fencemasters",
              ],
            }),
          }}
        />
         {/* ✅ Google Tag Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17591487894"
        />
      <Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17591487894');
  `}
</Script>
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
