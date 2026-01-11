"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

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
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to toggle transparency
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logic: 
  // 1. If we are on the Home page ('/') AND not scrolled yet -> Transparent
  // 2. Otherwise (Scrolled OR different page) -> Solid Dark
  const isHome = pathname === "/";
  const navBackground = "bg-transparent border-transparent";

  const navPosition = "fixed";
  const hideNavbar = !isVisible;

  return (
    <m.nav
      animate={{ y: hideNavbar ? "-100%" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`${navPosition} top-0 z-50 w-full transition-colors duration-500 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-50">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image
              src="/logo.jpeg"
              alt="Hafsa Financials Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-1">
            <span className="text-[#FDFCF0]">Hafsa</span>
            <span className="text-[#E5D095]">Financials</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#E5D095] 
                ${pathname === link.href ? "text-[#E5D095]" : "text-[#FDFCF0]/70"}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/contact" className="hidden md:block px-6 py-2.5 rounded-sm text-sm font-bold bg-[#E5D095] text-[#050505] hover:bg-[#FDFCF0] transition-all shadow-[0_0_15px_rgba(229,208,149,0.2)]">
          Book Consultation
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#FDFCF0] p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 left-0 w-full bg-[#050505] z-40 flex flex-col items-center justify-center gap-8 border-b border-[#FDFCF0]/10"
          >
            {LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-serif font-medium transition-colors ${
                  pathname === link.href ? "text-[#E5D095]" : "text-[#FDFCF0]/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 mt-4 rounded-sm text-sm font-bold bg-[#E5D095] text-[#050505] uppercase tracking-widest"
            >
              Book Consultation
            </Link>
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
}