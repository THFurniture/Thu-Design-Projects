import AboutHero from "../components/about/about-hero";
import Narrative from "../components/about/narrative";
import Pillars from "../components/about/pillars";
import Craftsmanship from "../components/about/craftsmanship";
import CTA from "../components/about/cta";
import type { Route } from "./+types/about";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "West Coast Living | About Us" },
        { name: "description", content: "Designing with Intention. A luxury residential design studio focused on the intersection of architectural philosophy and tactile craftsmanship." },
    ];
}

export default function About() {
    return (
        <main>
            <AboutHero />
            <Narrative />
            <Pillars />
            <Craftsmanship />
            <CTA />
        </main>
    );
}
