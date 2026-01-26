import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Intro() {
  const introImage = "/projects/groveland_road_928/groveland-road-928-west-vancouver-1.webp";

  return (
    <section className="py-24 md:py-44 bg-[#F9F8F6] relative overflow-hidden">
      {/* Decorative Background Element - Subtle Serif Initial */}
      <span className="absolute top-0 right-[-5%] text-[30vw] font-serif text-black/[0.02] select-none pointer-events-none">
        Studio
      </span>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-4 items-center">
          
          {/* Text Content - Spans 5 columns, shifted right on desktop */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 lg:pr-12 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#8B877D]">
                  The Studio
                </p>
                <div className="h-[1px] w-12 bg-[#8B877D]/30" />
              </div>

              <h2 className="text-[#1A1A1A] text-5xl md:text-7xl font-serif leading-[1] mb-10 tracking-tight">
                Architectural <br /> 
                <span className="italic font-light">Precision</span>
              </h2>

              <div className="space-y-8 text-[#4A4A4A] text-lg font-light leading-relaxed max-w-md antialiased">
                <p>
                  We craft spaces that resonate with their environment. Rooted in West 
                  Vancouver, our approach marries modern minimalism with timeless luxury.
                </p>
                <p className="text-base text-[#8B877D]">
                  Each project is a dialogue between light, material, and landscape, 
                  designed to elevate the human experience. From concept to completion, 
                  we maintain an uncompromising standard.
                </p>
              </div>

              <motion.div 
                className="mt-12"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-6 group"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black/10 pb-2 group-hover:border-black transition-colors">
                    Read Our Story
                  </span>
                  <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Composition - Spans 7 columns */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 mb-16 lg:mb-0 relative">
            
            {/* Main Image Frame with Mask Reveal */}
            <motion.div 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
              className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                src={introImage}
                alt="Architectural detail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Detail Card - Overlaps the image */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute -bottom-10 -left-6 md:-left-12 bg-white p-8 md:p-12 shadow-xl z-30 max-w-[280px]"
            >
              <div className="space-y-4">
                <span className="block w-8 h-[2px] bg-black" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8B877D] font-bold">Featured Project</p>
                <h3 className="font-serif text-2xl text-[#1A1A1A] leading-tight">Groveland <br/>Residence</h3>
                <p className="text-xs text-[#8B877D] italic">British Properties, 2024</p>
              </div>
            </motion.div>

            {/* Decorative Geometry */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-black/5 pointer-events-none hidden md:block" />
          </div>

        </div>
      </div>
    </section>
  );
}