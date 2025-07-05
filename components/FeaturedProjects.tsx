"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Library",
    location: "Diamond Valley, Victoria",
    description: "Commercial renovation with custom-built stage, community spaces, and outdoor deck."
  },
  {
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "University",
    location: "Melbourne, Victoria",
    description: "Health sciences facility for cutting-edge research programs."
  },
  {
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Office",
    location: "Sydney, New South Wales",
    description: "Modern headquarters with open collaboration spaces and sustainable design."
  },
  {
    image: "/completed/aparna.webp",
    title: "Aparna",
    location: "Hyderabad, Telangana",
    description: "Premium residential towers with world-class amenities."
  },
  {
    image: "/completed/ramada.jpeg",
    title: "Ramada Hotel",
    location: "Mumbai, Maharashtra",
    description: "Luxury hotel project with modern architecture."
  },
  {
    image: "/completed/stadium.jpg",
    title: "Stadium",
    location: "Pune, Maharashtra",
    description: "State-of-the-art sports stadium with advanced facilities."
  }
];

const getVisibleIndices = (center: number, total: number) => {
  // Always return [left, center, right] indices, circular
  const left = (center - 1 + total) % total;
  const right = (center + 1) % total;
  return [left, center, right];
};

export default function FeaturedProjects() {
  const [center, setCenter] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle window resize and initial width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCenter((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  // Pause auto-rotate on hover
  const pauseRotation = () => intervalRef.current && clearInterval(intervalRef.current);
  const resumeRotation = () => {
    intervalRef.current = setInterval(() => {
      setCenter((prev) => (prev + 1) % projects.length);
    }, 4000);
  };

  // Navigation
  const goLeft = () => setCenter((prev) => (prev - 1 + projects.length) % projects.length);
  const goRight = () => setCenter((prev) => (prev + 1) % projects.length);

  const visible = getVisibleIndices(center, projects.length);

  return (
    <section className="w-full bg-white pt-8 md:pt-12 pb-20 md:pb-28 flex flex-col items-center">
      {/* Section Title Row */}
      <div className="mb-8 w-full max-w-7xl relative px-4">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 leading-tight mb-0 text-center">
            Featured Projects
          </h2>
          <div className="w-24 h-1 rounded-full bg-[#b45f1d] mt-2 mb-2"></div>
          <p className="text-lg text-gray-700 font-light max-w-xl text-center">
            Showcasing our most prestigious constructions across India
          </p>
        </div>
      </div>
      {/* Explore Projects button above carousel */}
      <div className="w-full max-w-7xl flex justify-end px-4 mb-6">
        <Link href="/projects" passHref legacyBehavior>
          <button
            className="explore-btn font-playfair text-[#b45f1d] text-lg md:text-xl font-bold relative px-2 py-1 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b45f1d] cursor-pointer group"
            style={{ background: 'none', border: 'none', boxShadow: 'none' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Projects
              <ChevronRight className="w-6 h-6 ml-1 transition-colors duration-300 group-hover:text-[#b45f1d] text-[#b45f1d]" />
            </span>
            {/* Animated underline */}
            <span className="underline-anim absolute left-0 bottom-0 w-full h-[2.5px] bg-[#b45f1d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
          </button>
        </Link>
        <style jsx>{`
          .explore-btn {
            outline: none;
          }
          .explore-btn:hover {
            transform: scale(1.045);
          }
          .underline-anim {
            transition: transform 0.3s cubic-bezier(.4,0,.2,1);
          }
          .group:hover .underline-anim {
            transform: scaleX(1);
          }
        `}</style>
      </div>
      {/* Carousel */}
      <div
        className="relative flex items-center justify-center w-full max-w-7xl h-[420px] md:h-[520px] lg:h-[600px]"
        onMouseEnter={pauseRotation}
        onMouseLeave={resumeRotation}
      >
        {/* Left Arrow */}
        <button
          onClick={goLeft}
          className="absolute left-0 z-20 bg-white/80 border border-gray-300 hover:bg-[#b45f1d] hover:text-white rounded-full shadow-lg p-2 transition-colors top-1/2 -translate-y-1/2"
          aria-label="Previous project"
          style={{width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <ChevronLeft className="w-7 h-7" />
        </button>
        {/* Cards - flex row, always 3 visible, center overlaps sides */}
        <div className="flex w-full h-full items-center justify-center relative overflow-x-visible">
          {projects.map((project, idx) => {
            // Determine position: -1 (left), 0 (center), 1 (right), or offscreen
            let pos = (idx - center + projects.length) % projects.length;
            if (pos > 2) pos -= projects.length; // wrap for circular
            if (pos < -1) pos += projects.length;
            if (pos < -1 || pos > 1) return null; // Only render left, center, right
            const isCenter = pos === 0;
            const width = '70%';
            const minWidth = '320px';
            const margin = '-21%';
            // Animation states
            const x = pos * 0.38 * windowWidth; // Use windowWidth state instead of window.innerWidth
            const scale = 1;
            const opacity = isCenter ? 1 : 0.85;
            const blur = isCenter ? 'none' : 'blur(1.5px)';
            const z = isCenter ? 20 : 10;
            return (
              <AnimatePresence key={project.title}>
                <motion.div
                  key={project.title}
                  initial={{ x: pos * 800, opacity: 0, scale: 0.95 }}
                  animate={{ x, opacity, scale, filter: blur, zIndex: z, boxShadow: isCenter ? '0 8px 40px 0 rgba(0,0,0,0.12)' : '0 2px 12px 0 rgba(0,0,0,0.08)' }}
                  exit={{ x: pos < 0 ? -1200 : 1200, opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                  className={`absolute flex flex-col items-center justify-end rounded-3xl shadow-2xl cursor-pointer aspect-[2/3] bg-white border border-gray-200
                    ${isCenter ? 'z-20 ring-4 ring-yellow-300 ring-opacity-40' : 'z-10'}
                  `}
                  style={{
                    width,
                    minWidth,
                    height: '100%',
                    marginLeft: pos === -1 ? 0 : margin,
                    marginRight: pos === 1 ? 0 : margin,
                  }}
                >
                  {/* Image as background */}
                  <div className="w-full h-3/4 rounded-t-3xl overflow-hidden flex items-center justify-center relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                      draggable={false}
                      onError={e => { e.currentTarget.src = 'https://via.placeholder.com/400x225?text=No+Image'; }}
                    />
                    {/* Glassmorphic overlay on center card hover */}
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col justify-end items-center bg-white/30 backdrop-blur-md rounded-t-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="w-full p-8 pb-4 flex flex-col items-center">
                          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center drop-shadow-lg">{project.title}</h3>
                          <div className="text-lg text-gray-700 mb-2 text-center">{project.location}</div>
                          <button className="mt-2 px-6 py-2 rounded-full bg-[#b45f1d] text-white font-semibold shadow-lg hover:bg-[#934616] transition-colors">View Project</button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  {/* Project info always visible below image */}
                  <div className="w-full p-6 rounded-b-3xl flex flex-col gap-2 bg-white h-1/4 justify-center items-center">
                    <div className="text-gray-700 text-lg text-center font-medium">{project.description}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
        {/* Right Arrow */}
        <button
          onClick={goRight}
          className="absolute right-0 z-20 bg-white/80 border border-gray-300 hover:bg-[#b45f1d] hover:text-white rounded-full shadow-lg p-2 transition-colors top-1/2 -translate-y-1/2"
          aria-label="Next project"
          style={{width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-4 mt-8">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCenter(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none
              ${center === idx ? 'bg-white opacity-100 shadow-lg' : 'bg-white/60 opacity-60'}
            `}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 