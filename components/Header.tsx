import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-lg shadow-black/5 px-6 py-3 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/footer/logo.png" alt="logo" width={160} height={96} />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-space-grotesk text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="font-space-grotesk text-sm hover:text-primary transition-colors focus:outline-none">
                  About Us
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/about/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/management">Management Team</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/registrations">Registrations</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/policy">Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/media">Media</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/projects" className="font-space-grotesk text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="font-space-grotesk text-sm hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
