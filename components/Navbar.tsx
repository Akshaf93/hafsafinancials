"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";

// 1. Removed "Contact" (redundant with the primary button)
// 2. Kept enterprise taxonomy clean and focused
const LINKS = [
  { name: "Solutions", href: "/services" },
  { name: "About & Governance", href: "/about" },
  { name: "Leadership", href: "/team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const navBackground = !isScrolled 
    ? "bg-transparent border-transparent" 
    : "bg-[#050505]/95 backdrop-blur-md border-b border-[#FDFCF0]/10 shadow-2xl";

  const isHidden = isScrolled && !isMobileMenuOpen;

  if (pathname?.startsWith('/dashboard') || pathname?.startsWith('/admin') || pathname?.startsWith('/opt-in')) {
    return null;
  }

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-[50px] pointer-events-none opacity-0 z-[-1]" aria-hidden="true" />

      <nav aria-label="Main Navigation" className={`fixed top-0 z-50 w-full transition-all duration-500 ${navBackground} ${isHidden ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-50">
          
          {/* Brand Identity / Logo */}
          <Link href="/" className="flex items-center gap-3 focus:outline-none">
            <div className="relative w-8 h-8 md:w-9 md:h-9">
              <Image src="/logo (2).svg" alt="Hafsa Advisors and Solutions" fill priority sizes="36px" className="object-contain" />
            </div>
            <div className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-1.5 pt-0.5">
              <span className="text-[#FDFCF0]">Hafsa</span>
              <span className="text-[#E5D095] font-normal">Advisors & Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 pt-0.5">
            {LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium tracking-wide uppercase transition-colors duration-200 hover:text-[#E5D095] relative py-1 ${
                    isActive ? "text-[#E5D095] font-semibold" : "text-[#FDFCF0]/70"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <m.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#E5D095]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Area: Stripped borders & softened button typography */}
          <div className="hidden md:flex items-center gap-6 pt-0.5">
            
            {/* IFRS Tool: Now a borderless, elegant text indicator with a live dot */}
            <Link 
              href="/opt-in" 
              className="text-xs font-medium tracking-wide text-[#FDFCF0]/80 hover:text-[#E5D095] transition-colors flex items-center gap-2 group py-1"
              title="Launch interactive IFRS Readiness Assessment"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5D095] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5D095]" />
              </span>
              <span className="group-hover:underline underline-offset-4 decoration-[#E5D095]/50">IFRS Readiness Tool</span>
            </Link>

            {/* Primary CTA: Title Case, refined padding, executive weighting */}
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-5 py-2 rounded-sm text-xs font-semibold tracking-wider bg-[#E5D095] text-[#050505] hover:bg-[#FDFCF0] transition-all duration-300 shadow-[0_0_15px_rgba(229,208,149,0.15)] hover:shadow-[0_0_20px_rgba(229,208,149,0.3)]"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button type="button" className="md:hidden text-[#FDFCF0] p-2 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100vh" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#050505] z-40 flex flex-col items-center justify-start pt-16 gap-8 border-b border-[#FDFCF0]/10 px-6">
              {LINKS.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold tracking-tight text-[#FDFCF0]/80 hover:text-[#E5D095]">
                  {link.name}
                </Link>
              ))}
              <div className="w-full max-w-xs h-[1px] bg-[#FDFCF0]/10 my-2" />
              <Link href="/opt-in" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-xs py-3 rounded-sm text-center text-xs font-semibold text-[#E5D095] bg-[#E5D095]/10 uppercase tracking-widest border border-[#E5D095]/20">
                IFRS Readiness Tool ✨
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-xs py-3 rounded-sm text-center text-xs font-bold bg-[#E5D095] text-[#050505] uppercase tracking-widest shadow-lg">
                Book Consultation
              </Link>
            </m.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isHidden && (
          <m.button type="button" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} whileHover={{ scale: 1.1 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-40 p-3 bg-[#E5D095] text-[#050505] rounded-full shadow-lg hover:bg-[#FDFCF0] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </m.button>
        )}
      </AnimatePresence>
    </>
  );
}