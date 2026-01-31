import React from "react";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-[#121212] py-20 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-3 group mb-8 w-fit">
                            <img
                                src="/logos/THU_Design_Projects_nobg_white.png"
                                alt="Thu Design Projects Logo"
                                className="h-20 md:h-32 w-auto object-contain select-none transition-all hover:opacity-80"
                            />
                        </Link>

                        <p className="text-[#EFEDE8]/60 max-w-sm font-light leading-relaxed text-sm">
                            Elevating residential architecture in West Vancouver and beyond.
                            We create tangible sanctuaries that stand the test of time.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[#EFEDE8] font-bold mb-8 uppercase tracking-widest text-xs">Explore</h4>
                        <ul className="flex flex-col gap-4 text-[#EFEDE8]/60 text-sm font-light">
                            <li>
                                <Link className="hover:text-white transition-colors" to="/projects">
                                    Selected Work
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition-colors" to="/about">
                                    The Studio
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition-colors" to="/news">
                                    Journal
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition-colors" to="/contact">
                                    Inquire
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#EFEDE8] font-bold mb-8 uppercase tracking-widest text-xs">Connect</h4>
                        <ul className="flex flex-col gap-4 text-[#EFEDE8]/60 text-sm font-light">
                            <li>
                                <a className="hover:text-white transition-colors" href="#" rel="noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white transition-colors" href="#" rel="noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white transition-colors" href="#" rel="noreferrer">
                                    Pinterest
                                </a>
                            </li>
                            <li className="mt-4 pt-4 border-t border-white/10">
                                <a className="text-[#EFEDE8] hover:underline" href="mailto:hello@thudesign.com">
                                    hello@thudesign.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[#EFEDE8]/30 text-[10px] uppercase tracking-wider">
                    <p>© 2024 Thu Design Projects. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link className="hover:text-[#EFEDE8]/60 transition-colors" to="/privacy">
                            Privacy Policy
                        </Link>
                        <Link className="hover:text-[#EFEDE8]/60 transition-colors" to="/terms">
                            Terms of Use
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
