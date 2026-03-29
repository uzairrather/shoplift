import Hero from '../components/sections/Hero'
import {
  TrustStrip,
  ServicesGrid,
  GallerySection, 
  WhyUs,
  ProjectsGrid,
  StatsBand,
  Testimonials,
  Brands,
  CtaBanner,
  ContactSection,
} from '../components/sections/HomeSections'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <GallerySection />
      <WhyUs />
      <ProjectsGrid />
      <StatsBand />
      <Testimonials />
      <Brands />
      <CtaBanner />
      <ContactSection />
    </>
  )
}
