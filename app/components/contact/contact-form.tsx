import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Prepared for Resend API call here
      console.log("Resend Payload:", data);
      setMessage("Inquiry sent. We will respond within 48 hours.");
    } catch (error) {
      setMessage("Delivery failed. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="relative min-h-screen bg-[#121212] flex flex-col lg:flex-row overflow-hidden">
      
      {/* 1. The Content Side (Scrollable) */}
      <div className="w-full lg:w-3/5 px-6 md:px-12 lg:px-24 py-28 md:py-32 flex flex-col justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-white text-5xl md:text-8xl font-serif tracking-tighter mb-16">
            Inquire <br />
            <span className="italic font-light text-[#8B877D]">With us</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#8B877D] font-bold">Identity</label>
                <input required name="name" type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#8B877D] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#8B877D] font-bold">Email</label>
                <input required name="email" type="email" placeholder="email@domain.com" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#8B877D] transition-colors" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.4em] text-[#8B877D] font-bold">Project Scope</label>
              <div className="flex flex-wrap gap-3">
                {['Residential', 'Interior', 'Consultation'].map((type) => (
                  <label key={type} className="cursor-pointer">
                    <input type="radio" name="scope" value={type} className="peer hidden" />
                    <span className="px-5 py-2 border border-white/10 text-white/30 text-[10px] uppercase tracking-widest peer-checked:bg-white peer-checked:text-black transition-all">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.4em] text-[#8B877D] font-bold">Message</label>
              <textarea name="message" rows={3} placeholder="Tell us about the space..." className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#8B877D] transition-colors resize-none" />
            </div>

            <div className="pt-6">
              <Button disabled={pending} className="w-full md:w-auto px-12 h-14 bg-white text-black hover:bg-[#8B877D] hover:text-white transition-all uppercase tracking-[0.2em] font-bold text-sm">
                {pending ? "Processing..." : "Submit Inquiry"}
              </Button>
            </div>
          </form>

          {message && <p className="mt-6 text-[#8B877D] text-sm italic font-serif">{message}</p>}
        </motion.div>
      </div>

      {/* 2. The Visual Side (Fixed/Sticky on Desktop) */}
      <div className="hidden lg:block w-2/5 relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/projects/king_georges_way_815/king-georges-way-815-west-vancouver-4.avif" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent" />
        </div>
      </div>

    </section>
  );
}