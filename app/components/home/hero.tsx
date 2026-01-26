import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax and Scale effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <header 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background with Cinematic Reveal */}
      <motion.div 
        style={{ y, scale }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10" />
        <img 
          src="/projects/king_georges_way_830/king-georges-way-830-west-vancouver-9.webp"
          alt="Luxury Architecture"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Main UI Layer */}
      <div className="relative z-20 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center">
        
        {/* Top Detail: Location or Year */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-32 left-6 md:left-12 flex items-center gap-4"
        >
          <span className="h-[1px] w-8 bg-white/40" />
          <span className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-light">
            Vancouver, BC
          </span>
        </motion.div>

        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity }}
          >
            <h1 className="text-white text-6xl md:text-9xl font-serif leading-[0.9] mb-8">
              Redefining <br />
              <span className="italic font-light text-white/90">West Coast</span>{" "}
              <span className="relative">
                Living
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="absolute -bottom-2 left-0 h-[1px] bg-white/20"
                />
              </span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-12 mt-4"
          >
            <p className="text-white/70 text-lg font-light max-w-sm leading-relaxed border-l border-white/10 pl-6">
              Creating residential sanctuaries that balance architectural precision with the raw beauty of nature.
            </p>

            <div className="flex items-center gap-8">
              <Link 
                to="/portfolio" 
                className="group relative px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold overflow-hidden transition-transform active:scale-95"
              >
                <span className="relative z-10">View Portfolio</span>
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  className="absolute inset-0 bg-neutral-200 z-0"
                />
              </Link>

              <Link 
                to="/about"
                className="text-white text-[10px] uppercase tracking-[0.3em] font-medium py-2 border-b border-transparent hover:border-white/40 transition-all duration-500"
              >
                Our Philosophy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}