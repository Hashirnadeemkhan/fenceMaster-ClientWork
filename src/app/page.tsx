import React from 'react'
import { HeroSection } from './components/Hero-section'
import { ContactBanner } from './components/contact-banner'
import { WhatsAppFloat } from './components/whatsapp-float'
import { FencingSection } from './components/services-section'
import { GallerySection } from './components/gallery-section'
import { CTASection } from './components/cta-section'
import { ReviewsSection } from './components/reviews-section'
import { AboutSection } from './components/about-section'

const Home = () => {
  return (
    <div>
  
      <HeroSection/>
      <ContactBanner/>
      <WhatsAppFloat/>
      {/* <ServicesSection/> */}
      <FencingSection/>
      <AboutSection/>
      <GallerySection/>
      <ReviewsSection/>
      <CTASection/>
    </div>
  )
}

export default Home
