import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import WorkShowcase from '../components/home/WorkShowcase'
import TestimonialsSection from '../components/home/TestimonialsSection'
import ContactStrip from '../components/home/ContactStrip'
import BrandSection from '../components/home/BrandSection'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Niladri Raptan - Professional Video Editor</title>
        <meta
          name="description"
          content="Professional video editor specializing in cinematic wedding films, documentaries, corporate videos, and social media content. Transform your vision into stunning visual stories."
        />
      </Helmet>

      <div className="space-y-32">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BrandSection />
        <WorkShowcase />
        <TestimonialsSection />
        <ContactStrip />
      </div>
    </>
  )
}

export default Home