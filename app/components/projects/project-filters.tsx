import { motion, AnimatePresence } from "framer-motion";
import { locations, projectTypes, type Location, type ProjectType } from "~/data/projects";

interface ProjectFiltersProps {
  selectedLocation: Location | "all";
  selectedType: ProjectType | "all";
  onLocationChange: (location: Location | "all") => void;
  onTypeChange: (type: ProjectType | "all") => void;
  projectCount: number;
  totalCount: number;
}

export default function ProjectFilters({
  selectedLocation,
  selectedType,
  onLocationChange,
  onTypeChange,
  projectCount,
  totalCount,
}: ProjectFiltersProps) {
  const hasActiveFilters = selectedLocation !== "all" || selectedType !== "all";

  const clearFilters = () => {
    onLocationChange("all");
    onTypeChange("all");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12 md:mb-16"
    >
      {/* Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8B877D] font-bold">
            Filter By
          </span>
          <div className="h-[1px] w-8 bg-[#D8D3C7]" />
        </div>

        {/* Results count and clear */}
        <div className="flex items-center gap-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={projectCount}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-sm text-[#8B877D]"
            >
              Showing <span className="text-[#121212] font-medium">{projectCount}</span> of {totalCount} projects
            </motion.span>
          </AnimatePresence>

          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={clearFilters}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#8B877D] hover:text-[#121212] transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-sm">close</span>
              Clear Filters
            </motion.button>
          )}
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Location Filter */}
        <div className="flex-1">
          <label className="block text-[9px] uppercase tracking-[0.35em] text-[#8B877D] mb-4 font-medium">
            Location
          </label>
          <div className="flex flex-wrap gap-2">
            <FilterButton
              active={selectedLocation === "all"}
              onClick={() => onLocationChange("all")}
            >
              All Locations
            </FilterButton>
            {locations.map((location) => (
              <FilterButton
                key={location}
                active={selectedLocation === location}
                onClick={() => onLocationChange(location)}
              >
                {location}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] bg-[#D8D3C7]/50" />

        {/* Project Type Filter */}
        <div className="flex-1 lg:max-w-md">
          <label className="block text-[9px] uppercase tracking-[0.35em] text-[#8B877D] mb-4 font-medium">
            Project Type
          </label>
          <div className="flex flex-wrap gap-2">
            <FilterButton
              active={selectedType === "all"}
              onClick={() => onTypeChange("all")}
            >
              All Types
            </FilterButton>
            {projectTypes.map((type) => (
              <FilterButton
                key={type}
                active={selectedType === type}
                onClick={() => onTypeChange(type)}
              >
                {type}
              </FilterButton>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Filter Button Component
interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={[
        "px-4 py-2.5 text-xs tracking-[0.1em] transition-all duration-300 border",
        active
          ? "bg-[#121212] text-white border-[#121212]"
          : "bg-transparent text-[#121212]/70 border-[#D8D3C7] hover:border-[#121212] hover:text-[#121212]",
      ].join(" ")}
    >
      {children}
    </motion.button>
  );
}
