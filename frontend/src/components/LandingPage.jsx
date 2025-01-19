import React from 'react'
import LandingHeroSection from './LandingHeroSection'
import FeatureBenefits from './FeatureBenefits'
import Testimonial from './TesimonialMain'
import CallToAction from './CallToAction'
import Footer from './FooterMain'


const LandingPage = () => {
  return (
   <>
   <LandingHeroSection/>
   <FeatureBenefits/>
   <Testimonial />
   <Footer/>
   </>
  )
}

export default LandingPage
