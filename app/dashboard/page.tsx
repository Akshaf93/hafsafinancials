"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
import OptInWizard from "@/components/OptInWizard";
import Link from "next/link";

export default function ClientDashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [clientData, setClientData] = useState<any>(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [documents, setDocuments] = useState<any[]>([]);
  const [isUploadingDoc, setIsUploadingDoc] = useState(false);

  // Check for existing session on load
  useEffect(() => {
    const checkSession = async () => {
      if (!supabase) {
        setError("Missing Supabase environment variables.");
        setIsInitializing(false);
        return;
      }

      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.email) {
        await fetchClientData(session.user.email);
      } else {
        setIsInitializing(false);
      }
    };
    checkSession();
  }, []);

  const fetchClientData = async (userEmail: string) => {
    if (!supabase) {
      setError("Missing Supabase environment variables.");
      setIsInitializing(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('clients')
        .select(`
          *,
          projects (
            id,
            service_mode,
            project_status,
            progress_percentage,
            financials (*),
            payment_transactions (*)
          )
        `)
        .eq('email', userEmail)
        .maybeSingle(); // maybeSingle allows new users to log in without throwing an error

      if (error) {
        throw new Error("No active portal found for this email.");
      }

      if (data) {
        setClientData(data);
        
        // Fetch client documents from the 'documents' storage bucket
        const { data: docs } = await supabase.storage.from('documents').list(data.id);
        if (docs) {
          setDocuments(docs.filter((d: any) => d.name && d.name !== '.emptyFolderPlaceholder'));
        }
      } else {
        // Brand new user who just created an account
        setClientData({ email: userEmail, full_name: "New Client", company_name: "Workspace" });
      }
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message);
      supabase.auth.signOut();
    } finally {
      setIsInitializing(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setError("");
    setMessage("");

    if (!supabase) {
      setError("Missing Supabase environment variables.");
      setIsAuthenticating(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      if (data?.user?.email) {
        await fetchClientData(data.user.email);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleSignOut = async () => {
    if (!supabase) {
      return;
    }

    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setClientData(null);
    setEmail("");
    setPassword("");
  };

  const handleDocumentUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !clientData?.id || !supabase) return;

    setIsUploadingDoc(true);
    try {
      // Prepend timestamp to ensure unique filenames while preserving the original name
      const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const filePath = `${clientData.id}/${fileName}`;
      
      const { error: uploadError } = await supabase.storage.from('documents').upload(filePath, file);
      if (uploadError) throw uploadError;
      
      // Refresh documents list
      const { data: docs } = await supabase.storage.from('documents').list(clientData.id);
      if (docs) setDocuments(docs.filter((d: any) => d.name && d.name !== '.emptyFolderPlaceholder'));
    } catch (err: any) {
      alert(`Upload failed: ${err.message}`);
    } finally {
      setIsUploadingDoc(false);
      e.target.value = ""; // Reset file input
    }
  };

  const downloadDocument = async (fileName: string) => {
    if (!clientData?.id || !supabase) return;
    const filePath = `${clientData.id}/${fileName}`;
    // Create a secure, temporary 1-hour download link
    const { data, error } = await supabase.storage.from('documents').createSignedUrl(filePath, 3600);
    if (error) alert(`Error generating link: ${error.message}`);
    else if (data?.signedUrl) window.open(data.signedUrl, '_blank');
  };

  // --- LOADING SKELETON SCREEN ---
  if (isInitializing) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#050505] bg-[url('/noise.png')] bg-repeat opacity-95">
        <div className="text-[#E5D095] font-bold tracking-[0.2em] uppercase text-sm animate-pulse">Initializing Portal...</div>
      </div>
    );
  }

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#050505] p-4 bg-[url('/noise.png')] bg-repeat opacity-95">
        <div className="max-w-md w-full bg-[#0a0a0a] p-10 rounded-2xl shadow-2xl border border-[#FDFCF0]/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5D095] to-transparent opacity-50"></div>
          
          <p className="text-[#E5D095] text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-center">Secure Access</p>
          <h1 className="text-3xl font-serif text-[#FDFCF0] mb-2 text-center">Client Portal</h1>
          <p className="text-[#FDFCF0]/50 text-sm mb-8 text-center">Enter your credentials to access your financial dashboard.</p>
          {!supabase && (
            <div className="mb-5 rounded-lg border border-[#E5D095]/30 bg-[#332d10] px-4 py-3 text-xs text-[#E5D095]">
              Supabase environment variables are missing. Check <span className="font-bold">.env.local</span> or Vercel settings.
            </div>
          )}
          
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <input 
                type="email" 
                required
                placeholder="Email Address" 
                className="w-full p-4 bg-[#050505] border border-[#FDFCF0]/15 rounded-xl focus:border-[#E5D095] focus:ring-2 focus:ring-[#E5D095]/20 outline-none text-[#FDFCF0] placeholder:text-[#FDFCF0]/30 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="password" 
                required
                placeholder="Password" 
                className="w-full p-4 bg-[#050505] border border-[#FDFCF0]/15 rounded-xl focus:border-[#E5D095] focus:ring-2 focus:ring-[#E5D095]/20 outline-none text-[#FDFCF0] placeholder:text-[#FDFCF0]/30 transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
              />
            </div>
            {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            {message && <p className="text-[#95e6b8] text-xs text-center">{message}</p>}
            <button 
              type="submit" 
              disabled={isAuthenticating}
              className="w-full bg-[#E5D095] text-[#050505] font-bold uppercase tracking-widest text-xs p-4 rounded-xl hover:bg-[#FDFCF0] transition-colors shadow-[0_0_20px_rgba(229,208,149,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAuthenticating ? "Authenticating..." : "Access Portal"}
            </button>
          </form>
          
          <div className="mt-8 text-center border-t border-[#FDFCF0]/10 pt-6">
            <p className="text-[#FDFCF0]/40 text-xs mb-2">Not a client yet?</p>
            <Link 
              href="/contact"
              className="text-[#E5D095] hover:text-[#FDFCF0] text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Request Portal Access
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // --- CLIENT PORTAL SCREEN ---
  // Extracting the first project for display purposes
  const project = clientData.projects?.[0];
  const spotPayment = project?.payment_transactions?.find((tx: any) => tx.milestone_type === 'spot_30');

  return (
    <div className="flex h-screen w-full bg-[#050505] text-[#FDFCF0] overflow-hidden font-sans">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-[#FDFCF0]/10 flex-col hidden md:flex z-20">
        <div className="h-20 flex items-center px-6 border-b border-[#FDFCF0]/10 flex-shrink-0">
          <div className="text-xl font-bold tracking-tight flex items-center gap-1">
            <span className="text-[#FDFCF0]">Hafsa</span><span className="text-[#E5D095]">Advisors</span>
          </div>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto no-scrollbar">
          <div className="px-4 py-3 bg-[#E5D095]/10 text-[#E5D095] rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            Overview
          </div>
          <div className="px-4 py-3 text-[#FDFCF0]/40 hover:text-[#FDFCF0] hover:bg-[#FDFCF0]/5 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-colors cursor-not-allowed opacity-50" title="Available upon active engagement">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Documents
          </div>
        </nav>
        <div className="p-4 border-t border-[#FDFCF0]/10 flex-shrink-0">
          <button onClick={handleSignOut} className="flex items-center gap-3 px-4 py-3 w-full text-left text-[#FDFCF0]/40 hover:text-[#E5D095] hover:bg-[#FDFCF0]/5 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        
        {/* TOP HEADER */}
        <header className="h-20 flex items-center justify-between px-6 md:px-10 border-b border-[#FDFCF0]/10 bg-[#0a0a0a] z-10 flex-shrink-0">
          <div className="flex items-center gap-4 md:hidden">
            <div className="text-lg font-bold tracking-tight flex items-center gap-1">
              <span className="text-[#FDFCF0]">Hafsa</span><span className="text-[#E5D095]">Advisors</span>
            </div>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-serif text-[#FDFCF0]">Welcome back, {clientData?.full_name?.split(' ')[0]}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-[#E5D095] uppercase tracking-widest">{clientData?.company_name}</div>
              <div className="text-[10px] text-[#FDFCF0]/40 font-mono">{clientData?.email}</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#E5D095] text-[#050505] flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(229,208,149,0.3)]">
              {clientData?.full_name?.charAt(0) || 'C'}
            </div>
            <button onClick={handleSignOut} className="md:hidden text-[#FDFCF0]/40 hover:text-[#E5D095]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </button>
          </div>
        </header>

        {/* SCROLLABLE VIEW */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#050505] no-scrollbar">
          <div className="max-w-5xl mx-auto">
            
            {/* Mobile Welcome Title */}
            <div className="md:hidden mb-8 border-b border-[#FDFCF0]/10 pb-4">
               <h1 className="text-3xl font-serif text-[#FDFCF0] tracking-tight">Welcome, {clientData?.full_name?.split(' ')[0]}</h1>
               <p className="text-[#E5D095] mt-2 uppercase tracking-[0.2em] text-[10px] font-bold">{clientData?.company_name}</p>
            </div>

            {project ? (
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                
                {/* Left Column: Project Status */}
                <div className="xl:col-span-2 space-y-8">
                  <div className="bg-[#0a0a0a] p-8 rounded-2xl shadow-2xl border border-[#FDFCF0]/10">
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl font-serif text-[#FDFCF0]">Current Engagement</h2>
                      <span className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest ${
                        project.project_status === 'active' 
                          ? 'bg-[#102719] text-[#95e6b8] border border-[#29573b]' 
                          : 'bg-[#332d10] text-[#E5D095] border border-[#E5D095]/30'
                      }`}>
                        {project.project_status.replace(/_/g, ' ')}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-3 flex justify-between text-xs font-bold uppercase tracking-widest text-[#FDFCF0]/60">
                      <span>Project Completion</span>
                      <span className="text-[#E5D095]">{project.progress_percentage}%</span>
                    </div>
                    <div className="w-full bg-[#1a1a1a] rounded-full h-2 mb-8 overflow-hidden">
                      <div 
                        className="bg-[#E5D095] h-2 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(229,208,149,0.5)]" 
                        style={{ width: `${project.progress_percentage}%` }}
                      ></div>
                    </div>

                    <p className="text-[#FDFCF0]/60 leading-relaxed font-light">
                      {project.project_status === 'pending_spot_payment' && "We are awaiting your initial 30% spot payment to kick off the project."}
                      {project.project_status === 'active' && "Your project is currently active. Our team is actively analyzing your requirements and structuring your financials."}
                    </p>
                  </div>

                  {/* Document Vault Placeholder */}
                  <div className="bg-[#050505] p-8 rounded-2xl border-2 border-[#E5D095]/20 border-dashed hover:border-[#E5D095]/50 transition-colors">
                    <h3 className="text-xl font-serif text-[#FDFCF0] mb-2">Secure Document Vault</h3>
                    <p className="text-[#FDFCF0]/50 text-sm mb-6 font-light">Upload requested financial statements and trial balances here.</p>
                    <button className="px-6 py-3 bg-transparent border border-[#FDFCF0]/20 text-[#FDFCF0] text-xs font-bold uppercase tracking-widest rounded hover:border-[#E5D095] hover:text-[#E5D095] transition-colors">
                      + Upload Document
                    </button>
                  {/* Document Vault */}
                  <div className="bg-[#0a0a0a] p-8 rounded-2xl shadow-2xl border border-[#FDFCF0]/10 flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6 border-b border-[#FDFCF0]/10 pb-6">
                      <div>
                        <h3 className="text-2xl font-serif text-[#FDFCF0]">Secure Document Vault</h3>
                        <p className="text-[#FDFCF0]/50 text-xs font-light mt-2">Manage your financial statements, trial balances, and identity docs.</p>
                      </div>
                      <label className={`cursor-pointer px-6 py-3 border border-[#E5D095] text-[#E5D095] text-[10px] font-bold uppercase tracking-widest rounded hover:bg-[#E5D095] hover:text-[#050505] transition-colors text-center ${isUploadingDoc ? 'opacity-50 pointer-events-none' : ''}`}>
                        {isUploadingDoc ? "Uploading..." : "+ Upload File"}
                        <input type="file" className="hidden" onChange={handleDocumentUpload} disabled={isUploadingDoc} />
                      </label>
                    </div>

                    <div className="space-y-3 max-h-60 overflow-y-auto pr-2 no-scrollbar">
                      {documents.length === 0 ? (
                        <div className="text-center py-8 border-2 border-dashed border-[#FDFCF0]/10 rounded-xl">
                          <p className="text-[#FDFCF0]/40 text-sm font-light">No documents uploaded yet.</p>
                        </div>
                      ) : (
                        documents.map((doc: any) => (
                          <div key={doc.name} className="flex justify-between items-center p-4 bg-[#1a1a1a] rounded-xl border border-[#FDFCF0]/5 hover:border-[#E5D095]/30 transition-colors group">
                            <div className="flex items-center gap-4 overflow-hidden">
                              <div className="w-10 h-10 rounded bg-[#E5D095]/10 text-[#E5D095] flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                              </div>
                              <div className="flex flex-col overflow-hidden">
                                <span className="text-sm text-[#FDFCF0] truncate font-medium">{doc.name.replace(/^\d+_/, '')}</span>
                                <span className="text-[10px] text-[#FDFCF0]/40 uppercase tracking-widest mt-1">{((doc.metadata?.size || 0) / 1024 / 1024).toFixed(2)} MB • {new Date(doc.created_at).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <button onClick={() => downloadDocument(doc.name)} className="text-[10px] text-[#E5D095] font-bold uppercase tracking-widest hover:text-[#FDFCF0] whitespace-nowrap ml-4 opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity bg-[#E5D095]/10 px-4 py-2 rounded">
                              Download
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column: Financials */}
                <div className="space-y-6">
                  <div className="bg-[#0a0a0a] p-8 rounded-2xl shadow-2xl border border-[#FDFCF0]/10">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#E5D095] mb-6">Financial Overview</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm text-[#FDFCF0]/60">
                        <span>Total Engagement Fee</span>
                        <span className="font-semibold text-[#FDFCF0]">${project.financials?.[0]?.final_project_fee?.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-[#FDFCF0]/60">
                        <span>Spot Payment (30%)</span>
                        <span className="font-semibold text-[#FDFCF0]">${spotPayment?.amount_due?.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#FDFCF0]/10">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-[#FDFCF0]/40 mb-2">Spot Payment Status</span>
                      {spotPayment?.approval_status === 'approved' ? (
                        <span className="text-[#95e6b8] font-bold text-sm tracking-wide flex items-center">
                          <span className="mr-2">✓</span> Received & Verified
                        </span>
                      ) : (
                        <span className="text-[#E5D095] font-bold text-sm tracking-wide">
                          Under Admin Review
                        </span>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div className="flex flex-col items-center">
                <OptInWizard 
                  defaultEmail={clientData?.email || email} 
                  onSuccess={() => fetchClientData(clientData?.email || email)} 
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}