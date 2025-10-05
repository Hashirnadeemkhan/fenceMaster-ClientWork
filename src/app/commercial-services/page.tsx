"use client"
import { HeroSection } from "../components/Hero-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Users, Lock, Zap, Briefcase, Factory, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CommercialServices() {
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
      icon: Shield,
      title: "Security Perimeter Fencing",
      description: "High-security fencing solutions for complete property protection",
      features: ["Anti-climb designs", "CCTV integration ready", "24/7 monitoring compatible", "Reinforced construction"],
      color: "blue",
    },
    {
      icon: Factory,
      title: "Industrial Barriers",
      description: "Heavy-duty barriers for warehouses and industrial facilities",
      features: ["Impact resistant", "Vehicle-rated options", "Custom height configurations", "Maintenance-free materials"],
      color: "slate",
    },
    {
      icon: Lock,
      title: "Access Control Systems",
      description: "Integrated access control for enhanced security management",
      features: ["Electronic gate systems", "Keycard integration", "Visitor management", "Remote control options"],
      color: "indigo",
    },
    {
      icon: Briefcase,
      title: "Corporate Fencing",
      description: "Professional fencing solutions for business premises",
      features: ["Brand-aligned designs", "Corporate aesthetics", "Professional appearance", "Customizable options"],
      color: "cyan",
    },
  ];

  const benefits = [
    { icon: Shield, title: "10-Year Warranty", description: "Extended coverage for commercial installations" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock emergency service" },
    { icon: Users, title: "Expert Team", description: "Certified commercial installation specialists" },
    { icon: Zap, title: "Fast Deployment", description: "Minimal disruption to your operations" },
  ];

  const industries = [
    "Schools & Educational Facilities",
    "Warehouses & Distribution Centers",
    "Manufacturing Plants",
    "Retail & Shopping Centers",
    "Office Buildings",
    "Healthcare Facilities",
    "Sports & Recreation",
    "Government Buildings",
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection
        title="Commercial Fencing Services"
        subtitle="Secure Your Business"
        description="Enterprise-grade fencing solutions for businesses across London. Maximum security, professional appearance, and reliable protection."
        primaryButtonText="REQUEST CONSULTATION"
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Our Commercial Solutions
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Trusted by businesses across London for reliable, secure, and professional fencing installations.
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
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full bg-gradient-to-br from-white to-blue-50/30">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300`}>
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
                          <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50/50 transition-colors duration-300">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
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
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Enterprise Benefits
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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

          {/* Industries Section */}
          <div
            id="industries"
            data-animate
            className={`mb-20 transition-all duration-1000 ${
              isVisible["industries"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/50">
              <CardContent className="py-12 px-8">
                <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Industries We Serve
                </h3>
                <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div
            id="cta"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["cta"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
              <CardContent className="py-16 px-8 text-center">
                <h3 className="text-4xl font-bold mb-6">Secure Your Business Today</h3>
                <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
                  Contact us for a comprehensive security assessment and custom quote tailored to your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+447869457259">
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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
                      Request Consultation
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
