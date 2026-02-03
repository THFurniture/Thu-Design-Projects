import ContactForm from "../components/contact/contact-form";
import type { Route } from "./+types/contact";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "THU Design Projects | Contact" },
        { name: "description", content: "Get in touch with THU Design Projects. We are currently evaluating new residential and commercial commissions for late 2026." },
        // Open Graph tags
        { property: "og:title", content: "THU Design Projects | Contact" },
        { property: "og:description", content: "Get in touch with THU Design Projects. We are currently evaluating new residential and commercial commissions for late 2026." },
        { property: "og:image", content: "/projects/quayside_dr_680/quayside-dr-680-4405-new-westminster-1.avif" },
        // Twitter Card tags
        { name: "twitter:title", content: "THU Design Projects | Contact" },
        { name: "twitter:description", content: "Get in touch with THU Design Projects. We are currently evaluating new residential and commercial commissions for late 2026." },
        { name: "twitter:image", content: "/projects/quayside_dr_680/quayside-dr-680-4405-new-westminster-1.avif" },
    ];
}

export default function Contact() {
    return (
        <main>
            <ContactForm />
        </main>
    );
}
