"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUp, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="w-full bg-[#181c2a] text-white pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-8 lg:gap-8">
        {/* BEBL Logo and Contact Us */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 gap-4 font-grotesk">
          {/* <Image src="/logo.png" alt="BEBL Logo" width={120} height={40} className="mb-2" /> */}
          <h3 className="text-xl font-bold mb-2 text-[#b45f1d] font-grotesk">Contact Us</h3>
          <div className="text-base text-white/90 leading-relaxed font-grotesk">
            <div>B.E. Billimoria & Company Ltd.</div>
            <div>Shiv Sagar Estate, 'A' Block, 2nd Floor</div>
            <div>Dr. Annie Besant Road,</div>
            <div>Worli, Mumbai 400 018</div>
            <div className="mt-2">Phone: <a href="tel:+912222888888" className="hover:text-[#b45f1d]">+91 22 2288 8888</a></div>
            <div>Email: <a href="mailto:info@bebl.com" className="hover:text-[#b45f1d]">info@bebl.com</a></div>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center md:items-start md:ml-24 font-grotesk">
          <h3 className="text-xl font-bold mb-4 text-[#b45f1d] font-grotesk">Quick Links</h3>
          <ul className="space-y-2 text-base font-grotesk">
            <li><a href="/about" className="hover:text-[#b45f1d] transition-colors">About Us</a></li>
            <li><a href="/projects" className="hover:text-[#b45f1d] transition-colors">Projects</a></li>
            <li><a href="/careers" className="hover:text-[#b45f1d] transition-colors">Careers</a></li>
            <li><a href="/contact" className="hover:text-[#b45f1d] transition-colors">Contact Us</a></li>
          </ul>
        </div>
        {/* Social Icons Column */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0 font-grotesk">
          <h3 className="text-xl font-bold mb-4 text-[#b45f1d] font-grotesk">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-all">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow hover:bg-[#b45f1d]/90 hover:scale-110 transition-all">
                <Linkedin className="w-6 h-6 text-white hover:text-white" />
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-all">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow hover:bg-[#b45f1d]/90 hover:scale-110 transition-all">
                <Instagram className="w-6 h-6 text-white hover:text-white" />
              </span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-all">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow hover:bg-[#b45f1d]/90 hover:scale-110 transition-all">
                <Facebook className="w-6 h-6 text-white hover:text-white" />
              </span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-all">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow hover:bg-[#b45f1d]/90 hover:scale-110 transition-all">
                <Twitter className="w-6 h-6 text-white hover:text-white" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} B.E. Billimoria & Company Ltd. All Rights Reserved. | <a href="/privacy" className="hover:text-[#b45f1d]">Privacy Policy</a> | <a href="/cookie" className="hover:text-[#b45f1d]">Cookie Policy</a> | <a href="/disclaimer" className="hover:text-[#b45f1d]">Disclaimer</a>
      </div>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-white/60 backdrop-blur-md border border-white/40 shadow-lg rounded-full p-3 flex items-center justify-center transition-all hover:bg-white/80 hover:scale-105"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 text-[#b45f1d]" />
        </button>
      )}
    </footer>
  );
}
