import { HeroSection } from "../components/Hero-section"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  return (
    <div>
      <HeroSection
        title="Our Work"
        subtitle="Gallery"
        description="Explore our portfolio of completed fencing projects across London. See the quality and craftsmanship that sets us apart."
        primaryButtonText="VIEW PROJECTS"
        secondaryButtonText="REQUEST QUOTE"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our latest fencing installations across London, showcasing our commitment to quality and
              attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <Image
                  height={300}
                  width={400}
                  src="/gallery-2.jpg"
                  alt="Residential Garden Fence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Modern Garden Fence</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Contemporary wooden fencing with horizontal slats for a stylish London home.
                </p>
                <span className="text-green-600 text-sm font-medium">Residential • Hampstead</span>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <Image
                height={300}
                width={400}
                  src="/gallery-1.jpg"
                  alt="Commercial Security Fence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Security Perimeter</h3>
                <p className="text-gray-600 text-sm mb-3">
                  High-security fencing with automated gates for commercial property protection.
                </p>
                <span className="text-green-600 text-sm font-medium">Commercial • Canary Wharf</span>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <Image
                  height={300}
                width={400}
                  src="/gallery-3.jpg"
                  alt="Privacy Fence Panels"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Privacy Screens</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Elegant privacy fencing with decorative elements for enhanced outdoor living.
                </p>
                <span className="text-green-600 text-sm font-medium">Residential • Richmond</span>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <Image
                  height={300}
                width={400}
                  src="/gallery-4.jpg"
                  alt="Traditional Wooden Fence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Classic Wooden Fence</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Traditional picket fencing with custom gate for period property restoration.
                </p>
                <span className="text-green-600 text-sm font-medium">Residential • Greenwich</span>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <Image
                  height={300}
                width={400}
                  src="/gallery-5.jpg"
                  alt="Industrial Security Fence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Industrial Barriers</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Heavy-duty metal fencing for warehouse and industrial facility security.
                </p>
                <span className="text-green-600 text-sm font-medium">Industrial • Stratford</span>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <Image
                  height={300}
                width={400}
                  src="/gallery-6.jpg"
                  alt="Composite Fence Panels"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Composite Fencing</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Low-maintenance composite panels with contemporary styling and durability.
                </p>
                <span className="text-green-600 text-sm font-medium">Residential • Wimbledon</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&#39;t just take our word for it - hear from satisfied customers across London.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &quot;Exceptional service from start to finish. The team was professional, punctual, and the quality of
                  work exceeded our expectations.&quot;
                </p>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Hampstead Homeowner</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &quot;Perfect installation of our commercial security fencing. Great communication throughout the project
                  and completed on time.&quot;
                </p>
                <div className="font-semibold text-gray-900">Michael Chen</div>
                <div className="text-sm text-gray-500">Business Owner, Canary Wharf</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &quot;Beautiful garden fence that perfectly matches our home&#39;s aesthetic. Highly recommend Fence Masters
                  for quality and reliability.&quot;
                </p>
                <div className="font-semibold text-gray-900">Emma Thompson</div>
                <div className="text-sm text-gray-500">Richmond Resident</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
