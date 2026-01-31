import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Project } from "~/data/projects";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  if (!project.hasImages) {
    return <PlaceholderGallery project={project} />;
  }

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % project.images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(project.images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (selectedIndex - 1 + project.images.length) % project.images.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(project.images[prevIndex]);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-[#F9F8F6]">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-[#8B877D]/30" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#8B877D] font-bold">
                Gallery
              </span>
            </div>
            <h2 className="text-[#121212] text-3xl md:text-4xl font-serif">
              Project <span className="italic font-light">Images</span>
            </h2>
          </motion.div>

          {/* Gallery Grid - Masonry-like layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className={`group cursor-pointer overflow-hidden ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => openLightbox(image, index)}
              >
                <div className={`relative ${index === 0 ? "aspect-[4/3]" : "aspect-[4/3]"} overflow-hidden bg-[#E8E6E1]`}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    src={image}
                    alt={`${project.name} - Image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-75">
                      fullscreen
                    </span>
                  </div>

                  {/* Image Number */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium">
                      {String(index + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-50">
              <span className="text-white/70 text-sm tracking-wider">
                {String(selectedIndex + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
              </span>
            </div>

            {/* Navigation - Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-4xl">chevron_left</span>
            </button>

            {/* Navigation - Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-4xl">chevron_right</span>
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={`${project.name} - Full view`}
                className="max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 overflow-x-auto max-w-[90vw] px-4">
              {project.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(img, idx);
                  }}
                  className={`w-16 h-12 flex-shrink-0 overflow-hidden transition-all duration-300 ${
                    idx === selectedIndex 
                      ? "ring-2 ring-white opacity-100" 
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Placeholder for projects without images
function PlaceholderGallery({ project }: { project: Project }) {
  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#E8E6E1] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#8B877D] text-4xl">
              photo_camera
            </span>
          </div>
          
          <h2 className="text-[#121212] text-3xl md:text-4xl font-serif mb-6">
            Coming <span className="italic font-light">Soon</span>
          </h2>
          
          <p className="text-[#8B877D] text-lg mb-8 leading-relaxed">
            Project images for {project.name} are currently being prepared. 
            Check back soon to explore the full gallery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/projects"
              className="px-8 py-4 bg-[#121212] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#8B877D] transition-colors"
            >
              Browse Other Projects
            </a>
            <a 
              href="/contact"
              className="px-8 py-4 border border-[#D8D3C7] text-[#121212] text-xs uppercase tracking-[0.2em] hover:border-[#121212] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
