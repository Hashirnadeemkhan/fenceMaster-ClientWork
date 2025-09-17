"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface BeforeAfterItem {
  id: number
  title: string
  location: string
  beforeImage: string
  afterImage: string
  description: string
}

const beforeAfterData: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Garden Transformation",
    location: "Hampstead",
    beforeImage: "/before1.jpg",
    afterImage: "/after1.jpg",
    description: "Complete fence replacement with modern horizontal slat design",
  },
  {
    id: 2,
    title: "Security Upgrade",
    location: "Canary Wharf",
    beforeImage: "/before2.jpg",
    afterImage: "/after2.jpg",
    description: "Enhanced security fencing with automated access control",
  },
  {
    id: 3,
    title: "Privacy Enhancement",
    location: "Richmond",
    beforeImage: "/before3.jpg",
    afterImage: "/after3.jpg",
    description: "Increased height and privacy with decorative elements",
  },
]

export function BeforeAfterSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [showAfter, setShowAfter] = useState<{ [key: number]: boolean }>({})

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % beforeAfterData.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length)
  }

  const toggleImage = (id: number) => {
    setShowAfter((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Transformations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Before & After</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            See the incredible transformations we&#39;ve achieved for our clients across London. From worn-out barriers to
            stunning modern fencing solutions.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {beforeAfterData.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="relative h-[500px] md:h-[600px] bg-gray-900">
                    {/* Before Image */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        showAfter[item.id] ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <Image
                        src={item.beforeImage || "/placeholder.svg"}
                        alt={`${item.title} - Before`}
                        fill
                        className="object-cover"
                        priority={activeSlide === 0}
                      />
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Before
                      </div>
                    </div>

                    {/* After Image */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        showAfter[item.id] ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={item.afterImage || "/placeholder.svg"}
                        alt={`${item.title} - After`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        After
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                      <Button
                        onClick={() => toggleImage(item.id)}
                        className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      >
                        {showAfter[item.id] ? "Show Before" : "Show After"}
                      </Button>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                      <div className="text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-200 mb-2">{item.description}</p>
                        <span className="text-green-400 font-medium">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {beforeAfterData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSlide ? "bg-green-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {beforeAfterData.map((item, index) => (
            <Card
              key={item.id}
              className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                index === activeSlide ? "ring-2 ring-green-500 shadow-lg" : ""
              }`}
              onClick={() => setActiveSlide(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={showAfter[item.id] ? item.afterImage : item.beforeImage}
                  alt={`${item.title} thumbnail`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  <p className="text-gray-200 text-xs">{item.location}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleImage(item.id)
                  }}
                  variant="outline"
                  size="sm"
                  className="w-full transition-colors duration-300"
                >
                  {showAfter[item.id] ? "Show Before" : "Show After"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-green-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for Your Own Transformation?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Let us transform your property with professional fencing solutions. Get a free consultation and quote
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+447869457259">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 transition-all duration-300 hover:scale-105"
                >
                  Get Free Quote
                </Button>
              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
