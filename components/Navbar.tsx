"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

const LINKS = [
  { name: "Solutions", href: "/services" },
  { name: "About & Governance", href: "/about" },
  { name: "Leadership", href: "/team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  if (pathname?.startsWith('/dashboard') || pathname?.startsWith('/admin') || pathname?.startsWith('/opt-in')) {
    return null;
  }

  return (
    <>
      <nav aria-label="Main Navigation" className={`fixed top-0 z-50 w-full transition-all duration-500 bg-transparent border-transparent`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-5 flex items-center justify-between relative z-50">
          
          {/* 1. LEFT WING: Logo (J.P. Morgan Style Serif) */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="flex items-center gap-3.5 focus:outline-none group">
              <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform group-hover:scale-105 duration-300">
                <Image src="/logo (2).svg" alt="Hafsa Advisors and Solutions" fill priority sizes="40px" className="object-contain" />
              </div>
              {/* Elegant inline serif, tracking tight to mimic legacy banking fonts */}
              <div className="font-serif text-[20px] md:text-[22px] tracking-tight text-[#FDFCF0] font-normal">
                Hafsa <span className="text-[#FDFCF0]/80">Advisors & Solutions</span>
              </div>
            </Link>
          </div>

          {/* 2. MATHEMATICAL CENTER: Navigation Links */}
          <div className="hidden lg:flex items-center justify-center space-x-10 absolute left-1/2 -translate-x-1/2">
            {LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group flex items-center gap-1.5 text-[15px] tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive ? "text-[#E5D095] font-medium" : "text-[#FDFCF0]/85 hover:text-[#E5D095] font-normal"
                  }`}
                >
                  {link.name}
                  {/* JPM-Style Dropdown Chevron */}
                  <svg 
                    className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${isActive ? "text-[#E5D095]" : "text-[#FDFCF0]/50"}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  
                  {/* Subtle active state underline */}
                  {isActive && (
                    <m.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E5D095]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* 3. RIGHT WING: Actions (Cleaned up and subdued) */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-8">
            
            {/* IFRS Tool: Very quiet, purely text with minimal icon */}
            <Link 
              href="/diagnostic" 
              className="text-[14px] font-medium tracking-wide text-[#FDFCF0]/70 hover:text-[#E5D095] transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-[#E5D095]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>IFRS Tool</span>
            </Link>

            {/* Primary CTA: Understated elegance, mimicking high-end finance */}
            <Link 
              href="/contact" 
              className="px-5 py-2 border border-[#E5D095]/30 hover:border-[#E5D095] text-[#E5D095] hover:bg-[#E5D095] hover:text-[#050505] text-[13px] font-medium tracking-widest uppercase transition-all duration-300 rounded-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button type="button" className="lg:hidden text-[#FDFCF0] p-2 focus:outline-none ml-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100vh" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-[#050505] z-40 flex flex-col items-center justify-start pt-12 gap-8 border-b border-[#FDFCF0]/10 px-6">
              {LINKS.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium tracking-wide text-[#FDFCF0]/90 hover:text-[#E5D095]">
                  {link.name}
                </Link>
              ))}
              <div className="w-full max-w-xs h-[1px] bg-[#FDFCF0]/10 my-4" />
              <Link href="/diagnostic" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-[#E5D095]">
                IFRS Readiness Tool
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-xs py-4 mt-2 rounded-sm text-center text-[13px] font-medium border border-[#E5D095] text-[#E5D095] uppercase tracking-widest">
                Contact Us
              </Link>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
