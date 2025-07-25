"use client";
import { Building, Briefcase, Home, Award, Users, MapPin, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LayoutGrid } from "@/components/ui/layout-grid";
import { TimelineDemo } from "./Milestone";

const businessSegments = [
  { icon: Building, title: "Engineering & Construction", desc: "Landmark civil and structural projects across India." },
  { icon: Home, title: "Real Estate", desc: "Premium residential and commercial developments." },
  { icon: Briefcase, title: "Infrastructure", desc: "Major infrastructure assets in transport and power." },
  { icon: Award, title: "Sustainability", desc: "Green, efficient, and responsible business practices." },
];

const milestones = [
  { year: 1958, label: "Founded" },
  { year: 1975, label: "First Landmark Project" },
  { year: 1995, label: "Pan-India Expansion" },
  { year: 2010, label: "Awarded National Excellence" },
  { year: 2024, label: "67+ Years of Excellence" },
];

// Images for the rotating hero (from about_profile_intro)
const overviewImages = [
  { src: "/about_profile_intro/1.jpg", alt: "Profile Intro 1" },
  { src: "/about_profile_intro/2.jpg", alt: "Profile Intro 2" },
  { src: "/about_profile_intro/3.jpg", alt: "Profile Intro 3" },
];

function useCountUp(target: number, duration = 1) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [isInView, target, duration]);
  return [count, ref] as const;
}

// CSV parsing helper
function parseAwardsCSV(csv: string) {
  const lines = csv.trim().split('\n');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const [id, title, desc] = lines[i].split(/,(.*?),(.+)/);
    result.push({ id: Number(id), title, desc });
  }
  return result;
}

// CSV parsing helper for accreditations
function parseAccreditationsCSV(csv: string) {
  const lines = csv.trim().split('\n');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const [id, title, desc] = lines[i].split(/,(.*?),(.+)/);
    result.push({ id: Number(id), title, desc });
  }
  return result;
}

