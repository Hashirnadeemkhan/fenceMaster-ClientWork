"use client"

import { HeroSection } from "../components/Hero-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState({
    story: false,
    features: false,
  })

  const storyRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === storyRef.current) {
              setIsVisible((prev) => ({ ...prev, story: true }))
            }
            if (entry.target === featuresRef.current) {
              setIsVisible((prev) => ({ ...prev, features: true }))
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (storyRef.current) observer.observe(storyRef.current)
    if (featuresRef.current) observer.observe(featuresRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="overflow-hidden">
      <div className="animate-fade-in">
        <HeroSection
          title="About Fence Masters"
          subtitle="Excellence Since Day One"
          description="With years of experience and thousands of satisfied customers, we're London's trusted fencing specialists committed to quality and craftsmanship."
          primaryButtonText="OUR STORY"
          secondaryButtonText="MEET THE TEAM"
        />
      </div>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmM2Y0ZjYiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div
            ref={storyRef}
            className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
              isVisible.story ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h2
                  className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-200 ${
                    isVisible.story ? "translate-y-0" : "translate-y-8"
                  }`}
                >
                  Our Story
                </h2>
              </div>

              <div
                className={`space-y-6 transition-all duration-700 delay-400 ${
                  isVisible.story ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  Founded in 2010, Fence Masters began as a small family business with a simple mission: to provide
                  London homeowners and businesses with the highest quality fencing solutions. What started in a small
                  workshop has grown into one of London&#39;s most trusted fencing companies.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our commitment to excellence, attention to detail, and customer satisfaction has earned us a
                  reputation for delivering projects that not only meet but exceed expectations. Every fence we install
                  is a testament to our craftsmanship and dedication.
                </p>
              </div>

              <div
                className={`transition-all duration-700 delay-600 ${
                  isVisible.story ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Button className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3 text-lg">
                  Learn More About Us
                </Button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible.story ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 translate-x-8 rotate-2"
              }`}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-20 animate-pulse"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <Image
                  src="/hero-img.jpg"
                  height={400}
                  width={600}
                  alt="Our professional team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>

        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Fence Masters?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We combine years of experience with modern techniques to deliver fencing solutions that stand the test of
              time.
            </p>
          </div>

          <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Skilled professionals with years of fencing experience",
                delay: "delay-100",
              },
              {
                icon: Award,
                title: "Quality Materials",
                description: "Premium materials sourced from trusted suppliers",
                delay: "delay-200",
              },
              {
                icon: CheckCircle,
                title: "Guaranteed Work",
                description: "All installations come with comprehensive warranty",
                delay: "delay-300",
              },
              {
                icon: Clock,
                title: "Timely Service",
                description: "Projects completed on time, every time",
                delay: "delay-400",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${feature.delay} ${
                    isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <Card className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
                    <CardContent className="pt-6">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-green-100 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"></div>
                        <Icon className="w-16 h-16 text-green-600 mx-auto relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-green-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
