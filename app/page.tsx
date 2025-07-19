import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/components/TestimonialsSection";
// import Footer from "@/components/Footer";
import AboutUsSection from "@/components/AboutUsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-space-grotesk">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <FeaturedProjects />
      {/* <AboutSection /> */}
      <ValuesSection />
      <TestimonialsSection />
      {/* <Footer /> */}
    </div>
  );
} 