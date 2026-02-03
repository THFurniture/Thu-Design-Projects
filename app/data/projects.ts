// Project Types and Data

export type ProjectType = "Residential" | "Interior" | "Urban";

export type Location = 
  | "Vancouver"
  | "West Vancouver"
  | "Surrey"
  | "New Westminster"
  | "North Vancouver"
  | "Burnaby"
  | "Richmond"
  | "Delta";

export interface Project {
  id: string;
  name: string;
  slug: string;
  address: string;
  location: Location;
  projectType: ProjectType;
  images: string[];
  thumbnail: string;
  hasImages: boolean;
  featured?: boolean;
  year?: number;
}

// Helper to generate image paths for a project
function generateImagePaths(folder: string, baseName: string, count: number, extension: string = "avif"): string[] {
  return Array.from({ length: count }, (_, i) => 
    `/projects/${folder}/${baseName}-${i + 1}.${extension}`
  );
}

// Projects with images (30 projects)
const projectsWithImages: Project[] = [
  {
    id: "king-georges-way-830",
    name: "King Georges Way",
    slug: "king-georges-way-830",
    address: "830 King Georges Way",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("king_georges_way_830", "king-georges-way-830-west-vancouver", 9),
    thumbnail: "/projects/king_georges_way_830/king-georges-way-830-west-vancouver-1.avif",
    hasImages: true,
    featured: true,
    year: 2024,
  },
  {
    id: "king-georges-way-815",
    name: "King Georges Way",
    slug: "king-georges-way-815",
    address: "815 King Georges Way",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("king_georges_way_815", "king-georges-way-815-west-vancouver", 7),
    thumbnail: "/projects/king_georges_way_815/king-georges-way-815-west-vancouver-1.avif",
    hasImages: true,
    featured: true,
    year: 2024,
  },
  {
    id: "groveland-road-928",
    name: "Groveland Road",
    slug: "groveland-road-928",
    address: "928 Groveland Road",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("groveland_road_928", "groveland-road-928-west-vancouver", 7),
    thumbnail: "/projects/groveland_road_928/groveland-road-928-west-vancouver-1.avif",
    hasImages: true,
    year: 2024,
  },
  {
    id: "quayside-dr-680",
    name: "Quayside Drive",
    slug: "quayside-drive-680",
    address: "680 Quayside Drive, Unit 4405",
    location: "New Westminster",
    projectType: "Interior",
    images: generateImagePaths("quayside_dr_680", "quayside-dr-680-4405-new-westminster", 5),
    thumbnail: "/projects/quayside_dr_680/quayside-dr-680-4405-new-westminster-1.avif",
    hasImages: true,
    year: 2024,
  },
  {
    id: "27th-ave-13560",
    name: "27th Avenue",
    slug: "27th-avenue-13560",
    address: "13560 27th Avenue",
    location: "Surrey",
    projectType: "Residential",
    images: generateImagePaths("27th_ave_13560", "27th-ave-13560-surrey", 8),
    thumbnail: "/projects/27th_ave_13560/27th-ave-13560-surrey-1.avif",
    hasImages: true,
    year: 2024,
  },
  {
    id: "alberni-st-1568",
    name: "Alberni Street",
    slug: "alberni-street-1568",
    address: "1568 Alberni Street, Unit 4001",
    location: "Vancouver",
    projectType: "Urban",
    images: generateImagePaths("alberni_st_1568", "alberni-st-1568-4001-vancouver", 5),
    thumbnail: "/projects/alberni_st_1568/alberni-st-1568-4001-vancouver-1.avif",
    hasImages: true,
    featured: true,
    year: 2024,
  },
  {
    id: "angus-dr-8083",
    name: "Angus Drive",
    slug: "angus-drive-8083",
    address: "8083 Angus Drive",
    location: "Vancouver",
    projectType: "Residential",
    // Note: This project starts at image 2 (no image 1)
    images: [
      "/projects/angus_dr_8083/angus-dr-8083-vancouver-1.avif",
      "/projects/angus_dr_8083/angus-dr-8083-vancouver-2.avif",
      "/projects/angus_dr_8083/angus-dr-8083-vancouver-3.avif",
      "/projects/angus_dr_8083/angus-dr-8083-vancouver-4.avif",
      "/projects/angus_dr_8083/angus-dr-8083-vancouver-5.avif",
    ],
    thumbnail: "/projects/angus_dr_8083/angus-dr-8083-vancouver-1.avif",
    hasImages: true,
    year: 2023,
  },
  {
    id: "bramwell-road-1421",
    name: "Bramwell Road",
    slug: "bramwell-road-1421",
    address: "1421 Bramwell Road",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("bramwell_rd_1421", "bramwell-rd-1421-west-vancouver", 5),
    thumbnail: "/projects/bramwell_rd_1421/bramwell-rd-1421-west-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "burkehill-road-4129",
    name: "Burkehill Road",
    slug: "burkehill-road-4129",
    address: "4129 Burkehill Road",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("burkehill-rd-4129", "burkehill-rd-4129-west-vancouver", 4),
    thumbnail: "/projects/burkehill-rd-4129/burkehill-rd-4129-west-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "howe-st-1480-ph7",
    name: "Howe St Penthouse",
    slug: "howe-st-1480-ph7",
    address: "1480 Howe Street, Unit PH7",
    location: "Vancouver",
    projectType: "Urban",
    images: generateImagePaths("howe-st-1480", "howe-st-1480-vancouver", 4),
    thumbnail: "/projects/howe-st-1480/howe-st-1480-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "lyon-road-6420",
    name: "Lyon Road",
    slug: "lyon-road-6420",
    address: "6420 Lyon Road",
    location: "Delta",
    projectType: "Residential",
    images: generateImagePaths("lyon-rd-6420", "lyon-rd-6420-delta", 6),
    thumbnail: "/projects/lyon-rd-6420/lyon-rd-6420-delta-1.avif",
    hasImages: true,
  },
  {
    id: "blenheim-st-4741",
    name: "Blenheim St",
    slug: "blenheim-st-4741",
    address: "4741 Blenheim Street",
    location: "Vancouver",
    projectType: "Residential",
    images: generateImagePaths("blenheim_st_4741", "blenheim-st-4741-vancouver", 8),
    thumbnail: "/projects/blenheim_st_4741/blenheim-st-4741-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "cambie-st-885-2500",
    name: "Cambie St",
    slug: "cambie-st-885-2500",
    address: "885 Cambie Street, Unit 2500",
    location: "Vancouver",
    projectType: "Urban",
    images: generateImagePaths("cambie_st_885", "cambie-st-885-2500-vancouver", 8),
    thumbnail: "/projects/cambie_st_885/cambie-st-885-2500-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "fairbrook-cres-8500",
    name: "Fairbrook Cres",
    slug: "fairbrook-cres-8500",
    address: "8500 Fairbrook Crescent",
    location: "Richmond",
    projectType: "Residential",
    images: generateImagePaths("fairbrook_cres_8500", "fairbrook-cres-8500-richmond", 8),
    thumbnail: "/projects/fairbrook_cres_8500/fairbrook-cres-8500-richmond-1.avif",
    hasImages: true,
  },
  {
    id: "esplanade-ave-1029",
    name: "Esplanade Ave",
    slug: "esplanade-ave-1029",
    address: "1029 Esplanade Avenue",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("esplanada_ave_1029", "esplanade-ave-1029-west-vancouver", 7),
    thumbnail: "/projects/esplanada_ave_1029/esplanade-ave-1029-west-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "fairfax-cres-8531",
    name: "Fairfax Cres",
    slug: "fairfax-cres-8531",
    address: "8531 Fairfax Crescent",
    location: "Richmond",
    projectType: "Residential",
    images: generateImagePaths("fairfax_cres_8531", "fairfax-cres-8531-richmond", 11),
    thumbnail: "/projects/fairfax_cres_8531/fairfax-cres-8531-richmond-1.avif",
    hasImages: true,
  },
  {
    id: "finn-rd-8731",
    name: "Finn Rd",
    slug: "finn-rd-8731",
    address: "8731 Finn Road",
    location: "Richmond",
    projectType: "Residential",
    images: generateImagePaths("finn_rd_8731", "finn-rd-8731-richmond", 8),
    thumbnail: "/projects/finn_rd_8731/finn-rd-8731-richmond-1.avif",
    hasImages: true,
  },
  {
    id: "mathers-ave-2495",
    name: "Mathers Ave",
    slug: "mathers-ave-2495",
    address: "2495 Mathers Avenue",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("mathers_ave_2495", "mathers-ave-2495-west-vancouver", 7),
    thumbnail: "/projects/mathers_ave_2495/mathers-ave-2495-west-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "trumond-ave-3428",
    name: "Trumond Ave",
    slug: "trumond-ave-3428",
    address: "3428 Trumond Avenue",
    location: "Richmond",
    projectType: "Residential",
    images: generateImagePaths("trumond_ave_3428", "trumond-ave-3428-richmond", 9),
    thumbnail: "/projects/trumond_ave_3428/trumond-ave-3428-richmond-1.avif",
    hasImages: true,
  },
  {
    id: "west-61st-ave-2077",
    name: "West 61st Ave",
    slug: "west-61st-ave-2077",
    address: "2077 West 61st Avenue",
    location: "Vancouver",
    projectType: "Residential",
    images: generateImagePaths("w_61st_ave_2077", "w-61st-ave-2077-vancouver", 5),
    thumbnail: "/projects/w_61st_ave_2077/w-61st-ave-2077-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "chartwell-drive-1335",
    name: "Chartwell Drive",
    slug: "chartwell-drive-1335",
    address: "1335 Chartwell Drive",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("chartwell_dr_1335", "chartwell-dr-1335-west-vancouver", 7),
    thumbnail: "/projects/chartwell_dr_1335/chartwell-dr-1335-west-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "claysmith-rd-8128",
    name: "Claysmith Rd",
    slug: "claysmith-rd-8128",
    address: "8128 Claysmith Road",
    location: "Richmond",
    projectType: "Residential",
    images: generateImagePaths("claysmith_rd_8128", "claysmith-rd-8128-richmond", 9),
    thumbnail: "/projects/claysmith_rd_8128/claysmith-rd-8128-richmond-1.avif",
    hasImages: true,
  },
  {
    id: "gilston-road-1112",
    name: "Gilston Road",
    slug: "gilston-road-1112",
    address: "1112 Gilston Road",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("gilston_rd_1112", "gilston-rd-1112-west-vancouver", 7),
    thumbnail: "/projects/gilston_rd_1112/gilston-rd-1112-west-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "robson-st-1408-2901",
    name: "Robson St",
    slug: "robson-st-1408-2901",
    address: "1408 Robson Street, Unit 2901",
    location: "Vancouver",
    projectType: "Urban",
    images: generateImagePaths("robson_st_1408", "robson-st-1408-2901-vancouver", 11),
    thumbnail: "/projects/robson_st_1408/robson-st-1408-2901-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "sandhurst-place-1416",
    name: "Sandhurst Place",
    slug: "sandhurst-place-1416",
    address: "1416 Sandhurst Place",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("sandhurst_pl_1416", "sandhurst-pl-1416-west-vancouver", 10),
    thumbnail: "/projects/sandhurst_pl_1416/sandhurst-pl-1416-west-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "west-28th-ave-1528",
    name: "West 28th Ave",
    slug: "west-28th-ave-1528",
    address: "1528 West 28th Avenue",
    location: "Vancouver",
    projectType: "Residential",
    images: generateImagePaths("w_28th_ave_1528", "w-28th-ave-1528-vancouver", 8),
    thumbnail: "/projects/w_28th_ave_1528/w-28th-ave-1528-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "balfour-ave-1263",
    name: "Balfour Ave",
    slug: "balfour-ave-1263",
    address: "1263 Balfour Avenue",
    location: "Vancouver",
    projectType: "Residential",
    images: generateImagePaths("balfour_ave_1263", "balfour-ave-1263-vancouver", 8),
    thumbnail: "/projects/balfour_ave_1263/balfour-ave-1263-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "bramwell-road-1430",
    name: "Bramwell Road",
    slug: "bramwell-road-1430",
    address: "1430 Bramwell Road",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("bramwell_rd_1430", "bramwell-rd-1430-west-vancouver", 6),
    thumbnail: "/projects/bramwell_rd_1430/bramwell-rd-1430-west-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "crestline-1095",
    name: "Crestline Road",
    slug: "crestline-1095",
    address: "1095 Crestline Road",
    location: "West Vancouver",
    projectType: "Residential",
    images: generateImagePaths("crestline_rd_1095", "crestline-rd-1095-west-vancouver", 5),
    thumbnail: "/projects/crestline_rd_1095/crestline-rd-1095-west-vancouver-1.avif",
    hasImages: true,
  },
  {
    id: "west-georgia-st-1128-4903",
    name: "West Georgia St",
    slug: "west-georgia-st-1128-4903",
    address: "1128 West Georgia Street, Unit 4903",
    location: "Vancouver",
    projectType: "Urban",
    images: generateImagePaths("w_georgia_st_1128", "w-georgia-st-1128-4903-vancouver", 10),
    thumbnail: "/projects/w_georgia_st_1128/w-georgia-st-1128-4903-vancouver-1.avif",
    hasImages: true,
  },
];

