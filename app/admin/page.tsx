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

  if (loading) {
    return (
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="text-[#E5D095] font-bold tracking-[0.2em] uppercase text-sm animate-pulse">Loading secure dashboard...</div>
      </main>
    );
  }

  if (errorMessage) {
    return (
      <main className="min-h-screen w-full pt-32 px-6">
        <div className="max-w-4xl mx-auto p-8 bg-[#1a1a1a] border border-red-900/50 rounded-xl text-center shadow-2xl">
          <h2 className="text-2xl font-serif text-red-400 mb-4">Dashboard Error</h2>
          <p className="text-[#FDFCF0]/60 font-mono text-sm mb-4">{errorMessage}</p>
          <p className="text-xs text-red-500/50 uppercase tracking-widest">Check your VS Code terminal and Browser Console for more details.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto font-sans">
        
        <div className="mb-12">
          <p className="text-[#E5D095] text-xs font-bold uppercase tracking-[0.3em] mb-4">Secure Portal</p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#FDFCF0] mb-4">Admin Control Center</h1>
          <p className="text-lg text-[#FDFCF0]/60 font-light">Review incoming spot payments and initialize projects.</p>
        </div>

        <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl border border-[#FDFCF0]/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#1a1a1a] border-b border-[#FDFCF0]/10 text-xs uppercase tracking-widest text-[#FDFCF0]/60">
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
                        <p className="text-xs text-[#E5D095] mt-1 uppercase tracking-wider">{tx.projects?.clients?.company_name}</p>
                        <p className="text-xs text-[#FDFCF0]/40 mt-1 font-mono">{tx.projects?.clients?.email}</p>
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
                            className="text-[#E5D095] hover:text-[#FDFCF0] text-xs font-bold tracking-widest uppercase transition-colors border-b border-[#E5D095]/30 hover:border-[#FDFCF0] pb-0.5 inline-block"
                          >
                            View Receipt
                          </a>
                        ) : (
                          <span className="text-[#FDFCF0]/40 text-xs italic">No file</span>
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
                          <span className="text-[#95e6b8] font-bold text-xs uppercase tracking-widest flex items-center justify-end gap-1.5">
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
    </main>
  );
}