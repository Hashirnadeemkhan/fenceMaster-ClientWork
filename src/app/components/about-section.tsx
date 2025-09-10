"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div
            className={`relative transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <Image
                src="/fencing-team-work-professional-installation.jpg"
                alt="Professional fencing installation team at work"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating experience badge */}
            <div
              className={`absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-8 opacity-0 rotate-12"
              }`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold">7+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            {/* Header */}
            <div className="mb-8">
              <div
                className={`text-gray-600 text-center text-lg font-medium mb-2 transform transition-all duration-700 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                WHO WE ARE
              </div>
              <h2
                className={`text-4xl lg:text-5xl text-center font-bold text-gray-900 mb-4 text-balance transform transition-all duration-700 delay-600 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                ABOUT US
              </h2>
             <div className="flex justify-center">
  <div
    className={`w-16 h-1 bg-green-600 transform transition-all duration-700 delay-700 origin-left ${
      isVisible ? "scale-x-100" : "scale-x-0"
    }`}
  />
</div>
</div>

            {/* Content */}
            <div className="space-y-6">
              <p
                className={`text-gray-700 text-lg leading-relaxed transform transition-all duration-700 delay-800 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                At <span className="font-semibold text-green-600">Fencing Services West Midlands</span>, we take pride
                in delivering reliable, high-quality landscaping and fencing solutions tailored to your needs.
              </p>

              <p
                className={`text-gray-700 text-lg leading-relaxed transform transition-all duration-700 delay-900 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                With over <span className="font-semibold text-green-600">7 years of hands-on experience</span>, we&#39;ve
                worked on everything from small garden projects to large property transformations across Birmingham,
                Solihull, and Warwickshire.
              </p>

              <p
                className={`text-gray-700 text-lg leading-relaxed transform transition-all duration-700 delay-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                Our services cover all aspects of outdoor improvement - from strong, stylish fencing to custom-built
                patios, gates, and decking.
              </p>

              <p
                className={`text-gray-700 text-lg leading-relaxed transform transition-all duration-700 delay-1100 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                We&#39;re known for our{" "}
                <span className="font-semibold text-green-600">
                  attention to detail, honest pricing, and friendly service
                </span>
                . Every project starts with a free, no-obligation quote, and finishes with a result you&#39;ll love for
                years to come.
              </p>
            </div>

            {/* Key features */}
            <div
              className={`mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 transform transition-all duration-700 delay-1200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0" />
                <span className="text-gray-700 font-medium">Free Quotes</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0" />
                <span className="text-gray-700 font-medium">7+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0" />
                <span className="text-gray-700 font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0" />
                <span className="text-gray-700 font-medium">Local Experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
