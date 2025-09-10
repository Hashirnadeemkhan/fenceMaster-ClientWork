"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background Image */}
      <Image src="/hero-img.jpg" alt="hero" fill className="absolute inset-0 object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-3xl md:text-4xl lg:text-4xl montserrat-700 mb-6 leading-tight text-balance lg:mt-0 md:mt-0 mt-28"
          >
            QUALITY FENCING & LANDSCAPING SERVICES
            <br />
            <span className="montserrat-500">
              ACROSS THE LONDON
            </span>
          </motion.h1>

          {/* Green Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-24 h-1 bg-green-500 mx-auto mb-4 origin-left"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="text-lg md:text-xl lg:text-2xl montserrat-500 mb-8 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            From decorative fencing to custom patios and decking, we bring your
            <br />
            outdoor space to life with over 7 years of experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg rounded-md">
              GET A QUOTE
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-md bg-transparent"
            >
              LEARN MORE
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}