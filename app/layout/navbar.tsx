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

    // Close mobile menu on route change-like behavior (best effort)
    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    const shellClass = useMemo(() => {
        // Transparent at the top, elegant glass when scrolled
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
            // underline + active dot
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
        <nav className={shellClass}>
            {/* subtle top highlight line */}
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
                        aria-label="Go to home"
                        onClick={() => setMenuOpen(false)}
                    >
                        <img
                            src="/logos/THU_Design_Projects_nobg_black.png"
                            alt="Thu Design Projects Logo"
                            className={[
                                "w-auto object-contain select-none transition-all duration-500",
                                scrolled ? "h-28 md:h-32 opacity-95" : "h-28 md:h-28 opacity-100",
                                // in case hero is dark, make it readable on transparent top (optional)
                                scrolled ? "" : "brightness-0 invert",
                                "group-hover:opacity-85",
                            ].join(" ")}
                        />
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex flex-1 justify-end items-center gap-12">
                        <div className="flex items-center gap-10">
                            <NavLink to="/" className={linkClass} end>
                                Home
                            </NavLink>
                            <NavLink to="/about" className={linkClass}>
                                About
                            </NavLink>
                            <NavLink to="/portfolio" className={linkClass}>
                                Portfolio
                            </NavLink>
                            <NavLink to="/contact" className={linkClass}>
                                Contact
                            </NavLink>
                        </div>

                        <Link to="/contact" className={ctaClass}>
                            Get in Touch
                            <span
                                className={[
                                    "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
                                    "group-hover:opacity-100",
                                ].join(" ")}
                                style={{
                                    background:
                                        "radial-gradient(120px 60px at 70% 50%, rgba(239,237,232,0.22), rgba(0,0,0,0))",
                                }}
                            />
                        </Link>
                    </div>

                    {/* Mobile button */}
                    <button
                        type="button"
                        className={[
                            "md:hidden inline-flex items-center justify-center h-11 w-11 rounded-md transition-colors duration-300",
                            scrolled ? "text-[#121212] hover:bg-[#121212]/5" : "text-white hover:bg-white/10",
                        ].join(" ")}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
                    </button>
                </div>

                {/* Mobile dropdown */}
                <div
                    className={[
                        "md:hidden overflow-hidden transition-[max-height,opacity] duration-500",
                        menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    ].join(" ")}
                >
                    <div
                        className={[
                            "pb-6",
                            scrolled
                                ? ""
                                : "bg-black/35 backdrop-blur-xl rounded-xl mb-4 border border-white/10",
                        ].join(" ")}
                    >
                        <div className="px-1 pt-2">
                            <div className="flex flex-col gap-1">
                                {[
                                    { to: "/", label: "Home", end: true },
                                    { to: "/about", label: "About" },
                                    { to: "/portfolio", label: "Portfolio" },
                                    { to: "/contact", label: "Contact" },
                                ].map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        end={item.end}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            [
                                                "rounded-lg px-4 py-3 transition-colors duration-300",
                                                scrolled
                                                    ? "text-[#121212]/80 hover:bg-[#121212]/5"
                                                    : "text-white/85 hover:bg-white/10",
                                                isActive
                                                    ? scrolled
                                                        ? "text-[#121212] bg-[#121212]/5"
                                                        : "text-white bg-white/10"
                                                    : "",
                                                "tracking-[0.14em] uppercase text-xs font-semibold",
                                            ].join(" ")
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>

                            <div className="mt-4 px-2">
                                <Link
                                    to="/contact"
                                    onClick={() => setMenuOpen(false)}
                                    className={[
                                        "inline-flex w-full items-center justify-center h-11 rounded-md",
                                        "text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300",
                                        scrolled
                                            ? "bg-[#121212] text-[#EFEDE8] hover:bg-[#8B877D]"
                                            : "bg-white/90 text-[#121212] hover:bg-white",
                                    ].join(" ")}
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
