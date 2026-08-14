
"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";

interface DiagnosticData {
  frameworks: string[];
  complexity: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
}

export default function IFRSReadinessTool() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false );
  const [data, setData] = useState<DiagnosticData>({
    frameworks: [],
    complexity: "",
    timeline: "",
    name: "",
    email: "",
    company: "",
  });

  const totalSteps = 4;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const toggleFramework = (fw: string) => {
    setData((prev) => ({
      ...prev,
      frameworks: prev.frameworks.includes(fw)
        ? prev.frameworks.filter((i) => i !== fw)
        : [...prev.frameworks, fw],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(5);
    }, 2500);
  };

  return (
    <div className="w-full bg-[#0a0a0a] border border-[#FDFCF0]/10 rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative min-h-[550px] flex flex-col">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5D095]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      {/* --- HEADER & PROGRESS BAR --- */}
      <div className="px-8 md:px-12 pt-10 pb-6 border-b border-[#FDFCF0]/5 relative z-10 flex-shrink-0">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#FDFCF0] mb-1.5">
              Transition Diagnostic
            </h2>
            <p className="text-[#FDFCF0]/50 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase">
              Secure Architecture <span className="mx-2">•</span> AI-Enabled
            </p>
          </div>
          {step <= totalSteps && (
            <div className="text-right">
              <span className="text-[#E5D095] font-mono text-sm tracking-widest">
                0{step} <span className="text-[#FDFCF0]/30">/ 0{totalSteps}</span>
              </span>
            </div>
          )}
        </div>

        {/* Progress Track */}
        {step <= totalSteps && (
          <div className="w-full h-[2px] bg-[#FDFCF0]/10 relative overflow-hidden rounded-full">
            <m.div
              className="absolute top-0 left-0 h-full bg-[#E5D095]"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        )}
      </div>

      {/* --- DIAGNOSTIC CONTENT AREA --- */}
      <div className="flex-1 relative p-8 md:p-12 z-10 flex flex-col justify-center">
        {/* FIX: initial={false} prevents the 0-opacity hydration bug on load */}
        <AnimatePresence mode="wait" initial={false}>
          
          {/* STEP 1: FRAMEWORKS */}
          {step === 1 && (
            <m.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <h3 className="text-xl md:text-2xl font-serif text-[#FDFCF0] mb-2">Identify target frameworks.</h3>
              <p className="text-[#FDFCF0]/50 text-sm font-light mb-8">Select all accounting standards relevant to your current transition or audit mandate.</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {['IFRS 9 (Financial Instruments)', 'IFRS 15 (Revenue Recognition)', 'IFRS 16 (Leases)', 'IFRS 17 (Insurance Contracts)', 'IFRS 1 (First-Time Adoption)', 'General IAS Consolidation'].map((fw) => {
                  const isActive = data.frameworks.includes(fw);
                  return (
                    <button
                      key={fw}
                      onClick={() => toggleFramework(fw)}
                      className={`text-left p-4 rounded-sm border transition-all duration-200 ${
                        isActive 
                          ? 'border-[#E5D095] bg-[#E5D095]/10' 
                          : 'border-[#FDFCF0]/10 bg-[#050505] hover:border-[#FDFCF0]/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${isActive ? 'text-[#E5D095] font-medium' : 'text-[#FDFCF0]/70'}`}>{fw}</span>
                        <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${isActive ? 'border-[#E5D095]' : 'border-[#FDFCF0]/30'}`}>
                          {isActive && <div className="w-2 h-2 bg-[#E5D095]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </m.div>
          )}

          {/* STEP 2: COMPLEXITY */}
          {step === 2 && (
            <m.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <h3 className="text-xl md:text-2xl font-serif text-[#FDFCF0] mb-2">Determine structural complexity.</h3>
              <p className="text-[#FDFCF0]/50 text-sm font-light mb-8">This dictates the depth of our algorithmic ledger ingestion.</p>
              
              <div className="flex flex-col gap-4">
                {[
                  { id: 'single', label: 'Single Operating Entity', desc: 'Domestic operations, straightforward trial balances.' },
                  { id: 'group', label: 'Consolidated Group', desc: 'Multiple subsidiaries, holding company structures.' },
                  { id: 'cross-border', label: 'Cross-Border / Multi-Currency', desc: 'Complex FX translation, diverse jurisdictional compliance.' }
                ].map((comp) => {
                  const isActive = data.complexity === comp.id;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setData({ ...data, complexity: comp.id })}
                      className={`text-left p-5 rounded-sm border transition-all duration-200 ${
                        isActive 
                          ? 'border-[#E5D095] bg-[#E5D095]/10' 
                          : 'border-[#FDFCF0]/10 bg-[#050505] hover:border-[#FDFCF0]/30'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${isActive ? 'border-[#E5D095]' : 'border-[#FDFCF0]/30'}`}>
                          {isActive && <div className="w-2 h-2 rounded-full bg-[#E5D095]" />}
                        </div>
                        <div>
                          <div className={`text-[15px] mb-1 ${isActive ? 'text-[#E5D095] font-medium' : 'text-[#FDFCF0]/90'}`}>{comp.label}</div>
                          <div className="text-[13px] text-[#FDFCF0]/50 font-light">{comp.desc}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </m.div>
          )}

          {/* STEP 3: TIMELINE */}
          {step === 3 && (
            <m.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <h3 className="text-xl md:text-2xl font-serif text-[#FDFCF0] mb-2">Establish mandate urgency.</h3>
              <p className="text-[#FDFCF0]/50 text-sm font-light mb-8">Our AI-enabled delivery stack can accommodate compressed timelines.</p>
              
              <div className="grid gap-4">
                {[
                  'Proactive Planning (Next Fiscal Year)',
                  'Active Transition (Current Quarter)',
                  'Audit Defense (Immediate Assistance Required)'
                ].map((time) => {
                  const isActive = data.timeline === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setData({ ...data, timeline: time })}
                      className={`text-left p-5 rounded-sm border transition-all duration-200 ${
                        isActive 
                          ? 'border-[#E5D095] bg-[#E5D095]/10' 
                          : 'border-[#FDFCF0]/10 bg-[#050505] hover:border-[#FDFCF0]/30'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${isActive ? 'border-[#E5D095]' : 'border-[#FDFCF0]/30'}`}>
                          {isActive && <div className="w-2 h-2 rounded-full bg-[#E5D095]" />}
                        </div>
                        <span className={`text-[15px] ${isActive ? 'text-[#E5D095] font-medium' : 'text-[#FDFCF0]/90'}`}>{time}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </m.div>
          )}

          {/* STEP 4: LEAD CAPTURE */}
          {step === 4 && !isProcessing && (
            <m.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <h3 className="text-xl md:text-2xl font-serif text-[#FDFCF0] mb-2">Finalize securely.</h3>
              <p className="text-[#FDFCF0]/50 text-sm font-light mb-8">Where should we securely transmit the readiness analysis and principal consultation link?</p>
              
              <form id="diagnostic-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-widest text-[#FDFCF0]/60 uppercase">Executive Name</label>
                    <input 
                      required
                      type="text"
                      value={data.name}
                      onChange={(e) => setData({...data, name: e.target.value})}
                      className="w-full bg-[#050505] border border-[#FDFCF0]/15 rounded-sm px-4 py-3 text-sm text-[#FDFCF0] focus:outline-none focus:border-[#E5D095] transition-colors"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-widest text-[#FDFCF0]/60 uppercase">Corporate Email</label>
                    <input 
                      required
                      type="email"
                      value={data.email}
                      onChange={(e) => setData({...data, email: e.target.value})}
                      className="w-full bg-[#050505] border border-[#FDFCF0]/15 rounded-sm px-4 py-3 text-sm text-[#FDFCF0] focus:outline-none focus:border-[#E5D095] transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest text-[#FDFCF0]/60 uppercase">Organization / Group Name</label>
                  <input 
                    required
                    type="text"
                    value={data.company}
                    onChange={(e) => setData({...data, company: e.target.value})}
                    className="w-full bg-[#050505] border border-[#FDFCF0]/15 rounded-sm px-4 py-3 text-sm text-[#FDFCF0] focus:outline-none focus:border-[#E5D095] transition-colors"
                    placeholder="Enter holding company or entity name"
                  />
                </div>
                
                <div className="flex items-center gap-3 mt-6 p-4 bg-[#E5D095]/5 border border-[#E5D095]/20 rounded-sm">
                  <svg className="w-5 h-5 text-[#E5D095] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-[#FDFCF0]/60 text-xs font-light">
                    All data is secured and processed under strict NDA protocols.
                  </p>
                </div>
              </form>
            </m.div>
          )}

          {/* PROCESSING STATE */}
          {isProcessing && (
            <m.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full flex flex-col items-center justify-center py-12"
            >
              <div className="relative w-16 h-16 mb-8">
                <div className="absolute inset-0 border-2 border-[#FDFCF0]/10 rounded-full" />
                <m.div 
                  className="absolute inset-0 border-2 border-[#E5D095] rounded-full border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#E5D095] rounded-full animate-pulse" />
                </div>
              </div>
              <h3 className="text-sm md:text-base font-mono text-[#E5D095] tracking-[0.2em] uppercase mb-4">Analyzing Parameters</h3>
              <p className="text-[#FDFCF0]/50 text-sm font-light text-center max-w-sm">
                Evaluating regulatory requirements for {data.frameworks.length} frameworks across a {data.complexity.toLowerCase() || 'selected'} structure...
              </p>
            </m.div>
          )}

          {/* STEP 5: SUCCESS STATE */}
          {step === 5 && (
            <m.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex flex-col items-center justify-center text-center py-8"
            >
              <div className="w-16 h-16 bg-[#E5D095]/10 border border-[#E5D095]/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#E5D095]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-[#FDFCF0] mb-4">Diagnostic Complete.</h3>
              <p className="text-[#FDFCF0]/70 text-[15px] font-light leading-relaxed max-w-md mx-auto mb-10">
                Thank you, {data.name.split(' ')[0]}. A principal advisor has received your mandate parameters for <strong className="text-[#E5D095] font-medium">{data.company}</strong>. We will securely transmit your readiness overview shortly.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="px-8 py-3.5 border border-[#FDFCF0]/20 text-[#FDFCF0] text-xs font-bold uppercase tracking-[0.2em] hover:border-[#E5D095] hover:text-[#E5D095] transition-colors rounded-sm"
              >
                Return to Advisory
              </button>
            </m.div>
          )}

        </AnimatePresence>
      </div>

      {/* --- FOOTER CONTROLS --- */}
      {step <= totalSteps && !isProcessing && (
        <div className="px-8 md:px-12 py-6 border-t border-[#FDFCF0]/5 flex items-center justify-between bg-[#050505] relative z-10 flex-shrink-0">
          
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
              step === 1 ? 'text-transparent pointer-events-none' : 'text-[#FDFCF0]/50 hover:text-[#FDFCF0]'
            }`}
          >
            ← Back
          </button>

          {step < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && data.frameworks.length === 0) ||
                (step === 2 && !data.complexity) ||
                (step === 3 && !data.timeline)
              }
              className="px-8 py-3 bg-[#FDFCF0] text-[#050505] text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#E5D095] transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              Proceed
            </button>
          ) : (
            <button
              type="submit"
              form="diagnostic-form"
              disabled={!data.name || !data.email || !data.company}
              className="px-8 py-3 bg-[#E5D095] text-[#050505] text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#FDFCF0] transition-all shadow-[0_0_15px_rgba(229,208,149,0.2)] disabled:opacity-30 disabled:pointer-events-none"
            >
              Analyze Mandate
            </button>
          )}
        </div>
      )}
    </div>
  );
}