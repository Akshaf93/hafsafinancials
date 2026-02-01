export default function ServicesHero() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20 snap-start snap-always border-b border-[#FDFCF0]/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        <div>
          <h2 className="text-[#E5D095] text-sm font-bold uppercase tracking-[0.3em] mb-6">
            Our Expertise
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#FDFCF0] mb-8 leading-tight">
            Service <span className="text-[#E5D095]">Offerings</span>
          </h1>
          <p className="text-[#FDFCF0]/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            From technical IFRS compliance to strategic financial architecture, we provide the clarity needed for high-stakes decision making.
          </p>
          
          <div className="mt-12 flex flex-col items-center gap-2 text-[#E5D095]/50 text-xs uppercase tracking-widest">
              <span>Scroll to Explore</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#E5D095]/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}