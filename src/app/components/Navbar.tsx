"use client"
import { useState, useEffect } from "react"
import { Phone, MessageCircle, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3 sm:py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo - Optimized sizing and loading */}
          <div className="flex-shrink-0">
            <div
              className={`relative transition-all duration-300 ease-out ${
                scrolled
                  ? "w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-18"
                  : "w-20 h-16 sm:w-28 sm:h-22 md:w-36 md:h-28 lg:w-44 lg:h-34"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain transition-all duration-300"
                priority
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 144px, 176px"
              />
            </div>
          </div>

          {/* Desktop Menu - Better responsive spacing and alignment */}
          <div
            className={`hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm xl:text-base font-medium transition-all duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Link href="/" className="hover:text-green-500 transition-colors duration-200 py-2">
              Home
            </Link>
            <Link href="/service" className="hover:text-green-500 transition-colors duration-200 py-2">
              Service
            </Link>
            <Link href="/about" className="hover:text-green-500 transition-colors duration-200 py-2">
              About Us
            </Link>
            <Link href="/gallery" className="hover:text-green-500 transition-colors duration-200 py-2">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-green-500 transition-colors duration-200 py-2">
              Contact
            </Link>

            {/* Social Icons - Improved spacing and hover effects */}
            <div className="flex items-center space-x-2 ml-4">
              <Button
                size="icon"
                variant="ghost"
                className={`rounded-full transition-all duration-200 hover:scale-110 ${
                  scrolled
                    ? "text-gray-600 hover:text-green-500 hover:bg-green-50"
                    : "text-white hover:text-green-400 hover:bg-white/10"
                }`}
                asChild
              >
                <Link href="tel:+447869457259" aria-label="Call +44 7869 457259">
                  <Phone className="h-4 w-4 xl:h-5 xl:w-5" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className={`rounded-full transition-all duration-200 hover:scale-110 ${
                  scrolled
                    ? "text-gray-600 hover:text-green-500 hover:bg-green-50"
                    : "text-white hover:text-green-400 hover:bg-white/10"
                }`}
              > <Link href="tel:+447869457259" aria-label="Call +44 7869 457259">

                <MessageCircle className="h-4 w-4 xl:h-5 xl:w-5" />
              </Link>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className={`rounded-full transition-all duration-200 hover:scale-110 ${
                  scrolled
                    ? "text-gray-600 hover:text-green-500 hover:bg-green-50"
                    : "text-white hover:text-green-400 hover:bg-white/10"
                }`}
                asChild
              >
                <Link href="mailto:azeemshaikh26@gmail.com" aria-label="Email azeemshaikh26@gmail.com">
                  <Mail className="h-4 w-4 xl:h-5 xl:w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hamburger Button - Better responsive sizing */}
          <button
            className={`lg:hidden p-2 rounded-md transition-all duration-200 hover:scale-110 ${
              scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Improved animation and backdrop */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-80 transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } ${scrolled ? "bg-white text-gray-800" : "bg-gray-900 text-white"}`}
        >
          {/* Close Button */}
          <button
            className={`absolute top-4 right-4 p-2 rounded-md transition-colors duration-200 ${
              scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Menu Content */}
          <div className="flex flex-col h-full pt-20 px-6">
            <div className="flex flex-col space-y-6 text-xl font-semibold">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-green-500 transition-colors duration-200 py-2 border-b border-gray-200/20"
              >
                Home
              </Link>
              <Link
                href="/service"
                onClick={() => setIsOpen(false)}
                className="hover:text-green-500 transition-colors duration-200 py-2 border-b border-gray-200/20"
              >
                Service
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-green-500 transition-colors duration-200 py-2 border-b border-gray-200/20"
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className="hover:text-green-500 transition-colors duration-200 py-2 border-b border-gray-200/20"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-green-500 transition-colors duration-200 py-2 border-b border-gray-200/20"
              >
                Contact
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-8 pt-8 border-t border-gray-200/20">
              <Button
                size="icon"
                variant="ghost"
                className={`rounded-full transition-all duration-200 hover:scale-110 ${
                  scrolled
                    ? "text-gray-600 hover:text-green-500 hover:bg-green-50"
                    : "text-white hover:text-green-400 hover:bg-white/10"
                }`}
                asChild
              >
                <Link href="tel:+447869457259" aria-label="Call +44 7869 457259">
                  <Phone className="h-6 w-6" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className={`rounded-full transition-all duration-200 hover:scale-110 ${
                  scrolled
                    ? "text-gray-600 hover:text-green-500 hover:bg-green-50"
                    : "text-white hover:text-green-400 hover:bg-white/10"
                }`}
              >
                <MessageCircle className="h-6 w-6" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className={`rounded-full transition-all duration-200 hover:scale-110 ${
                  scrolled
                    ? "text-gray-600 hover:text-green-500 hover:bg-green-50"
                    : "text-white hover:text-green-400 hover:bg-white/10"
                }`}
                asChild
              >
                <Link href="mailto:azeemshaikh26@gmail.com" aria-label="Email azeemshaikh26@gmail.com">
                  <Mail className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
