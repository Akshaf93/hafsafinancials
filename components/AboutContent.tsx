export default function AboutContent() {
  return (
    <div className="space-y-32">
      {/* Philosophy Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#FDFCF0] leading-tight">
                Defensible <br/><span className="text-[#E5D095]">Precision</span>
            </h2>
        </div>
        <div className="space-y-8 text-[#FDFCF0]/70 font-light text-lg leading-relaxed">
            <p>
                In an era of financial ambiguity, Hafsa Financials stands for absolute clarity. We believe that every number tells a story, and every audit is an opportunity to uncover value.
            </p>
            <p>
                Our methodology is rooted in "Defensible Pricing" and "Radical Transparency." We reject the industry standard of opaque billing and generic advice. Instead, we offer complexity-based engagement models that align our incentives with your success.
            </p>
        </div>
      </section>

      {/* Values Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l border-[#E5D095]/30 hover:border-[#E5D095] transition-colors duration-300 bg-[#0A0A0A]">
                <span className="text-4xl font-serif text-[#E5D095] mb-6 block opacity-50">01</span>
                <h3 className="text-xl text-[#FDFCF0] font-medium mb-4">Transparency</h3>
                <p className="text-[#FDFCF0]/60 font-light">
                    Clear communication and upfront pricing based on engagement complexity, not hours spent.
                </p>
            </div>
            <div className="p-8 border-l border-[#E5D095]/30 hover:border-[#E5D095] transition-colors duration-300 bg-[#0A0A0A]">
                <span className="text-4xl font-serif text-[#E5D095] mb-6 block opacity-50">02</span>
                <h3 className="text-xl text-[#FDFCF0] font-medium mb-4">Global Reach</h3>
                <p className="text-[#FDFCF0]/60 font-light">
                    A network that spans key financial hubs, ensuring local compliance with international perspective.
                </p>
            </div>
            <div className="p-8 border-l border-[#E5D095]/30 hover:border-[#E5D095] transition-colors duration-300 bg-[#0A0A0A]">
                <span className="text-4xl font-serif text-[#E5D095] mb-6 block opacity-50">03</span>
                <h3 className="text-xl text-[#FDFCF0] font-medium mb-4">Insight</h3>
                <p className="text-[#FDFCF0]/60 font-light">
                    Moving beyond compliance to provide strategic insights that drive defensible growth.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
}