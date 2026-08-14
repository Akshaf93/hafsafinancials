import Link from "next/link";
import HeroMap from "@/components/HeroMap";

export default function Hero() {
  return (
    <section 
      className="relative min-h-[100vh] w-full flex items-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24"
      aria-label="Introduction and Global Presence"
    >
      {/* Subtle Ambient Glow to separate text from background without looking like a laser */}
      <div className="absolute top-[30%] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#E5D095]/5 to-transparent blur-[150px] pointer-events-none -z-10 rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-16 lg:gap-8 items-center h-full">
        
        {/* --- LEFT COLUMN: EDITORIAL TYPOGRAPHY & CTAS (Spans 7 columns) --- */}
        <div className="flex flex-col items-start text-left z-20 lg:col-span-7 pt-8">
          
          {/* EDITORIAL EYEBROW (Replaced the "SaaS Pill") */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#E5D095]"></div>
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#E5D095]">
              Proprietary Architecture <span className="opacity-50 mx-2">|</span> 70% Human <span className="opacity-50 mx-2">•</span> 30% AI
            </span>
          </div>

          {/* COMMANDING HEADLINE */}
          <div className="space-y-6 mb-10">
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-serif font-normal tracking-tight text-[#FDFCF0] leading-[1.05]">
              Strategic <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] via-[#E5D095] to-[#9a7e3f]">
                Financial Excellence.
              </span>
            </h1>
            
            <p className="text-base md:text-[17px] text-[#FDFCF0]/70 font-light max-w-xl leading-relaxed tracking-wide">
              Integrating multi-jurisdictional human accounting judgment with AI-driven data acceleration. Delivering institutional technical advisory across 8+ global financial centers.
            </p>
          </div>

          {/* REFINED CTAS (Quiet confidence, no giant blocks) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full sm:w-auto pt-2">
            {/* Sharpened, executive primary button */}
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#E5D095] text-[#050505] text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm shadow-[0_0_20px_rgba(229,208,149,0.15)] hover:bg-[#FDFCF0] transition-all duration-300"
            >
              Request Consultation
            </Link>
            
            {/* Sleek, borderless secondary link with an arrow (Classic editorial design) */}
            <Link 
              href="/services" 
              className="group inline-flex items-center gap-3 text-[#FDFCF0]/80 hover:text-[#E5D095] text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <span className="underline underline-offset-8 decoration-[#FDFCF0]/20 group-hover:decoration-[#E5D095]/50 transition-colors">
                Explore Capabilities
              </span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* INSTITUTIONAL TRUST METRICS (Vertical dividers instead of horizontal lines) */}
          <div className="mt-16 md:mt-20 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 pt-4">
            
            <div className="flex flex-col border-l border-[#E5D095]/30 pl-4 sm:pr-6">
              <span className="text-[#E5D095] font-semibold text-[10px] uppercase tracking-[0.2em] mb-1.5">IFRS Authority</span>
              <span className="text-[#FDFCF0]/60 text-xs font-light tracking-wide">IFRS 9, 15, 16 & 17 Transition</span>
            </div>
            
            <div className="flex flex-col border-l border-[#E5D095]/30 pl-4 sm:pr-6">
              <span className="text-[#E5D095] font-semibold text-[10px] uppercase tracking-[0.2em] mb-1.5">Principal Depth</span>
              <span className="text-[#FDFCF0]/60 text-xs font-light tracking-wide">ACCA, CFA & FRM Credentials</span>
            </div>
            
            <div className="flex flex-col border-l border-[#E5D095]/30 pl-4">
              <span className="text-[#E5D095] font-semibold text-[10px] uppercase tracking-[0.2em] mb-1.5">Global Scale</span>
              <span className="text-[#FDFCF0]/60 text-xs font-light tracking-wide">8+ Operating Jurisdictions</span>
            </div>

          </div>
        </div>

        {/* --- RIGHT COLUMN: VIGNETTE WORLD MAP (Spans 5 columns) --- */}
        <div className="relative w-full aspect-[1.3/1] lg:col-span-5 flex items-center justify-center mt-12 lg:mt-0 pointer-events-none">
          
          {/* Vignette Mask - smooths the edges of the map into the background */}
          <div className="relative w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/World_map_-_low_resolution.svg"
              alt="Hafsa Financials Global Advisory Footprint"
              className="absolute inset-0 w-full h-full object-contain object-center opacity-[0.35]"
              style={{ filter: "invert(1) sepia(1) saturate(0.2) brightness(0.9)" }}
            />
            <HeroMap />
          </div>
        </div>

      </div>
    </section>
  );
}