// Placeholder projects (0 projects) - all projects now have images
const placeholderProjects: Project[] = [];

// All projects combined
export const projects: Project[] = [...projectsWithImages, ...placeholderProjects];

// Get all unique locations from projects
export const locations: Location[] = [
  "Vancouver",
  "West Vancouver",
  "North Vancouver",
  "Burnaby",
  "Richmond",
  "Surrey",
  "New Westminster",
  "Delta",
];

// Get all project types
export const projectTypes: ProjectType[] = ["Residential", "Interior", "Urban"];

// Utility functions

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && p.hasImages);
}

export function getProjectsWithImages(): Project[] {
  return projects.filter((p) => p.hasImages);
}

export interface FilterOptions {
  location?: Location | "all";
  projectType?: ProjectType | "all";
}

export function filterProjects(options: FilterOptions): Project[] {
  let filtered = [...projects];

  if (options.location && options.location !== "all") {
    filtered = filtered.filter((p) => p.location === options.location);
  }

  if (options.projectType && options.projectType !== "all") {
    filtered = filtered.filter((p) => p.projectType === options.projectType);
  }

  return filtered;
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex + 1) % projects.length];
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex - 1 + projects.length) % projects.length];
}

// Get counts for filters
export function getLocationCounts(): Record<Location, number> {
  const counts: Record<Location, number> = {} as Record<Location, number>;
  locations.forEach((loc) => {
    counts[loc] = projects.filter((p) => p.location === loc).length;
  });
  return counts;
}

export function getProjectTypeCounts(): Record<ProjectType, number> {
  const counts: Record<ProjectType, number> = {} as Record<ProjectType, number>;
  projectTypes.forEach((type) => {
    counts[type] = projects.filter((p) => p.projectType === type).length;
  });
  return counts;
}
