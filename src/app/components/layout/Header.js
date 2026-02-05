"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Car } from "lucide-react";
import Button from "./ui/Button";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Fleet", href: "/fleet" },
        { name: "Services", href: "/#services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass" : "py-6 bg-transparent"
                }`}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="z-50 flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-[var(--accent-gold)] rounded-sm flex items-center justify-center text-black">
                        <Car size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-xl font-serif font-bold tracking-tight text-white group-hover:text-[var(--accent-gold)] transition-colors">
                        ENTERPRISE<span className="font-light">DYNAMIC</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent-gold)] hover:after:w-full after:transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Button variant="primary" href="/fleet">Reserve Now</Button>
                    </div>
                    <button
                        className="md:hidden z-50 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl font-serif text-white hover:text-[var(--accent-gold)] transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <Button variant="primary" href="/fleet" onClick={() => setIsMobileMenuOpen(false)}>
                    Reserve Your Vehicle
                </Button>
            </div>
        </header>
    );
}
