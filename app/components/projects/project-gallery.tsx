import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import type { Project } from "~/data/projects";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const initialPinchDistance = useRef<number | null>(null);
  const initialZoom = useRef<number>(1);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef(1);
  
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 2.5;

  // Keep zoom ref in sync with state
  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  if (!project.hasImages) {
    return <PlaceholderGallery project={project} />;
  }

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    // Reset zoom and pan when opening new image
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      const nextIndex = (currentIndex + 1) % project.images.length;
      setSelectedImage(project.images[nextIndex]);
      // Reset zoom and pan when changing images
      setZoom(1);
      setPan({ x: 0, y: 0 });
      return nextIndex;
    });
  }, [project.images]);

  const prevImage = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      const prevIndex = (currentIndex - 1 + project.images.length) % project.images.length;
      setSelectedImage(project.images[prevIndex]);
      // Reset zoom and pan when changing images
      setZoom(1);
      setPan({ x: 0, y: 0 });
      return prevIndex;
    });
  }, [project.images]);

  // Calculate distance between two touches
  const getTouchDistance = (
    touch1: { clientX: number; clientY: number },
    touch2: { clientX: number; clientY: number }
  ): number => {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Calculate center point between two touches
  const getTouchCenter = (
    touch1: { clientX: number; clientY: number },
    touch2: { clientX: number; clientY: number }
  ) => {
    return {
      x: (touch1.clientX + touch2.clientX) / 2,
      y: (touch1.clientY + touch2.clientY) / 2,
    };
  };

  // Constrain pan to image boundaries
  const constrainPan = useCallback((newPan: { x: number; y: number }, currentZoom: number) => {
    if (!imageContainerRef.current) return newPan;
    
    const container = imageContainerRef.current;
    const img = container.querySelector('img');
    if (!img) return newPan;

    const containerRect = container.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();
    
    const scaledWidth = imgRect.width * currentZoom;
    const scaledHeight = imgRect.height * currentZoom;
    
    const maxX = Math.max(0, (scaledWidth - containerRect.width) / 2);
    const maxY = Math.max(0, (scaledHeight - containerRect.height) / 2);
    
    return {
      x: Math.max(-maxX, Math.min(maxX, newPan.x)),
      y: Math.max(-maxY, Math.min(maxY, newPan.y)),
    };
  }, []);

  // Zoom functions
  const handleZoom = useCallback((newZoom: number, centerX?: number, centerY?: number) => {
    const currentZoom = zoomRef.current;
    const clampedZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, newZoom));
    
    if (clampedZoom === 1) {
      setPan({ x: 0, y: 0 });
      setZoom(1);
      return;
    }
    
    if (centerX !== undefined && centerY !== undefined && imageContainerRef.current) {
      const container = imageContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const centerXRelative = centerX - containerRect.left - containerRect.width / 2;
      const centerYRelative = centerY - containerRect.top - containerRect.height / 2;
      
      const zoomRatio = clampedZoom / currentZoom;
      const newPanX = centerXRelative * (1 - zoomRatio);
      const newPanY = centerYRelative * (1 - zoomRatio);
      
      setPan((currentPan) => constrainPan(
        { x: currentPan.x + newPanX, y: currentPan.y + newPanY },
        clampedZoom
      ));
    } else {
      setPan((currentPan) => constrainPan(currentPan, clampedZoom));
    }
    
    setZoom(clampedZoom);
  }, [constrainPan]);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const toggleZoom = useCallback((clientX: number, clientY: number) => {
    const currentZoom = zoomRef.current;
    if (currentZoom === 1) {
      handleZoom(2, clientX, clientY);
    } else {
      resetZoom();
    }
  }, [handleZoom, resetZoom]);

  // Keyboard navigation and prevent body scroll when lightbox is open
  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = "";
      return;
    }

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevImage();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, closeLightbox, prevImage, nextImage]);

  // Touch handlers for swipe gestures and pinch-to-zoom
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      // Single touch - prepare for swipe navigation
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      initialPinchDistance.current = null;
    } else if (e.touches.length === 2) {
      // Two touches - prepare for pinch-to-zoom
      e.preventDefault();
      const distance = getTouchDistance(e.touches[0], e.touches[1]);
      initialPinchDistance.current = distance;
      initialZoom.current = zoomRef.current;
      touchStartX.current = null;
      touchStartY.current = null;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDistance.current !== null) {
      // Pinch-to-zoom
      e.preventDefault();
      const distance = getTouchDistance(e.touches[0], e.touches[1]);
      const scale = distance / initialPinchDistance.current;
      const newZoom = initialZoom.current * scale;
      const center = getTouchCenter(e.touches[0], e.touches[1]);
      handleZoom(newZoom, center.x, center.y);
    } else if (e.touches.length === 1) {
      const currentZoom = zoomRef.current;
      if (currentZoom > 1 && isDragging) {
        // Pan when zoomed
        e.preventDefault();
        const touch = e.touches[0];
        const deltaX = touch.clientX - dragStart.x;
        const deltaY = touch.clientY - dragStart.y;
        setPan((currentPan) => constrainPan(
          { x: currentPan.x + deltaX, y: currentPan.y + deltaY },
          currentZoom
        ));
        setDragStart({ x: touch.clientX, y: touch.clientY });
      } else if (touchStartX.current !== null && touchStartY.current !== null) {
        // Single touch swipe detection (only when not zoomed)
        const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
        const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
        
        // If horizontal swipe is more significant than vertical, prevent scroll
        if (currentZoom === 1 && deltaX > deltaY) {
          e.preventDefault();
        }
      }
    }
  };

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const currentZoom = zoomRef.current;
    if (e.touches.length === 0) {
      // All touches ended
      if (touchStartX.current !== null && touchStartY.current !== null && currentZoom === 1) {
        // Single touch swipe navigation (only when not zoomed)
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX.current;
        const deltaY = touchEndY - touchStartY.current;
        const minSwipeDistance = 50;

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
          if (deltaX > 0) {
            prevImage();
          } else {
            nextImage();
          }
        }
      }
      
      initialPinchDistance.current = null;
      touchStartX.current = null;
      touchStartY.current = null;
      setIsDragging(false);
    } else if (e.touches.length === 1 && currentZoom > 1) {
      // Continue dragging with remaining touch
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  }, [prevImage, nextImage]);

  // Mouse wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const currentZoom = zoomRef.current;
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, currentZoom + delta));
      handleZoom(newZoom, e.clientX, e.clientY);
    }
  }, [handleZoom]);

  // Mouse drag for panning when zoomed
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const currentZoom = zoomRef.current;
    if (currentZoom > 1 && e.button === 0) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const currentZoom = zoomRef.current;
    if (isDragging && currentZoom > 1) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      setPan((currentPan) => constrainPan(
        { x: currentPan.x + deltaX, y: currentPan.y + deltaY },
        currentZoom
      ));
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  }, [isDragging, dragStart, constrainPan]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Double-click zoom toggle
  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    toggleZoom(e.clientX, e.clientY);
  }, [toggleZoom]);

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

            {/* Image Container */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] touch-none cursor-grab active:cursor-grabbing overflow-hidden"
              onClick={(e) => {
                e.stopPropagation();
                // Only close on click if not zoomed and not dragging
                if (zoom === 1 && !isDragging) {
                  // Allow click-through for navigation buttons
                }
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onDoubleClick={handleDoubleClick}
              ref={imageContainerRef}
            >
              <motion.div
                animate={{
                  scale: zoom,
                  x: pan.x,
                  y: pan.y,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="origin-center"
                style={{ willChange: zoom > 1 ? "transform" : "auto" }}
              >
                <img
                  src={selectedImage}
                  alt={`${project.name} - Full view`}
                  className="max-w-[90vw] max-h-[85vh] object-contain select-none pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            </motion.div>

            {/* Zoom Controls */}
            {zoom > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-20 left-6 z-50 flex flex-col gap-2"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetZoom();
                  }}
                  className="w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded transition-colors"
                  title="Reset zoom"
                >
                  <span className="material-symbols-outlined text-xl">fit_screen</span>
                </button>
                <div className="w-10 h-10 flex items-center justify-center bg-black/50 text-white rounded text-xs font-medium">
                  {Math.round(zoom * 100)}%
                </div>
              </motion.div>
            )}

            {/* Zoom Hint */}
            {zoom === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 bg-black/50 text-white/70 text-xs px-4 py-2 rounded backdrop-blur-sm pointer-events-none"
              >
                <span className="hidden md:inline">Double-click or Ctrl+Scroll to zoom</span>
                <span className="md:hidden">Pinch to zoom</span>
              </motion.div>
            )}

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
