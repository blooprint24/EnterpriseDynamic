"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fleetData from "../data/fleet.json";
import CarCard from "../components/features/CarCard";
import FilterBar from "../components/features/FilterBar";

const FILTER_ALL = "All";

export default function FleetPage() {
    const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

    // Extract unique types for the filter options
    const types = [FILTER_ALL, ...new Set(fleetData.map((car) => car.type))];

    const filteredFleet = activeFilter === FILTER_ALL
        ? fleetData
        : fleetData.filter((car) => car.type === activeFilter);

    return (
        <main className="pt-32 pb-24 min-h-screen bg-[var(--bg-primary)]">
            <div className="container">

                {/* Page Header */}
                <div className="mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[var(--accent-gold)] text-sm uppercase tracking-widest block mb-2"
                    >
                        The Collection
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-serif text-white mb-6"
                    >
                        Our Fleet
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[var(--text-secondary)] max-w-xl mx-auto"
                    >
                        Choose from the world's most exclusive vehicles. Meticulously maintained and ready for your arrival.
                    </motion.p>
                </div>

                {/* Filters */}
                <FilterBar
                    filters={types}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredFleet.map((car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredFleet.length === 0 && (
                    <div className="text-center py-20 text-[var(--text-secondary)]">
                        <p>No vehicles found in this category.</p>
                    </div>
                )}

            </div>
        </main>
    );
}
