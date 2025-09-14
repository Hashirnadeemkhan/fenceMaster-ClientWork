"use client"

import type React from "react"

import { useState } from "react"
import { HeroSection } from "../components/Hero-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Chrome, Triangle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    date: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          postcode: "",
          service: "",
          date: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch  {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      <HeroSection
        title="Get in Touch"
        subtitle="Contact Us Today"
        description="Ready to transform your property with premium fencing? Contact our expert team for a free consultation and quote."
        primaryButtonText="CALL NOW"
        secondaryButtonText="EMAIL US"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left side - Contact Information */}
            <div className="bg-gray-200 h-96 p-12 rounded-lg">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 ">GET IN TOUCH</h2>
                <div className="text-3xl font-bold text-gray-900 mb-4">+44 7869 457259</div>
                <div className="text-lg text-gray-700 break-words">azeemshaikh26@gmail.com</div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">CONNECT WITH US</h3>
                <div className="flex justify-center gap-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <Facebook className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                    <Chrome className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                    <Triangle className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="pl-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">SEND US A MESSAGE</h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-lg">Your name:</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-12 border-2 border-gray-300 rounded-md text-lg px-4"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-lg">Email:</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 border-2 border-gray-300 rounded-md text-lg px-4"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-lg">Phone:</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 border-2 border-gray-300 rounded-md text-lg px-4"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-lg">Postcode:</label>
                  <Input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full h-12 border-2 border-gray-300 rounded-md text-lg px-4"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-lg">Service required:</label>
                  <Input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 border-2 border-gray-300 rounded-md text-lg px-4"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-lg">Preferred date:</label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full h-12 border-2 border-gray-300 rounded-md text-lg px-4"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-lg">Tell us more:</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-md h-32 resize-none text-lg px-4 py-3"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-12 py-4 rounded-md font-bold text-lg tracking-wide"
                  >
                    {isSubmitting ? "SENDING..." : "SEND NOW"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
