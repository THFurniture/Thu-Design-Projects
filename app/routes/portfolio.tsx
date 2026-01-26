import type { Route } from "./+types/portfolio";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "THU Design Projects | Portfolio" },
        { name: "description", content: "Explore our portfolio of luxury residential design projects." },
        // Open Graph tags
        { property: "og:title", content: "THU Design Projects | Portfolio" },
        { property: "og:description", content: "Explore our portfolio of luxury residential design projects." },
        { property: "og:image", content: "/logos/THU Design Projects Logo White bg.png" },
        // Twitter Card tags
        { name: "twitter:title", content: "THU Design Projects | Portfolio" },
        { name: "twitter:description", content: "Explore our portfolio of luxury residential design projects." },
    ];
}

export default function Portfolio() {
    return (
        <main>
            {/* Add your portfolio components here */}
        </main>
    );
}
