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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100 mt-10">
      
      {/* Progress Header */}
      <div className="flex justify-between border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Client Onboarding</h2>
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Step {step} of 3
        </span>
      </div>

      {/* STEP 1: Client Details */}
      {step === 1 && (
        <div className="space-y-4 animate-in fade-in">
          <h3 className="text-lg font-semibold text-gray-700">1. Your Details</h3>
          <input 
            type="text" placeholder="Full Name" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={clientDetails.fullName} onChange={e => setClientDetails({...clientDetails, fullName: e.target.value})}
          />
          <input 
            type="text" placeholder="Company Name" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={clientDetails.company} onChange={e => setClientDetails({...clientDetails, company: e.target.value})}
          />
          <input 
            type="email" placeholder="Email Address" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={clientDetails.email} onChange={e => setClientDetails({...clientDetails, email: e.target.value})}
          />
          <button onClick={handleNext} className="mt-4 w-full bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-800 transition">
            Continue to Service Selection
          </button>
        </div>
      )}

      {/* STEP 2: Service Selection & Discounts */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in">
          <h3 className="text-lg font-semibold text-gray-700">2. Select Your Bundle</h3>
          <div role="radiogroup" aria-label="Select a bundle" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BUNDLES.map(bundle => (
              <button
                type="button"
                key={bundle.id} 
                onClick={() => setSelectedBundle(bundle)}
                role="radio"
                aria-checked={selectedBundle.id === bundle.id}
                className={`w-full text-left p-4 border rounded-xl cursor-pointer transition ${selectedBundle.id === bundle.id ? 'border-blue-600 bg-blue-50' : 'hover:border-gray-300'}`}
              >
                <h4 className="font-bold text-gray-800">{bundle.name}</h4>
                <p className="text-sm text-gray-500">{bundle.description}</p>
                <p className="mt-2 font-semibold text-blue-700">${bundle.price.toLocaleString()}</p>
              </button>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-gray-700 mt-6 border-t pt-6">3. Claim Your Discounts</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input type="checkbox" checked={isFirstTime} onChange={e => handleFirstTimeChange(e.target.checked)} className="w-5 h-5 text-blue-600" />
              <span>First-Time Client (15% Launch Discount)</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" checked={isReturning} onChange={e => handleReturningChange(e.target.checked)} className="w-5 h-5 text-blue-600" />
              <span>Returning Client (5% Loyalty Discount)</span>
            </label>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Referrals made (2% off per client):</label>
              <input 
                type="number" min="0" max="20"
                className="w-24 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={referralCount} onChange={e => handleReferralChange(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className="px-6 py-3 border rounded-lg hover:bg-gray-50 transition">Back</button>
            <button onClick={handleNext} className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">View Calculation</button>
          </div>
        </div>
      )}

      {/* STEP 3: Final Calculation & Spot Payment */}
      {step === 3 && (
        <div className="space-y-6 animate-in fade-in">
          <h3 className="text-lg font-semibold text-gray-700">3. Review & Proceed</h3>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Base Fee ({selectedBundle.name}):</span>
              <span className="font-semibold">${calculations.originalFee.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between mb-2 text-green-600">
              <span>Total Discounts ({calculations.discountPercent}%):</span>
              <span>-${calculations.discountAmount.toLocaleString()}</span>
            </div>
            
            {calculations.capApplied && (
              <div className="bg-yellow-100 text-yellow-800 text-sm p-3 rounded-lg mb-4">
                ⚠️ Your selected discounts exceeded 60%. The maximum allowed discount of 60% has been automatically applied.
              </div>
            )}
            
            <div className="border-t border-gray-300 my-4 pt-4 flex justify-between text-xl font-bold text-gray-900">
              <span>Final Project Fee:</span>
              <span>${calculations.finalFee.toLocaleString()}</span>
            </div>

            <div className="bg-blue-100 border border-blue-200 p-4 rounded-lg mt-4 flex justify-between items-center">
              <div>
                <span className="block font-bold text-blue-900 text-lg">Spot Payment Required Now (30%)</span>
                <span className="text-sm text-blue-700">Remaining 40% due at midway, 30% at completion.</span>
              </div>
              <span className="text-2xl font-black text-blue-900">${calculations.spotPayment.toLocaleString()}</span>
            </div>
          </div>

          {/* Terms Agreement */}
          <label className="flex items-start space-x-3 bg-white p-4 border rounded-lg cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 mt-1 text-blue-600"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <span className="text-sm text-gray-600">
              I agree to the terms, including a 10% fee for additional requirements post-kickoff, a 50% penalty for cancellations at completion, and the 2-cycle free review limit.
            </span>
          </label>

          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className="px-6 py-3 border rounded-lg hover:bg-gray-50 transition">Back</button>
            <button
              disabled={!agreedToTerms}
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Pay 30% Spot & Create Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
}