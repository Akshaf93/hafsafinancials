import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
        
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Hafsa<span className="text-brand-gold">Financials</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Global financial advisory combining human judgment with AI intelligence. Serving UK, UAE, USA, and Pakistan.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-brand-gold">About Us</Link></li>
            <li><Link href="/team" className="hover:text-brand-gold">Our Team</Link></li>
            <li><Link href="/services" className="hover:text-brand-gold">Services</Link></li>
            <li><Link href="/contact" className="hover:text-brand-gold">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Expertise</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>IFRS Advisory</li>
            <li>Financial Modeling</li>
            <li>Risk Assessment</li>
            <li>Tax Planning</li>
          </ul>
        </div>

        {/* Newsletter Widget */}
        <div>
          <h3 className="font-bold text-lg mb-4">Subscribe</h3>
          <p className="text-xs text-gray-500 mb-4">
            Join 5,000+ professionals receiving our weekly IFRS & Strategy updates.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-gray-800 border-none text-white text-sm px-4 py-2 rounded-lg w-full focus:ring-1 focus:ring-brand-gold"
            />
            <button className="bg-brand-gold text-brand-dark font-bold px-4 py-2 rounded-lg hover:bg-white transition-colors">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-gray-600">
        <p>&copy; 2024 Hafsa Financials. All rights reserved.</p>
        <p>Privacy Policy | Terms of Engagement</p>
      </div>
    </footer>
  );
}