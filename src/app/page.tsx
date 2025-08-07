// File: app/page.tsx (Landing Page)
import HeroSection from "../components/HeroSection";
import BusinessesSection from "../components/BusinessesSection";
import FeaturesSection from "../components/FeaturesSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <BusinessesSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </>
  );
}