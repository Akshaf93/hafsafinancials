import Hero from "@/components/Hero";
import HybridModel from "@/components/HybridModel";
import ServicesOverview from "@/components/ServicesOverview";
import AuditTabs from "@/components/AuditTabs"; // Updated Import
import Testimonials from "@/components/Testimonials";
import TeamPreview from "@/components/TeamPreview";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      
      {/* 1. HERO */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden">
        <Hero />
      </section>

      {/* 2. SERVICES (Compact Tabs) */}
      <section className="min-h-screen w-full snap-start relative flex flex-col justify-center py-20">
        <ServicesOverview />
      </section>

      {/* 3. AUDIT / TRANSFORMATION (Case Study) */}
      <section className="min-h-screen w-full snap-start relative flex flex-col justify-center py-20">
        <AuditTabs />
      </section>

      {/* 4. HYBRID MODEL (Philosophy) */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center">
        <HybridModel />
      </section>

      {/* 5. TEAM */}
      <section className="h-screen w-full snap-start relative flex flex-col justify-center">
        <TeamPreview />
      </section>

      {/* 6. TESTIMONIALS + CTA + FOOTER */}
      {/* FIX: Changed 'h-screen' to 'min-h-screen h-auto'. 
         This allows this section to grow if content is tall, 
         preventing the footer from getting cut off.
      */}
      <section className="min-h-screen h-auto w-full snap-start relative flex flex-col justify-between">
        
        {/* Spacer to push content down slightly */}
        <div className="h-20" />

        {/* Testimonials Content */}
        <div className="flex-grow flex flex-col justify-center py-20">
            <Testimonials />
        </div>
        
        {/* CTA & Footer Area */}
        <div className="bg-[#FDFCF0]/5 border-t border-[#FDFCF0]/10 backdrop-blur-sm">
          
          {/* Main CTA */}
          <div className="py-16 text-center px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#FDFCF0] mb-6">
              Ready for <span className="text-[#D4AF37]">Financial Clarity?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-[#D4AF37] text-[#050505] px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-[#FDFCF0] transition-colors shadow-lg">
                Book Consultation
              </Link>
              <Link href="/pricing" className="border border-[#FDFCF0]/20 text-[#FDFCF0] px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Simple Footer Links */}
          <div className="border-t border-[#FDFCF0]/10 py-8 text-center">
            <p className="text-[#FDFCF0]/40 text-xs uppercase tracking-widest mb-4">
              © 2026 Hafsa Financials. All Rights Reserved.
            </p>
            <div className="flex justify-center gap-6 text-[#FDFCF0]/60 text-xs">
              <Link href="/privacy" className="hover:text-[#D4AF37]">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#D4AF37]">Terms of Service</Link>
              <Link href="https://linkedin.com" className="hover:text-[#D4AF37]">LinkedIn</Link>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}