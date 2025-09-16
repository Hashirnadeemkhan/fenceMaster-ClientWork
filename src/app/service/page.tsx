"use client"

import { HeroSection } from "../components/Hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, CheckCircle, ArrowRight, Shield, Clock, Award, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-200 to-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection
        title="Professional Fencing"
        subtitle="Services"
        description="From Residential garden fencing to Commercial security solutions, we provide comprehensive fencing services across London."
        primaryButtonText="VIEW SERVICES"
        secondaryButtonText="GET QUOTE"
      />

      {/* Services Header */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div
            id="services-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["services-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
              We offer a complete range of fencing services to meet all your residential and commercial needs with
              unmatched quality and professionalism.
            </p>
          </div>

          {/* Enhanced Residential Fencing Section */}
          <div
            id="residential-section"
            data-animate
            className={`mb-32 transition-all duration-1000 ${
              isVisible["residential-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Enhanced Content */}
              <div className="space-y-8">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-50/50 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <Home className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-bold text-gray-800 mb-2">Residential Fencing</CardTitle>
                        <div className="flex items-center gap-2 text-green-600">
                          <Award className="w-5 h-5" />
                          <span className="font-semibold">Premium Quality</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      At Fencing Master, we provide premium residential fencing services in London. From garden &
                      boundary fencing to privacy screens and decorative panels, our fences are built to be durable,
                      stylish, and weather-resistant. We ensure your home gets the security, privacy, and curb appeal it
                      deserves – all at affordable prices.
                    </p>

                    <div className="grid gap-4">
                      {[
                        "Garden & Boundary Fencing for clear and secure property lines",
                        "Privacy Screens for maximum comfort and seclusion",
                        "Decorative Fence Panels to enhance home aesthetics",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-green-100 hover:bg-green-50/50 transition-colors duration-300"
                        >
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">Quick Installation</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Shield className="w-5 h-5" />
                        <span className="font-medium">5-Year Warranty</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Get Residential Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side: Enhanced Video */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <video className="w-full h-full object-cover" autoPlay muted loop controls>
                    <source src="/service1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Commercial Fencing Section */}
          <div
            id="commercial-section"
            data-animate
            className={`mb-20 transition-all duration-1000 ${
              isVisible["commercial-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Enhanced Video */}
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <video className="w-full h-full object-cover" autoPlay muted loop controls>
                    <source src="/service2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Right Side: Enhanced Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                        <Building className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-bold text-gray-800 mb-2">Commercial Fencing</CardTitle>
                        <div className="flex items-center gap-2 text-blue-600">
                          <Users className="w-5 h-5" />
                          <span className="font-semibold">Enterprise Solutions</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Fencing Master delivers reliable commercial fencing solutions for businesses, schools, and
                      industrial properties. Our security perimeter fences, industrial barriers, and access control
                      systems provide maximum protection, durability, and low maintenance. Trusted as one of the best
                      fencing companies in London, we make your property secure and professional-looking.
                    </p>

                    <div className="grid gap-4">
                      {[
                        "Security Perimeter Fencing to protect large areas",
                        "Industrial Barriers for robust protection",
                        "Access Control Systems for enhanced safety",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-blue-100 hover:bg-blue-50/50 transition-colors duration-300"
                        >
                          <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">24/7 Support</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Shield className="w-5 h-5" />
                        <span className="font-medium">10-Year Warranty</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Get Commercial Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-6xl mx-auto">
          <div
            id="process-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["process-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Our Installation Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We follow a systematic approach to ensure every project is completed to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "Free site visit and detailed quote" },
              { step: "2", title: "Planning", description: "Design approval and material selection" },
              { step: "3", title: "Installation", description: "Professional installation by our expert team" },
              { step: "4", title: "Completion", description: "Final inspection and warranty provision" },
            ].map((process, index) => (
              <div
                key={index}
                id={`process-${index}`}
                data-animate
                className={`text-center transition-all duration-1000 delay-${index * 100} ${
                  isVisible[`process-${index}`]
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
              >
                <div className="relative group">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent"></div>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-green-600 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
