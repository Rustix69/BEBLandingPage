"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Bestbuild transformed our office space beyond our expectations. The attention to detail and commitment to quality were evident throughout the entire project. The team worked closely with us to ensure our vision was realized, and we couldn't be happier with the result.",
      author: "Jane D.",
      role: "CEO of Innovate Corp"
    },
    {
      quote: "Working with Bestbuild was an exceptional experience. Their professionalism, expertise, and dedication to delivering on time and within budget made our commercial renovation seamless and stress-free.",
      author: "Michael S.",
      role: "Operations Manager, TechStart"
    },
    {
      quote: "The quality of craftsmanship and attention to our specific needs was outstanding. Bestbuild created a space that truly reflects our company culture and enhances our team's productivity.",
      author: "Sarah L.",
      role: "Director of Facilities, GlobalTech"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-12">
            Client Testimonials
          </h2>
          
          <div className="space-y-8">
            <div className="text-sm font-space-grotesk tracking-wider">
              {testimonials[currentTestimonial].author}
            </div>
            <div className="text-xs font-space-grotesk opacity-90">
              {testimonials[currentTestimonial].role}
            </div>
            
            <blockquote className="text-lg md:text-xl font-space-grotesk leading-relaxed italic">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
          </div>
          
          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border border-white/30 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border border-white/30 text-white hover:bg-white/20"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
