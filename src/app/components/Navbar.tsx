"use client"
import { useState, useEffect } from "react"
import { Phone, MessageCircle, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // scroll detect karna
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo (Left Side) */}
          <div className="flex-shrink-0">
            <div
              className={`relative transition-all duration-500 ease-in-out ${
                scrolled ? "w-24 h-16 md:w-32 md:h-20" : "w-32 h-24 md:w-52 md:h-48"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain transition-all duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center space-x-6 text-sm lg:text-lg font-medium transition-colors duration-500 ${
              scrolled ? "text-black" : "text-white"
            } ${!scrolled ? "mb-24" : ""}`}
          >
            <Link href="/" className="hover:text-green-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-green-500 transition-colors">About Us</Link>
            <Link href="/gallery" className="hover:text-green-500 transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-green-500 transition-colors">Contact</Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 ">
              <Button
                size="icon"
                variant="ghost"
                className={`rounded-full font-bold transition-colors duration-500 ${
                  scrolled ? "text-green-500" : "text-white"
                }`}
              >
                <Phone className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className={`rounded-ful font-bold transition-colors duration-500 ${
                  scrolled ? "text-green-500" : "text-white"
                }`}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className={`rounded-full font-bold transition-colors duration-500 ${
                  scrolled ? "text-green-500" : "text-white"
                }`}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            className={`md:hidden transition-colors duration-500 ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu with Animation */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${scrolled ? "bg-white text-black" : "bg-black/95 text-white"}`}
      >
        {/* Cross Button for closing */}
        <button
          className={`absolute top-6 right-6 transition-colors duration-500 ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <X className="h-8 w-8" />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-bold">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-green-500">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-green-500">About Us</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-green-500">Gallery</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-500">Contact</Link>

          {/* Social Icons */}
          <div className="flex space-x-6 pt-6">
            <Phone className={`h-7 w-7 transition-colors duration-500 ${scrolled ? "text-green-500" : "text-white"}`} />
            <MessageCircle className={`h-7 w-7 transition-colors duration-500 ${scrolled ? "text-green-500" : "text-white"}`} />
            <Mail className={`h-7 w-7 transition-colors duration-500 ${scrolled ? "text-green-500" : "text-white"}`} />
          </div>
        </div>
      </div>
    </nav>
  )
}