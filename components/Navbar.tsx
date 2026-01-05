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
          : "bg-white/90 backdrop-blur-md border-gray-100 py-3 shadow-sm"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight transition-colors">
          <span className={isTransparent ? "text-white" : "text-brand-blue"}>
            Hafsa
          </span>
          <span className="text-brand-gold">Financials</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-gold
                ${isTransparent 
                  ? "text-white/90 hover:text-white" 
                  : "text-gray-600 hover:text-brand-blue"
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
            ? "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-brand-dark" 
            : "bg-brand-blue text-white hover:bg-brand-dark"
          }
        `}>
          Book Consultation
        </button>
      </div>
    </nav>
  );
}