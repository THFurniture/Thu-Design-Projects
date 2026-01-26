import { motion } from "framer-motion";

type PillarProps = {
  number: string;
  title: string;
  description: string;
  index: number;
};

function PillarCard({ number, title, description, index }: PillarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative flex flex-col justify-between p-8 md:p-12 min-h-[450px] border-l border-black/[0.05] last:border-r"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom -z-10" />

      <div className="space-y-8">
        {/* Top Detail: Index & Line */}
        <div className="flex items-center justify-between">
          <span className="font-serif italic text-3xl text-[#8B877D]/40 group-hover:text-black transition-colors duration-500">
            {number}
          </span>
          <div className="h-[1px] w-0 group-hover:w-12 bg-black/20 transition-all duration-700" />
        </div>

        {/* Title */}
        <h3 className="text-[#1A1A1A] text-3xl md:text-4xl font-serif leading-tight">
          {title}
        </h3>
      </div>

      <div className="space-y-6">
        <p className="text-[#4A4A4A] text-lg font-light leading-relaxed transition-all duration-500 group-hover:scale-[1.02] group-hover:text-[#1A1A1A] group-hover:translate-x-1">
          {description}
        </p>
        
        {/* Bottom Decorative Element */}
        <div className="pt-4 overflow-hidden">
          <motion.div 
            className="h-[2px] w-full bg-black/5"
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ duration: 1, delay: index * 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Pillars() {
  const pillars = [
    {
      number: "I",
      title: "Timelessness",
      description: "Creating spaces that transcend eras through enduring aesthetic choices and structural integrity. We design for the future by honoring the past."
    },
    {
      number: "II",
      title: "Materiality",
      description: "A deep reverence for the raw beauty and tactile quality of natural elements. We select materials that age with grace—stone, timber, and metal."
    },
    {
      number: "III",
      numberLabel: "03",
      title: "Human Centricity",
      description: "Designing with the inhabitant at the center. We choreograph movement and light to ensure harmony between the human experience and architectural form."
    }
  ];

  return (
    <section className="py-16 bg-[#F9F8F6] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#8B877D]">
                Core Principles
              </span>
              <div className="h-[1px] w-12 bg-[#8B877D]/30" />
            </div>
            
            <h2 className="text-[#1A1A1A] text-5xl md:text-7xl font-serif leading-none tracking-tighter">
              Our Pillars <br />
              <span className="italic font-light pl-12 md:pl-24">of Design</span>
            </h2>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/[0.05]">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} index={i} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}