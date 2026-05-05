import BenefitsSection from "../components/BenefitsSection";
import CtaSection from "../components/CtaSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LogoBar from "../components/LogoBar";
import Navbar from "../components/Navbar";
import ProblemSection from "../components/ProblemSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      {/* Hero — dark header + navigation */}
      <header className="hero-bg relative">
        <Navbar />
        <HeroSection />
      </header>

      <main>
        {/* Social proof */}
        <LogoBar />

        {/* Problem */}
        <ProblemSection />

        {/* Features */}
        <FeaturesSection />

        {/* Benefits */}
        <BenefitsSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA / Pricing */}
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
