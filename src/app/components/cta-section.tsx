"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("cta-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta-section" className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[8000ms] hover:scale-105"
        style={{
          backgroundImage: `url('/cta-bg.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 transition-opacity duration-1000" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Header Text */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-gray-300 text-sm md:text-base font-medium tracking-wider uppercase mb-4">
            GET IN TOUCH TODAY
          </p>
        </div>

        {/* Main Heading */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            GET A FREE QUOTATION TODAY
          </h2>

          {/* Green Accent Line */}
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8 transform transition-all duration-1000 delay-700 scale-x-0 animate-[scaleX_0.8s_0.7s_ease-out_forwards]" />
        </div>

        {/* Description */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Please don&#39;t hesitate to get in touch for any fencing work. No job is too big or small and we welcome all
            enquiries.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 group"
          >
            <MessageSquare className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
            GET A QUOTE
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-transparent"
          >
            <Phone className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
            CALL US
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}
