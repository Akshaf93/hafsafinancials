export default function AboutPhilosophy() {
  return (
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT: Headline */}
      <div>
        <h2 className="text-4xl md:text-7xl font-serif font-medium text-[#FDFCF0] leading-tight">
          Our Practice <br />
          <span className="text-[#E5D095]">Approach</span>
        </h2>
        <div className="mt-8 border-l-2 border-[#E5D095] pl-6">
            <p className="text-xl text-[#FDFCF0] font-light italic">
                "Every engagement must withstand regulatory, audit, and strategic review."
            </p>
        </div>
      </div>

      {/* RIGHT: Content */}
      <div
        className="space-y-8 text-lg text-[#FDFCF0]/70 font-light leading-relaxed border-l border-[#E5D095]/20 pl-8 md:pl-12"
      >
        <p>
          Rather than offering generic consultancy, we embed ourselves in the financial architecture of our clients — ensuring systems, policies, and models are built to scale.
        </p>
        
        <ul className="space-y-3 text-base">
            <li className="flex items-start gap-3">
                <span className="text-[#E5D095] mt-1">▹</span>
                Technical accuracy under IFRS and IAS
            </li>
            <li className="flex items-start gap-3">
                <span className="text-[#E5D095] mt-1">▹</span>
                Structured financial modeling and scenario analysis
            </li>
            <li className="flex items-start gap-3">
                <span className="text-[#E5D095] mt-1">▹</span>
                Robust internal controls and risk frameworks
            </li>
        </ul>

        <div className="pt-6 border-t border-[#FDFCF0]/10">
          <h3 className="text-[#E5D095] font-bold text-sm uppercase tracking-wider mb-2">Our Role</h3>
          <p className="text-sm text-[#FDFCF0]/60">
            We operate as a technical reference point, a risk and controls advisor, and a financial intelligence partner — supporting leadership teams where financial clarity directly influences strategic outcomes.
          </p>
        </div>
      </div>

    </div>
  );
}