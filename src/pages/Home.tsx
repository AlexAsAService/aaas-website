import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import Services from '../components/sections/Services';
import AboutTeaser from '../components/sections/AboutTeaser';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <AboutTeaser />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
