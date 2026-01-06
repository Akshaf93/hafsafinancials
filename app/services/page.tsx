import ServicesOverview from "@/components/ServicesOverview";
import AuditTransformation from "@/components/AuditTransformation"; // Import the new component

export default function ServicesPage() {
  return (
    // UPDATED: Changed bg-slate-50 to bg-[#050505] to match global theme
    <main className="pt-20 pb-20 bg-[#050505] min-h-screen">
      
      {/* 1. Services Overview (Bento Grid) */}
      <section className="mb-20">
         <ServicesOverview />
      </section>

      {/* 2. NEW: Deep Dive into Internal Audit & Hands-On Experience */}
      <section className="relative">
        <AuditTransformation />
      </section>

    </main>
  );
}