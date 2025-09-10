"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image - Added priority and optimized loading */}
      <Image
        src="/hero-img.jpg"
        alt="hero"
        fill
        className="absolute inset-0 object-cover"
        priority
        quality={85}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content - Improved responsive spacing and text sizing */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading - Better responsive typography and spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl montserrat-700 mb-4 sm:mb-6 leading-tight text-balance mt-20 sm:mt-16 md:mt-12 lg:mt-0"
          >
            QUALITY FENCING & LANDSCAPING SERVICES
            <br className="hidden sm:block" />
            <span className="block sm:inline montserrat-500 mt-2 sm:mt-0">ACROSS THE LONDON</span>
          </motion.h1>

          {/* Green Underline - Responsive width */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-green-500 mx-auto mb-4 sm:mb-6 origin-left"
          />

          {/* Description - Better responsive text and spacing */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl montserrat-500 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed text-balance px-2 sm:px-0"
          >
            From decorative fencing to custom patios and decking, we bring your
            <br className="hidden md:block" />
            outdoor space to life with over 7 years of experience.
          </motion.p>

          {/* CTA Buttons - Improved responsive button layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-md w-full sm:w-auto max-w-xs sm:max-w-none transition-all duration-300">
              GET A QUOTE
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-md bg-transparent w-full sm:w-auto max-w-xs sm:max-w-none transition-all duration-300"
            >
              LEARN MORE
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
