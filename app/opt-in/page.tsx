import type { Metadata } from "next";
import OptInWizard from "@/components/OptInWizard";

export const metadata: Metadata = {
  title: "Opt-In | Hafsa Advisors and Solutions (LLP)",
  description: "Client onboarding and bundle opt-in wizard.",
};

export default function OptInPage() {
  return (
    <main className="min-h-screen w-full px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif text-[#FDFCF0] mb-3">Client Opt-In</h1>
          <p className="text-[#FDFCF0]/70">Select your bundle, apply eligible discounts, and review your onboarding payment.</p>
        </div>
        <OptInWizard />
      </div>
    </main>
  );
}
