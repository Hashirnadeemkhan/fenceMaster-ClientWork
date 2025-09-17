import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Contact Information */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5" />
              <span className="text-xl font-semibold hover:text-green-500 transition-colors">+44 7869 457259</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-5 h-5" />
              <span className="hover:text-green-500 transition-colors">Fencemasters804@gmail.com</span>
            </div>
            <div className="text-center md:text-left">
              {/* <span className="hover:text-green-500 transition-colors">Fencemasters804@gmail.com</span> */}
            </div>
            <div className="flex items-start justify-center md:justify-start gap-2 mt-3">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-sm leading-relaxed">
                <div className="font-medium">Yard A</div>
                <div>GLADWIN STORAGE LTD</div>
                <div>PINSTONE WAY</div>
                <div>GERRARDS CROSS</div>
                <div className="font-medium">SL9 7BJ</div>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex items-center">
              <Image src="/logo.webp" alt="Logo" width={120} height={120} />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            {/* Facebook */}
            <Link
              href="#"
              className="w-12 h-12 rounded-full flex items-center justify-center text-slate-800 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Image
                src="/facebook-icon.png"
                alt="Facebook"
                width={32}
                height={32}
                className="filter invert brightness-0 hover:filter-none transition duration-300"
              />
            </Link>

            {/* Google */}
            <Link
              href="https://share.google/41IzzWAH7JET05EY4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-slate-800 transition-colors duration-300"
              aria-label="Google"
            >
              <Image
                src="/google-icon.png"
                alt="Google"
                width={32}
                height={32}
                className="filter invert brightness-0 hover:filter-none transition duration-300"
              />
            </Link>

            {/* Yell */}
            <Link
              href="#"
              className="w-12 h-12 rounded-full flex items-center justify-center text-slate-800 transition-colors duration-300"
              aria-label="Yell"
            >
              <Image
                src="/yell-icon.png"
                alt="Yell"
                width={32}
                height={32}
                className="filter invert brightness-0 hover:filter-none transition duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <div className="mb-2 md:mb-0">
              © 2025 Fencing Services London |
              <a href="#" className="hover:text-green-500 transition-colors duration-300 ml-1">
                Privacy Policy
              </a>
            </div>
            <div className="hover:text-green-500 transition-colors duration-300">
              Website by New World Digital Media Ltd.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
