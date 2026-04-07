import Hero from '../components/sections/Hero'
import {
  TrustStrip,
  ServicesGrid,
  SectorsSection,
  GallerySection,
  WhyUs,
  ProjectsGrid,
  StatsBand,
  ProcessSection,
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
      <SectorsSection />
      <GallerySection />
      <WhyUs />
      <ProjectsGrid />
      <StatsBand />
      <ProcessSection />
      <Testimonials />
      <Brands />
      <CtaBanner />
      <ContactSection />
    </>
  )
}