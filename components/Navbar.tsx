"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Sentinel Ref for performance-first scroll detection
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If sentinel is NOT intersecting (scrolled past top), set true
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-50px 0px 0px 0px" } // Trigger when 50px down
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  const isSnapPage = ["/", "/services", "/insights"].includes(pathname);
  const navBackground = isSnapPage && !isScrolled 
    ? "bg-transparent border-transparent" 
    : "bg-[#050505]/90 backdrop-blur-md border-b border-[#FDFCF0]/10";

  return (
    <>
    {/* 1. Performance Sentinel: An invisible 1px div at the very top */}
    <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-[1px] pointer-events-none opacity-0" />

    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-50">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image
              src="/logo (2).svg"
              alt="Hafsa Financials Logo"
              fill
              // 2. Optimization: Ensure logo loads eagerly
              priority
              className="object-contain"
            />
          </div>
          <div className="text-xl md:text-2xl font-serif font-bold tracking-tight flex items-center gap-1 pt-1">
            <span className="text-[#FDFCF0]">Hafsa</span>
            <span className="text-[#E5D095]">Financials</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 pt-1">
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
        <Link href="/contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 mt-1 rounded-sm text-sm font-bold bg-[#E5D095] text-[#050505] hover:bg-[#FDFCF0] transition-all shadow-[0_0_15px_rgba(229,208,149,0.2)]">
          Book Consultation
        </Link>

        {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
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
    </nav>
    </>
  );
}