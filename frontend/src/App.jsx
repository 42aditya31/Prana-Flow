import React from 'react'
import LandingHeroSection from './components/LandingHeroSection'
import LandingFeature from './components/LandingFeature'
import LandingBenefits from './components/LandingBenefits'
import FeatureBenefits from './components/FeatureBenefits'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <>
        <LandingHeroSection />
        {/* <LandingFeature/>
        <LandingBenefits/> */}
        <FeatureBenefits/>
        <Testimonial/>
        <CallToAction/>
        <Footer/>
      </>
    </div>
  )
}

export default App
