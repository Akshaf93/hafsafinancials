import Hero from "@/components/Hero";
import HybridModel from "@/components/HybridModel";
import ServicesOverview from "@/components/ServicesOverview";
import InsightsPreview from "@/components/InsightsPreview";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      
      {/* 1. HERO SECTION (Now includes the trust signals internally) */}
      <Hero />

      {/* --------------------------------------------------
      DELETE THIS ENTIRE SECTION (The old white tabs)
      --------------------------------------------------
      <div className="relative -mt-10 max-w-6xl mx-auto px-6 z-20">
        <div className="bg-white rounded-xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-b-4 border-brand-gold">
          ... content ...
        </div>
      </div>
      --------------------------------------------------
      */}

      {/* 3. SERVICES PREVIEW */}
      <ServicesOverview />
      
      {/* ... rest of the page remains the same ... */}