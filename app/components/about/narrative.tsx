import { motion } from "framer-motion";

export default function Narrative() {
  return (
    <section className="py-24 md:py-48 bg-[#F9F8F6] relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* Text Content - Spans 6 Columns */}
          <div className="col-span-12 lg:col-span-6 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#8B877D]">
                  The Narrative
                </p>
                <div className="h-[1px] w-12 bg-[#8B877D]/30" />
              </div>

              <h2 className="text-[#1A1A1A] text-5xl md:text-7xl font-serif leading-[1.1] tracking-tighter mb-12">
                The Art of <br /> 
                <span className="italic font-light">Living Well</span>
              </h2>

              <div className="relative pl-8 md:pl-16 border-l border-black/5 space-y-10">
                {/* The Quote Statement */}
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-2xl md:text-3xl leading-relaxed text-[#1A1A1A] font-serif italic"
                >
                  "Spaces should be felt as much as they are seen, approaching every residence as a living sculpture."
                </motion.p>

                {/* The Body Text */}
                <p className="text-[#4A4A4A] text-lg font-light leading-relaxed max-w-md antialiased">
                  We believe that luxury is not found in excess, but in the precision 
                  of the detail and the resonance of the material. Each project translates 
                  personal histories into spatial poetry that evolves over generations.
                </p>

                {/* The Signature */}
                <div className="pt-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                  >
                    <p className="font-serif text-4xl text-[#1A1A1A] mb-1">Thu</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8B877D]">
                      Principal Designer
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Content - Spans 6 Columns with a Floating Frame */}
          <div className="col-span-12 lg:col-span-6 relative mt-16 lg:mt-0">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main Image */}
              <div className="aspect-[3/4] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/projects/king_georges_way_830/king-georges-way-830-west-vancouver-2.avif"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                  alt="Architecture Detail"
                />
              </div>

              {/* Decorative Frame Elements */}
              <div className="absolute -top-10 -right-10 w-full h-full border border-black/[0.05] -z-10 hidden md:block" />
              
              {/* Minimalist Caption Box */}
              <div className="absolute -bottom-8 -right-8 bg-[#1A1A1A] text-white p-8 hidden md:block z-20 shadow-xl max-w-[240px]">
                <p className="text-[9px] uppercase tracking-[0.4em] mb-4 text-white/50">Core Philosophy</p>
                <p className="text-sm font-light leading-relaxed italic">
                  "The dialogue between light, material, and human landscape."
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}