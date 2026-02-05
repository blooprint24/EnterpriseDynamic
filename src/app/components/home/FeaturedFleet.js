"use client";

import { motion } from "framer-motion";
import CarCard from "../features/CarCard";
import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedFleet({ fleet }) {
    // Show only first 3 cars for the featured section
    const featuredCars = fleet.slice(0, 3);

    return (
        <section className="py-24 bg-[var(--bg-primary)]">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-[var(--accent-gold)] text-sm uppercase tracking-widest block mb-2">The Collection</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">Featured Vehicles</h2>
                    </div>
                    <Link href="/fleet" className="group flex items-center gap-2 text-white hover:text-[var(--accent-gold)] transition-colors mt-6 md:mt-0">
                        <span className="uppercase tracking-widest text-sm">View Full Fleet</span>
                        <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredCars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button variant="outline" href="/fleet">View All Vehicles</Button>
                </div>
            </div>
        </section>
    );
}
