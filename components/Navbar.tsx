"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";

// STRATEGIC TAXONOMY UPGRADE:
// 1. "Services" -> "Solutions" (frames capabilities around enterprise problem-solving)
// 2. Removed "Pricing" from top-nav (prevents retail/commoditized signaling to CFOs)
// 3. "Team" -> "Leadership" (projects authority and senior principal depth)
const LINKS = [
  { name: "Solutions", href: "/services" },
  { name: "About & Governance", href: "/about" },
  { name: "Leadership", href: "/team" },
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
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navBackground = !isScrolled 
    ? "bg-transparent border-transparent" 
    : "bg-[#050505]/95 backdrop-blur-md border-b border-[#FDFCF0]/10 shadow-2xl";

  const isHidden = isScrolled && !isMobileMenuOpen;

  // Hide navigation on dedicated dashboard, admin, and conversion wizard routes
  if (pathname?.startsWith('/dashboard') || pathname?.startsWith('/admin') || pathname?.startsWith('/opt-in')) {
    return null;
  }

  return (
    <>
      {/* PERFORMANCE SENTINEL */}
      <div 
        ref={sentinelRef} 
        className="absolute top-0 left-0 w-full h-[50px] pointer-events-none opacity-0 z-[-1]" 
        aria-hidden="true"
      />

      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${navBackground} ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-50">
          
          {/* Brand Identity / Logo */}
          <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-1 focus:ring-[#E5D095] rounded-sm">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/logo (2).svg"
                alt="Hafsa Advisors and Solutions (LLP)"
                fill
                priority
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-1 pt-1">
              <span className="text-[#FDFCF0]">Hafsa</span>
              <span className="text-[#E5D095] font-light md:font-normal">Advisors & Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 pt-1">
            {LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 hover:text-[#E5D095] relative py-1 focus:outline-none focus:text-[#E5D095] ${
                    isActive ? "text-[#E5D095] font-semibold" : "text-[#FDFCF0]/80"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <m.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E5D095]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Executive Lead Generation CTAs */}
          <div className="hidden md:flex items-center gap-5 pt-1">
            {/* High-Intent Diagnostic Routing (Connects to your existing /opt-in wizard) */}
            <Link 
              href="/opt-in" 
              className="text-xs font-semibold uppercase tracking-wider text-[#E5D095]/90 hover:text-[#FDFCF0] transition-colors flex items-center gap-1.5 py-1 px-2 border border-[#E5D095]/20 rounded-sm hover:border-[#E5D095]/60 bg-[#E5D095]/5"
              title="Launch our interactive IFRS & Financial Architecture Readiness Assessment"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5D095] animate-pulse" />
              IFRS Readiness Tool
            </Link>

            {/* Primary Consultation Booking */}
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-sm text-sm font-bold bg-[#E5D095] text-[#050505] hover:bg-[#FDFCF0] transition-all duration-300 shadow-[0_0_15px_rgba(229,208,149,0.15)] hover:shadow-[0_0_20px_rgba(229,208,149,0.35)] focus:outline-none focus:ring-2 focus:ring-[#FDFCF0] focus:ring-offset-2 focus:ring-offset-[#050505]"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button"
            className="md:hidden text-[#FDFCF0] p-2 focus:outline-none focus:ring-1 focus:ring-[#E5D095] rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-[#050505] z-40 flex flex-col items-center justify-start pt-16 gap-8 border-b border-[#FDFCF0]/10 px-6 overflow-y-auto"
            >
              {LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold tracking-tight transition-colors ${
                    pathname === link.href ? "text-[#E5D095]" : "text-[#FDFCF0]/80 hover:text-[#FDFCF0]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="w-full max-w-xs h-[1px] bg-[#FDFCF0]/10 my-2" />

              {/* Mobile Lead-Gen Buttons */}
              <Link 
                href="/opt-in" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-xs py-3 rounded-sm text-center text-sm font-semibold text-[#E5D095] border border-[#E5D095]/30 bg-[#E5D095]/10 uppercase tracking-widest"
              >
                IFRS Readiness Tool ✨
              </Link>

              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-xs py-3 rounded-sm text-center text-sm font-bold bg-[#E5D095] text-[#050505] uppercase tracking-widest shadow-[0_0_20px_rgba(229,208,149,0.25)]"
              >
                Book Consultation
              </Link>
            </m.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isHidden && (
          <m.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 p-3 bg-[#E5D095] text-[#050505] rounded-full shadow-[0_0_20px_rgba(229,208,149,0.3)] hover:bg-[#FDFCF0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FDFCF0]"
            aria-label="Scroll back to top of page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </m.button>
        )}
      </AnimatePresence>
    </>
  );
}