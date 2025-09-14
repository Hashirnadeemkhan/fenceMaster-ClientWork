import React from 'react'
import { HeroSection } from './components/Hero-section'
import { ContactBanner } from './components/contact-banner'
import { FencingSection } from './components/services-section'
import { GallerySection } from './components/gallery-section'
import { CTASection } from './components/cta-section'
import { ReviewsSection } from './components/reviews-section'
import { AboutSection } from './components/about-section'

const Home = () => {
  return (
    <div>
        <HeroSection
        title="Quality fencing service"
        subtitle="across London"
        description="Strong, stylish, and secure fencing solutions designed to protect your property and enhance its beauty."
        primaryButtonText="GET A QUOTE"
        secondaryButtonText="LEARN MORE"
      />
      <ContactBanner/>
      <FencingSection/>
      <AboutSection/>
      <GallerySection/>
      <ReviewsSection/>
      <CTASection/>
    </div>
  )
}

export default Home
