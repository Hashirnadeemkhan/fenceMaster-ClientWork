"use client"

import { HeroSection } from "../components/Hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building, Shield, CheckCircle } from "lucide-react"
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
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <HeroSection
        title="Professional Fencing"
        subtitle="Services"
        description="From residential garden fencing to commercial security solutions, we provide comprehensive fencing services across London."
        primaryButtonText="VIEW SERVICES"
        secondaryButtonText="GET QUOTE"
      />

      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div
            id="services-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["services-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We offer a complete range of fencing services to meet all your residential and commercial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Residential Fencing",
                description:
                  "Beautiful and functional fencing solutions for your home, including garden fences, privacy screens, and decorative panels.",
                features: ["Garden & boundary fencing", "Privacy screens", "Decorative panels"],
                delay: "delay-200",
              },
              {
                icon: Building,
                title: "Commercial Fencing",
                description:
                  "Professional fencing solutions for businesses, schools, and industrial properties with focus on security and durability.",
                features: ["Security perimeter fencing", "Industrial barriers", "Access control systems"],
                delay: "delay-400",
              },
              {
                icon: Shield,
                title: "Security Fencing",
                description:
                  "High-security fencing solutions designed to protect your property with advanced materials and installation techniques.",
                features: ["Anti-climb barriers", "Electric fencing", "CCTV integration"],
                delay: "delay-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                data-animate
                className={`transition-all duration-1000 ${service.delay} ${
                  isVisible[`service-${index}`]
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
              >
                <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              {
                step: "1",
                title: "Consultation",
                description: "Free site visit and detailed quote",
                delay: "delay-200",
              },
              {
                step: "2",
                title: "Planning",
                description: "Design approval and material selection",
                delay: "delay-400",
              },
              {
                step: "3",
                title: "Installation",
                description: "Professional installation by our expert team",
                delay: "delay-600",
              },
              {
                step: "4",
                title: "Completion",
                description: "Final inspection and warranty provision",
                delay: "delay-800",
              },
            ].map((process, index) => (
              <div
                key={index}
                id={`process-${index}`}
                data-animate
                className={`text-center transition-all duration-1000 ${process.delay} ${
                  isVisible[`process-${index}`]
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
              >
                <div className="relative group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                    {process.step}
                    <div className=" rounded-full"></div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 "></div>
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
