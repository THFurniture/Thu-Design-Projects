import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import type { Project } from "~/data/projects";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={containerRef}
      className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-[#0A0A0A] flex items-end"
    >
      {/* Background Image or Placeholder */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />
        {project.hasImages ? (
          <img
            src={project.thumbnail}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#2A2A2A] via-[#1A1A1A] to-[#0F0F0F]" />
        )}
      </motion.div>

      {/* Breadcrumb */}
      <div className="absolute top-28 md:top-32 left-6 md:left-12 z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-3 text-white/50"
        >
          <Link 
            to="/projects" 
            className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors"
          >
            Projects
          </Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
            {project.name}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity }}
        >
          {/* Project Type Badge */}
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-white/40" />
            <span className="text-white/60 text-[10px] uppercase tracking-[0.5em] font-medium">
              {project.projectType}
            </span>
          </div>

          {/* Project Name */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight mb-8">
            {project.name.split(" ").slice(0, -1).join(" ")} <br />
            <span className="italic font-light text-white/90 pl-8 md:pl-16">
              {project.name.split(" ").slice(-1)}
            </span>
          </h1>

          {/* Location and Details */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white/50 text-lg">location_on</span>
              <span className="text-white/70 text-sm md:text-base font-light">
                {project.address}, {project.location}
              </span>
            </div>

            {project.year && (
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white/50 text-lg">calendar_month</span>
                <span className="text-white/70 text-sm md:text-base font-light">
                  {project.year}
                </span>
              </div>
            )}

            {project.hasImages && (
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white/50 text-lg">photo_library</span>
                <span className="text-white/70 text-sm md:text-base font-light">
                  {project.images.length} Images
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
