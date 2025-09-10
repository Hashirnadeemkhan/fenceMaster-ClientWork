import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "FENCING & GATES",
      image: "/wooden-fence-installation.png",
      link: "#",
    },
    {
      title: "DECKING & PATIOS",
      image: "/stone-patio-decking.jpg",
      link: "#",
    },
    {
      title: "GARDEN LANDSCAPING",
      image: "/green-lawn-garden-landscaping.jpg",
      link: "#",
    },
    {
      title: "ROOFING",
      image: "/flat-roof-installation.png",
      link: "#",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white  mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-2">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">WHAT WE DO</h2>
          {/* Green underline */}
          <div className="w-16 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We offer a wide range of outdoor solutions - including fencing, patios, gates, decking, and complete garden
            makeovers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg aspect-[4/5] cursor-pointer">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-3 leading-tight">{service.title}</h3>
                <a
                  href={service.link}
                  className="text-white text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-md transition-colors duration-300">
            GET A QUOTE
          </Button>
        </div>
      </div>
    </section>
  )
}
