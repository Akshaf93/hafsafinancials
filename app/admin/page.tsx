"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export default function AdminDashboard() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all transactions and join with Projects & Clients tables
  const fetchTransactions = async () => {
    if (!supabase) return;
    
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
      console.error("Error fetching data:", error);
    } else {
      setTransactions(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Approve the payment and activate the project
  const handleApprove = async (transactionId: string, projectId: string) => {
    if (!supabase) return;
    
    const confirmApprove = confirm("Are you sure you want to approve this payment and initialize the project?");
    if (!confirmApprove) return;

    // 1. Mark transaction as approved
    await supabase
      .from('payment_transactions')
      .update({ approval_status: 'approved' })
      .eq('id', transactionId);

    // 2. Mark project as active
    await supabase
      .from('projects')
      .update({ project_status: 'active' })
      .eq('id', projectId);

    alert("Project successfully activated!");
    fetchTransactions(); // Refresh the list
  };

  if (loading) {
    return <div className="p-10 text-center text-secondary-600 font-semibold">Loading secure dashboard...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans mt-10">
      
      <div className="flex justify-between items-center border-b border-accent-200 pb-5 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 tracking-tight">Admin Control Center</h1>
          <p className="text-sm text-secondary-500 mt-1">Review incoming spot payments and initialize projects.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-accent-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-accent-50 border-b border-accent-200 text-sm uppercase tracking-wider text-secondary-500">
              <th className="p-5 font-semibold">Client</th>
              <th className="p-5 font-semibold">Amount Due</th>
              <th className="p-5 font-semibold">Status</th>
              <th className="p-5 font-semibold">Receipt</th>
              <th className="p-5 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-accent-100">
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-secondary-400 italic">No transactions found.</td>
              </tr>
            ) : (
              transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-accent-50/50 transition-colors">
                  
                  {/* Client Info */}
                  <td className="p-5">
                    <p className="font-bold text-secondary-900">{tx.projects?.clients?.full_name}</p>
                    <p className="text-sm text-secondary-500">{tx.projects?.clients?.company_name}</p>
                    <p className="text-xs text-secondary-400 mt-1">{tx.projects?.clients?.email}</p>
                  </td>

                  {/* Financials */}
                  <td className="p-5">
                    <span className="font-bold text-primary-DEFAULT text-lg">
                      ${tx.amount_due.toLocaleString()}
                    </span>
                  </td>

                  {/* Status Badge */}
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                      tx.approval_status === 'approved' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : tx.approval_status === 'under_admin_review'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-slate-100 text-slate-800 border border-slate-200'
                    }`}>
                      {tx.approval_status.replace(/_/g, ' ').toUpperCase()}
                    </span>
                  </td>

                  {/* Receipt Link */}
                  <td className="p-5">
                    {tx.proof_file_url ? (
                      <a 
                        href={tx.proof_file_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-DEFAULT hover:text-primary-600 font-semibold underline decoration-primary-300 underline-offset-4"
                      >
                        View Receipt
                      </a>
                    ) : (
                      <span className="text-secondary-400 text-sm italic">No file</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="p-5 text-right">
                    {tx.approval_status === 'under_admin_review' && (
                      <button 
                        onClick={() => handleApprove(tx.id, tx.project_id)}
                        className="px-5 py-2 bg-secondary-900 text-white text-sm font-semibold rounded-lg hover:bg-primary-DEFAULT transition-colors shadow-sm"
                      >
                        Approve Payment
                      </button>
                    )}
                    {tx.approval_status === 'approved' && (
                      <span className="text-green-600 font-semibold text-sm">✓ Activated</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}