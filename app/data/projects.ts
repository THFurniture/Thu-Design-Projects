// Project Types and Data

export type ProjectType = "Luxury Estates" | "Single-Family Homes" | "Townhouses & Duplexes" | "Penthouses" | "Condos & Apartments";

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
  address: string | null;
  location: Location;
  projectType: ProjectType;
  images: string[];
  thumbnail: string | null;
  hasImages: boolean;
  featured?: boolean;
  description?: string;
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
    name: "King Georges Way House",
    slug: "king-georges-way-830",
    address: "830 King Georges Way",
    location: "West Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("king_georges_way_830", "king-georges-way-830-west-vancouver", 9),
    thumbnail: "/projects/king_georges_way_830/king-georges-way-830-west-vancouver-1.avif",
    hasImages: true,
    featured: true,
    description: "A contemporary architectural masterpiece, this residence blends clean modern lines with rich natural textures. The exterior features a striking mix of metal cladding, warm wood panels, and layered stonework, creating a bold yet timeless façade. Large windows flood the interior with natural light, highlighting the home's open-concept layout and seamless indoor-outdoor flow. Inside, our staging complements the home's luxurious materials—polished stone floors, custom millwork, and high ceilings—with a palette of soft neutrals and vibrant accents. Thoughtful furniture placement enhances the spacious living areas, while layered textures and curated décor bring warmth and sophistication. The result is a refined, inviting environment that elevates the home's architectural elegance and showcases its lifestyle potential.",
  },
  {
    id: "king-georges-way-815",
    name: "King Georges Way Residence",
    slug: "king-georges-way-815",
    address: "815 King Georges Way",
    location: "West Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("king_georges_way_815", "king-georges-way-815-west-vancouver", 7),
    thumbnail: "/projects/king_georges_way_815/king-georges-way-815-west-vancouver-1.avif",
    hasImages: true,
    featured: true,
    description: "A contemporary architectural statement featuring bold geometric lines, metal and wood cladding, and expansive floor-to-ceiling windows that frame stunning views. Inside, the home opens into a bright, elegant layout with marble floors, custom millwork, and sculptural lighting. Our staging enhances the home's modern luxury with soft textures, curated furniture, and a warm neutral palette—highlighting the flow, scale, and refined details of every room. A seamless blend of architecture and interior styling designed for sophisticated living.",
  },
  {
    id: "groveland-road-928",
    name: "Groveland Road",
    slug: "groveland-road-928",
    address: "928 Groveland Road",
    location: "West Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("groveland_road_928", "groveland-road-928-west-vancouver", 7),
    thumbnail: "/projects/groveland_road_928/groveland-road-928-west-vancouver-1.avif",
    hasImages: true,
    description: "This residence showcases a refined balance of classical architecture and contemporary luxury, highlighted by intricate coffered ceilings, detailed millwork, fluted columns, and expansive glazing that fills each room with natural light. A striking double-sided stone fireplace anchors the main living areas, enhancing spatial flow while creating a sculptural focal point. Layered lighting—from ornate chandeliers to recessed illumination and elegant sconces—adds depth and warmth, complementing a curated palette of tailored neutrals accented with rich blues and gold tones. Mirrored wall panels and symmetrical detailing amplify the scale of the lower-level lounge, while the spa-inspired ensuite features marble surfaces, custom millwork vanities, and statement fixtures that elevate the architectural envelope. Every space was thoughtfully composed to enhance proportion, sightlines, and texture, presenting a cohesive, high-impact luxury residence.",
  },
  {
    id: "quayside-dr-680",
    name: "Quayside Condo by Bosa Development Inc",
    slug: "quayside-drive-680",
    address: "680 Quayside Drive, Unit 4405",
    location: "New Westminster",
    projectType: "Condos & Apartments",
    images: generateImagePaths("quayside_dr_680", "quayside-dr-680-4405-new-westminster", 5),
    thumbnail: "/projects/quayside_dr_680/quayside-dr-680-4405-new-westminster-1.avif",
    hasImages: true,
    description: "This contemporary high-rise residence is perched within a striking glass tower defined by its sculptural form, sleek façade, and expansive panoramic views. Inside, the home embraces a bright, modern aesthetic with floor-to-ceiling windows that flood the space with natural light and frame sweeping city and river vistas. The open-concept living area features soft neutral furnishings, layered textures, and clean lines that complement the building's minimalist architecture. A streamlined kitchen with integrated cabinetry and warm wood tones blends seamlessly into the space, while the serene bedroom is styled in calming creams and plush fabrics, creating a luxurious retreat above the skyline. Thoughtful staging enhances the suite's airy elegance, highlighting a lifestyle centered on light, openness, and contemporary urban living.",
  },
  {
    id: "27th-ave-13560",
    name: "27th Avenue",
    slug: "27th-avenue-13560",
    address: "13560 27th Avenue",
    location: "Surrey",
    projectType: "Luxury Estates",
    images: generateImagePaths("27th_ave_13560", "27th-ave-13560-surrey", 8),
    thumbnail: "/projects/27th_ave_13560/27th-ave-13560-surrey-1.avif",
    hasImages: true,
    description: "This residence showcases a refined balance of classical architecture and contemporary luxury, highlighted by intricate coffered ceilings, detailed millwork, fluted columns, and expansive glazing that fills each room with natural light. A striking double-sided stone fireplace anchors the main living areas, enhancing spatial flow while creating a sculptural focal point. Layered lighting—from ornate chandeliers to recessed illumination and elegant sconces—adds depth and warmth, complementing a curated palette of tailored neutrals accented with rich blues and gold tones. Mirrored wall panels and symmetrical detailing amplify the scale of the lower-level lounge, while the spa-inspired ensuite features marble surfaces, custom millwork vanities, and statement fixtures that elevate the architectural envelope. Every space was thoughtfully composed to enhance proportion, sightlines, and texture, presenting a cohesive, high-impact luxury residence.",
  },
  {
    id: "alberni-st-1568",
    name: "Kengo Kuma designed  Residence by Westbank Corp",
    slug: "alberni-street-1568",
    address: "1568 Alberni Street, Unit 4001",
    location: "Vancouver",
    projectType: "Condos & Apartments",
    images: generateImagePaths("alberni_st_1568", "alberni-st-1568-4001-vancouver", 5),
    thumbnail: "/projects/alberni_st_1568/alberni-st-1568-4001-vancouver-1.avif",
    hasImages: true,
    featured: true,
    description: "This project, set within a landmark tower designed by Kengo Kuma, celebrates the fusion of bold architectural artistry and serene contemporary living. The building's sculptural form—defined by its rhythmic façade, organic geometry, and intricate interplay of light and shadow—creates a striking architectural identity that flows seamlessly into the residence. Inside, expansive floor-to-ceiling glazing frames sweeping ocean and mountain views, grounding the home in the natural beauty of the West Coast. The interior design embraces soft luxury through layered neutrals, light wood flooring, sculptural furniture, and airy textiles, offering a calm counterpoint to the tower's expressive exterior. Thoughtful spatial flow, refined materials, and subtle organic curves enhance the sense of openness, while the spacious terrace extends living outdoors with natural textures and lush greenery. Together, Kengo Kuma's visionary architecture and the elevated interior design form a harmonious, light-filled retreat suspended above the city.",
  },
  {
    id: "angus-dr-8083",
    name: "The Angus Residence",
    slug: "angus-drive-8083",
    address: "8083 Angus Drive",
    location: "Vancouver",
    projectType: "Luxury Estates",
    // Note: This project starts at image 2 (no image 1)
    images: generateImagePaths("angus_dr_8083", "angus-dr-8083-vancouver", 5),
    thumbnail: "/projects/angus_dr_8083/angus-dr-8083-vancouver-1.avif",
    hasImages: true,
    description: "This grand estate blends timeless European-inspired architecture with refined modern luxury, featuring a symmetrical façade, elegant balconies, and detailed millwork that emphasize its classical character. Inside, soaring arched ceilings, intricate mouldings, and expansive windows create a luminous backdrop for the home's sophisticated interior design. Marble fireplaces, crystal chandeliers, and curated furnishings introduce an atmosphere of understated opulence, while spaces like the formal salon, richly appointed study, and serene family rooms highlight a balance of tradition and contemporary comfort. Every room is thoughtfully layered with texture, craftsmanship, and bespoke details, forming a residence that feels both stately and beautifully livable.",
  },
  {
    id: "bramwell-road-1421",
    name: "Bramwell Residence",
    slug: "bramwell-road-1421",
    address: "1421 Bramwell Road",
    location: "West Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("bramwell_rd_1421", "bramwell-rd-1421-west-vancouver", 5),
    thumbnail: "/projects/bramwell_rd_1421/bramwell-rd-1421-west-vancouver-1.avif",
    hasImages: true,
    description: "Bramwell is a grand estate defined by classic European architecture and timeless luxury. The exterior showcases a majestic symmetrical façade, tiered landscaping, wrought-iron gates, and sweeping stone staircases leading to an impressive columned entrance—all overlooking expansive ocean views. Inside, the home features a dramatic double-curved staircase, intricate millwork, coffered ceilings with gold detailing, and richly crafted wood cabinetry. Every space is layered with elegant interior design elements: refined furnishings, sculptural lighting, custom fireplaces, and serene, light-filled rooms that blend old-world craftsmanship with modern comfort.",
  },
  {
    id: "burkehill-road-4129",
    name: "Burkehill Residence",
    slug: "burkehill-road-4129",
    address: "4129 Burkehill Road",
    location: "West Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("burkehill-rd-4129", "burkehill-rd-4129-west-vancouver", 4),
    thumbnail: "/projects/burkehill-rd-4129/burkehill-rd-4129-west-vancouver-1.avif",
    hasImages: true,
    description: "This striking contemporary residence is designed to capture the essence of modern West Coast luxury. Defined by its sculptural roofline, expansive glass walls, and cascading terraces, the architecture maximizes natural light and frames uninterrupted ocean views from every angle. The interior continues this refined aesthetic with marble flooring, warm natural wood accents, and a dramatic black stone fireplace that anchors the main living space. Curated staging introduces soft neutrals, sculptural silhouettes, and layered textures, bringing warmth and balance to the home's clean architectural lines. The result is a seamless blend of indoor–outdoor living, sophisticated design, and coastal serenity.",
  },
  {
    id: "howe-st-1480-ph7",
    name: "Howe St Penthouse",
    slug: "howe-st-1480-ph7",
    address: "1480 Howe Street, Unit PH7",
    location: "Vancouver",
    projectType: "Penthouses",
    images: generateImagePaths("howe-st-1480", "howe-st-1480-vancouver", 4),
    thumbnail: "/projects/howe-st-1480/howe-st-1480-vancouver-1.avif",
    hasImages: true,
    description: "This penthouse residence is defined by its expansive floor-to-ceiling glazing and uninterrupted panoramic vistas of the city skyline, mountains, and water, creating a seamless dialogue between interior architecture and the urban landscape. A restrained, contemporary palette of soft neutrals and layered textures enhances the sense of volume, while wide-plank herringbone flooring introduces subtle movement and refinement. The open-concept living and dining areas are anchored by sculptural furnishings and a statement pendant, carefully scaled to maintain visual balance against the dramatic glazing. Clean-lined millwork, minimalist detailing, and integrated transitions emphasize clarity and proportion throughout. In the private quarters, the primary suite continues the architectural language with low-profile upholstery, tailored textiles, and expansive corner windows that frame the skyline as a living backdrop. The overall composition reflects a modern luxury aesthetic—elevated, airy, and intentionally curated to celebrate light, view, and spatial flow.",
  },
  {
    id: "lyon-road-6420",
    name: "Lyon Rd Residence",
    slug: "lyon-road-6420",
    address: "6420 Lyon Road",
    location: "Delta",
    projectType: "Luxury Estates",
    images: generateImagePaths("lyon-rd-6420", "lyon-rd-6420-delta", 6),
    thumbnail: "/projects/lyon-rd-6420/lyon-rd-6420-delta-1.avif",
    hasImages: true,
    description: "This contemporary residence features bold modern architecture defined by clean geometric lines, expansive windows, and a striking cantilevered roof that enhances its strong architectural presence. The interior embraces a warm minimalist aesthetic with soaring ceilings, layered lighting, and thoughtfully integrated wood accents that bring softness to the crisp structural forms. Open-concept living spaces flow seamlessly from the elegant sitting area to the dining room and custom-designed kitchen, all styled in a refined palette of soft neutrals and rich textures. Sculptural lighting, bespoke millwork, and sophisticated furnishings elevate every room, while the serene primary suite showcases tailored paneling, ambient lighting, and luxurious finishes that complete the home's modern yet inviting character.",
  },
  {
    id: "blenheim-st-4741",
    name: "Advaya Project",
    slug: "blenheim-st-4741",
    address: "4741 Blenheim Street",
    location: "Vancouver",
    projectType: "Single-Family Homes",
    images: generateImagePaths("blenheim_st_4741", "blenheim-st-4741-vancouver", 8),
    thumbnail: "/projects/blenheim_st_4741/blenheim-st-4741-vancouver-1.avif",
    hasImages: true,
    description: "This modern home features a clean architectural profile with geometric forms, large picture windows, and a refined mix of stucco and concrete textures. Inside, a serene palette of soft whites, natural oak floors, and integrated LED lighting creates a bright and elegant atmosphere. The open living and dining area is anchored by a minimalist fireplace and sculptural furnishings, while curated neutral tones and contemporary décor highlight the home's clean lines. The primary bedroom continues this calm, modern aesthetic with warm lighting, soft textures, and expansive windows that connect the space to the outdoors.",
  },
  {
    id: "cambie-st-885-2500",
    name: "The Smithe by Boffo Development",
    slug: "cambie-st-885-2500",
    address: "885 Cambie Street, Unit 2500",
    location: "Vancouver",
    projectType: "Penthouses",
    images: generateImagePaths("cambie_st_885", "cambie-st-885-2500-vancouver", 8),
    thumbnail: "/projects/cambie_st_885/cambie-st-885-2500-vancouver-2.avif",
    hasImages: true,
    description: "The Smithe showcases elevated urban living with a contemporary architectural envelope defined by clean lines, expansive glazing, and panoramic city and mountain views. Inside, the design embraces a soft modern palette—coffered ceilings, wide-plank hardwood floors, and tailored furnishings create a refined yet inviting atmosphere. Floor-to-ceiling windows flood each room with natural light, framing Vancouver's skyline as part of the interior experience. Custom millwork, sculptural lighting, and layered neutral textures add warmth and sophistication throughout the open living areas and serene bedrooms. This project highlights modern luxury at its finest—bright, airy, and thoughtfully curated in every detail.",
  },
  {
    id: "fairbrook-cres-8500",
    name: "The Elevation Residence",
    slug: "fairbrook-cres-8500",
    address: "8500 Fairbrook Crescent",
    location: "Richmond",
    projectType: "Single-Family Homes",
    images: generateImagePaths("fairbrook_cres_8500", "fairbrook-cres-8500-richmond", 8),
    thumbnail: "/projects/fairbrook_cres_8500/fairbrook-cres-8500-richmond-1.avif",
    hasImages: true,
    description: "This elegant modern estate features a striking architectural façade defined by clean lines, grand columns, and contrasting monochromatic tones that create a bold yet timeless presence. Inside, the double-height foyer opens into a sunlit living space where floor-to-ceiling windows, warm wood paneling, and a sculptural marble fireplace set the tone for refined contemporary living. The interiors blend soft neutrals with luxurious textures, from the curved dining chairs and layered artwork to the serene great room framed by coffered ceilings and custom millwork. Thoughtful staging enhances the home's natural light and fluid layout, while the tranquil primary suite—finished with vertical upholstered panels, airy drapery, and a soothing palette—adds a boutique-hotel feel. The Elevation Residence embodies sophisticated design, balancing architectural drama with inviting, modern comfort.",
  },
  {
    id: "esplanade-ave-1029",
    name: "Esplanade Residence House",
    slug: "esplanade-ave-1029",
    address: "1029 Esplanade Avenue",
    location: "West Vancouver",
    projectType: "Single-Family Homes",
    images: generateImagePaths("esplanada_ave_1029", "esplanade-ave-1029-west-vancouver", 7),
    thumbnail: "/projects/esplanada_ave_1029/esplanade-ave-1029-west-vancouver-1.avif",
    hasImages: true,
    description: "The Esplanade Residence is a modern architectural statement defined by bold geometric lines, expansive glazing, and a tiered concrete landscape that frames the home with sculptural precision. Its elevated façade, floating balconies, and glass railings create a seamless connection between indoor and outdoor living. Inside, warm wood tones, curved designer furnishings, and layered textures bring softness to the home's contemporary structure. Sun-filled living spaces, a sculptural open-riser staircase, and a glass-enclosed wine room add sophistication, while thoughtful staging highlights the home's clean lines and luxurious flow. The final result is a refined blend of architectural elegance and modern interior design.",
  },
  {
    id: "fairfax-cres-8531",
    name: "The Fairfax Residence",
    slug: "fairfax-cres-8531",
    address: "8531 Fairfax Crescent",
    location: "Richmond",
    projectType: "Single-Family Homes",
    images: generateImagePaths("fairfax_cres_8531", "fairfax-cres-8531-richmond", 11),
    thumbnail: "/projects/fairfax_cres_8531/fairfax-cres-8531-richmond-1.avif",
    hasImages: true,
    description: "This beautifully crafted residence blends modern architecture with warm, timeless design, featuring a striking façade of white brick, black framed windows, and a sculptural timber entry that adds depth and character. Inside, soaring double-height ceilings, custom iron railings, and expansive windows fill the home with natural light, highlighting the refined palette of soft neutrals, natural oak, and textured stone. The interior flows gracefully from the elegant formal living room with its statement fireplace to the serene dining space and into a contemporary kitchen framed by black arched doors. Thoughtful design moments—such as the marble-clad powder room, the tranquil primary suite opening onto a private terrace, and the playful loft with built-in millwork—create a cohesive atmosphere of comfort and sophistication. Every architectural line and curated furnishing works together to elevate this home into a refined, modern sanctuary.",
  },
  {
    id: "finn-rd-8731",
    name: "The Finn Mansion",
    slug: "finn-rd-8731",
    address: "8731 Finn Road",
    location: "Richmond",
    projectType: "Luxury Estates",
    images: generateImagePaths("finn_rd_8731", "finn-rd-8731-richmond", 8),
    thumbnail: "/projects/finn_rd_8731/finn-rd-8731-richmond-1.avif",
    hasImages: true,
    description: "This extraordinary European-inspired estate sits on expansive farmland with breathtaking mountain views, featuring timeless architecture defined by terracotta roofs, classical columns, and grand symmetrical facades. Inside, the home opens into a dramatic double-curved staircase leading to a sunlit great room crowned with soaring arched windows and an ornate crystal chandelier. Every space showcases refined craftsmanship—from the formal dining room with detailed millwork and twin chandeliers to the lavish living salon accented by intricate ceiling designs, marble floors, and elegant archways. The interiors blend old-world opulence with fresh contemporary styling, seen in the serene primary suite with its textured walls, bespoke fireplace, and soft neutral palette. Layered lighting, curated furnishings, and luxurious materials elevate each room, creating a residence that feels both palatial and inviting.",
  },
  {
    id: "mathers-ave-2495",
    name: "Mathers Masterpiece",
    slug: "mathers-ave-2495",
    address: "2495 Mathers Avenue",
    location: "West Vancouver",
    projectType: "Single-Family Homes",
    images: generateImagePaths("mathers_ave_2495", "mathers-ave-2495-west-vancouver", 7),
    thumbnail: "/projects/mathers_ave_2495/mathers-ave-2495-west-vancouver-1.avif",
    hasImages: true,
    description: "Mathers is a striking contemporary residence defined by bold architectural lines, a dramatic sloped roofline, and illuminated structural frames that create a distinctive silhouette day and night. Floor-to-ceiling windows anchor the design, flooding the interiors with natural light and blurring the boundary between indoor living and the lush outdoors. Inside, the home showcases refined modern luxury—crisp marble flooring, sculptural lighting, custom millwork, and layered textures that bring warmth to the minimalist palette. Each space balances elegance with comfort, from the serene living areas accented with oversized art and tailored furnishings to the intimate lounge with rich wood details and statement stone fireplace. The outdoor living area completes the experience, featuring a covered pavilion, integrated lighting, and resort-style seating that transforms the backyard into a year-round retreat.",
  },
  {
    id: "trumond-ave-3428",
    name: "Trumond Ave",
    slug: "trumond-ave-3428",
    address: "3428 Trumond Avenue",
    location: "Richmond",
    projectType: "Luxury Estates",
    images: generateImagePaths("trumond_ave_3428", "trumond-ave-3428-richmond", 9),
    thumbnail: "/projects/trumond_ave_3428/trumond-ave-3428-richmond-1.avif",
    hasImages: true,
    description: "This custom-built residence is articulated through a refined contemporary façade of stone cladding, symmetrical massing, and layered rooflines, creating a commanding yet balanced street presence. Inside, a double-height foyer with coffered ceilings and full-height millwork establishes a grand architectural axis anchored by a linear fireplace clad in large-format marble. The open-concept living space is framed by a floating staircase with glass balustrades and integrated LED lighting, reinforcing clean sightlines and modern detailing. A warm palette of wide-plank wood flooring, soft neutral upholstery, and tailored textiles introduces texture while maintaining spatial clarity. The kitchen is composed with flat-panel cabinetry in light oak tones, waterfall quartz surfaces, vertical fluted accents, and minimalist pendant lighting, emphasizing proportion and material continuity. In the private quarters, layered wall treatments, sculptural headboards, and integrated lighting details elevate the suites into serene, hotel-inspired retreats. Throughout the home, architectural symmetry, custom millwork, and curated furnishings work in dialogue to create a cohesive composition that feels both elevated and intentionally livable.",
  },
  {
    id: "west-61st-ave-2077",
    name: "Rockwell Residence",
    slug: "west-61st-ave-2077",
    address: "2077 West 61st Avenue",
    location: "Vancouver",
    projectType: "Single-Family Homes",
    images: generateImagePaths("w_61st_ave_2077", "w-61st-ave-2077-vancouver", 5),
    thumbnail: "/projects/w_61st_ave_2077/w-61st-ave-2077-vancouver-1.avif",
    hasImages: true,
    description: "The Rockwell Residence is a modern home defined by bold architecture and warm, contemporary interiors. Its exterior combines charcoal stone, wood accents, and geometric rooflines for a striking, sculptural presence. Inside, large windows and clean lines pair with soft neutrals, textured furnishings, and a dramatic stone fireplace. The kitchen features sleek matte cabinetry and book-matched marble, while the bedrooms offer calm, elegant styling with layered textiles and serene artwork. A cozy media room, wrapped in wood paneling and ambient LED lighting, completes this refined modern retreat.",
  },
  {
    id: "chartwell-drive-1335",
    name: "Chartwell Residence",
    slug: "chartwell-drive-1335",
    address: "1335 Chartwell Drive",
    location: "West Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("chartwell_dr_1335", "chartwell-dr-1335-west-vancouver", 7),
    thumbnail: "/projects/chartwell_dr_1335/chartwell-dr-1335-west-vancouver-1.avif",
    hasImages: true,
    description: "Chartwell is a grand French-inspired estate characterized by sculpted dormer roofs, curved balconies, classical columns, and intricate wrought-iron detailing, creating a timeless and prestigious architectural presence. Inside, a breathtaking double-height foyer with a hand-painted dome and sweeping curved staircase sets the tone for the home's refined elegance. Throughout the interiors, marble floors, custom ceiling designs, and soft contemporary furnishings blend seamlessly with the classical framework, resulting in a bright, luxurious, and harmoniously modern interpretation of this iconic Chartwell residence.",
  },
  {
    id: "claysmith-rd-8128",
    name: "Claysmith Residence",
    slug: "claysmith-rd-8128",
    address: "8128 Claysmith Road",
    location: "Richmond",
    projectType: "Single-Family Homes",
    images: generateImagePaths("claysmith_rd_8128", "claysmith-rd-8128-richmond", 9),
    thumbnail: "/projects/claysmith_rd_8128/claysmith-rd-8128-richmond-1.avif",
    hasImages: true,
    description: "This contemporary estate blends refined classical lines with modern elegance, featuring a crisp façade, grand symmetrical windows, and detailed trim work that create a sophisticated architectural presence. Inside, soaring ceilings with exposed beams, full-height windows, and warm wood accents flood the home with natural light while grounding the open-concept layout in softness and texture. Thoughtfully curated interiors include a serene living room anchored by a marble fireplace feature, a bright and airy great room that flows seamlessly into a custom kitchen, and a dramatic theatre lounge with a celestial ceiling. The bedrooms showcase tailored wall paneling, luxurious textiles, and calming palettes, while the covered outdoor living area—complete with a sculptural fireplace—extends the home's elegance into the garden. The result is a beautifully balanced residence that feels both elevated and welcoming.",
  },
  {
    id: "gilston-road-1112",
    name: "Gilston Residence",
    slug: "gilston-road-1112",
    address: "1112 Gilston Road",
    location: "West Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("gilston_rd_1112", "gilston-rd-1112-west-vancouver", 7),
    thumbnail: "/projects/gilston_rd_1112/gilston-rd-1112-west-vancouver-1.avif",
    hasImages: true,
    description: "A stately French-inspired estate defined by its grand symmetry, arched windows, and sculpted columns that create an unmistakable sense of elegance. Inside, Gilston transitions into modern luxury—marble floors, custom wood millwork, refined ceiling details, and curated furnishings form a sophisticated yet inviting atmosphere. This project beautifully merges European classical architecture with contemporary interior design, delivering a timeless and elevated living experience.",
  },
  {
    id: "robson-st-1408-2901",
    name: "Ikebuchi-designed Residence by Landmark on Robson",
    slug: "robson-st-1408-2901",
    address: "1408 Robson Street, Unit 2901",
    location: "Vancouver",
    projectType: "Condos & Apartments",
    images: generateImagePaths("robson_st_1408", "robson-st-1408-2901-vancouver", 11),
    thumbnail: "/projects/robson_st_1408/robson-st-1408-2901-vancouver-1.avif",
    hasImages: true,
    description: "This Ikebuchi Residence showcases the harmony between striking contemporary architecture and refined interior design. Set within twin glass towers defined by clean vertical lines, signature horizontal fins, and expansive floor-to-ceiling windows, the home is surrounded by panoramic views of English Bay, the North Shore mountains, and the vibrant downtown skyline. Inside, a soft, modern palette of light oak floors, sculptural furniture, and tailored neutral upholstery creates a serene contrast to the bold architectural frame. Subtle ceiling details and recessed lighting guide the open flow from living to dining, while curated artwork and textures elevate the minimalist aesthetic. The primary bedroom continues the calm sophistication with a full fluted headboard wall, plush textiles, and mirrored accents that reflect the city lights. This project embodies elevated West Coast living—where architectural precision and luxurious interior styling come together seamlessly.",
  },
  {
    id: "sandhurst-place-1416",
    name: "Sandhurst Mansion",
    slug: "sandhurst-place-1416",
    address: "1416 Sandhurst Place",
    location: "West Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("sandhurst_pl_1416", "sandhurst-pl-1416-west-vancouver", 10),
    thumbnail: "/projects/sandhurst_pl_1416/sandhurst-pl-1416-west-vancouver-1.avif",
    hasImages: true,
    description: "Sandhurst is a modern architectural masterpiece defined by its striking flat-roof silhouette, expansive stone façade, and bold overhangs that create a dramatic sense of scale and symmetry. Floor-to-ceiling glazing brings the outdoors in, opening the home to sweeping views and natural light throughout. Inside, the design is refined and contemporary, featuring polished marble floors, sculptural lighting, and an open-concept layout that flows seamlessly from the grand living area to the elegant kitchen and dining spaces. Soft neutral tones, layered textures, and curated furnishings elevate each room, while the serene primary suite—with its minimalist palette and resort-style ambiance—captures the essence of modern coastal luxury.",
  },
  {
    id: "west-28th-ave-1528",
    name: "Shaughnessy Haven",
    slug: "west-28th-ave-1528",
    address: "1528 West 28th Avenue",
    location: "Vancouver",
    projectType: "Townhouses & Duplexes",
    images: generateImagePaths("w_28th_ave_1528", "w-28th-ave-1528-vancouver", 8),
    thumbnail: "/projects/w_28th_ave_1528/w-28th-ave-1528-vancouver-1.avif",
    hasImages: true,
    description: "Shaughnessy Haven is a refined blend of classic Westside architecture and warm, contemporary living. The exterior features timeless stonework, arched entryways, deep-set windows, and a landscaped private courtyard that enhances the home's elegant, heritage-inspired façade. Inside, the design embraces soft natural tones, fluted wood paneling, and curated artwork to create a serene and inviting atmosphere. Custom furniture, sculptural coffee tables, and layered textures elevate the living spaces, while the kitchen showcases shaker cabinetry, stone countertops, and matte black accents for a fresh modern contrast. The outdoor terrace is transformed into a cozy, boho-inspired retreat with woven lighting, macramé textures, and lush greenery—an intimate sanctuary in the heart of Shaughnessy.",
  },
  {
    id: "balfour-ave-1263",
    name: "Balfour Home",
    slug: "balfour-ave-1263",
    address: "1263 Balfour Avenue",
    location: "Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("balfour_ave_1263", "balfour-ave-1263-vancouver", 8),
    thumbnail: "/projects/balfour_ave_1263/balfour-ave-1263-vancouver-1.avif",
    hasImages: true,
    description: "This beautifully restored heritage estate blends classic architectural character with contemporary luxury through thoughtful design and staging. Soaring ceilings, expansive windows, and detailed millwork set an elegant foundation, while a curated palette of soft neutrals, warm woods, and custom furnishings brings a modern sense of comfort and refinement. Each space is intentionally layered to enhance natural light and highlight the craftsmanship of the home—from the grand formal living room with its statement chandelier, to the open-concept dining and family areas anchored by bespoke cabinetry and marble-inspired finishes. The kitchen's gold accents, the office's rich paneling, and the serene upper-level suites were all styled to create a cohesive flow that feels both elevated and inviting. The result is a timeless transformation that honors the home's architectural heritage while elevates it for today's luxury living.",
  },
  {
    id: "bramwell-road-1430",
    name: "Skyline Crest",
    slug: "bramwell-road-1430",
    address: "1430 Bramwell Road",
    location: "West Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("bramwell_rd_1430", "bramwell-rd-1430-west-vancouver", 6),
    thumbnail: "/projects/bramwell_rd_1430/bramwell-rd-1430-west-vancouver-1.avif",
    hasImages: true,
    description: "Skyline Crest is a modern West Coast home designed around breathtaking panoramic views of Vancouver and the ocean. Clean architectural lines, floating glass staircases, and expansive floor-to-ceiling windows define its contemporary silhouette. Inside, the airy open layout features marble flooring, custom millwork, soft coastal palettes, and curated modern furnishings. Each space flows seamlessly to the outdoors, creating a serene, sophisticated retreat that blends luxury living with the beauty of its natural surroundings.",
  },
  {
    id: "crestline-rd-1095",
    name: "Crestline Residence",
    slug: "crestline-1095",
    address: "1095 Crestline Road",
    location: "West Vancouver",
    projectType: "Luxury Estates",
    images: generateImagePaths("crestline_rd_1095", "crestline-rd-1095-west-vancouver", 5),
    thumbnail: "/projects/crestline_rd_1095/crestline-rd-1095-west-vancouver-1.avif",
    hasImages: true,
    description: "The Crestline Residence showcases timeless European-inspired architecture with a grand stucco façade, wrought-iron details, and beautifully tiered landscaping. Inside, the home blends classic luxury with modern comfort—featuring marble fireplaces, custom millwork, spacious view windows, and elegant, soft-toned furnishings. A refined theatre room and thoughtfully styled living spaces complete this sophisticated, elevated West Coast estate.",
  },
  {
    id: "west-georgia-st-1128-4903",
    name: "The Jewel Box at Hyatt Residence",
    slug: "west-georgia-st-1128-4903",
    address: "1128 West Georgia Street",
    location: "Vancouver",
    projectType: "Penthouses",
    images: generateImagePaths("w_georgia_st_1128", "w-georgia-st-1128-4903-vancouver", 10),
    thumbnail: "/projects/w_georgia_st_1128/w-georgia-st-1128-4903-vancouver-1.avif",
    hasImages: true,
    description: "This iconic downtown residence known as The Jewel Box rises above the city with dramatic floor-to-ceiling glass walls that wrap the entire residence, showcasing panoramic views of the ocean, mountains, and skyline. The architecture emphasizes openness and light, with soaring double-height ceilings, sleek structural columns, and floating glass-railed staircases that enhance the airy vertical space. Inside, the interior design embraces a refined modern aesthetic with soft neutral tones, luxurious textures, and sculptural furnishings that complement the expansive scale of the home. Natural wood floors add warmth beneath the abundant natural light, while curated décor, layered textiles, and statement art pieces create a serene yet sophisticated atmosphere. Every corner of the residence is designed to highlight its breathtaking vistas, blending contemporary elegance with the unmatched drama of high-rise living.",
  },
];

