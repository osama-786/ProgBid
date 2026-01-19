import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsCounterSection from "@/components/StatsCounterSection";
import WorldMapSection from "@/components/WorldMapSection";
import ProgbidDifference from "@/components/ProgbidDifference";
import HowItWorksSection from "@/components/HowItWorksSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WorldMapSection/>
      <SolutionsSection />
      <ProgbidDifference/>
      <StatsCounterSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;