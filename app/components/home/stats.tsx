import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StatProps = {
  value: string;
  label: string;
  index: number;
};

function Stat({ value, label, index }: StatProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group flex flex-col gap-4 py-10 border-b border-black/5 last:border-none lg:border-none"
    >
      <div className="flex items-baseline gap-3">
        <span className="text-[10px] font-serif italic text-[#8B877D]">0{index + 1}</span>
        <h4 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] tracking-tighter">
          {value}
        </h4>
      </div>
      
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#8B877D] group-hover:text-black transition-colors duration-500">
          {label}
        </span>
        {/* Animated underline that expands on scroll/hover */}
        <div className="h-[1px] w-8 bg-black/10 group-hover:w-full group-hover:bg-black/40 transition-all duration-700 ease-out" />
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "12", label: "Design Awards" },
    { value: "10", label: "Years Experience" },
  ];

  return (
    <section className="py-24 md:py-40 bg-[#F9F8F6]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          
          {/* Header Area */}
          <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#8B877D] mb-8 font-bold flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-black/10" />
                The Impact
              </h3>
              
              <h2 className="text-[#1A1A1A] text-3xl md:text-4xl font-serif leading-tight mb-8">
                A Decade of <br />
                <span className="italic">Spatial Excellence.</span>
              </h2>
              
              <p className="text-[#4A4A4A] font-light leading-relaxed text-lg max-w-sm">
                Our methodology is rooted in collaboration and rigorous analysis. 
                We create spaces that are uniquely yours through deep listening.
              </p>

              
            </motion.div>
          </div>

          {/* Stats Grid Area */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12 border-t border-black/10 lg:border-t-0 lg:pt-0 pt-12">
              {stats.map((stat, i) => (
                <Stat key={i} index={i} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}