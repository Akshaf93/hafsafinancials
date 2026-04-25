"use client";

import { useState, useMemo } from "react";

// --- Data Models & Pricing ---
const BUNDLES = [
  { id: "starter", name: "Starter Bundle", price: 2500, description: "Sole Proprietors / Micro" },
  { id: "growth", name: "Growth Bundle", price: 7000, description: "SMEs" },
  { id: "professional", name: "Professional Bundle", price: 18000, description: "Medium Enterprises" },
  { id: "enterprise", name: "Enterprise Bundle", price: 45000, description: "Large Corporates" },
];

export default function OptInWizard() {
  const [step, setStep] = useState(1);
  
  // Client Details State
  const [clientDetails, setClientDetails] = useState({ fullName: "", company: "", email: "" });
  
  // Services State
  const [serviceMode, setServiceMode] = useState<"bundle" | "custom">("bundle");
  const [selectedBundle, setSelectedBundle] = useState(BUNDLES[0]);
  
  // Discounts State
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isReturning, setIsReturning] = useState(false); // Loyalty
  const [referralCount, setReferralCount] = useState(0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Fee & Discount Calculation Engine ---
  const calculations = useMemo(() => {
    let originalFee = selectedBundle.price; // Currently assumes bundle mode for simplicity
    let discountPercent = 0;

    // 1. Launch Discount (10-15% for first-time on bundles)
    if (isFirstTime && serviceMode === "bundle") discountPercent += 15;

    // 2. Loyalty Discount (5% for 2nd engagement, 10% for 3rd+)
    if (isReturning) discountPercent += 5;

    // 3. Referral Discount (2% per referral, max 25%)
    let referralDiscount = Math.min(referralCount * 2, 25);
    discountPercent += referralDiscount;

    // 4. Enforce 60% Cap Rule
    let capApplied = false;
    if (discountPercent > 60) {
      discountPercent = 60;
      capApplied = true;
    }

    const discountAmount = originalFee * (discountPercent / 100);
    const finalFee = originalFee - discountAmount;
    const spotPayment = finalFee * 0.30; // 30% upfront

    return { originalFee, discountPercent, discountAmount, finalFee, spotPayment, capApplied };
  }, [selectedBundle, serviceMode, isFirstTime, isReturning, referralCount]);

  // --- Handlers ---
  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleFirstTimeChange = (checked: boolean) => {
    setIsFirstTime(checked);
    if (checked) setIsReturning(false);
  };

  const handleReturningChange = (checked: boolean) => {
    setIsReturning(checked);
    if (checked) setIsFirstTime(false);
  };

  const handleReferralChange = (rawValue: string) => {
    const parsed = Number.parseInt(rawValue, 10);
    const safeValue = Number.isNaN(parsed) ? 0 : Math.max(0, Math.min(parsed, 20));
    setReferralCount(safeValue);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        clientDetails,
        serviceMode,
        selectedBundle,
        discounts: {
          isFirstTime,
          isReturning,
          referralCount,
        },
        financials: calculations,
      };

      const res = await fetch("/api/opt-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      
      if (data.success) {
        alert("Successfully created account and project!");
        // Optionally, redirect to a dashboard or success page here:
        // window.location.href = `/checkout?projectId=${data.projectId}`;
      } else {
        alert("Failed to submit: " + data.message + (data.error ? ` - ${data.error}` : ""));
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred while submitting.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full p-3 bg-[#0a0a0a] border border-[#FDFCF0]/15 rounded-lg text-[#FDFCF0] placeholder:text-[#FDFCF0]/35 focus:border-[#E5D095] focus:ring-2 focus:ring-[#E5D095]/20 outline-none transition";
  const navPrimaryClass =
    "px-6 py-3 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#FDFCF0] transition-colors";
  const navSecondaryClass =
    "px-6 py-3 border border-[#FDFCF0]/20 text-[#FDFCF0] text-xs font-bold uppercase tracking-widest rounded-sm hover:border-[#E5D095] hover:text-[#E5D095] transition-colors";

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-[#121212]/90 rounded-2xl shadow-2xl border border-[#FDFCF0]/10 mt-10 backdrop-blur-sm">
      {/* Progress Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-b border-[#FDFCF0]/10 pb-6 mb-8">
        <div>
          <p className="text-[#E5D095] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Guided Onboarding</p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#FDFCF0]">Client Opt-In Wizard</h2>
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((current) => (
            <span
              key={current}
              className={`h-2.5 rounded-full transition-all ${
                current <= step ? "w-10 bg-[#E5D095]" : "w-6 bg-[#FDFCF0]/20"
              }`}
            />
          ))}
          <span className="ml-2 text-[11px] font-bold uppercase tracking-widest text-[#FDFCF0]/60">
            Step {step} of 3
          </span>
        </div>
      </div>

      {/* STEP 1: Client Details */}
      {step === 1 && (
        <div className="space-y-5">
          <h3 className="text-lg font-bold text-[#FDFCF0] uppercase tracking-wide">1. Your Details</h3>
          <input
            type="text"
            placeholder="Full Name"
            className={inputClass}
            value={clientDetails.fullName}
            onChange={(e) => setClientDetails({ ...clientDetails, fullName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Company Name"
            className={inputClass}
            value={clientDetails.company}
            onChange={(e) => setClientDetails({ ...clientDetails, company: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            className={inputClass}
            value={clientDetails.email}
            onChange={(e) => setClientDetails({ ...clientDetails, email: e.target.value })}
          />
          <button onClick={handleNext} className={`mt-2 w-full ${navPrimaryClass}`}>
            Continue to Service Selection
          </button>
        </div>
      )}

      {/* STEP 2: Service Selection & Discounts */}
      {step === 2 && (
        <div className="space-y-8">
          <h3 className="text-lg font-bold text-[#FDFCF0] uppercase tracking-wide">2. Select Your Bundle</h3>
          <div role="radiogroup" aria-label="Select a bundle" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BUNDLES.map((bundle) => (
              <button
                type="button"
                key={bundle.id}
                onClick={() => setSelectedBundle(bundle)}
                role="radio"
                aria-checked={selectedBundle.id === bundle.id}
                className={`w-full text-left p-5 border rounded-xl cursor-pointer transition-colors ${
                  selectedBundle.id === bundle.id
                    ? "border-[#E5D095] bg-[#E5D095]/10 shadow-[0_0_20px_rgba(229,208,149,0.18)]"
                    : "border-[#FDFCF0]/10 bg-[#0a0a0a] hover:border-[#E5D095]/50"
                }`}
              >
                <h4 className="font-serif text-xl text-[#FDFCF0]">{bundle.name}</h4>
                <p className="text-sm text-[#FDFCF0]/60 mt-1">{bundle.description}</p>
                <p className="mt-3 text-[#E5D095] font-bold tracking-wide">${bundle.price.toLocaleString()}</p>
              </button>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#FDFCF0] uppercase tracking-wide pt-6 border-t border-[#FDFCF0]/10">3. Claim Your Discounts</h3>
          <div className="space-y-4 p-5 bg-[#0a0a0a] border border-[#FDFCF0]/10 rounded-xl">
            <label className="flex items-center gap-3 text-[#FDFCF0]/90">
              <input
                type="checkbox"
                checked={isFirstTime}
                onChange={(e) => handleFirstTimeChange(e.target.checked)}
                className="w-4 h-4 accent-[#E5D095]"
              />
              <span className="text-sm">First-Time Client (15% Launch Discount)</span>
            </label>
            <label className="flex items-center gap-3 text-[#FDFCF0]/90">
              <input
                type="checkbox"
                checked={isReturning}
                onChange={(e) => handleReturningChange(e.target.checked)}
                className="w-4 h-4 accent-[#E5D095]"
              />
              <span className="text-sm">Returning Client (5% Loyalty Discount)</span>
            </label>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#FDFCF0]/60 mb-2">Referrals made (2% off per client)</label>
              <input
                type="number"
                min="0"
                max="20"
                className="w-28 p-2.5 bg-[#050505] border border-[#FDFCF0]/15 rounded-lg text-[#FDFCF0] focus:border-[#E5D095] focus:ring-2 focus:ring-[#E5D095]/20 outline-none"
                value={referralCount}
                onChange={(e) => handleReferralChange(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className={navSecondaryClass}>Back</button>
            <button onClick={handleNext} className={navPrimaryClass}>View Calculation</button>
          </div>
        </div>
      )}

      {/* STEP 3: Final Calculation & Spot Payment */}
      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#FDFCF0] uppercase tracking-wide">3. Review & Proceed</h3>

          <div className="bg-[#0a0a0a] p-6 rounded-xl border border-[#FDFCF0]/10">
            <div className="flex justify-between mb-2 text-[#FDFCF0]/70">
              <span>Base Fee ({selectedBundle.name})</span>
              <span className="font-semibold text-[#FDFCF0]">${calculations.originalFee.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-2 text-[#E5D095]">
              <span>Total Discounts ({calculations.discountPercent}%):</span>
              <span>-${calculations.discountAmount.toLocaleString()}</span>
            </div>

            {calculations.capApplied && (
              <div className="bg-[#332d10] text-[#E5D095] text-sm p-3 rounded-lg mb-4 border border-[#E5D095]/30">
                Discount cap applied: your selected discounts exceeded 60%, so the maximum allowed discount has been enforced.
              </div>
            )}

            <div className="border-t border-[#FDFCF0]/10 my-4 pt-4 flex justify-between text-xl font-bold text-[#FDFCF0]">
              <span>Final Project Fee:</span>
              <span>${calculations.finalFee.toLocaleString()}</span>
            </div>

            <div className="bg-[#E5D095]/10 border border-[#E5D095]/35 p-4 rounded-lg mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <span className="block font-bold text-[#FDFCF0] text-lg">Spot Payment Required Now (30%)</span>
                <span className="text-sm text-[#FDFCF0]/70">Remaining 40% due at midway, 30% at completion.</span>
              </div>
              <span className="text-3xl font-serif text-[#E5D095]">${calculations.spotPayment.toLocaleString()}</span>
            </div>
          </div>

          {/* Terms Agreement */}
          <label className="flex items-start gap-3 bg-[#0a0a0a] p-4 border border-[#FDFCF0]/10 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 mt-1 accent-[#E5D095]"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <span className="text-sm text-[#FDFCF0]/75">
              I agree to the terms, including a 10% fee for additional requirements post-kickoff, a 50% penalty for cancellations at completion, and the 2-cycle free review limit.
            </span>
          </label>

          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className={navSecondaryClass}>Back</button>
            <button
              onClick={handleSubmit}
              disabled={!agreedToTerms || isSubmitting}
              className="px-8 py-3 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#FDFCF0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Pay 30% Spot & Create Account"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}