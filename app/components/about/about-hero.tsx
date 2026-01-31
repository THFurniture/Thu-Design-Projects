import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Sophisticated Parallax using Framer Motion (Better performance than window listeners)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[110vh] w-full overflow-hidden bg-[#0F0F0F] flex items-center"
    >
      {/* Background Layer with Subtle Zoom & Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darken overlay */}
        <img 
          src="/projects/king_georges_way_830/king-georges-way-830-west-vancouver-3.avif"
          alt="Architectural Interior"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Noise Texture Overlay for "Film" feel */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-12 gap-6">

          {/* Center/Right: Main Content */}
          <div className="col-span-12 lg:col-span-9 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ opacity }}
            >
              <h2 className="text-white/60 text-xs md:text-sm uppercase tracking-[0.6em] mb-6 block">
                The Philosophy
              </h2>
              
              <h1 className="text-white text-5xl md:text-[7vw] font-serif leading-[1.1] tracking-tight mb-10">
                Designing with <br /> 
                <span className="italic font-light text-white border-l border-white/10 ml-4">
                  Intention
                </span>
              </h1>

              <div className="flex flex-col md:flex-row md:items-end gap-8">
                <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-lg antialiased">
                  A luxury residential design studio focused on the intersection of 
                  <span className="text-white"> architectural philosophy</span> and tactile craftsmanship.
                </p>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer flex items-center gap-4"
                >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <span className="material-symbols-outlined text-sm">north_east</span>
                    </div>
                    <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium">View Portfolio</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Progress Bar */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30 origin-left z-30"
      />
    </section>
  );
}