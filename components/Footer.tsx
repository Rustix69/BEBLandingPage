import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181c2a] text-white pt-12 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-12 md:gap-0">
        {/* BEBL Logo and Contact Us */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 gap-4">
          {/* <Image src="/logo.png" alt="BEBL Logo" width={120} height={40} className="mb-2" /> */}
          <h3 className="text-xl font-bold mb-2 text-[#b45f1d]">Contact Us</h3>
          <div className="text-base text-white/90 leading-relaxed">
            <div>B.E. Billimoria & Company Ltd.</div>
            <div>701, Dalamal House, Nariman Point,</div>
            <div>Mumbai 400021, Maharashtra, India</div>
            <div className="mt-2">Phone: <a href="tel:+912222888888" className="hover:text-[#b45f1d]">+91 22 2288 8888</a></div>
            <div>Email: <a href="mailto:info@bebl.com" className="hover:text-[#b45f1d]">info@bebl.com</a></div>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4 text-[#b45f1d]">Quick Links</h3>
          <ul className="space-y-2 text-base">
            <li><a href="/about" className="hover:text-[#b45f1d] transition-colors">About Us</a></li>
            <li><a href="/projects" className="hover:text-[#b45f1d] transition-colors">Projects</a></li>
            <li><a href="/careers" className="hover:text-[#b45f1d] transition-colors">Careers</a></li>
            <li><a href="/contact" className="hover:text-[#b45f1d] transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} B.E. Billimoria & Company Ltd. All Rights Reserved. | <a href="/privacy" className="hover:text-[#b45f1d]">Privacy Policy</a> | <a href="/cookie" className="hover:text-[#b45f1d]">Cookie Policy</a> | <a href="/disclaimer" className="hover:text-[#b45f1d]">Disclaimer</a>
      </div>
    </footer>
  );
}
