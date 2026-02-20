import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Project } from "~/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        opacity: { duration: 0.3 },
        layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
      }}
      className="group"
    >
      <Link 
        to={`/projects/${project.slug}`} 
        className="block relative overflow-hidden bg-[#1A1A1A]"
      >
        {/* Image Container */}
        <div className="aspect-[4/5] w-full overflow-hidden">
          {project.hasImages && project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
            />
          ) : (
            <PlaceholderImage projectType={project.projectType} />
          )}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

        {/* Project Info */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
          {/* Top badges */}
          <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
            <span className="text-[9px] uppercase tracking-[0.4em] font-medium text-white/70">
              {project.projectType}
            </span>
            {!project.hasImages && (
              <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-white/50 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                Coming Soon
              </span>
            )}
          </div>

          {/* Bottom content */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-white/60 text-sm">location_on</span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-white/60">
                {project.location}
              </span>
            </div>
            
            <h3 className="text-white text-xl md:text-2xl font-serif tracking-tight group-hover:-translate-y-1 transition-transform duration-500">
              {project.name}
            </h3>

            {/* View Project - Appears on Hover */}
            <div className="mt-4 flex items-center gap-2 overflow-hidden h-0 group-hover:h-6 transition-all duration-300 opacity-0 group-hover:opacity-100">
              <span className="text-white/90 text-xs font-medium tracking-wide">View Project</span>
              <span className="material-symbols-outlined text-white/90 text-sm group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </div>
          </div>
        </div>

        {/* Corner accent on hover */}
        <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 translate-x-full translate-y-full group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500 rotate-45" />
        </div>
      </Link>
    </motion.div>
  );
}

// Placeholder component for projects without images
function PlaceholderImage({ projectType }: { projectType: string }) {
  const gradients: Record<string, string> = {
    Residential: "from-[#2A2A2A] via-[#1F1F1F] to-[#151515]",
    Interior: "from-[#252520] via-[#1A1A18] to-[#121210]",
    Urban: "from-[#1E2025] via-[#15161A] to-[#0D0E10]",
  };

  const icons: Record<string, string> = {
    Residential: "home",
    Interior: "chair",
    Urban: "apartment",
  };

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradients[projectType] || gradients.Residential} flex items-center justify-center`}>
      <div className="text-center">
        <span className="material-symbols-outlined text-white/10 text-7xl mb-4 block">
          {icons[projectType] || "home"}
        </span>
        <div className="w-12 h-[1px] bg-white/10 mx-auto" />
      </div>
    </div>
  );
}
