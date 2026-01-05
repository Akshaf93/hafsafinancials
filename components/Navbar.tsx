"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const LINKS = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we are on the homepage (to apply transparent logic)
  const isHome = pathname === "/";

  // Dynamic Styles
  // If we are on Home AND at the top: Transparent bg, White text
  // Otherwise (Scrolled or other pages): White bg, Dark text
  const isTransparent = isHome && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
        ${isTransparent 
          ? "bg-transparent border-transparent py-6" 
          : "bg-[#FDFCF0]/90 backdrop-blur-md border-[#E5D095]/10 py-3 shadow-sm"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight transition-colors">
          <span className={isTransparent ? "text-[#FDFCF0]" : "text-[#050505]"}>
            Hafsa
          </span>
          <span className="text-[#E5D095]">Financials</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#E5D095]
                ${isTransparent 
                  ? "text-[#FDFCF0]/90 hover:text-[#FDFCF0]" 
                  : "text-gray-600 hover:text-[#050505]"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg
          ${isTransparent 
            ? "bg-[#FDFCF0]/10 text-[#FDFCF0] border border-[#FDFCF0]/20 hover:bg-[#FDFCF0] hover:text-[#050505]" 
            : "bg-[#050505] text-[#E5D095] hover:bg-[#E5D095] hover:text-[#050505]"
          }
        `}>
          Book Consultation
        </button>
      </div>
    </nav>
  );
}