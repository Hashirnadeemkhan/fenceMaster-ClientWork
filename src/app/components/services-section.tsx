
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function FencingSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src="/gallery-1.jpg"
            height={450}
            width={600}
            alt="Fencing and Gates"
            className="w-full h-[450px] object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
          <h2 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
            Fencing Services
          </h2>
        </div>

        {/* Right Side - Content */}
        <div>
          <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-2">
            Our Expertise
          </p>
          <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Enhance Security & Style with <span className="text-green-600">Premium Fencing Solutions</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We provide durable, stylish, and secure fencing & gate installations tailored to your outdoor space. 
            Whether you need privacy fencing, decorative designs, or strong security gates – 
            our experts deliver solutions that stand the test of time.
          </p>

          {/* Features List */}
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">High-quality wood & metal options</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Custom design & installation</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Long-lasting durability & weather resistance</span>
            </li>
          </ul>

      
        </div>
      </div>
    </section>
  )
}