function AwardsSlider({ awards }: { awards: {id: number, title: string, desc: string}[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : awards.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < awards.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    if (containerRef.current && cardRefs.current[currentIndex]) {
      const container = containerRef.current;
      const activeCard = cardRefs.current[currentIndex];
      
      if (activeCard) {
        try {
          const containerRect = container.getBoundingClientRect();
          const cardRect = activeCard.getBoundingClientRect();
          
          container.scrollTo({
            left: activeCard.offsetLeft - (containerRect.width - cardRect.width) / 2,
            behavior: 'smooth'
          });
        } catch (error) {
          console.error('Error scrolling awards slider:', error);
          // Fallback scrolling method
          container.scrollLeft = activeCard.offsetLeft;
        }
      }
    }
  }, [currentIndex, awards]);

  // Render nothing if awards array is empty
  if (awards.length === 0) {
    return null;
  }

  return (
    <div className="relative max-w-5xl mx-auto px-4 md:px-8">
      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev} 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button 
        onClick={handleNext} 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Awards Container */}
      <div 
        ref={containerRef} 
        className="flex gap-6 md:gap-8 overflow-hidden scroll-smooth"
      >
        {awards.map((award, i) => (
          <motion.div 
            key={award.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: i === currentIndex ? 1 : 0.7, 
              scale: i === currentIndex ? 1 : 0.95 
            }}
            transition={{ duration: 0.3 }}
            className={`flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-300 ${
              i === currentIndex ? 'scale-100' : 'scale-95 opacity-70'
            }`}
          >
            <div className="flex flex-col items-center">
              <img 
                src={`/about_profile_awards/${award.id}.jpg`} 
                alt={award.title} 
                className="w-24 h-24 object-contain rounded-xl mb-4 shadow-sm" 
              />
              <div className="text-lg font-bold font-cormorant text-gray-900 mb-2 text-center">
                {award.title}
              </div>
              <div className="text-sm text-gray-600 text-center">
                {award.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">House in the woods</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.
    </p>
  </div>
);
const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">House above the clouds</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Perched high above the world, this house offers breathtaking views and a unique living experience. It&apos;s a place where the sky meets home, and tranquility is a way of life.
    </p>
  </div>
);
const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Greens all over</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A house surrounded by greenery and nature&apos;s beauty. It&apos;s the perfect place to relax, unwind, and enjoy life.
    </p>
  </div>
);
const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Rivers are serene</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A house by the river is a place of peace and tranquility. It&apos;s the perfect place to relax, unwind, and enjoy life.
    </p>
  </div>
);
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ProfileSection() {
  const [awards, setAwards] = useState<{id: number, title: string, desc: string}[]>([]);
  const [accreditations, setAccreditations] = useState<{id: number, title: string, desc: string}[]>([]);
  useEffect(() => {
    fetch("/about_profile_awards/descriptions.csv")
      .then(res => res.text())
      .then(csv => setAwards(parseAwardsCSV(csv)));
    fetch("/about_profile_accreditations/descriptions.csv")
      .then(res => res.text())
      .then(csv => setAccreditations(parseAccreditationsCSV(csv)));
  }, []);

  return (
    <section className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Company Origin & History */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 px-4 md:px-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-cormorant mb-4 text-primary">Our Origin</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            The company has its origin in the partnership firm of <span className="font-semibold">B E Billimoria & Company</span> which was established by <span className="font-semibold">Mr. Beji E Billimoria</span> and <span className="font-semibold">Mr. Laxmidas K Kapadia</span>.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Our business is quality construction and our work speaks for itself.</p>
          <p className="text-base md:text-lg text-gray-600">
            Since the inception of the Company in 1958, B.E. Billimoria & Co. Limited has enjoyed solid, consistent growth and financial stability and is well known as one of India's leading, dynamic and diversified firms of Civil Engineering Construction Contractors.
          </p>
        </div>
      </div>

      {/* Philosophy & Reputation */}
      <div className="py-16 px-4 md:px-16 bg-white border-b border-gray-100">
        <div className="max-w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl ml-20">
            <h3 className="text-4xl font-bold font-cormorant mb-4 text-primary">Who We Are</h3>
            <p className="text-xl text-gray-700 mb-4">
              At B.E. Billimoria & Co. Limited we are not just capable General Contractors; we are partners committed to building an empowering environment for our clients through creative and value-oriented building solutions. Our business philosophy and our relationships are based on trust and integrity and these principles embody what we stand for as a Company, as Partners and as Individuals.
            </p>
            <p className="text-base text-gray-600">
              The Company's reputation and position of strength is founded on its history, its people, its passion for quality and customer service, and our outstanding client list.
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-[400px] md:h-[700px]">
              <LayoutGrid cards={cards} />
            </div>
          </div>
        </div>
      </div>

      {/* Our Strengths / Assets */}
      <div className="py-16 px-4 md:px-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold font-cormorant mb-8 text-primary text-center">Our Greatest Assets</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary">
              <h4 className="font-bold text-lg mb-2 text-primary">Reputation</h4>
              <p className="text-gray-700 text-base">Throughout the industry as an organisation built on honesty and integrity.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary">
              <h4 className="font-bold text-lg mb-2 text-primary">Superior Construction Quality</h4>
              <ul className="list-disc ml-5 text-gray-700 text-base">
                <li>Disciplined work methods, high standards of workmanship</li>
                <li>Mobilize resources and execute quality projects within stringent schedules</li>
                <li>Deploy sophisticated building systems and current innovations</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary">
              <h4 className="font-bold text-lg mb-2 text-primary">Financial Strength</h4>
              <p className="text-gray-700 text-base">Sound financial practices and an excellent credit rating among the highest in the country's construction industry.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary">
              <h4 className="font-bold text-lg mb-2 text-primary">People Power</h4>
              <p className="text-gray-700 text-base">Dedicated and experienced engineers, technical and supervisory staff empowered to get the job done. Motivated professionals who build exciting and challenging projects, explore new ideas, and are committed to quality and excellence.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary">
              <h4 className="font-bold text-lg mb-2 text-primary">Management Know-how</h4>
              <p className="text-gray-700 text-base">Long-term strategies formulated by managers who grew up in the business, bringing strength to each project.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary">
              <h4 className="font-bold text-lg mb-2 text-primary">Safety & Relationships</h4>
              <ul className="list-disc ml-5 text-gray-700 text-base">
                <li>Safety is a core value and a priority</li>
                <li>Clients and associates enjoy working with us</li>
                <li>Extensive knowledge to maximize client value and deliver on schedule without compromising quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Values & Objectives */}
      <div className="py-16 px-4 md:px-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold font-cormorant mb-8 text-primary text-center">Values & Objectives</h3>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">Integrity</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">Professional Response</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">Transparency</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">Innovation</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">Quality & Timeliness</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <h4 className="font-bold text-lg mb-2 text-primary">Our Objectives</h4>
              <ul className="list-disc ml-5 text-gray-700 text-base">
                <li>Continuously improve construction competitiveness</li>
                <li>Encourage lean construction and eliminate wastage</li>
                <li>Ensure safety and maximize stakeholder satisfaction</li>
                <li>Influence positive changes in the industry</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <h4 className="font-bold text-lg mb-2 text-primary">Our Approach</h4>
              <ul className="list-disc ml-5 text-gray-700 text-base">
                <li>Leverage new-age technology and collaborate with research organizations</li>
                <li>Promote technical expertise and responsible, cohesive teamwork</li>
                <li>Focus on stakeholder satisfaction and industry leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment & Future */}
      <div className="py-16 px-4 md:px-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold font-cormorant mb-4 text-primary">Commitment to Innovation & Excellence</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Committed to innovation, excellence and ethical business conduct, B.E. Billimoria & Co. Limited is ideally positioned to move confidently towards even greater achievement.
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Our greatest assets are our reputation and our people; our strengths lie in our technical expertise and in working responsibly and cohesively with our clients and our associates.
          </p>
        </div>
      </div>

      {/* MILESTONES / TIMELINE SECTION */}
      <div className="px-6 md:px-16 py-12 bg-white border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold font-cormorant text-heading mb-8 text-center heading-spacing">Our Milestones</h2>
        <TimelineDemo />
      </div>

      {/* AWARDS & CERTIFICATIONS SECTION */}
      <div className="w-full px-0 md:px-0 py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold font-cormorant text-heading mb-8 text-center tracking-tight">
            Awards & Certifications
          </h2>
          <AwardsSlider awards={awards} />
        </div>
      </div>

      {/* Accreditations Section (premium, wide, visually stunning) */}
      <div className="w-full px-0 md:px-0 py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold font-cormorant text-heading mb-12 text-center tracking-tight heading-spacing">Our Accreditations</h2>
          {/* Accreditation Images Row */}
          <div className="flex flex-row gap-16 justify-center mb-10 w-full">
            {accreditations.map((item, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <Image src={`/about_profile_accreditations/${item.id}.jpg`} alt={item.title} width={200} height={100} className="rounded-2xl shadow-xl object-contain bg-white border border-gray-200" />
                <div className="mt-4 text-lg font-bold text-gray-900 font-cormorant accent">{item.title}</div>
                <div className="text-base text-gray-500 text-center">{item.desc}</div>
              </div>
            ))}
          </div>
          {/* Accreditation Text Content */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              We have been certified by <span className="text-[#b45f1d] font-semibold">BVQI</span>, wherein the <span className="font-semibold">QMS, EMS & BS OHSAS</span> systems have been combined.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold font-cormorant mb-3 text-gray-900">Quality Management System</h3>
              <p className="text-gray-700 text-base">
                ISO 9001:2015 certification demonstrates our commitment to consistent quality and customer satisfaction.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold font-cormorant mb-3 text-gray-900">Environmental Management</h3>
              <p className="text-gray-700 text-base">
                ISO 14001:2015 certification showcases our dedication to environmental responsibility and sustainable practices.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold font-cormorant mb-3 text-gray-900">Occupational Health & Safety</h3>
              <p className="text-gray-700 text-base">
                BS OHSAS 18001:2007 certification reflects our commitment to workplace safety and employee well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// RotatingImage component
function RotatingImage({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="relative w-[420px] h-[340px] md:w-[520px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <Image src={images[index].src} alt={images[index].alt} fill className="object-cover rounded-3xl" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 