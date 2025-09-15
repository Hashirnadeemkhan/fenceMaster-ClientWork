"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
  primaryButtonText?: string
  secondaryButtonText?: string
  backgroundImage?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText = "GET A QUOTE",
  secondaryButtonText = "CALL US",
  backgroundImage = "/hero-img.jpg",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt="hero"
        fill
        className="absolute inset-0 object-cover"
        priority
        quality={85}
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl montserrat-700 mb-4 sm:mb-6 leading-tight text-balance mt-20 sm:mt-16 md:mt-12 lg:mt-0"
          >
            {title}
            {subtitle && (
              <>
                <br className="hidden sm:block" />
                <span className="block sm:inline montserrat-500 mt-2 sm:mt-0">{subtitle}</span>
              </>
            )}
          </motion.h1>

          {/* Green Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-green-500 mx-auto mb-4 sm:mb-6 origin-left"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl montserrat-500 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed text-balance px-2 sm:px-0"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/447869457259" // <-- apna WhatsApp number yahan daalna (92 ke sath)
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-md w-full sm:w-auto max-w-xs sm:max-w-none transition-all duration-300">
                {primaryButtonText}
              </Button>
            </Link>

            {/* Call Button */}
            <Link href="tel:+447869457259">
      <Button
        variant="outline"
        className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-md bg-transparent w-full sm:w-auto max-w-xs sm:max-w-none transition-all duration-300"
      >
                {secondaryButtonText}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
