"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => 
  //       (prevIndex + 1) % imageArray.length
  //     );
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, [imageArray.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static background image - using 4th image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/home_hero/3.jpg)`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Navigation Bar Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo and Navigation Links together */}
          <div className="flex items-center gap-28">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/footer/logo.png" alt="BEBL Constructions" width={220} height={150} className="brightness-0 invert" />
            </Link>
            
            {/* Navigation Links beside logo */}
            <nav className="hidden md:flex items-center space-x-32 text-white text-sm font-light tracking-wider">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 hover:underline hover:opacity-80 transition-opacity focus:outline-none underline-offset-4">
                    About Us
                    {/* Chevron Down Icon */}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-white/80 text-black backdrop-blur-md border-none shadow-lg">
                  <DropdownMenuItem asChild className="hover:bg-white/30 hover:text-black focus:bg-white/30 focus:text-black cursor-pointer hover:underline underline-offset-4">
                    <Link href="/about/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-white/30 hover:text-black focus:bg-white/30 focus:text-black cursor-pointer hover:underline underline-offset-4">
                    <Link href="/about/management">Management Team</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/projects" className="flex items-center gap-1 hover:underline underline-offset-4 hover:opacity-80 transition-opacity">
                Projects
                {/* North East Arrow Icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </Link>
              <Link href="/careers" className="hover:underline underline-offset-4 hover:opacity-80 transition-opacity">
                Careers
              </Link>
              <Link href="/contact" className="hover:underline underline-offset-4 hover:opacity-80 transition-opacity">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full px-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start -mt-20 -ml-8">
          {/* Left Side - Main Text */}
          <div className="space-y-8">
            {/* Large BEBL Text */}
            <div className="space-y-2">
              <h1 className="text-9xl lg:text-[12rem] xl:text-[14rem] font-light text-white leading-none tracking-tighter">
                BEBL
              </h1>
              <div className="ml-4 lg:ml-8 space-y-2">
                <h2 className="text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-none -ml-6 tracking-tighter">
                  CONSTRUCTION
                </h2>
              </div>
            </div>
            
            {/* WE BUILD text in single line */}
            <div className="ml-4 lg:ml-8 text-white text-xl lg:text-xl -mt-2 font-light tracking-wider">
              WE BUILD MODERN BUILDINGS IN INDIA • Since 1958
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
