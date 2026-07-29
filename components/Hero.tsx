import Link from "next/link";
import HeroMap from "@/components/HeroMap";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
      aria-label="Introduction and Global Presence"
    >
      {/* Background Ambient Glow (Adds luxury editorial depth) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-[#E5D095]/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
        
        {/* --- LEFT COLUMN: EDITORIAL TYPOGRAPHY & CTAS (Spans 7 columns on desktop) --- */}
        <div className="flex flex-col items-start text-left z-20 lg:col-span-7 pt-4">
          
          {/* Executive Proof Point Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FDFCF0]/[0.03] border border-[#FDFCF0]/10 backdrop-blur-md mb-6 shadow-inner">
            <span className="flex h-2 w-2 relative" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5D095] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5D095]" />
            </span>
            <span className="text-[10px] md:text-xs font-medium tracking-[0.18em] uppercase text-[#FDFCF0]/80">
              Proprietary Advisory Architecture: <strong className="text-[#E5D095] font-semibold">70% Human / 30% AI</strong>
            </span>
          </div>

          {/* Commanding Editorial Headline */}
          <div className="space-y-6 mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-[#FDFCF0] leading-[1.08]">
              Strategic <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] via-[#E5D095] to-[#a38543]">
                Financial Excellence.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-[#FDFCF0]/70 font-light max-w-xl leading-relaxed tracking-wide">
              Integrating multi-jurisdictional human accounting judgment with AI-driven data acceleration. Delivering institutional technical advisory across 8+ global financial centers.
            </p>
          </div>

          {/* Executive Touchpoint CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E5D095] hover:bg-[#FDFCF0] text-[#050505] font-bold text-xs tracking-[0.15em] uppercase rounded-sm shadow-[0_0_25px_rgba(229,208,149,0.2)] hover:shadow-[0_0_30px_rgba(229,208,149,0.4)] transition-all duration-300"
            >
              Request Consultation
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 border border-[#FDFCF0]/15 hover:border-[#E5D095]/60 bg-[#FDFCF0]/[0.02] hover:bg-[#FDFCF0]/[0.05] text-[#FDFCF0] hover:text-[#E5D095] font-medium text-xs tracking-[0.15em] uppercase rounded-sm backdrop-blur-sm transition-all duration-300 group"
            >
              <span>Explore Capabilities</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 text-[#E5D095]" aria-hidden="true">→</span>
            </Link>
          </div>
          
          {/* Institutional Trust Footer Grid */}
          <div className="mt-14 w-full grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#FDFCF0]/10 pt-8">
            <div className="text-left">
              <h2 className="text-[#E5D095] font-semibold text-[11px] uppercase tracking-[0.2em] mb-1">IFRS Authority</h2>
              <p className="text-[#FDFCF0]/60 text-xs font-light">IFRS 9, 15, 16 & 17 Transition</p>
            </div>
            <div className="text-left">
              <h2 className="text-[#FDFCF0] font-semibold text-[11px] uppercase tracking-[0.2em] mb-1">Principal Depth</h2>
              <p className="text-[#FDFCF0]/60 text-xs font-light">ACCA, CFA & FRM Credentials</p>
            </div>
            <div className="text-left col-span-2 sm:col-span-1 border-t sm:border-t-0 pt-4 sm:pt-0 border-[#FDFCF0]/10">
              <h2 className="text-[#FDFCF0] font-semibold text-[11px] uppercase tracking-[0.2em] mb-1">Global Scale</h2>
              <p className="text-[#FDFCF0]/60 text-xs font-light">8+ Operating Jurisdictions</p>
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: VIGNETTE WORLD MAP (Spans 5 columns on desktop) --- */}
        <div className="relative w-full aspect-[1.4/1] lg:col-span-5 flex items-center justify-center mt-6 lg:mt-0">
          
          {/* VIGNETTE WRAPPER: This radial mask seamlessly fades the edges of the SVG into the black background */}
          <div className="relative w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] flex items-center justify-center">
            
            {/* MAP IMAGE */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/World_map_-_low_resolution.svg"
              alt="Hafsa Financials Global Advisory Footprint"
              className="absolute inset-0 w-full h-full object-contain object-center opacity-40 select-none"
              style={{
                filter: "invert(1) sepia(1) saturate(0.3) brightness(0.8)"
              }}
            />

            {/* LOCATIONS TELEMETRY (Client Component) */}
            <HeroMap />
          </div>

        </div>

      </div>
    </section>
  );
}