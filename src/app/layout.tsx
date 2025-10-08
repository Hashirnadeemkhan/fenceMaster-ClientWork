import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import Script from "next/script"

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
  title: "Premium Fencing Solutions | Strong, Elegant, Durable | fencemasters",
  description:
    "Secure your home or business with premium fencing solutions. Trusted contractors delivering strength, beauty, and reliability.",
  keywords: [
    "Premium Fencing Solutions",
    "Residential Fencing Installation",
    "Commercial Fencing",
    "London Fencing Experts",
    "Professional Fencing Services",
    "FenceMasters",
    "Durable Fencing",
    "Secure Fencing",
    "Affordable Fencing",
  ],
  authors: [{ name: "Fence Masters Team" }],
  generator: "Next.js",
  metadataBase: new URL("https://www.fencemasters804ltd.com"),
  alternates: {
    canonical: "https://www.fencemasters804ltd.com",
  },
  openGraph: {
    title: "Premium Fencing Solutions | Strong, Elegant, Durable | fencemasters",
    description:
      "Secure your home or business with premium fencing solutions. Trusted contractors delivering strength, beauty, and reliability.",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        {/* ✅ Google Site Verifications */}
        <meta
          name="google-site-verification"
          content="nO0PtlaN8GTTOmG6MKuIUK9vgcy8XI7n9BBPu3RMCJM"
        />
        <meta
          name="google-site-verification"
          content="J-PD7FwcyeF8IytwSwoJba9F74Ksw_Cdk1SuYhle3HA"
        />

        {/* ✅ Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fence Masters",
              url: "https://www.fencemasters804ltd.com",
              logo: "https://www.fencemasters804ltd.com/logo.webp",
              sameAs: [
                "https://www.facebook.com/fencemasters",
                "https://twitter.com/fencemasters",
                "https://www.instagram.com/fencemasters",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Fencing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Premium Fencing Solutions",
                    url: "https://www.fencemasters804ltd.com/Premium-Fencing-Solutions",
                    description:
                      "Secure your home or business with premium fencing solutions. Trusted contractors delivering strength, beauty, and reliability.",
                  },
                  {
                    "@type": "Offer",
                    name: "Expert Residential Fencing Installation & Repair",
                    url: "https://www.fencemasters804ltd.com/Residential-Fencing",
                    description:
                      "Protect your property with high-quality residential fencing. Custom styles, expert installation, and long-lasting solutions for every home.",
                  },
                  {
                    "@type": "Offer",
                    name: "Durable & Secure Commercial Fencing Installation",
                    url: "https://www.fencemasters804ltd.com/Commercial-Fencing",
                    description:
                      "Trusted commercial fencing services designed for strength, security, and style. Perfect for offices, warehouses, and business properties.",
                  },
                  {
                    "@type": "Offer",
                    name: "Trusted London Fencing Experts",
                    url: "https://www.fencemasters804ltd.com/London-Fencing-Experts",
                    description:
                      "Expert fencing services in London. We install, repair, and maintain durable fences that enhance security and add value to your property.",
                  },
                  {
                    "@type": "Offer",
                    name: "Affordable & Reliable Professional Fencing Services",
                    url: "https://www.fencemasters804ltd.com/Professional-Fencing-Services",
                    description:
                      "Professional fencing services delivering quality, security, and style. From garden to commercial fencing, we’ve got you covered.",
                  },
                ],
              },
            }),
          }}
        />

        {/* ✅ Google Ads Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17591487894"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17591487894');
          `}
        </Script>

        {/* ✅ Google Analytics Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CFHN1BBZJ3"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CFHN1BBZJ3');
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
