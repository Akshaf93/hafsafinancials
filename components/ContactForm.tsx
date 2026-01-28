"use client";

import { useState, useEffect, Suspense } from "react";
import { m } from "framer-motion";
import { useSearchParams } from "next/navigation";

function ContactFormContent() {
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
        <m.div 
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
              <div>
                <h3 className="text-[#FDFCF0] font-bold text-sm uppercase tracking-wide mb-2">Connect</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/hafsa-financials" target="_blank" rel="noopener noreferrer" className="text-[#FDFCF0]/60 hover:text-[#E5D095] transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="https://www.instagram.com/hafsafinancials" target="_blank" rel="noopener noreferrer" className="text-[#FDFCF0]/60 hover:text-[#E5D095] transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="text-[#FDFCF0]/60 hover:text-[#E5D095] transition-colors">
                    <span className="sr-only">WhatsApp</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.514-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.084 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </m.div>

        {/* RIGHT: FORM */}
        <m.div 
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
        </m.div>

      </div>
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormContent />
    </Suspense>
  );
}