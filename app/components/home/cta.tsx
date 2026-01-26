import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen bg-[#121212] flex flex-col overflow-hidden">
      <div className="container mx-auto px-6 relative flex-grow flex flex-col justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Headline - Occupies the Left/Center */}
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-white text-6xl md:text-[9vw] font-serif leading-[0.9] tracking-tighter"
            >
              Quiet <br />
              <span className="italic font-light text-[#8B877D] ml-[15%]">Luxury.</span> <br />
              Deep <span className="font-sans font-thin tracking-widest text-4xl md:text-[4vw] align-middle opacity-40 ml-4">/ Resonance</span>
            </motion.h1>
          </div>

          {/* Masked Image - Occupies the Right */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
            <motion.div 
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="relative w-full aspect-[3/4] max-w-[400px] overflow-hidden group shadow-2xl"
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
                src="/projects/king_georges_way_815/king-georges-way-815-west-vancouver-1.webp" 
                alt="Architecture" 
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
              />
              
              {/* Floating Label over image */}
              <div className="absolute bottom-6 left-6 text-white z-20">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Featured Work</p>
                <p className="text-sm font-serif italic text-white/70">815 King Georges Way</p>
              </div>
            </motion.div>

            {/* Architectural Grid Element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-white/10 hidden md:block" />
          </div>
        </div>
      </div>

      {/* Background "Noise" and Glow */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
    </section>
  );
}