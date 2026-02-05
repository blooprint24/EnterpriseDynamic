"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
    onClick,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ease-out border overflow-hidden relative group";

    const variants = {
        primary: "bg-[var(--accent-gold)] border-[var(--accent-gold)] text-black hover:bg-white hover:border-white",
        outline: "bg-transparent border-white text-white hover:bg-white hover:text-black",
        ghost: "bg-transparent border-transparent text-white hover:text-[var(--accent-gold)] p-0",
    };

    const content = (
        <span className="relative z-10 flex items-center gap-2">
            {children}
        </span>
    );

    const Component = href ? Link : motion.button;
    const linkProps = href ? { href } : {};
    const buttonProps = href ? {} : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        onClick
    };

    return (
        <Component
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...linkProps}
            {...buttonProps}
            {...props}
        >
            {content}
        </Component>
    );
}
