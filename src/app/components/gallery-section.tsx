"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function GallerySection() {
  const galleryImages = [
   
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
 
  
  ]

  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto px-4 text-center mb-12">
        <p className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-2">
          VIEW OUR GALLERY
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          OUR LATEST WORK
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Have a look at some of our recently completed jobs from around Birmingham 
          and the surrounding areas in London.
        </p>
      </div>

      {/* Gallery Slider */}
      <div className="relative mb-12 overflow-hidden">
        <div className="flex w-max animate-scroll-left whitespace-nowrap">
          {/* First + Duplicate set together */}
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <Image
              key={index}
              width={320}
              height={256}
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              className="inline-block mx-3 w-80 h-64 object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="text-center">
       <Link href="/gallery">
         <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-lg">
           VIEW GALLERY
         </Button>
       </Link>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
