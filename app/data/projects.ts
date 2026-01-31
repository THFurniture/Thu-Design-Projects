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

// Projects with images (7 projects)
const projectsWithImages: Project[] = [
  {
    id: "king-georges-way-830",
    name: "King Georges Way 830",
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
    name: "King Georges Way 815",
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
    name: "Groveland Road 928",
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
    name: "Quayside Drive 680",
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
    name: "27th Avenue 13560",
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
    name: "Alberni Street 1568",
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
    name: "Angus Drive 8083",
    slug: "angus-drive-8083",
    address: "8083 Angus Drive",
    location: "Vancouver",
    projectType: "Residential",
    // Note: This project starts at image 2 (no image 1)
    images: [
      "/projects/angus_dr_8083/angus-dr-8083-vancouver-2.webp",
      "/projects/angus_dr_8083/angus-dr-8083-vancouver-3.webp",
      "/projects/angus_dr_8083/angus-dr-8083-vancouver-4.webp",
      "/projects/angus_dr_8083/angus-dr-8083-vancouver-5.webp",
    ],
    thumbnail: "/projects/angus_dr_8083/angus-dr-8083-vancouver-2.webp",
    hasImages: true,
    year: 2023,
  },
];

// Placeholder projects (23 projects) - will be updated when images are added
const placeholderProjects: Project[] = [
  {
    id: "bramwell-road-1421",
    name: "Bramwell Road 1421",
    slug: "bramwell-road-1421",
    address: "1421 Bramwell Road",
    location: "West Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "burkehill-road-4129",
    name: "Burkehill Road 4129",
    slug: "burkehill-road-4129",
    address: "4129 Burkehill Road",
    location: "West Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "howe-st-1480-ph7",
    name: "Howe St 1480 Penthouse",
    slug: "howe-st-1480-ph7",
    address: "1480 Howe Street, Unit PH7",
    location: "Vancouver",
    projectType: "Urban",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "lyon-road-6420",
    name: "Lyon Road 6420",
    slug: "lyon-road-6420",
    address: "6420 Lyon Road",
    location: "Delta",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "blenheim-st-4741",
    name: "Blenheim St 4741",
    slug: "blenheim-st-4741",
    address: "4741 Blenheim Street",
    location: "Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "cambie-st-885-2500",
    name: "Cambie St 885 (2500)",
    slug: "cambie-st-885-2500",
    address: "885 Cambie Street, Unit 2500",
    location: "Vancouver",
    projectType: "Urban",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "fairbrook-cres-8500",
    name: "Fairbrook Cres 8500",
    slug: "fairbrook-cres-8500",
    address: "8500 Fairbrook Crescent",
    location: "Richmond",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "esplanade-ave-1029",
    name: "Esplanade Ave 1029",
    slug: "esplanade-ave-1029",
    address: "1029 Esplanade Avenue",
    location: "West Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "fairfax-cres-8531",
    name: "Fairfax Cres 8531",
    slug: "fairfax-cres-8531",
    address: "8531 Fairfax Crescent",
    location: "Richmond",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "finn-rd-8731",
    name: "Finn Rd 8731",
    slug: "finn-rd-8731",
    address: "8731 Finn Road",
    location: "Richmond",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "mathers-ave-2495",
    name: "Mathers Ave 2495",
    slug: "mathers-ave-2495",
    address: "2495 Mathers Avenue",
    location: "West Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "trumond-ave-3428",
    name: "Trumond Ave 3428",
    slug: "trumond-ave-3428",
    address: "3428 Trumond Avenue",
    location: "Richmond",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "west-61st-ave-2077",
    name: "West 61st Ave 2077",
    slug: "west-61st-ave-2077",
    address: "2077 West 61st Avenue",
    location: "Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "chartwell-drive-1335",
    name: "Chartwell Drive 1335",
    slug: "chartwell-drive-1335",
    address: "1335 Chartwell Drive",
    location: "West Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "claysmith-rd-8128",
    name: "Claysmith Rd 8128",
    slug: "claysmith-rd-8128",
    address: "8128 Claysmith Road",
    location: "Richmond",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "gilstone-road-1112",
    name: "Gilstone Road 1112",
    slug: "gilstone-road-1112",
    address: "1112 Gilstone Road",
    location: "West Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "robson-st-1408-2901",
    name: "Robson St 1408 (2901)",
    slug: "robson-st-1408-2901",
    address: "1408 Robson Street, Unit 2901",
    location: "Vancouver",
    projectType: "Urban",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "sandhurst-place-1416",
    name: "Sandhurst Place 1416",
    slug: "sandhurst-place-1416",
    address: "1416 Sandhurst Place",
    location: "West Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "west-28th-ave-1528",
    name: "West 28th Ave 1528",
    slug: "west-28th-ave-1528",
    address: "1528 West 28th Avenue",
    location: "Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "balfour-ave-1263",
    name: "Balfour Ave 1263",
    slug: "balfour-ave-1263",
    address: "1263 Balfour Avenue",
    location: "Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "bramwell-road-1430",
    name: "Bramwell Road 1430",
    slug: "bramwell-road-1430",
    address: "1430 Bramwell Road",
    location: "West Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "crestline-1095",
    name: "Crestline 1095",
    slug: "crestline-1095",
    address: "1095 Crestline",
    location: "West Vancouver",
    projectType: "Residential",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
  {
    id: "west-georgia-st-1128-4903",
    name: "West Georgia St 1128 (4903)",
    slug: "west-georgia-st-1128-4903",
    address: "1128 West Georgia Street, Unit 4903",
    location: "Vancouver",
    projectType: "Urban",
    images: [],
    thumbnail: "",
    hasImages: false,
  },
];

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
