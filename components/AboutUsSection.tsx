'use client';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "@/lib/utils";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const foundingYear = 1958;
const currentYear = new Date().getFullYear();
const years = currentYear - foundingYear;

export default function AboutUsSection() {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimating = useRef(false);

  // Count up animation for stats
  const statsRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(statsRef, { once: true });
  const [counts, setCounts] = useState([0, 0, 0]);
  useEffect(() => {
    if (!isInView) return;
    const targets = [67, 200, 5000];
    const durations = [1000, 1000, 1000];
    targets.forEach((target, i) => {
      let start = 0;
      const step = Math.ceil(target / (durations[i] / 16));
      const interval = setInterval(() => {
        start += step;
        setCounts(prev => {
          const next = [...prev];
          next[i] = Math.min(start, target);
          return next;
        });
        if (start >= target) clearInterval(interval);
      }, 16);
    });
  }, [isInView]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 100 && rect.bottom > 100) {
        if (!isAnimating.current) {
          isAnimating.current = true;
          setCount(0);
          let start = 0;
          const end = years;
          const duration = 1200;
          const stepTime = Math.max(Math.floor(duration / end), 20);
          intervalRef.current = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end && intervalRef.current) {
              clearInterval(intervalRef.current);
              isAnimating.current = false;
            }
          }, stepTime);
        }
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          isAnimating.current = false;
        }
        setCount(0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-6 md:py-12 flex flex-col md:flex-row items-center justify-center bg-white overflow-x-hidden px-4 md:px-12 lg:px-16"
      style={{ boxSizing: 'border-box' }}
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-start h-full max-w-xl md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto md:mx-0 md:pl-8 lg:pl-12 xl:pl-16 z-10">
        <h4 className="text-sm uppercase tracking-wider text-primary mb-3 font-bold">About Us</h4>
        <h2 className="text-4xl md:text-5xl font-bold font-cormorant text-gray-900 leading-tight mb-3 heading-spacing">B.E. Billimoria & Co.</h2>
        <p className="text-gray-700 text-lg max-w-xl mb-8">
          With a legacy spanning over five decades, B.E. Billimoria & Company Ltd. stands as a symbol of engineering excellence and trust. Renowned for delivering landmark projects across India, BEBL combines innovation, quality, and integrity to create world-class infrastructure. Our commitment to precision, safety, and sustainability has shaped skylines and empowered communities, making us a preferred partner for complex and iconic developments.
        </p>
        {/* Animated Stats Row (with count up animation) */}
        <div ref={statsRef} className="flex gap-8 mb-8 justify-center">
          {[
            { value: 67, label: "Years in Business" },
            { value: 200, label: "Projects Delivered" },
            { value: 5000, label: "Employees" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold" style={{ color: '#b45f1d' }}>{counts[i]}+</span>
              <span className="text-gray-600 text-sm md:text-base">{stat.label}</span>
            </div>
          ))}
        </div>
        {/* End Animated Stats Row */}
        <div>
          <Link href="/about" passHref legacyBehavior>
            <button
              className="explore-btn font-playfair text-[#b45f1d] text-lg md:text-xl font-bold relative px-2 py-1 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b45f1d] cursor-pointer group"
              style={{ background: 'none', border: 'none', boxShadow: 'none' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Know More
                <ArrowUpRight className="w-6 h-6 ml-1 transition-colors duration-300 group-hover:text-[#b45f1d] text-[#b45f1d]" />
              </span>
              {/* Animated underline */}
              <span className="underline-anim absolute left-0 bottom-0 w-full h-[2.5px] bg-[#b45f1d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </button>
          </Link>
        </div>
      </div>
      {/* Right: Bento Grid */}
      <div className="flex-1 flex items-center justify-center h-full max-w-3xl mx-auto md:mx-0 md:pr-8 lg:pr-12 xl:pr-16 relative z-10 md:ml-12 lg:ml-16 xl:ml-20">
        <BentoGrid className="w-full max-w-3xl mx-auto md:auto-rows-[18rem]">
          {bentoItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
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
    </section>
  );
}

// Skeleton and bentoItems for the grid
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent bg-neutral-100"></div>
);
const bentoItems = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
]; 