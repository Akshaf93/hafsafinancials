import ComplexityCalculator from "@/components/ComplexityCalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-brand-blue text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Hafsa Financials</h1>
          <p className="text-xl md:text-2xl text-brand-gold font-light">Empowering Businesses with Strategic Financial Excellence.</p>
          <p className="max-w-2xl mx-auto text-gray-300">Trusted IFRS Advisory, Financial Architecture, and Risk Management for global businesses.</p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">Get a Consultation</button>
            <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">Explore Services</button>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark">Transparent Pricing</h2>
            <p className="text-gray-600 mt-2">Our complexity-based model ensures you only pay for the expertise you need.</p>
          </div>
          <ComplexityCalculator />
        </div>
      </section>
    </main>
  );
}