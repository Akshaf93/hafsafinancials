"use client";

import { useState } from "react";
import Link from "next/link";

interface LoginFormProps {
  onLogin: (email: string, password: string) => Promise<void>;
  isAuthenticating: boolean;
  error: string;
  message: string;
  isSupabaseInitialized: boolean;
}

export default function LoginForm({ onLogin, isAuthenticating, error, message, isSupabaseInitialized }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050505] p-4 bg-[url('/noise.png')] bg-repeat opacity-95">
      <div className="max-w-md w-full bg-[#0a0a0a] p-10 rounded-2xl shadow-2xl border border-[#FDFCF0]/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5D095] to-transparent opacity-50"></div>
        
        <p className="text-[#E5D095] text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-center">Secure Access</p>
        <h1 className="text-3xl font-serif text-[#FDFCF0] mb-2 text-center">Client Portal</h1>
        <p className="text-[#FDFCF0]/50 text-sm mb-8 text-center">Enter your credentials to access your financial dashboard.</p>
        {!isSupabaseInitialized && (
          <div className="mb-5 rounded-lg border border-[#E5D095]/30 bg-[#332d10] px-4 py-3 text-xs text-[#E5D095]">
            Supabase environment variables are missing. Check <span className="font-bold">.env.local</span> or Vercel settings.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
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