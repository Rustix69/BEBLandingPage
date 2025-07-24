import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutUsSection from "@/components/AboutUsSection";
import WhereWeExist from "@/components/WhereWeExist";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-space-grotesk">
      {/* <Header /> */}
      <HeroSection />
      <AboutUsSection />
      <FeaturedProjects />
      <WhereWeExist />
      <TestimonialsSection />
    </div>
  );
} 