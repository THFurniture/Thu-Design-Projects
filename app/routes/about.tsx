import AboutHero from "../components/about/about-hero";
import Narrative from "../components/about/narrative";
import Pillars from "../components/about/pillars";
import Craftsmanship from "../components/about/craftsmanship";
import CTA from "../components/about/cta";
import type { Route } from "./+types/about";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "THU Design Projects | About Us" },
        { name: "description", content: "Designing with Intention. A luxury residential design studio focused on the intersection of architectural philosophy and tactile craftsmanship." },
        // Open Graph tags
        { property: "og:title", content: "THU Design Projects | About Us" },
        { property: "og:description", content: "Designing with Intention. A luxury residential design studio focused on the intersection of architectural philosophy and tactile craftsmanship." },
        { property: "og:image", content: "/logos/THU Design Projects Logo White bg.png" },
        // Twitter Card tags
        { name: "twitter:title", content: "THU Design Projects | About Us" },
        { name: "twitter:description", content: "Designing with Intention. A luxury residential design studio focused on the intersection of architectural philosophy and tactile craftsmanship." },
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
