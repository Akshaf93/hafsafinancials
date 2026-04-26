"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AdminDashboard() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchTransactions = async () => {
    try {
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Missing Supabase URL or Publishable Key in environment variables.");
      }

      // Fetch all transactions and join with Projects & Clients tables
      const { data, error } = await supabase
        .from('payment_transactions')
        .select(`
          id,
          amount_due,
          proof_file_url,
          approval_status,
          created_at,
          project_id,
          projects (
            service_mode,
            clients (
              full_name,
              email,
              company_name
            )
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      } 
      
      setTransactions(data || []);
      
    } catch (err: any) {
      console.error("Dashboard Error:", err);
      setErrorMessage(err.message || "Failed to load dashboard data.");
    } finally {
      // This ensures the loading screen ALWAYS turns off, even if it fails
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleApprove = async (transactionId: string, projectId: string) => {
    const confirmApprove = confirm("Are you sure you want to approve this payment and initialize the project?");
    if (!confirmApprove) return;

    try {
      // 1. Mark transaction as approved
      const { error: txError } = await supabase
        .from('payment_transactions')
        .update({ approval_status: 'approved' })
        .eq('id', transactionId);
      
      if (txError) throw txError;

      // 2. Mark project as active
      const { error: projError } = await supabase
        .from('projects')
        .update({ project_status: 'active' })
        .eq('id', projectId);

      if (projError) throw projError;

      alert("Project successfully activated!");
      fetchTransactions(); // Refresh the list

    } catch (err: any) {
      alert(`Error approving project: ${err.message}`);
    }
  };

  const totalTransactions = transactions.length;
  const pendingCount = transactions.filter(t => t.approval_status === 'under_admin_review').length;
  const totalRevenue = transactions
    .filter(t => t.approval_status === 'approved')
    .reduce((acc, t) => acc + Number(t.amount_due || 0), 0);

  const Sidebar = () => (
    <aside className="w-64 bg-[#0a0a0a] border-r border-[#FDFCF0]/10 flex-col hidden md:flex z-20">
      <div className="h-20 flex items-center px-6 border-b border-[#FDFCF0]/10 flex-shrink-0">
        <div className="text-xl font-bold tracking-tight flex items-center gap-1">
          <span className="text-[#E5D095]">Admin</span><span className="text-[#FDFCF0]">Portal</span>
        </div>
      </div>
      <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto no-scrollbar">
        <div className="px-4 py-3 bg-[#E5D095]/10 text-[#E5D095] rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Transactions
        </div>
      </nav>
      <div className="p-4 border-t border-[#FDFCF0]/10 flex-shrink-0">
        <a href="/" className="flex items-center gap-3 px-4 py-3 w-full text-left text-[#FDFCF0]/40 hover:text-[#E5D095] hover:bg-[#FDFCF0]/5 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          Exit to Site
        </a>
      </div>
    </aside>
  );

  const Header = () => (
    <header className="h-20 flex items-center justify-between px-6 md:px-10 border-b border-[#FDFCF0]/10 bg-[#0a0a0a] z-10 flex-shrink-0">
      <div className="flex items-center gap-4 md:hidden">
        <div className="text-lg font-bold tracking-tight flex items-center gap-1">
          <span className="text-[#E5D095]">Admin</span><span className="text-[#FDFCF0]">Portal</span>
        </div>
      </div>
      <div className="hidden md:block">
        <h1 className="text-xl font-serif text-[#FDFCF0]">Control Center</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <div className="text-xs font-bold text-[#E5D095] uppercase tracking-widest">System Admin</div>
          <div className="text-[10px] text-[#FDFCF0]/40 font-mono">advisory@hafsafinancials.com</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#E5D095]/30 text-[#E5D095] flex items-center justify-center font-bold text-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>
      </div>
    </header>
  );

  if (loading) {
    return (
      <div className="flex h-screen w-full bg-[#050505] text-[#FDFCF0] overflow-hidden font-sans">
        <Sidebar />
        <main className="flex-1 flex flex-col h-full relative overflow-hidden">
          <Header />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-[#E5D095] font-bold tracking-[0.2em] uppercase text-sm animate-pulse">Loading Database...</div>
          </div>
        </main>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex h-screen w-full bg-[#050505] text-[#FDFCF0] overflow-hidden font-sans">
        <Sidebar />
        <main className="flex-1 flex flex-col h-full relative overflow-hidden">
          <Header />
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="max-w-xl w-full p-8 bg-[#1a1a1a] border border-red-900/50 rounded-xl text-center shadow-2xl">
              <h2 className="text-2xl font-serif text-red-400 mb-4">Dashboard Error</h2>
              <p className="text-[#FDFCF0]/60 font-mono text-sm mb-4">{errorMessage}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-[#050505] text-[#FDFCF0] overflow-hidden font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 md:p-10 no-scrollbar">
          <div className="max-w-6xl mx-auto">
            
            {/* Mobile Title */}
            <div className="md:hidden mb-8 border-b border-[#FDFCF0]/10 pb-4">
              <h2 className="text-3xl font-serif text-[#FDFCF0]">Control Center</h2>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#0a0a0a] border border-[#FDFCF0]/10 p-6 rounded-2xl shadow-xl">
                <h3 className="text-[#FDFCF0]/40 text-[10px] font-bold uppercase tracking-widest mb-2">Total Value Activated</h3>
                <p className="text-3xl font-serif text-[#E5D095]">${totalRevenue.toLocaleString()}</p>
              </div>
              <div className="bg-[#0a0a0a] border border-[#FDFCF0]/10 p-6 rounded-2xl shadow-xl">
                <h3 className="text-[#FDFCF0]/40 text-[10px] font-bold uppercase tracking-widest mb-2">Pending Approvals</h3>
                <p className="text-3xl font-serif text-[#FDFCF0]">{pendingCount}</p>
              </div>
              <div className="bg-[#0a0a0a] border border-[#FDFCF0]/10 p-6 rounded-2xl shadow-xl">
                <h3 className="text-[#FDFCF0]/40 text-[10px] font-bold uppercase tracking-widest mb-2">Total Engagements</h3>
                <p className="text-3xl font-serif text-[#FDFCF0]">{totalTransactions}</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl border border-[#FDFCF0]/10 overflow-hidden">
              <div className="p-6 border-b border-[#FDFCF0]/10 flex justify-between items-center">
                <h2 className="text-lg font-serif text-[#FDFCF0]">Recent Transactions</h2>
                <button onClick={fetchTransactions} className="text-[10px] text-[#E5D095] uppercase tracking-widest font-bold hover:text-[#FDFCF0] transition-colors">↻ Refresh Data</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-[#1a1a1a] border-b border-[#FDFCF0]/10 text-[10px] uppercase tracking-widest text-[#FDFCF0]/60">
                      <th className="p-5 font-bold">Client</th>
                      <th className="p-5 font-bold">Amount Due</th>
                      <th className="p-5 font-bold">Status</th>
                      <th className="p-5 font-bold">Receipt</th>
                      <th className="p-5 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#FDFCF0]/5">
                    {transactions.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-10 text-center text-[#FDFCF0]/40 italic text-sm">No transactions found in the database.</td>
                      </tr>
                    ) : (
                      transactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-[#1a1a1a]/50 transition-colors">
                          
                          {/* Client Info */}
                          <td className="p-5">
                            <p className="font-bold text-[#FDFCF0] tracking-wide">{tx.projects?.clients?.full_name}</p>
                            <p className="text-[10px] text-[#E5D095] mt-1 uppercase tracking-wider">{tx.projects?.clients?.company_name}</p>
                            <p className="text-[10px] text-[#FDFCF0]/40 mt-1 font-mono">{tx.projects?.clients?.email}</p>
                          </td>

                          {/* Financials */}
                          <td className="p-5">
                            <span className="font-serif text-[#FDFCF0] text-xl">
                              ${Number(tx.amount_due).toLocaleString()}
                            </span>
                          </td>

                          {/* Status Badge */}
                          <td className="p-5">
                            <span className={`px-3 py-1.5 rounded text-[10px] font-bold tracking-widest uppercase ${
                              tx.approval_status === 'approved' 
                                ? 'bg-[#102719] text-[#95e6b8] border border-[#29573b]' 
                                : tx.approval_status === 'under_admin_review'
                                ? 'bg-[#332d10] text-[#E5D095] border border-[#E5D095]/30'
                                : 'bg-[#1a1a1a] text-[#FDFCF0]/60 border border-[#FDFCF0]/20'
                            }`}>
                              {tx.approval_status.replace(/_/g, ' ')}
                            </span>
                          </td>

                          {/* Receipt Link */}
                          <td className="p-5">
                            {tx.proof_file_url ? (
                              <a 
                                href={tx.proof_file_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#E5D095] hover:text-[#FDFCF0] text-[10px] font-bold tracking-widest uppercase transition-colors border-b border-[#E5D095]/30 hover:border-[#FDFCF0] pb-0.5 inline-block"
                              >
                                View Receipt
                              </a>
                            ) : (
                              <span className="text-[#FDFCF0]/40 text-[10px] italic">No file</span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="p-5 text-right">
                            {tx.approval_status === 'under_admin_review' && (
                              <button 
                                onClick={() => handleApprove(tx.id, tx.project_id)}
                                className="px-5 py-2.5 bg-[#E5D095] text-[#050505] text-[10px] font-bold uppercase tracking-widest rounded hover:bg-[#FDFCF0] transition-colors shadow-[0_0_15px_rgba(229,208,149,0.15)]"
                              >
                                Approve
                              </button>
                            )}
                            {tx.approval_status === 'approved' && (
                              <span className="text-[#95e6b8] font-bold text-[10px] uppercase tracking-widest flex items-center justify-end gap-1.5">
                                <span className="w-1.5 h-1.5 bg-[#95e6b8] rounded-full"></span>
                                Activated
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}