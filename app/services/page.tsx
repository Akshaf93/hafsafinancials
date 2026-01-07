import ServicesOverview from "@/components/ServicesOverview";
import AuditTransformation from "@/components/AuditTabs"; // Renamed to fit the new component
import ServicesDetailed from "@/components/ServicesDetailed";

export default function ServicesPage() {
  return (
    <main className="pt-20 pb-20 bg-[#050505] min-h-screen">
      
      {/* 1. Compact Services Grid */}
      <section className="mb-10">
         <ServicesDetailed />
      </section>

      {/* 2. Compact Tabs: Internal Audit Case Study */}
      <section className="relative">
        <AuditTransformation />
      </section>

    </main>
  );
}