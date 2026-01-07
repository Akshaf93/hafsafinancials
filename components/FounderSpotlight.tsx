import React from 'react';

export default function FounderSpotlight() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] bg-[#111] border border-[#FDFCF0]/10 overflow-hidden group">
        <div className="absolute inset-0 bg-[#E5D095]/5 group-hover:bg-[#E5D095]/10 transition-colors duration-500" />
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#E5D095] opacity-30" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#E5D095] opacity-30" />
        
        {/* Placeholder for Image */}
        <div className="flex flex-col items-center justify-center h-full text-[#FDFCF0]/20">
            <span className="font-serif italic text-2xl">Founder Portrait</span>
            <span className="text-xs uppercase tracking-widest mt-2 opacity-50">Image Asset Required</span>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[#FDFCF0] mb-2">
          Hafsa <span className="text-[#E5D095]">Financials</span>
        </h2>
        <p className="text-[#E5D095] uppercase tracking-widest text-sm font-medium mb-8">
          Founder & Managing Partner
        </p>

        <div className="space-y-6 text-[#FDFCF0]/70 font-light leading-relaxed text-lg">
          <p>
            With a distinguished career spanning over a decade in high-stakes financial auditing and strategic restructuring, our founder established Hafsa Financials to bridge the gap between regulatory compliance and strategic growth.
          </p>
          <p>
            Specializing in forensic accounting and complex asset valuation, she has advised multinational corporations through critical transitions, ensuring that financial clarity serves as the bedrock for future expansion.
          </p>
          <p>
            "True financial stewardship is not about guarding the past, but securing the future through defensible, transparent precision."
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-[#FDFCF0]/10 flex gap-8">
            <div>
                <span className="block text-2xl font-serif text-[#E5D095]">15+</span>
                <span className="text-xs text-[#FDFCF0]/50 uppercase tracking-wider">Years Exp.</span>
            </div>
            <div>
                <span className="block text-2xl font-serif text-[#E5D095]">200+</span>
                <span className="text-xs text-[#FDFCF0]/50 uppercase tracking-wider">Audits Led</span>
            </div>
        </div>
      </div>
    </div>
  );
}