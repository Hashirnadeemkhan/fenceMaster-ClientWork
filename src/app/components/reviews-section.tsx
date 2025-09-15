"use client"

import { useEffect, useRef, useState } from "react"

interface Review {
  id: number
  name: string
  rating: number
  text: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Aisha",
    rating: 5,
    text: "Fantastic job — the team were punctual, tidy and the new fence looks great. Very pleased with the whole process.",
  },
  {
    id: 2,
    name: "Bilal",
    rating: 5,
    text: "Quick turnaround and excellent workmanship. They fixed an urgent repair for me and did it professionally.",
  },
  {
    id: 3,
    name: "Kiran",
    rating: 4,
    text: "Overall a very good service. Communication was clear and the quality is strong. Small scheduling hiccup but nothing major.",
  },
  {
    id: 4,
    name: "Omar",
    rating: 5,
    text: "Highly recommended — great value and a durable finish. The installers were polite and left the site clean.",
  },
]

export function ReviewsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
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

  const StarRating = ({ rating, delay = 0 }: { rating: number; delay?: number }) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-6 h-6 ${index < rating ? "text-yellow-400" : "text-gray-300"} transition-all duration-300`}
            style={{
              animationDelay: `${delay + index * 100}ms`,
              animationDuration: "600ms",
              animationFillMode: "both",
            }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  const visibleReviews = showAll ? reviews : reviews.slice(0, 2)

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className={`text-gray-600 text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            OUR REVIEWS
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div
            className={`w-16 h-1 bg-green-500 mx-auto mb-6 transition-all duration-700 ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{
              transitionDelay: "600ms",
              transformOrigin: "center",
            }}
          />
          <p
            className={`text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            We take great pride in our work and providing exceptional service. Here&#39;s a small sample of the great
            feedback we&#39;ve received from our customers:
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {visibleReviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-gray-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              } hover:scale-105 hover:-translate-y-2`}
              style={{
                transitionDelay: `${1000 + index * 200}ms`,
              }}
            >
              <StarRating rating={review.rating} delay={1200 + index * 200} />

              <p
                className={`text-gray-700 text-base leading-relaxed mb-6 transition-all duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${1400 + index * 200}ms` }}
              >
                {review.text}
              </p>

              <p
                className={`text-green-500 font-medium italic text-right transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: `${1600 + index * 200}ms` }}
              >
                {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "2000ms" }}
          >
            {showAll ? "SHOW LESS" : "READ ALL REVIEWS"}
          </button>
        </div>
      </div>
    </section>
  )
}
