import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Route } from "./+types/projects.$slug";
import { 
  getProjectBySlug, 
  getNextProject, 
  getPreviousProject,
  type Project 
} from "~/data/projects";
import ProjectHero from "~/components/projects/project-hero";
import ProjectGallery from "~/components/projects/project-gallery";

export function meta({ params }: Route.MetaArgs) {
  const project = getProjectBySlug(params.slug);
  const title = project ? `${project.name} | THU Design Projects` : "Project Not Found";
  const description = project 
    ? `Explore ${project.name} - a ${project.projectType.toLowerCase()} project in ${project.location}.`
    : "Project not found.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: project?.thumbnail || "/projects/sandhurst_pl_1416/sandhurst-pl-1416-west-vancouver-1.avif" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: project?.thumbnail || "/projects/sandhurst_pl_1416/sandhurst-pl-1416-west-vancouver-1.avif" },
  ];
}

export default function ProjectDetail({ params }: Route.ComponentProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <NotFound />;
  }

  const nextProject = getNextProject(project.slug);
  const prevProject = getPreviousProject(project.slug);

  return (
    <main className="bg-[#F9F8F6]">
      <ProjectHero project={project} />

      {/* Project Description */}
      {project.description && (
        <section className="py-20 md:py-28 bg-[#F9F8F6] border-b border-[#E8E6E1]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-12 gap-6 md:gap-12">
              {/* Label Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-12 md:col-span-3"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-[1px] w-12 bg-[#8B877D]/30" />
                  <span className="text-[10px] uppercase tracking-[0.5em] text-[#8B877D] font-bold">
                    About
                  </span>
                </div>
                <h2 className="text-[#121212] text-3xl md:text-4xl font-serif">
                  The <span className="italic font-light">Project</span>
                </h2>
              </motion.div>

              {/* Description Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="col-span-12 md:col-span-8 md:col-start-5 flex items-center"
              >
                <p className="text-[#3D3D3D] text-base md:text-lg leading-[1.9] font-light antialiased">
                  {project.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <ProjectGallery project={project} />
      <ProjectNavigation 
        project={project}
        nextProject={nextProject} 
        prevProject={prevProject} 
      />
    </main>
  );
}

// Project Navigation Component
interface ProjectNavigationProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

function ProjectNavigation({ project, nextProject, prevProject }: ProjectNavigationProps) {
  return (
    <section className="border-t border-[#D8D3C7]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Previous Project */}
          {prevProject && (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group relative flex items-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#D8D3C7] hover:bg-[#EFEDE8] transition-colors duration-500"
            >
              <div className="flex items-center gap-6 w-full">
                <motion.span
                  className="material-symbols-outlined text-[#8B877D] text-2xl group-hover:-translate-x-2 transition-transform duration-300"
                >
                  arrow_back
                </motion.span>
                
                <div className="flex-1">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#8B877D] block mb-2">
                    Previous Project
                  </span>
                  <h3 className="text-[#121212] text-lg md:text-xl font-serif group-hover:text-[#8B877D] transition-colors">
                    {prevProject.name}
                  </h3>
                  <span className="text-[#8B877D] text-xs mt-1 block">
                    {prevProject.location}
                  </span>
                </div>

                {prevProject.hasImages && prevProject.thumbnail && (
                  <div className="hidden lg:block w-20 h-20 overflow-hidden">
                    <img
                      src={prevProject.thumbnail}
                      alt={prevProject.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                )}
              </div>
            </Link>
          )}

          {/* Next Project */}
          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group relative flex items-center justify-end p-8 md:p-12 hover:bg-[#EFEDE8] transition-colors duration-500"
            >
              <div className="flex items-center gap-6 w-full justify-end text-right">
                {nextProject.hasImages && nextProject.thumbnail && (
                  <div className="hidden lg:block w-20 h-20 overflow-hidden">
                    <img
                      src={nextProject.thumbnail}
                      alt={nextProject.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                )}

                <div className="flex-1 md:flex-none">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#8B877D] block mb-2">
                    Next Project
                  </span>
                  <h3 className="text-[#121212] text-lg md:text-xl font-serif group-hover:text-[#8B877D] transition-colors">
                    {nextProject.name}
                  </h3>
                  <span className="text-[#8B877D] text-xs mt-1 block">
                    {nextProject.location}
                  </span>
                </div>

                <motion.span
                  className="material-symbols-outlined text-[#8B877D] text-2xl group-hover:translate-x-2 transition-transform duration-300"
                >
                  arrow_forward
                </motion.span>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* Back to All Projects */}
      <div className="border-t border-[#D8D3C7]">
        <Link
          to="/projects"
          className="group flex items-center justify-center gap-4 p-6 hover:bg-[#EFEDE8] transition-colors duration-300"
        >
          <span className="material-symbols-outlined text-[#8B877D] text-lg group-hover:-translate-x-1 transition-transform">
            grid_view
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B877D] group-hover:text-[#121212] transition-colors">
            View All Projects
          </span>
        </Link>
      </div>
    </section>
  );
}

// 404 Component
function NotFound() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-6"
      >
        <span className="material-symbols-outlined text-[#D8D3C7] text-8xl mb-8 block">
          search_off
        </span>
        
        <h1 className="text-[#121212] text-4xl md:text-5xl font-serif mb-4">
          Project <span className="italic font-light">Not Found</span>
        </h1>
        
        <p className="text-[#8B877D] text-lg mb-10 max-w-md mx-auto">
          The project you're looking for doesn't exist or may have been moved.
        </p>
        
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#121212] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#8B877D] transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Projects
        </Link>
      </motion.div>
    </main>
  );
}
