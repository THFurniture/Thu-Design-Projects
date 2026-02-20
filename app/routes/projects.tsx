import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router";
import type { Route } from "./+types/projects";
import { 
  projects, 
  filterProjects, 
  type Location, 
  type ProjectType 
} from "~/data/projects";
import ProjectCard from "~/components/projects/project-card";
import ProjectFilters from "~/components/projects/project-filters";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "THU Design Projects | Our Projects" },
    { name: "description", content: "Explore our portfolio of luxury residential design projects across Vancouver and the Lower Mainland." },
    { property: "og:title", content: "THU Design Projects | Our Projects" },
    { property: "og:description", content: "Explore our portfolio of luxury residential design projects across Vancouver and the Lower Mainland." },
    { property: "og:image", content: "/projects/king_georges_way_815/king-georges-way-815-west-vancouver-1.avif" },
    { name: "twitter:title", content: "THU Design Projects | Our Projects" },
    { name: "twitter:description", content: "Explore our portfolio of luxury residential design projects across Vancouver and the Lower Mainland." },
    { name: "twitter:image", content: "/projects/king_georges_way_815/king-georges-way-815-west-vancouver-1.avif" },
  ];
}

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read initial filter state from URL
  const initialLocation = (searchParams.get("location") as Location | "all") || "all";
  const initialType = (searchParams.get("type") as ProjectType | "all") || "all";

  const [selectedLocation, setSelectedLocation] = useState<Location | "all">(initialLocation);
  const [selectedType, setSelectedType] = useState<ProjectType | "all">(initialType);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedLocation !== "all") params.set("location", selectedLocation);
    if (selectedType !== "all") params.set("type", selectedType);
    setSearchParams(params, { replace: true });
  }, [selectedLocation, selectedType, setSearchParams]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return filterProjects({
      location: selectedLocation,
      projectType: selectedType,
    });
  }, [selectedLocation, selectedType]);

  return (
    <main className="bg-[#F9F8F6]">
      <ProjectsHero />
      
      {/* Projects Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Filters */}
          <ProjectFilters
            selectedLocation={selectedLocation}
            selectedType={selectedType}
            onLocationChange={setSelectedLocation}
            onTypeChange={setSelectedType}
            projectCount={filteredProjects.length}
            totalCount={projects.length}
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <span className="material-symbols-outlined text-[#D8D3C7] text-6xl mb-6 block">
                search_off
              </span>
              <h3 className="text-2xl font-serif text-[#121212] mb-3">
                No projects found
              </h3>
              <p className="text-[#8B877D] mb-8">
                Try adjusting your filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedLocation("all");
                  setSelectedType("all");
                }}
                className="px-6 py-3 bg-[#121212] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#8B877D] transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

// Hero Component for Projects Page
function ProjectsHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-[#0A0A0A] flex items-end"
    >
      {/* Background Image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
        <img
          src="/projects/sandhurst_pl_1416/sandhurst-pl-1416-west-vancouver-11.avif"
          alt="Projects Background"
          className="h-full w-full object-cover"
        />
      </motion.div>

  
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-white/40" />
            <span className="text-white/60 text-[10px] uppercase tracking-[0.5em] font-medium">
              Portfolio
            </span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight mb-8">
            Our <br />
            <span className="italic font-light text-white/90 pl-8 md:pl-16">Projects</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            A curated collection of luxury residential projects across Vancouver and the Lower Mainland.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
