"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { HeroSection } from "../components/Hero-section"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog")
        if (res.ok) {
          const data = await res.json()
          setBlogs(data)
        } else {
          console.error("Failed to fetch blogs")
        }
      } catch (err) {
        console.error("Error fetching blogs:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <div>
      {/* ✅ Hero Section */}
      <HeroSection
        title="Our Blog"
        subtitle="Latest Updates & Insights"
        description="Stay updated with expert tips, project stories, and industry news from our fencing professionals."
        primaryButtonText="READ ARTICLES"
        secondaryButtonText="CONTACT US"
      />

      {/* ✅ Blog Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Latest Blogs
            </h2>
            <p className="text-gray-700 text-lg">
              Dive into our latest posts to learn more about fencing trends, tips,
              and guides to improve your outdoor spaces.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gray-600 text-lg">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">
              No blogs available right now.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-all"
                >
                  <Image
                    src={blog.imageUrl || "/placeholder.svg"}
                    width={500}
                    height={300}
                    alt={blog.title}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {blog.title}
                    </h3>
                    <div
  className="text-gray-600 mt-2 line-clamp-3 prose prose-gray max-w-none"
  dangerouslySetInnerHTML={{ __html: blog.content }}
></div>
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                      >
                        Read More →
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
