import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router";

const navLinkBase =
    "relative text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-300";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    const shellClass = useMemo(() => {
        return [
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            scrolled
                ? "bg-[#EFEDE8]/75 backdrop-blur-xl border-b border-[#D8D3C7]/60 shadow-[0_10px_30px_-20px_rgba(18,18,18,0.35)]"
                : "bg-transparent border-b border-transparent",
        ].join(" ");
    }, [scrolled]);

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        [
            navLinkBase,
            scrolled ? "text-[#121212]/75 hover:text-[#121212]" : "text-white/80 hover:text-white",
            isActive ? (scrolled ? "text-[#121212]" : "text-white") : "",
            "after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
            scrolled ? "after:bg-[#8B877D]/70" : "after:bg-white/70",
            isActive ? "after:scale-x-100" : "hover:after:scale-x-100",
        ].join(" ");

    const ctaClass = useMemo(() => {
        return [
            "group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md px-7",
            "text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300",
            scrolled
                ? "text-[#EFEDE8] bg-[#121212] hover:bg-[#8B877D] shadow-[0_10px_25px_-18px_rgba(18,18,18,0.6)]"
                : "text-[#121212] bg-white/90 hover:bg-white shadow-[0_10px_25px_-18px_rgba(0,0,0,0.55)]",
            "backdrop-blur-md",
        ].join(" ");
    }, [scrolled]);

    return (
        <>
            <nav className={shellClass}>
                <div
                    className={[
                        "pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-500",
                        scrolled ? "opacity-100" : "opacity-60",
                    ].join(" ")}
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(139,135,125,0) 0%, rgba(139,135,125,0.55) 30%, rgba(139,135,125,0.55) 70%, rgba(139,135,125,0) 100%)",
                    }}
                />

                <div className="max-w-[1440px] mx-auto px-6 md:px-10">
                    <div className="h-20 md:h-24 flex items-center justify-between">
                        <Link
                            to="/"
                            className="flex items-center gap-3 group"
                            onClick={() => setMenuOpen(false)}
                        >
                            <img
                                src="/logos/THU_Design_Projects_nobg_black.png"
                                alt="Thu Design Projects Logo"
                                className={[
                                    "w-auto object-contain select-none transition-all duration-500",
                                    scrolled ? "h-28 md:h-32 opacity-95" : "h-28 md:h-28 opacity-100",
                                    scrolled ? "" : "brightness-0 invert",
                                    "group-hover:opacity-85",
                                ].join(" ")}
                            />
                        </Link>

                        {/* Desktop */}
                        <div className="hidden md:flex flex-1 justify-end items-center gap-12">
                            <div className="flex items-center gap-10">
                                <NavLink to="/" className={linkClass} end>Home</NavLink>
                                <NavLink to="/about" className={linkClass}>About</NavLink>
                                <NavLink to="/projects" className={linkClass}>Projects</NavLink>
                                <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                            </div>
                            <Link to="/contact" className={ctaClass}>Get in Touch</Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            type="button"
                            className={[
                                "md:hidden relative z-[60] inline-flex items-center justify-center h-11 w-11 transition-colors duration-300",
                                scrolled || menuOpen ? "text-[#121212]" : "text-white",
                            ].join(" ")}
                            onClick={() => setMenuOpen((v) => !v)}
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {menuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Side Drawer Overlay */}
            <div
                className={[
                    "fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm transition-opacity duration-500 md:hidden",
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                ].join(" ")}
                onClick={() => setMenuOpen(false)}
            />

            {/* Side Drawer Panel */}
            <aside
                className={[
                    "fixed top-0 right-0 z-[56] h-full w-[80%] max-w-[400px] bg-[#EFEDE8] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-[0.16,1,0.3,1] md:hidden",
                    menuOpen ? "translate-x-0" : "translate-x-full"
                ].join(" ")}
            >
                <div className="flex flex-col h-full pt-32 pb-12 px-8">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#8B877D] font-bold mb-12">
                        Navigation
                    </span>

                    <div className="flex flex-col gap-6">
                        {[
                            { to: "/", label: "Home", end: true },
                            { to: "/about", label: "About" },
                            { to: "/projects", label: "Projects" },
                            { to: "/contact", label: "Contact" },
                        ].map((item, idx) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                onClick={() => setMenuOpen(false)}
                                style={{ transitionDelay: `${idx * 50}ms` }}
                                className={({ isActive }) =>
                                    [
                                        "text-3xl font-serif tracking-tight transition-all duration-500",
                                        isActive ? "text-[#121212] italic pl-4" : "text-[#121212]/40 hover:text-[#121212]",
                                        menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                    ].join(" ")
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="mt-auto space-y-8">
                        <div className="h-px w-full bg-[#D8D3C7]" />
                        <Link
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="flex w-full items-center justify-center h-14 bg-[#121212] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#8B877D] transition-colors"
                        >
                            Get in Touch
                        </Link>

                        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-[#8B877D] font-bold">
                            <span>Vancouver</span>
                            <span>Est. 2024</span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}