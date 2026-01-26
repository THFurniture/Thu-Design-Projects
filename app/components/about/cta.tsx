import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative min-h-screen bg-[#121212] flex flex-col justify-between overflow-hidden">

      {/* 2. The Main Interactive Body */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 flex-grow items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-white text-6xl md:text-[10vw] font-serif leading-none tracking-tighter">
              Let's build <br />
              <span className="italic font-light text-[#8B877D] ml-[10%]">something felt.</span>
            </h2>
          </motion.div>
        </div>

        <div className="lg:col-span-4 mt-20 lg:mt-0 flex flex-col items-start lg:items-end gap-12">
          <p className="text-white/40 text-lg font-light leading-relaxed text-left lg:text-right max-w-xs">
            We are currently accepting a limited number of residential commissions for the upcoming year.
          </p>
          
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="group relative flex items-center justify-center w-48 h-48 rounded-full border border-white/20 overflow-hidden"
          >
            {/* The "Liquid" Fill Hover effect */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
            
            <span className="relative z-10 text-white group-hover:text-black text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500">
              Inquire
            </span>
          </motion.a>
        </div>
      </div>

      {/* Background Glow Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B877D]/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}