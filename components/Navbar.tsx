"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand-blue tracking-tight">
          Hafsa<span className="text-brand-gold">Financials</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-gold
                ${pathname === link.href ? "text-brand-blue font-bold" : "text-gray-600"}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-dark transition-colors">
          Book Consultation
        </button>
      </div>
    </nav>
  );
}