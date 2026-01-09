"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  // State for submission status
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // 1. Check for Newsletter clicks (Pre-fill the message)
  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan) {
      const planName = plan.replace(/_/g, " ").toUpperCase();
      setFormData(prev => ({
        ...prev,
        message: `I am interested in subscribing to the ${planName} Plan. Please send me the payment details.`
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Handle Submission (Web3Forms)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // REPLACE 'YOUR_ACCESS_KEY_HERE' WITH YOUR ACTUAL KEY
    const accessKey = "85df1d04-883a-4090-86a4-6e57e1e1e77e"; 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          subject: `New Lead: ${formData.name} from Website`, // Subject line for your email
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" }); // Clear form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: INFO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#E5D095] text-xs font-bold uppercase tracking-widest mb-4">
            Get in Touch
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#FDFCF0] mb-6">
            Let's Architect Your <br />
            <span className="text-[#E5D095]">Financial Future</span>
          </h1>
          <p className="text-[#FDFCF0]/70 text-lg leading-relaxed mb-12 max-w-md">
            Whether you need IFRS transition support, complex modeling, or a complete internal control overhaul, our team is ready to engage.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E5D095]/10 flex items-center justify-center border border-[#E5D095]/20 text-[#E5D095]">
                ✉
              </div>
              <div>
                <h3 className="text-[#FDFCF0] font-bold text-sm uppercase tracking-wide mb-1">Email Us</h3>
                <p className="text-[#FDFCF0]/60">advisory@hafsafinancials.com</p>
              </div>
            </div>
            {/* Add more info items here if needed */}
          </div>
        </motion.div>

        {/* RIGHT: FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1a1a] border border-[#FDFCF0]/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5D095]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 bg-[#E5D095] rounded-full flex items-center justify-center text-[#050505] text-3xl mb-6">
                ✓
              </div>
              <h3 className="text-2xl font-serif text-[#FDFCF0] mb-2">Request Received</h3>
              <p className="text-[#FDFCF0]/60">We will be in touch within 24 hours.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-[#E5D095] text-xs font-bold uppercase tracking-widest hover:underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#FDFCF0]/60 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#050505] border border-[#FDFCF0]/10 rounded p-3 text-[#FDFCF0] focus:border-[#E5D095] focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#FDFCF0]/60 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#050505] border border-[#FDFCF0]/10 rounded p-3 text-[#FDFCF0] focus:border-[#E5D095] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#FDFCF0]/60 uppercase tracking-wider">Company</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-[#050505] border border-[#FDFCF0]/10 rounded p-3 text-[#FDFCF0] focus:border-[#E5D095] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#FDFCF0]/60 uppercase tracking-wider">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#050505] border border-[#FDFCF0]/10 rounded p-3 text-[#FDFCF0] focus:border-[#E5D095] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-[#E5D095] text-[#050505] font-bold uppercase tracking-widest rounded hover:bg-[#FDFCF0] transition-all shadow-[0_0_20px_rgba(229,208,149,0.2)] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send Request"}
              </button>
              
              {status === "error" && (
                <p className="text-red-400 text-xs text-center mt-4">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}