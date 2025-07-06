"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// CSV parsing helper
function parseCSV(csv: string) {
  const lines = csv.trim().split('\n');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const [id, description] = lines[i].split(/,(.+)/); // split only on first comma
    result.push({ id: Number(id), description });
  }
  return result;
}

// We'll use 3 featured projects for now
const NUM_FEATURED = 3;
const defaultProjects = [
  { image: "/home_featured/1.jpg", description: "" },
  { image: "/home_featured/2.jpg", description: "" },
  { image: "/home_featured/3.jpg", description: "" },
];

const getVisibleIndices = (center: number, total: number) => {
  // Always return [left, center, right] indices, circular
  const left = (center - 1 + total) % total;
  const right = (center + 1) % total;
  return [left, center, right];
};

export default function FeaturedProjects() {
  const [center, setCenter] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [projects, setProjects] = useState(defaultProjects);

  // Fetch descriptions from CSV
  useEffect(() => {
    fetch("/home_featured/descriptions.csv")
      .then(res => res.text())
      .then(csv => {
        const descs = parseCSV(csv);
        setProjects(
          descs.map((desc, i) => ({
            image: `/home_featured/${desc.id}.jpg`,
            description: desc.description
          }))
        );
      });
  }, []);

  // Auto-rotate
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCenter((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [projects.length]);

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

  // Only show visible cards (1 on mobile, 3 on desktop)
  const getResponsiveVisible = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return [center];
    }
    return getVisibleIndices(center, projects.length);
  };
  const visibleIndices = getResponsiveVisible();

  return (
    <section className="w-full bg-white pt-8 md:pt-12 pb-20 md:pb-28 flex flex-col items-center">
      {/* Section Title Row */}
      <div className="mb-4 w-full max-w-none relative">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold font-cormorant text-gray-900 leading-tight mb-0 text-center heading-spacing">
            Featured Projects
          </h2>
          <div className="w-24 h-1 rounded-full bg-[#b45f1d] mt-1 mb-1"></div>
          <p className="text-lg text-gray-700 font-light max-w-xl text-center">
            Showcasing our most prestigious constructions across India
          </p>
        </div>
      </div>
      {/* Explore Projects button above carousel */}
      <div className="w-full max-w-none flex justify-end mb-0">
        <Link href="/projects" passHref legacyBehavior>
          <button
            className="explore-btn font-cormorant text-[#b45f1d] text-lg md:text-xl font-bold relative px-2 py-1 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b45f1d] cursor-pointer group"
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
        className="relative flex items-center justify-center w-full max-w-none h-[420px] md:h-[520px] lg:h-[600px] overflow-x-hidden"
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
        <div className="flex w-full h-full items-center justify-center relative overflow-x-visible">
          {projects.map((project, idx) => {
            let pos = (idx - center + projects.length) % projects.length;
            if (pos > 2) pos -= projects.length;
            if (pos < -1) pos += projects.length;
            if (pos < -1 || pos > 1) return null;
            const isCenter = pos === 0;
            const width = '45%';
            const minWidth = '320px';
            const margin = '-12%';
            // Animation states
            let x = pos * 0.38 * (typeof window !== 'undefined' ? Math.min(window.innerWidth, 1280) : 1280); // Clamp to 1280px
            const scale = 1;
            const opacity = isCenter ? 1 : 0.85;
            const blur = isCenter ? 'none' : 'blur(1.5px)';
            const z = isCenter ? 20 : 10;
            return (
              <AnimatePresence key={idx}>
                <motion.div
                  key={idx}
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
                      alt={`Featured Project ${idx + 1}`}
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
                          {/* No title/location, just description */}
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