import Hero from "../components/home/hero";
import Intro from "../components/home/intro";
import Stats from "../components/home/stats";
import Categories from "../components/home/categories";
import CTA from "../components/home/cta";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "West Coast Living | Home" },
    { name: "description", content: "Redefining West Coast Living" },
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
