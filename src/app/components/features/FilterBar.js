"use client";

import { motion } from "framer-motion";

export default function FilterBar({ filters, activeFilter, onFilterChange }) {
    return (
        <div className="w-full border-b border-[var(--border-subtle)] mb-12 overflow-x-auto">
            <div className="flex gap-8 pb-4 min-w-max">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => onFilterChange(filter)}
                        className={`relative text-sm uppercase tracking-widest pb-2 transition-colors duration-300 ${activeFilter === filter
                                ? "text-[var(--accent-gold)]"
                                : "text-[var(--text-secondary)] hover:text-white"
                            }`}
                    >
                        {filter}
                        {activeFilter === filter && (
                            <motion.div
                                layoutId="activeFilter"
                                className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[var(--accent-gold)]"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
