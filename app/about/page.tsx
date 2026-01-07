import React from 'react';
import AboutContent from "@/components/AboutContent";

export default function AboutPage() {
  return (
    <main className="pt-8 pb-20 bg-[#050505] min-h-screen text-[#FDFCF0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <section className="mb-32 pt-0 border-b border-[#FDFCF0]/10 pb-20">
          <h1 className="text-5xl md:text-8xl font-serif font-medium mb-10 tracking-tight">
            About <span className="text-[#E5D095]">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#FDFCF0]/60 font-light max-w-4xl leading-relaxed">
            We are a collective of financial architects dedicated to bringing structure to chaos. 
            Founded on the belief that clarity is the ultimate competitive advantage.
          </p>
        </section>

        {/* Main Content */}
        <AboutContent />

      </div>
    </main>
  );
}