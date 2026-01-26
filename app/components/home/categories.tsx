import { motion } from "framer-motion";
import { Link } from "react-router";

type CategoryCardProps = {
  label: string;
  title: string;
  to: string;
  imageUrl: string;
  index: number;
};

function CategoryCard({ label, title, to, imageUrl, index }: CategoryCardProps) {
  // We'll vary the heights based on the index to create a natural, editorial flow
  const aspectRatios = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[3/4]"];
  const mtClasses = ["mt-0", "mt-12 md:mt-24", "mt-0"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.215, 0.61, 0.355, 1] }}
      className={`relative w-full ${mtClasses[index]}`}
    >
      <Link to={to} className="group block relative overflow-hidden bg-[#1A1A1A]">
        {/* Image Container */}
        <div className={`${aspectRatios[index]} w-full overflow-hidden`}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale-[30%] group-hover:grayscale-0"
          />
        </div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

        {/* Category Text - Always Visible with Hover Animations */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white drop-shadow-lg">
                {label}
              </span>
              <span className="material-symbols-outlined text-sm text-white drop-shadow-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">north_east</span>
            </div>
            <h3 className="text-white text-2xl font-serif drop-shadow-lg group-hover:-translate-y-1 transition-transform duration-500">
              {title}
            </h3>

            {/* Explore Button - Animated on Hover */}
            <div className="mt-6 flex items-center gap-2 overflow-hidden h-0 group-hover:h-6 transition-all duration-300 opacity-0 group-hover:opacity-100">
              <span className="text-white/90 text-sm font-medium">Explore</span>
              <span className="material-symbols-outlined text-white/90 text-base">arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Static Label (Visible before hover) */}
        <div className="absolute top-6 left-6 overflow-hidden">
            <motion.p 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.5 + (index * 0.2), duration: 0.8 }}
              className="text-white text-[9px] uppercase tracking-[0.5em] font-light"
            >
              Collection / 0{index + 1}
            </motion.p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Categories() {
  const projects = [
    {
      label: "Residential",
      title: "Luxury Estates",
      to: "/portfolio/luxury-estates",
      imageUrl: "/projects/king_georges_way_815/king-georges-way-815-west-vancouver-1.webp",
    },
    {
      label: "Interior",
      title: "Private Residences",
      to: "/portfolio/private-residences",
      imageUrl: "/projects/quayside_dr_680/quayside-dr-680-4405-new-westminster-1.webp",
    },
    {
      label: "Urban",
      title: "Skyline Residences",
      to: "/portfolio/skyline-residences",
      imageUrl: "/projects/groveland_road_928/groveland-road-928-west-vancouver-2.webp",
    },
  ];

  return (
    <section className="py-24 md:py-44 bg-[#F9F8F6]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#8B877D] mb-6 font-bold flex items-center gap-4">
                <span className="h-[1px] w-12 bg-[#8B877D]/30" />
                Portfolio
              </h4>
              <h2 className="text-[#1A1A1A] text-5xl md:text-7xl font-serif leading-none tracking-tighter">
                Selected <br />
                <span className="italic font-light pl-12 md:pl-24">Works</span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 md:mt-0"
          >
            <Link 
              to="/portfolio"
              className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black/10 pb-2 hover:border-black transition-colors"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>

        {/* Custom Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <CategoryCard key={i} index={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}