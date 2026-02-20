import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Detailing() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Subtle parallax for the secondary images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section 
      ref={containerRef}
      className="py-16 bg-[#F9F8F6] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-center">
          
          {/* Left Side: Content & Small Detail */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-md"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#8B877D]">
                  Detailing
                </span>
                <div className="h-[1px] w-12 bg-[#8B877D]/30" />
              </div>

              <h2 className="text-[#1A1A1A] text-5xl md:text-7xl font-serif leading-[1.1] mb-10 tracking-tighter">
                The Poetry <br /> 
                <span className="italic font-light text-[#8B877D]">of the Detail</span>
              </h2>

              <div className="space-y-8 text-[#4A4A4A] text-lg font-light leading-relaxed antialiased">
                <p>
                  Luxury is a quiet language spoken through the intersections of stone, 
                  wood, and light. We focus on the microscopic moments—the way a 
                  shadow falls across a mitred edge or the tactile resistance of a 
                  hand-finished surface.
                </p>
                <p className="text-base text-[#8B877D]">
                  Our approach treats every junction as a vital architectural 
                  statement, ensuring that the structural integrity of the home 
                  is matched by its sensory resonance.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Floating Image Composition */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 relative h-[600px] md:h-[800px] flex items-center justify-center">
            
            {/* Main Center Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full md:w-4/5 aspect-[4/5] overflow-hidden shadow-2xl"
            >
              <img 
                src="/about-imgs/about-craftsmanship-1.avif"
                alt="Material Detail"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>

            {/* Small Floating "Satellite" Image 1 - Top Left */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-32 md:w-48 aspect-square z-20 overflow-hidden shadow-xl hidden md:block border-8 border-[#F9F8F6]"
            >
              <img 
                src="/about-imgs/about-craftsmanship-2.avif"
                className="w-full h-full object-cover"
                alt="Texture"
              />
            </motion.div>

            {/* Small Floating "Satellite" Image 2 - Bottom Right */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 w-40 md:w-64 aspect-[3/4] z-20 overflow-hidden shadow-xl hidden md:block border-8 border-[#F9F8F6]"
            >
              <img 
                src="/about-imgs/about-craftsmanship-3.avif"
                className="w-full h-full object-cover"
                alt="Junction detail"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}