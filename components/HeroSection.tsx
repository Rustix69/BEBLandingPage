"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Add new array for home_hero images
const heroImages = [
  "/home_hero/1.jpg",
  "/home_hero/2.jpg",
  "/home_hero/3.jpg",
  "/home_hero/4.jpg",
  "/home_hero/5.jpg",
];

const HeroSection = () => {
  // Use new heroImages array
  const imageArray = heroImages;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % imageArray.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [imageArray.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image slider background */}
      {imageArray.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {imageArray.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-2 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-xl tracking-wider mb-4 text-center whitespace-nowrap font-cormorant heading-spacing">B.E.Billimoria & Co.</h1>
        {/* Solid White Divider Line with Animation */}
        <div className="w-32 h-1 rounded-full bg-white opacity-90 mb-3 grow-divider"></div>
        {/* Subtext */}
        <span className="block text-lg md:text-2xl font-semibold text-white mb-3 text-center tracking-wide font-cormorant">Civil Engineering Construction Contractors</span>
        {/* Footer Row */}
        <span className="block text-base md:text-lg text-white text-center tracking-wide italic">BUILDING Relationships <span className="not-italic mx-2">•</span> Since 1958</span>
      </div>
    </section>
  );
};

export default HeroSection;
