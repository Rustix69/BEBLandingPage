"use client";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office interior"
                className="rounded-lg object-cover h-48 w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Collaborative workspace"
                className="rounded-lg object-cover h-48 w-full"
              />
            </div>
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Commercial fitout project"
              className="rounded-lg object-cover h-48 w-full"
            />
          </div>
          
          <div className="space-y-6">
            <div className="text-sm font-space-grotesk text-accent tracking-wider uppercase">
              Welcome to Bestbuild
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-primary leading-tight">
              Pioneering Quality and Excellence in Every Project
            </h2>
            
            <div className="space-y-4 text-gray-700 font-space-grotesk leading-relaxed">
              <p>
                Bestbuild is a premier commercial fitout company that specialises in creating innovative and 
                functional workspaces that inspire creativity and productivity.
              </p>
              
              <p>
                With 30 years of combined experience in the industry, we have developed a reputation for 
                excellence in delivering high-quality fitout solutions that align with your business objectives 
                and brand identity.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-space-grotesk px-8 py-3 rounded-full"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
