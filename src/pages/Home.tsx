import Seo from '@/components/Seo';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import Services from '@/components/sections/Services';
import AboutTeaser from '@/components/sections/AboutTeaser';
import Testimonials from '@/components/sections/Testimonials';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Seo
        description="Expert full-stack engineering and DevOps from Bettendorf, IA (Quad Cities). Building, shipping, and scaling software that's reliable by design."
        canonical="/"
      />
      <Hero />
      <Philosophy />
      <Services />
      <AboutTeaser />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
