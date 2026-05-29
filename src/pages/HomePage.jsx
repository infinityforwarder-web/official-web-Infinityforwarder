import Hero from '../components/Hero';
import SocialConnect from '../components/SocialConnect';
import ServiceCarousel from '../components/ServiceCarousel';
import ServicesPreview from '../components/ServicesPreview';
import WhyUs from '../components/WhyUs';
import HomeCta from '../components/HomeCta';
import AnimatedStrip from '../components/AnimatedStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimatedStrip />
      <div className="home-social-desktop d-none d-lg-block">
        <SocialConnect />
      </div>
      <ServiceCarousel />
      <div className="home-social-mobile d-lg-none">
        <SocialConnect />
      </div>
      <ServicesPreview />
      <WhyUs />
      <HomeCta />
    </>
  );
}
