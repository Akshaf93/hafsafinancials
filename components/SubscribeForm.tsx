"use client";

import { useState } from "react";

export default function SubscribeForm({ plan }: { plan: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // 1. Get these from your ConvertKit Dashboard
    const FORM_ID = "56bbf02909"; 
    const API_KEY = "T_YUI7IpB745Op8JKWdHzw";
    const API_URL = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, api_key: API_KEY }),
      });

      const data = await res.json();

      if (data.subscription) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full py-3 bg-[#E5D095] text-[#050505] text-center rounded text-xs font-bold uppercase tracking-widest">
        ✓ Subscribed! check your inbox.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-[#050505] border border-[#FDFCF0]/20 rounded p-2 text-[#FDFCF0] text-sm focus:border-[#E5D095] focus:outline-none transition-colors"
      />
      <button
        disabled={status === "loading"}
        className="w-full py-3 bg-[#E5D095] text-[#050505] rounded text-xs font-bold uppercase tracking-widest hover:bg-[#FDFCF0] transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : `Join ${plan} List`}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-[10px] text-center">Something went wrong. Try again.</p>
      )}
    </form>
  );
}