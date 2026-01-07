"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: INFO & CONTEXT */}
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

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E5D095]/10 flex items-center justify-center border border-[#E5D095]/20 text-[#E5D095]">
                📍
              </div>
              <div>
                <h3 className="text-[#FDFCF0] font-bold text-sm uppercase tracking-wide mb-1">Global HQ</h3>
                <p className="text-[#FDFCF0]/60">
                  Serving Clients in UK, UAE, USA & Pakistan.<br />
                  Based in Lahore, Pakistan.
                </p>
              </div>
            </div>
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
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5D095]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <form className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#FDFCF0]/60 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#050505] border border-[#FDFCF0]/10 rounded p-3 text-[#FDFCF0] focus:border-[#E5D095] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#FDFCF0]/60 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#050505] border border-[#FDFCF0]/10 rounded p-3 text-[#FDFCF0] focus:border-[#E5D095] focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#FDFCF0]/60 uppercase tracking-wider">Company / Organization</label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#050505] border border-[#FDFCF0]/10 rounded p-3 text-[#FDFCF0] focus:border-[#E5D095] focus:outline-none transition-colors"
                placeholder="Acme Corp Ltd."
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#FDFCF0]/60 uppercase tracking-wider">Message</label>
              <textarea 
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#050505] border border-[#FDFCF0]/10 rounded p-3 text-[#FDFCF0] focus:border-[#E5D095] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            <button 
              type="button"
              className="w-full py-4 bg-[#E5D095] text-[#050505] font-bold uppercase tracking-widest rounded hover:bg-[#FDFCF0] transition-all shadow-[0_0_20px_rgba(229,208,149,0.2)] mt-4"
            >
              Send Request
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}