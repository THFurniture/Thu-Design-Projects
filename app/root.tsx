import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { useEffect } from "react";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import useSmoothScroll, { getLenisInstance } from "./hooks/useSmoothScroll";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  }
];

export const meta: Route.MetaFunction = () => {
  return [
    // Default Open Graph tags
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "THU Design Projects" },
    { property: "og:image", content: "/projects/sandhurst_pl_1416/sandhurst-pl-1416-west-vancouver-1.avif" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "THU Design Projects - Luxury Residential Design Studio" },
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "/projects/sandhurst_pl_1416/sandhurst-pl-1416-west-vancouver-1.avif" },
    { name: "twitter:image:alt", content: "THU Design Projects - Luxury Residential Design Studio" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration
          getKey={(location) => {
            // Preserve scroll only for the projects list ↔ project detail flow
            if (location.pathname === "/projects") {
              return location.pathname;
            }
            // All other navigations scroll to top
            return location.key;
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  // Initialize Lenis smooth scroll globally
  useSmoothScroll(true);

  const location = useLocation();

  // Handle scroll behavior with Lenis
  useEffect(() => {
    const lenis = getLenisInstance();
    if (!lenis) return;

    if (location.pathname === "/projects") {
      // For projects list, sync Lenis with any restored scroll position
      // ScrollRestoration will restore the position, then we sync Lenis
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 0) {
          // Sync Lenis to the restored position smoothly
          lenis.scrollTo(scrollY, { immediate: false });
        }
      });
    } else {
      // For all other routes (including project detail pages), scroll to top
      requestAnimationFrame(() => {
        lenis.scrollTo(0, { immediate: false });
      });
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
