import Link from "next/link";
import Image from "next/image";
import HeroMap from "@/components/HeroMap";
import WorldMapSvg from "@/components/WorldMapSvg";

export default function Hero() {
  return (
    <section 
      className="relative min-h-[100vh] w-full flex items-center overflow-hidden pt-32 pb-10 home-snap-trigger"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* --- LEFT COLUMN: TEXT --- */}
        <div className="flex flex-col items-start text-left z-20">
          {/* Badge */}
          <div className="flex items-center gap-0 mb-6 rounded-full border border-[#E5D095]/20 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-[0_0_20px_rgba(229,208,149,0.1)]">
            <div className="px-4 py-2 bg-[#FDFCF0]/5 text-[#FDFCF0] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border-r border-[#E5D095]/20">
              70% Human Expert
            </div>
            <div className="px-4 py-2 bg-[#E5D095]/10 text-[#E5D095] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
              <span>30% AI Driven</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5D095] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5D095]"></span>
              </span>
            </div>
          </div>

          {/* Headlines */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-[#FDFCF0] leading-[1.1] drop-shadow-2xl">
              Strategic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFCF0] via-[#E5D095] to-[#8a7035]">
                Financial Excellence
              </span>
            </h1>
            
            <p className="text-lg text-[#FDFCF0]/80 font-light max-w-xl mt-6 tracking-wide">
              Human Judgment. <span className="text-[#E5D095] font-normal">AI Intelligence.</span> 
              <br />Global Advisory across 8+ Jurisdictions.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <Link href="/contact" className="px-8 py-4 bg-[#E5D095] hover:bg-[#eac45f] text-[#050505] font-bold text-sm tracking-wider uppercase rounded-sm shadow-[0_0_30px_rgba(229,208,149,0.2)] transition-all transform hover:-translate-y-0.5">
              Get a Consultation
            </Link>
            <Link href="#services" className="px-8 py-4 border border-[#FDFCF0]/20 hover:border-[#E5D095]/50 text-[#FDFCF0] hover:text-[#E5D095] font-medium text-sm tracking-wider uppercase rounded-sm backdrop-blur-sm transition-all flex items-center gap-2 group">
              <span>Explore Services</span>
              <span className="group-hover:translate-x-1 transition-transform text-[#E5D095]">→</span>
            </Link>
          </div>
          
          {/* Mini Footer Grid */}
          <div className="mt-12 w-full grid grid-cols-2 gap-6 border-t border-[#FDFCF0]/10 pt-6">
              <div className="text-left">
                 <h4 className="text-[#E5D095] font-bold text-xs uppercase tracking-[0.2em] mb-1">Trusted Advisory</h4>
                 <p className="text-[#FDFCF0]/50 text-xs font-light">IFRS & Architecture</p>
              </div>
              <div className="text-left">
                 <h4 className="text-[#FDFCF0] font-bold text-xs uppercase tracking-[0.2em] mb-1">Expert Team</h4>
                 <p className="text-[#FDFCF0]/50 text-xs font-light">CAs, CFAs & FRMs</p>
              </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: WORLD MAP --- */}
        <div className="relative w-full aspect-[1.6/1]">
          {/* MAP IMAGE */}
          {/* OPTIMIZED: Inline SVG removes network request and expensive CSS filters */}
          <WorldMapSvg 
            className="w-full h-full object-contain object-center opacity-100"
          />

          {/* LOCATIONS (Client Component) */}
          <HeroMap />
        </div>

      </div>
    </section>
  );
}