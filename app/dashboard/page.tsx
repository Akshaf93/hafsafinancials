"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function ClientDashboard() {
  const [email, setEmail] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clientData, setClientData] = useState<any>(null);
  const [error, setError] = useState("");

  // Simple Email Lookup (We will replace this with real Auth later)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setError("");

    try {
      // Fetch the client and all their nested project/financial data
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
        .eq('email', email)
        .single();

      if (error || !data) {
        throw new Error("No active portal found for this email.");
      }

      setClientData(data);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsAuthenticating(false);
    }
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-accent-50 p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-accent-200">
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Client Portal Access</h1>
          <p className="text-secondary-500 mb-6">Enter your official email to view your active engagements.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="email" 
                required
                placeholder="name@company.com" 
                className="w-full p-4 bg-accent-50 border border-accent-200 rounded-xl focus:ring-2 focus:ring-primary-DEFAULT outline-none text-secondary-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
              type="submit" 
              disabled={isAuthenticating}
              className="w-full bg-secondary-900 text-white font-semibold p-4 rounded-xl hover:bg-primary-DEFAULT transition-colors shadow-md disabled:bg-secondary-400"
            >
              {isAuthenticating ? "Locating Profile..." : "Access Portal"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- CLIENT PORTAL SCREEN ---
  // Extracting the first project for display purposes
  const project = clientData.projects?.[0];
  const spotPayment = project?.payment_transactions?.find((tx: any) => tx.milestone_type === 'spot_30');

  return (
    <div className="max-w-5xl mx-auto p-8 font-sans mt-10">
      
      {/* Header */}
      <div className="flex justify-between items-end border-b border-accent-200 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 tracking-tight">Welcome, {clientData.full_name.split(' ')[0]}</h1>
          <p className="text-secondary-500 mt-1">{clientData.company_name} • Secure Client Portal</p>
        </div>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="text-sm font-semibold text-secondary-500 hover:text-primary-DEFAULT transition-colors"
        >
          Sign Out
        </button>
      </div>

      {project ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Project Status */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-accent-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-secondary-900">Current Engagement</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  project.project_status === 'active' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {project.project_status.replace(/_/g, ' ')}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-2 flex justify-between text-sm font-semibold text-secondary-700">
                <span>Project Completion</span>
                <span>{project.progress_percentage}%</span>
              </div>
              <div className="w-full bg-accent-100 rounded-full h-3 mb-6 overflow-hidden">
                <div 
                  className="bg-primary-DEFAULT h-3 rounded-full transition-all duration-1000" 
                  style={{ width: `${project.progress_percentage}%` }}
                ></div>
              </div>

              <p className="text-secondary-600 leading-relaxed">
                {project.project_status === 'pending_spot_payment' && "We are awaiting your initial 30% spot payment to kick off the project."}
                {project.project_status === 'active' && "Your project is currently active. Our team is analyzing your requirements."}
              </p>
            </div>

            {/* Document Vault Placeholder */}
            <div className="bg-accent-50 p-8 rounded-2xl border border-accent-200 border-dashed">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Secure Document Vault</h3>
              <p className="text-secondary-500 text-sm mb-4">Upload requested financial statements and trial balances here.</p>
              <button className="px-6 py-3 bg-white border border-accent-300 text-secondary-700 font-semibold rounded-xl hover:border-primary-DEFAULT hover:text-primary-DEFAULT transition-colors">
                + Upload Document
              </button>
            </div>
          </div>

          {/* Right Column: Financials */}
          <div className="space-y-6">
            <div className="bg-secondary-900 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-primary-DEFAULT mb-4">Financial Overview</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-secondary-300">
                  <span>Total Engagement Fee</span>
                  <span>${project.financials?.[0]?.final_project_fee?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-secondary-300">
                  <span>Spot Payment (30%)</span>
                  <span>${spotPayment?.amount_due?.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-secondary-700">
                <span className="block text-xs text-secondary-400 uppercase tracking-wider mb-1">Spot Payment Status</span>
                {spotPayment?.approval_status === 'approved' ? (
                  <span className="text-green-400 font-bold text-lg flex items-center">
                    <span className="mr-2">✓</span> Received & Verified
                  </span>
                ) : (
                  <span className="text-amber-400 font-bold text-lg">
                    Under Review
                  </span>
                )}
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="p-10 bg-accent-50 rounded-2xl text-center border border-accent-200">
          <p className="text-secondary-600">No active projects found. Contact your advisory lead to initiate a new engagement.</p>
        </div>
      )}
    </div>
  );
}