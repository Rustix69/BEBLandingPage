"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ProjectsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  
  const projects = [
    {
      category: "RESIDENTIAL",
      title: "'Planet Godrej' at Byculla",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern residential complex with sustainable design"
    },
    {
      category: "CORPORATE", 
      title: "'Information Technology Building for Tidel Park' at Vilankurichi",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "State-of-the-art IT facility"
    },
    {
      category: "UTILITY",
      title: "Badminton Indoor air- conditioned stadium, at Siri Fort Sports Complex, New Delhi",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Advanced sports facility with climate control"
    },
    {
      category: "SPECIAL ENGINEERING",
      title: "Turbhe Railway Station - For CIDCO",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern railway infrastructure project"
    }
  ];

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  {project.category}
                </div>
                
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-xs text-gray-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="text-sm"
          >
            Previous
          </Button>
          
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 text-sm rounded ${
                  page === currentPage
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="text-sm"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
