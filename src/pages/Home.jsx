import Hero from '../components/sections/Hero'
import {
  TrustStrip,
  WelcomeSection,
  ServicesGrid,
  SectorsSection,
  GallerySection,
  WhyUs,
  ProjectsGrid,
  StatsBand,
  ProcessSection,
  IntegratedKits,
  OurClients,
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
      <WelcomeSection />
      <ServicesGrid />
      <SectorsSection />
      <GallerySection />
      <WhyUs />
      <ProjectsGrid />
      <StatsBand />
      <ProcessSection />
      <IntegratedKits />
      <OurClients />
      <Testimonials />
      <Brands />
      <CtaBanner />
      <ContactSection />
    </>
  )
}