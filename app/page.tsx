import { HeroBanner } from '@/components/home/HeroBanner'
import { HowItWorks } from '@/components/home/HowItWorks'
import { ProductHighlights } from '@/components/home/ProductHighlights'
import { StickyCTA } from '@/components/home/StickyCTA'
import { TestimonialSlider } from '@/components/home/Testemonials'
import { WhyLiftMe } from '@/components/home/WhyLiftMe'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <ProductHighlights />
      <HowItWorks />
      <WhyLiftMe />
      <TestimonialSlider />
      <StickyCTA />
    </div>
  )
}

export default HomePage
