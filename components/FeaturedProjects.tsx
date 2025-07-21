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

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-white pt-8 md:pt-12 pb-20 md:pb-28">
      {/* Section Title Row */}
      <div className="mb-4 w-full max-w-none relative">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold font-cormorant text-gray-900 leading-tight mb-0 text-center heading-spacing">
            Featured Projects
          </h2>
          <div className="w-24 h-1 rounded-full bg-[#b45f1d] mt-1 mb-1"></div>
          <p className="text-lg text-gray-700 font-light max-w-xl text-center mb-8">
            Showcasing our most prestigious constructions across India
          </p>
        </div>
      </div>

      {/* Apple Cards Carousel */}
      <Carousel
        items={featuredProjects.map((project, index) => (
          <Card key={index} card={project} index={index} layout={true} />
        ))}
      />
    </section>
  );
} 