import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-[#FDFCF0] pt-20 pb-10 border-t border-[#FDFCF0]/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-[#FDFCF0]/10 pb-16">
        
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Hafsa<span className="text-[#E5D095]">Financials</span>
          </h2>
          <p className="text-[#FDFCF0]/60 text-sm leading-relaxed">
            Global financial advisory combining human judgment with AI intelligence. Serving UK, UAE, USA, and Pakistan.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-[#FDFCF0]/60">
            <li><Link href="/about" className="hover:text-[#E5D095]">About Us</Link></li>
            <li><Link href="/team" className="hover:text-[#E5D095]">Our Team</Link></li>
            <li><Link href="/services" className="hover:text-[#E5D095]">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#E5D095]">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Expertise</h3>
          <ul className="space-y-2 text-sm text-[#FDFCF0]/60">
            <li>IFRS Advisory</li>
            <li>Financial Modeling</li>
            <li>Risk Assessment</li>
            <li>Tax Planning</li>
          </ul>
        </div>

        {/* Newsletter Widget */}
        <div>
          <h3 className="font-bold text-lg mb-4">Subscribe</h3>
          <p className="text-xs text-[#FDFCF0]/50 mb-4">
            Join 1,000+ professionals receiving our monthly IFRS & Strategy updates.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-[#1a1a1a] border-none text-[#FDFCF0] text-sm px-4 py-2 rounded-lg w-full focus:ring-1 focus:ring-[#E5D095]"
            />
            <button className="bg-[#E5D095] text-[#050505] font-bold px-4 py-2 rounded-lg hover:bg-[#FDFCF0] transition-colors">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-[#FDFCF0]/40">
        <p>&copy; 2026 Hafsa Financials. All rights reserved.</p>
        <p>Privacy Policy | Terms of Engagement</p>
      </div>
    </footer>
  );
}