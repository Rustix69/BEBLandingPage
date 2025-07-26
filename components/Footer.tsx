"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUp, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="w-full bg-[#181c2a] text-white py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            <h3 className="text-[#b45f1d] font-medium mb-3">B.E. Billimoria & Co. Ltd.</h3>
            <p className="text-white/70">
              Shiv Sagar Estate, 'A' Block, 2nd Floor<br />
              Dr. Annie Besant Road, Worli<br />
              Mumbai 400 018
            </p>
            <div className="flex items-center gap-4 mt-2 text-white/70">
              <a href="tel:+912222888888" className="hover:text-[#b45f1d]">+91 22 2288 8888</a>
              <span>|</span>
              <a href="mailto:info@bebl.com" className="hover:text-[#b45f1d]">info@bebl.com</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center md:justify-start">
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="hover:text-[#b45f1d] transition-colors">About</Link>
              <Link href="/projects" className="hover:text-[#b45f1d] transition-colors">Projects</Link>
              <Link href="/careers" className="hover:text-[#b45f1d] transition-colors">Careers</Link>
              <Link href="/contact" className="hover:text-[#b45f1d] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-[#b45f1d]/90 transition-all">
                <Linkedin className="w-4 h-4" />
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-[#b45f1d]/90 transition-all">
                <Instagram className="w-4 h-4" />
              </span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-[#b45f1d]/90 transition-all">
                <Facebook className="w-4 h-4" />
              </span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-[#b45f1d]/90 transition-all">
                <Twitter className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-6 pt-4 text-xs text-white/60 flex flex-wrap justify-between items-center">
          <span>&copy; {new Date().getFullYear()} B.E. Billimoria & Company Ltd.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#b45f1d]">Privacy</Link>
            <Link href="/cookie" className="hover:text-[#b45f1d]">Cookies</Link>
            <Link href="/disclaimer" className="hover:text-[#b45f1d]">Disclaimer</Link>
          </div>
        </div>
      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-8 z-50 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </footer>
  );
}
