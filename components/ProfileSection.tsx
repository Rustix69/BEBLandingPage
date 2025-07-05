"use client";
import { Building, Briefcase, Home, Award, Users, MapPin, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

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

// Awards & Certifications data (placeholder)
const awards = [
  { image: "/iso.jpg", title: "ISO 9001:2015", desc: "Quality Management" },
  { image: "/iso.jpg", title: "ISO 14001:2015", desc: "Environmental Management" },
  { image: "/iso.jpg", title: "BS OHSAS 18001:2007", desc: "Occupational Health & Safety" },
  { image: "/logo.png", title: "Best Infra Award", desc: "National Infrastructure Excellence" },
  { image: "/logo.png", title: "Safety Star", desc: "Outstanding Safety Record" },
  { image: "/logo.png", title: "Innovation Leader", desc: "Pioneering Construction Methods" },
];

// Images for the rotating hero
const overviewImages = [
  { src: "/completed/stadium.jpg", alt: "Stadium" },
  { src: "/completed/aparna.webp", alt: "Aparna" },
  { src: "/completed/ramada.jpeg", alt: "Ramada" },
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

export default function ProfileSection() {
  return (
    <section className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative min-h-[350px] md:min-h-[450px] flex items-center justify-center bg-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/hero-bg.jpg" alt="Hero Background" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          {/* Logo removed as requested */}
          <h1 className="text-4xl md:text-6xl font-bold font-playfair text-white mb-4 drop-shadow-lg">
            Trusted Legacy of Engineering Excellence
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-2 max-w-2xl mx-auto drop-shadow">
            Building India's future since 1958
          </p>
        </motion.div>
      </div>

      {/* COMPANY OVERVIEW SECTION */}
      <div className="relative flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-12 bg-white">
        {/* Image/Collage */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <RotatingImage images={overviewImages} />
        </motion.div>
        {/* Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-4">
            Over Six Decades of Excellence
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-xl">
            B.E. Billimoria & Company Ltd. has delivered landmark projects that shape skylines and empower communities. Our commitment to quality, safety, and sustainability has made us a trusted partner for complex and iconic developments across India.
          </p>
          <div className="flex gap-8 mb-2 justify-center">
            {(() => {
              const stats = [
                { value: 67, label: "Years in Business" },
                { value: 200, label: "Projects Delivered" },
                { value: 5000, label: "Employees" },
              ];
              return stats.map((stat, i) => {
                const [count, ref] = useCountUp(stat.value, 1.2);
                return (
                  <div key={i} className="flex flex-col items-center" ref={ref}>
                    <span className="text-3xl md:text-4xl font-bold" style={{ color: '#b45f1d' }}>{count}+</span>
                    <span className="text-gray-600 text-sm md:text-base">{stat.label}</span>
                  </div>
                );
              });
            })()}
          </div>
        </motion.div>
      </div>

      {/* MILESTONES / TIMELINE SECTION */}
      <div className="px-6 md:px-16 py-12 bg-white border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-heading mb-8 text-center">Our Milestones</h2>
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-3xl font-bold text-[#b45f1d] font-playfair">{m.year}</div>
              <div className="text-gray-700 text-base font-semibold mb-2">{m.label}</div>
              {i < milestones.length - 1 && (
                <div className="hidden md:block w-24 h-1 bg-[#b45f1d] my-2 rounded-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* AWARDS & CERTIFICATIONS SECTION */}
      <div className="w-full px-0 md:px-0 py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-heading mb-8 text-center tracking-tight">Awards & Certifications</h2>
          <div className="w-full overflow-x-auto">
            <div className="flex gap-6 md:gap-8 w-max px-6">
              {awards.map((award, i) => (
                <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-gray-100 min-w-[180px] max-w-[220px] md:min-w-[220px] md:max-w-[240px] p-4 md:p-6 transition-transform hover:scale-105">
                  <img src={award.image} alt={award.title} className="w-20 h-20 object-contain rounded-xl mb-3 shadow-sm bg-white" />
                  <div className="text-base md:text-lg font-bold font-playfair text-gray-900 mb-1 text-center">{award.title}</div>
                  <div className="text-xs md:text-sm text-gray-500 text-center">{award.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accreditations Section (premium, wide, visually stunning) */}
      <div className="w-full px-0 md:px-0 py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-heading mb-12 text-center tracking-tight">Our Accreditations</h2>
          {/* Accreditation Images Row */}
          <div className="flex flex-row gap-16 justify-center mb-10 w-full">
            <div className="flex flex-col items-center flex-1">
              <Image src="/iso.jpg" alt="ISO Certification 1" width={220} height={120} className="rounded-2xl shadow-xl object-contain bg-white border border-gray-200" />
              <div className="mt-4 text-lg font-bold text-gray-900 font-playfair">ISO 9001:2015</div>
              <div className="text-base text-gray-500 text-center">Quality Management</div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Image src="/iso.jpg" alt="ISO Certification 2" width={220} height={120} className="rounded-2xl shadow-xl object-contain bg-white border border-gray-200" />
              <div className="mt-4 text-lg font-bold text-gray-900 font-playfair">ISO 14001:2015</div>
              <div className="text-base text-gray-500 text-center">Environmental Management</div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Image src="/iso.jpg" alt="ISO Certification 3" width={220} height={120} className="rounded-2xl shadow-xl object-contain bg-white border border-gray-200" />
              <div className="mt-4 text-lg font-bold text-gray-900 font-playfair">BS OHSAS 18001:2007</div>
              <div className="text-base text-gray-500 text-center">Occupational Health & Safety</div>
            </div>
          </div>
          {/* Accreditation Text Content */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              We have been certified by <span className="text-[#b45f1d] font-semibold">BVQI</span>, wherein the <span className="font-semibold">QMS, EMS & BS OHSAS</span> systems have been combined.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold font-playfair mb-3 text-gray-900">Quality Management System</h3>
              <p className="text-gray-700 text-base">
                ISO 9001:2015 certification demonstrates our commitment to consistent quality and customer satisfaction.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold font-playfair mb-3 text-gray-900">Environmental Management</h3>
              <p className="text-gray-700 text-base">
                ISO 14001:2015 certification showcases our dedication to environmental responsibility and sustainable practices.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold font-playfair mb-3 text-gray-900">Occupational Health & Safety</h3>
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