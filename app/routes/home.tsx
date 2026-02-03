import Hero from "../components/home/hero";
import Intro from "../components/home/intro";
import Stats from "../components/home/stats";
import Categories from "../components/home/categories";
import CTA from "../components/home/cta";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "THU Design Projects | Redefining West Coast Living" },
    { name: "description", content: "Redefining West Coast Living. Creating residential sanctuaries that balance architectural precision with the raw beauty of nature." },
    // Open Graph tags
    { property: "og:title", content: "THU Design Projects | Redefining West Coast Living" },
    { property: "og:description", content: "Redefining West Coast Living. Creating residential sanctuaries that balance architectural precision with the raw beauty of nature." },
    { property: "og:image", content: "/projects/king_georges_way_830/king-georges-way-830-west-vancouver-1.avif" },
    // Twitter Card tags
    { name: "twitter:title", content: "THU Design Projects | Redefining West Coast Living" },
    { name: "twitter:description", content: "Redefining West Coast Living. Creating residential sanctuaries that balance architectural precision with the raw beauty of nature." },
    { name: "twitter:image", content: "/projects/king_georges_way_830/king-georges-way-830-west-vancouver-1.avif" },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Stats />
      <Categories />
      <CTA />
    </main>
  );
}