// Placeholder projects (no images yet)
const placeholderProjects: Project[] = [
  {
    id: "gibbons-residence-richmond",
    name: "Gibbons Residence",
    slug: "gibbons-residence-richmond",
    address: "6780 Gibbons Dr",
    location: "Richmond",
    projectType: "Single-Family Homes",
    images: generateImagePaths("gibbons_dr_6780", "gibbons-dr-6780-richmond", 7),
    thumbnail: "/projects/gibbons_dr_6780/gibbons-dr-6780-richmond-1.avif",
    hasImages: true,
    description: "This custom luxury residence showcases a refined neo-classical architectural language, defined by a symmetrical façade, articulated pilasters, and a grand gated entry that establishes a formal yet timeless presence. Inside, the home unfolds through a double-height foyer anchored by a sweeping dual curved staircase, crystal chandeliers, and finely detailed wall paneling and crown mouldings, creating a sense of ceremony and scale. The interiors are unified by a soft, luminous palette of ivory and warm neutrals, enhanced by polished stone floors, bespoke millwork, and layered architectural ceilings with recessed cove lighting. Formal living and dining spaces are elegantly composed with classically inspired furniture silhouettes, custom rugs, and curated accessories that balance opulence with restraint. The primary suite offers a serene retreat, combining plush textiles, tailored furnishings, and architectural ceiling details to evoke understated luxury. Throughout the home, the staging emphasizes proportion, symmetry, and flow, presenting a sophisticated, gallery-like environment ideal for high-end living and resale presentation.",
  },
  {
    id: "armstrong-residence-richmond",
    name: "Armstrong Residence",
    slug: "armstrong-residence-richmond",
    address: "7577 Armstrong Street",
    location: "Richmond",
    projectType: "Single-Family Homes",
    images: generateImagePaths("armstrong_st_7577", "armstrong-st-7577-richmond", 7),
    thumbnail: "/projects/armstrong_st_7577/armstrong-st-7577-richmond-1.avif",
    hasImages: true,
    description: "This contemporary luxury residence presents a refined transitional architectural expression, blending clean modern lines with subtle classical detailing. The exterior is composed with sculptural rooflines, arched window forms, and a restrained monochromatic palette that establishes a strong yet elegant street presence. Inside, the home is defined by double-height volumes, expansive glazing, and an open-concept layout that prioritizes light, scale, and visual continuity. Architectural wall paneling, coffered and tray ceilings, and integrated recessed lighting add depth and rhythm throughout the interiors. The main living spaces are grounded by bespoke millwork, statement fireplaces in polished stone, and a soft layering of neutral furnishings that enhance proportion without overpowering the architecture. The kitchen anchors the home with a sleek, modern composition—flat-panel cabinetry, contrasting materials, and a generous island designed for both function and social flow. Private spaces, including bedrooms and upper-level lounges, are thoughtfully staged with tailored silhouettes, warm wood flooring, and textural textiles, creating a calm and elevated atmosphere. Overall, the staging emphasizes clarity, balance, and architectural integrity, presenting the home as a sophisticated, light-filled residence designed for modern family living and premium market appeal.",
  },
  {
    id: "w26-residence-vancouver",
    name: "W26 Residence",
    slug: "w26-residence-vancouver",
    address: null,
    location: "Vancouver",
    projectType: "Single-Family Homes",
    images: generateImagePaths("w26_residence", "w26-residence", 8),
    thumbnail: "/projects/w26_residence/w26-residence-1.avif",
    hasImages: true,
    description: "This refined residence showcases a transitional architectural design that balances classic structure with modern detailing. The exterior features textured stucco, stone accents, and symmetrical massing, complemented by warm architectural lighting. Inside, the home offers an open-concept layout with tray and coffered ceilings, integrated cove lighting, and custom millwork throughout. The kitchen and living areas are unified by clean-lined cabinetry, stone surfaces, and sculptural lighting, while expansive glazing enhances natural light and indoor–outdoor flow. Thoughtfully staged entertainment and lounge spaces highlight the home's functionality, proportion, and contemporary elegance—creating a polished, market-ready presentation for luxury living.",
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
export const projectTypes: ProjectType[] = ["Luxury Estates", "Single-Family Homes", "Townhouses & Duplexes", "Penthouses", "Condos & Apartments"];

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
