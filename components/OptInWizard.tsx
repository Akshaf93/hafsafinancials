"use client";

import { useState, useMemo } from "react";
import { useState, useMemo, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase for client-side file uploads
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const BUNDLES = [
  { id: "starter", name: "Starter Bundle", price: 2500, description: "Sole Proprietors / Micro" },
  { id: "growth", name: "Growth Bundle", price: 7000, description: "SMEs" },
  { id: "professional", name: "Professional Bundle", price: 18000, description: "Medium Enterprises" },
  { id: "enterprise", name: "Enterprise Bundle", price: 45000, description: "Large Corporates" },
];

export default function OptInWizard() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // States
  const [clientDetails, setClientDetails] = useState({ fullName: "", company: "", email: "" });
  const [serviceMode, setServiceMode] = useState<"bundle" | "custom">("bundle");
  const [selectedBundle, setSelectedBundle] = useState(BUNDLES[0]);
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [isReturning, setIsReturning] = useState(false); 
  const [isVerifying, setIsVerifying] = useState(false);
  const [referralCount, setReferralCount] = useState(0);
  const [referralCode, setReferralCode] = useState("");
  const [isApplyingReferral, setIsApplyingReferral] = useState(false);
  const [referralError, setReferralError] = useState("");
  
  // NEW: File Upload State
  const [receiptFile, setReceiptFile] = useState<File | null>(null);

  // Automatically fill in referral code from URL query parameters (?ref=CODE)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const refCode = params.get("ref");
      if (refCode) {
        setReferralCode(refCode);
      }
    }
  }, []);

  const calculations = useMemo(() => {
    let originalFee = selectedBundle.price; 
    let discountPercent = 0;

    if (isFirstTime && serviceMode === "bundle") discountPercent += 15;
    if (isReturning) discountPercent += 5;
    
    let referralDiscount = Math.min(referralCount * 2, 25);
    discountPercent += referralDiscount;

    let capApplied = false;
    if (discountPercent > 60) {
      discountPercent = 60;
      capApplied = true;
    }

    const discountAmount = originalFee * (discountPercent / 100);
    const finalFee = originalFee - discountAmount;
    const spotPayment = finalFee * 0.30; 

    return { originalFee, discountPercent, discountAmount, finalFee, spotPayment, capApplied };
  }, [selectedBundle, serviceMode, isFirstTime, isReturning, referralCount]);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleVerifyClient = async () => {
    if (!clientDetails.fullName || !clientDetails.email) {
      alert("Please provide your name and email to proceed.");
      return;
    }
    setIsVerifying(true);
    try {
      // Make a server-side check based on the provided email
      const res = await fetch(`/api/verify-client?email=${encodeURIComponent(clientDetails.email)}`);
      if (res.ok) {
        const data = await res.json();
        setIsFirstTime(!!data.isFirstTime);
        setIsReturning(!!data.isReturning);
      } else {
        setIsFirstTime(false);
        setIsReturning(false);
      }
    } catch (error) {
      console.error("Verification error:", error);
      setIsFirstTime(false);
      setIsReturning(false);
    } finally {
      setIsVerifying(false);
      setStep(2);
    }
  };

  const handleApplyReferral = async () => {
    if (!referralCode) return;
    setIsApplyingReferral(true);
    setReferralError("");
    try {
      const res = await fetch(`/api/verify-referral?code=${encodeURIComponent(referralCode)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.valid) {
          setReferralCount(data.count || 0);
        } else {
          setReferralError("Invalid or expired referral code.");
          setReferralCount(0);
        }
      } else {
        setReferralError("Failed to verify referral code.");
        setReferralCount(0);
      }
    } catch (error) {
      setReferralError("Network error while verifying code.");
      setReferralCount(0);
    } finally {
      setIsApplyingReferral(false);
    }
  };

  const handleSubmit = async () => {
    if (!receiptFile) {
      alert("Please upload your 30% spot payment receipt to proceed.");
      return;
    }

    setIsSubmitting(true);
    let receiptUrl = "";

    try {
      // 1. Upload the file to Supabase Storage
      const fileExt = receiptFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('receipts')
        .upload(fileName, receiptFile);

      if (uploadError) throw uploadError;

      // 2. Get the public URL of the uploaded file
      const { data: publicUrlData } = supabase.storage
        .from('receipts')
        .getPublicUrl(fileName);
        
      receiptUrl = publicUrlData.publicUrl;

      // 3. Send all data (including the new receipt URL) to your backend
      const payload = {
        clientDetails,
        serviceMode,
        selectedBundle,
        discounts: { isFirstTime, isReturning, referralCount, referralCode },
        financials: calculations,
        receiptUrl
      };

      const response = await fetch('/api/opt-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        alert(`Success! Project initialized. Your receipt is under review.`);
      } else {
        alert(`Failed: ${result.message}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to upload receipt or save data. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full p-3 bg-[#050505] border border-[#FDFCF0]/15 rounded-lg text-[#FDFCF0] placeholder:text-[#FDFCF0]/35 focus:border-[#E5D095] focus:ring-2 focus:ring-[#E5D095]/20 outline-none transition";
  const primaryButtonClass =
    "px-6 py-3 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#FDFCF0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const secondaryButtonClass =
    "px-6 py-3 border border-[#FDFCF0]/20 text-[#FDFCF0] text-xs font-bold uppercase tracking-widest rounded-sm hover:border-[#E5D095] hover:text-[#E5D095] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-[#121212]/90 rounded-2xl shadow-2xl border border-[#FDFCF0]/10 mt-10 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-b border-[#FDFCF0]/10 pb-6 mb-8">
        <div>
          <p className="text-[#E5D095] text-[10px] font-bold uppercase tracking-[0.25em] mb-2">Guided Onboarding</p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#FDFCF0]">Client Opt-In Wizard</h2>
        </div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5D095] bg-[#E5D095]/10 border border-[#E5D095]/30 px-3 py-1.5 rounded-full">
          Step {step} of 3
        </span>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <h3 className="text-lg font-bold text-[#FDFCF0] uppercase tracking-wide">1. Your Details</h3>
          <input 
            type="text" placeholder="Full Name" 
            className={inputClass}
            value={clientDetails.fullName} onChange={e => setClientDetails({...clientDetails, fullName: e.target.value})}
          />
          <input 
            type="text" placeholder="Company Name" 
            className={inputClass}
            value={clientDetails.company} onChange={e => setClientDetails({...clientDetails, company: e.target.value})}
          />
          <input 
            type="email" placeholder="Email Address" 
            className={inputClass}
            value={clientDetails.email} onChange={e => setClientDetails({...clientDetails, email: e.target.value})}
          />
          <button 
            onClick={handleVerifyClient} 
            disabled={isVerifying} 
            className={`mt-2 w-full ${primaryButtonClass}`}
          >
            {isVerifying ? "Verifying Client Details..." : "Continue to Service Selection"}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8">
          <h3 className="text-lg font-bold text-[#FDFCF0] uppercase tracking-wide">2. Select Your Bundle</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BUNDLES.map(bundle => (
              <div 
                key={bundle.id} 
                onClick={() => setSelectedBundle(bundle)}
                className={`p-5 border rounded-xl cursor-pointer transition-colors ${selectedBundle.id === bundle.id ? 'border-[#E5D095] bg-[#E5D095]/10 shadow-[0_0_20px_rgba(229,208,149,0.16)]' : 'border-[#FDFCF0]/10 bg-[#0a0a0a] hover:border-[#E5D095]/50'}`}
              >
                <h4 className="font-serif text-xl text-[#FDFCF0]">{bundle.name}</h4>
                <p className="text-sm text-[#FDFCF0]/60 mt-1">{bundle.description}</p>
                <p className="mt-3 font-bold text-[#E5D095]">${bundle.price.toLocaleString()}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#FDFCF0] pt-6 border-t border-[#FDFCF0]/10 uppercase tracking-wide">3. Claim Your Discounts</h3>
          <div className="space-y-3 p-5 bg-[#0a0a0a] border border-[#FDFCF0]/10 rounded-xl">
            {isFirstTime && (
              <div className="p-3 bg-[#102719] text-[#95e6b8] rounded-lg border border-[#29573b] flex items-center space-x-2 text-sm">
                <span className="font-bold">Verified:</span>
                <span>First-Time Client (15% Launch Discount Applied)</span>
              </div>
            )}
            {isReturning && (
              <div className="p-3 bg-[#102719] text-[#95e6b8] rounded-lg border border-[#29573b] flex items-center space-x-2 text-sm">
                <span className="font-bold">Verified:</span>
                <span>Returning Client (5% Loyalty Discount Applied)</span>
              </div>
            )}
            {!isFirstTime && !isReturning && (
              <div className="p-3 bg-[#141414] text-[#FDFCF0]/60 rounded-lg border border-[#FDFCF0]/10 text-sm">
                Standard pricing applied. No historical discounts found.
              </div>
            )}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#FDFCF0]/60 mb-2">Referral Code (Optional)</label>
              <div className="flex gap-2">
                <input 
                  type="text" placeholder="Enter referral code"
                  className="flex-1 p-2.5 bg-[#050505] border border-[#FDFCF0]/15 rounded-lg text-[#FDFCF0] focus:border-[#E5D095] focus:ring-2 focus:ring-[#E5D095]/20 outline-none"
                  value={referralCode} onChange={e => setReferralCode(e.target.value)}
                />
                <button 
                  onClick={handleApplyReferral} 
                  disabled={isApplyingReferral || !referralCode}
                  className="px-6 py-2.5 bg-[#E5D095] text-[#050505] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#FDFCF0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isApplyingReferral ? "..." : "Apply"}
                </button>
              </div>
              {referralError && <p className="text-red-400 text-xs mt-2">{referralError}</p>}
              {referralCount > 0 && <p className="text-[#95e6b8] text-xs mt-2">✓ Code applied: {referralCount} referrals found ({referralCount * 2}% off)</p>}
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button onClick={handleBack} className={secondaryButtonClass}>Back</button>
            <button onClick={handleNext} className={primaryButtonClass}>View Calculation</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#FDFCF0] uppercase tracking-wide">4. Review & Proceed</h3>
          
          <div className="bg-[#0a0a0a] p-6 rounded-xl border border-[#FDFCF0]/10">
            <div className="flex justify-between mb-2 text-[#FDFCF0]/70">
              <span>Base Fee ({selectedBundle.name}):</span>
              <span className="font-semibold text-[#FDFCF0]">${calculations.originalFee.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between mb-2 text-[#E5D095]">
              <span>Total Discounts ({calculations.discountPercent}%):</span>
              <span>-${calculations.discountAmount.toLocaleString()}</span>
            </div>
            
            {calculations.capApplied && (
              <div className="bg-[#332d10] text-[#E5D095] text-sm p-3 rounded-lg mb-4 border border-[#E5D095]/30">
                Discount cap applied. Your selected discounts exceeded 60%, so the maximum allowed discount has been applied.
              </div>
            )}
            
            <div className="border-t border-[#FDFCF0]/10 my-4 pt-4 flex justify-between text-xl font-bold text-[#FDFCF0]">
              <span>Final Project Fee:</span>
              <span>${calculations.finalFee.toLocaleString()}</span>
            </div>

            <div className="bg-[#E5D095]/10 border border-[#E5D095]/35 p-4 rounded-lg mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <span className="block font-bold text-[#FDFCF0] text-lg">Spot Payment Required Now (30%)</span>
                <span className="text-sm text-[#FDFCF0]/70">Please upload your transfer receipt to initiate the project.</span>
              </div>
              <span className="text-3xl font-serif text-[#E5D095]">${calculations.spotPayment.toLocaleString()}</span>
            </div>
          </div>

          {/* NEW: File Upload Box */}
          <div className="border-2 border-dashed border-[#E5D095]/35 p-6 rounded-lg text-center bg-[#0a0a0a] hover:border-[#E5D095] transition-colors">
            <label className="cursor-pointer block">
              <span className="text-[#FDFCF0] font-semibold block mb-2">Upload Bank Transfer Receipt (PDF/Image)</span>
              <input 
                type="file" 
                accept="image/*,.pdf" 
                className="text-sm text-[#FDFCF0]/60 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-widest file:bg-[#E5D095] file:text-[#050505] hover:file:bg-[#FDFCF0]"
                onChange={(e) => setReceiptFile(e.target.files?.[0] || null)}
              />
              {receiptFile && (
                <span className="block mt-3 text-xs text-[#E5D095] font-bold tracking-wide">
                  Selected: {receiptFile.name}
                </span>
              )}
            </label>
          </div>

          <label className="flex items-start space-x-3 bg-[#0a0a0a] p-4 border border-[#FDFCF0]/10 rounded-lg cursor-pointer">
            <input type="checkbox" className="w-4 h-4 mt-1 accent-[#E5D095]" />
            <span className="text-sm text-[#FDFCF0]/75">
              I agree to the terms, including a 10% fee for additional requirements post-kickoff, a 50% penalty for cancellations at completion, and the 2-cycle free review limit.
            </span>
          </label>

          <div className="flex justify-between mt-6">
            <button onClick={handleBack} disabled={isSubmitting} className={secondaryButtonClass}>Back</button>
            <button 
              onClick={handleSubmit} 
              disabled={isSubmitting}
              className={primaryButtonClass}
            >
              {isSubmitting ? "Uploading & Saving..." : "Upload Receipt & Initialize Project"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}