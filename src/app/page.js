
import CTASection from '@/component/CTASection'
import Footer from '@/component/Footer'
import HowItWorks from '@/component/HowItWork'
import InspectionReports from '@/component/Inspectionreports'
import Navbar from '@/component/Navbar'
import Testimonials from '@/component/Testimonials'
import HeroSection from '@/section/hero'
import ServicesSection from '@/section/service'
import StatsSection from '@/section/states'

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <InspectionReports/>
      <HowItWorks/>
      <StatsSection/>
      <Testimonials/>
      <CTASection/>
      <Footer/>
    </>
  )
}