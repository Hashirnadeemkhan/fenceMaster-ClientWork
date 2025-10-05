"use client"
import { HeroSection } from "../components/Hero-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Shield, Clock, Award, Palette, Lock, Trees, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ResidentialServices() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      icon: Home,
      title: "Garden Fencing",
      description: "Beautiful and durable garden fencing to define your outdoor space",
      features: ["Pressure-treated timber", "Custom heights available", "Weather-resistant finish", "Professional installation"],
      color: "green",
    },
    {
      icon: Lock,
      title: "Privacy Screens",
      description: "Complete privacy solutions for your garden and patio areas",
      features: ["Maximum privacy coverage", "Sound reduction", "Wind protection", "Modern designs"],
      color: "blue",
    },
    {
      icon: Palette,
      title: "Decorative Panels",
      description: "Stylish fence panels that enhance your property's aesthetics",
      features: ["Multiple design options", "Color customization", "Premium materials", "Unique patterns"],
      color: "purple",
    },
    {
      icon: Trees,
      title: "Boundary Fencing",
      description: "Clear property line demarcation with attractive fencing",
      features: ["Survey-accurate installation", "Legal compliance", "Neighbor-friendly designs", "Long-lasting materials"],
      color: "teal",
    },
  ];

  const benefits = [
    { icon: Shield, title: "5-Year Warranty", description: "Comprehensive coverage on all installations" },
    { icon: Clock, title: "Quick Installation", description: "Most projects completed within 1-3 days" },
    { icon: Award, title: "Premium Quality", description: "Only the finest materials and craftsmanship" },
    { icon: Home, title: "Custom Solutions", description: "Tailored to your specific needs" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-200 to-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-200 to-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection
        title="Residential Fencing Services"
        subtitle="Transform Your Home"
        description="Premium residential fencing solutions that combine security, privacy, and stunning aesthetics for your London property."
        primaryButtonText="GET FREE QUOTE"
        secondaryButtonText="CALL NOW"
    
      />

      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            id="services-intro"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["services-intro"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Our Residential Services
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              From classic garden fencing to modern privacy screens, we offer comprehensive solutions for every home.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  id={`service-${index}`}
                  data-animate
                  className={`transition-all duration-1000 delay-${index * 100} ${
                    isVisible[`service-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full bg-gradient-to-br from-white to-green-50/30">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50/50 transition-colors duration-300">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div
            id="benefits"
            data-animate
            className={`mb-20 transition-all duration-1000 ${
              isVisible["benefits"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Why Choose Us?
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div
            id="cta"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["cta"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-600 to-emerald-600 text-white">
              <CardContent className="py-16 px-8 text-center">
                <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Garden?</h3>
                <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
                  Get a free, no-obligation quote today. Our experts are ready to help you create the perfect fencing solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+447869457259">
                    <Button
                      size="lg"
                      className="bg-white text-green-600 hover:bg-green-50 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Call +44 7869 457259
                    </Button>
                  </a>
                  <a href="tel:+447869457259">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-black hover:bg-white/10 px-8 py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Get Free Quote
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
