"use client";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

const featuredProjects = [
  {
    src: "/home_featured/1.jpg",
    title: "Modern Architectural Marvel",
    category: "Commercial",
    content: (
      <div className="prose prose-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    ),
  },
  {
    src: "/home_featured/2.jpg",
    title: "Luxury Residential Complex",
    category: "Residential",
    content: (
      <div className="prose prose-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    ),
  },
  {
    src: "/home_featured/3.jpg",
    title: "Sustainable Office Space",
    category: "Commercial",
    content: (
      <div className="prose prose-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    ),
  },
  {
    src: "/home_featured/4.jpg",
    title: "Urban Development Project",
    category: "Mixed Use",
    content: (
      <div className="prose prose-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    ),
  },
  {
    src: "/home_featured/5.jpg",
    title: "Industrial Complex",
    category: "Industrial",
    content: (
      <div className="prose prose-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    ),
  },
];

const FeaturedProjects = () => {
  return (
    <section className="w-full bg-white pt-8 md:pt-12">
      {/* Section Title Row */}
      <div className="text-center mb-16">
        <h4 className="text-sm uppercase tracking-wider text-primary mb-3">Our Signature Works</h4>
        <h2 className="text-4xl font-bold text-heading mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Showcasing our most prestigious constructions across India, highlighting our commitment to excellence, innovation, and transformative design.
        </p>
      </div>

      {/* Apple Cards Carousel */}
      <div className="w-full flex justify-center px-4 -mt-20 md:px-12 lg:px-16"> 
      <Carousel
        items={featuredProjects.map((project, index) => (
          <Card key={index} card={project} index={index} layout={true} />
        ))}
      />
      </div>

    </section>
  );
};

export default FeaturedProjects; 