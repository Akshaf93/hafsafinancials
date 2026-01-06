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

  // Detect scroll to toggle transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logic: 
  // 1. If we are on the Home page ('/') AND not scrolled yet -> Transparent
  // 2. Otherwise (Scrolled OR different page) -> Solid Dark
  const isHome = pathname === "/";
  const navBackground = isHome && !isScrolled 
    ? "bg-transparent border-transparent" 
    : "bg-[#050505]/90 backdrop-blur-md border-[#FDFCF0]/10 shadow-sm";

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight flex items-center gap-1">
          <span className="text-[#FDFCF0]">Hafsa</span>
          <span className="text-[#D4AF37]">Financials</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#D4AF37] 
                ${pathname === link.href ? "text-[#D4AF37]" : "text-[#FDFCF0]/70"}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="px-6 py-2.5 rounded-sm text-sm font-bold bg-[#D4AF37] text-[#050505] hover:bg-[#FDFCF0] transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          Book Consultation
        </button>
      </div>
    </nav>
  );
}