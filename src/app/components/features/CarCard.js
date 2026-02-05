"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Users, Zap } from "lucide-react";

export default function CarCard({ car }) {
    return (
        <motion.div
            className="group relative bg-[var(--bg-secondary)] overflow-hidden rounded-md border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 text-sm border border-[var(--border-subtle)] rounded-sm">
                    <span className="text-[var(--accent-gold)] font-bold">${car.price}</span>
                    <span className="text-white/70"> / day</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-[var(--accent-gold)] text-xs uppercase tracking-widest mb-1">{car.brand}</p>
                        <h3 className="text-xl font-serif text-white">{car.model}</h3>
                    </div>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 py-4 border-t border-[var(--border-subtle)] mb-4">
                    <div className="flex items-center gap-2 text-[var(--text-secondary)] text-xs">
                        <Gauge size={14} className="text-[var(--accent-silver)]" />
                        <span>{car.acceleration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)] text-xs">
                        <Zap size={14} className="text-[var(--accent-silver)]" />
                        <span>{car.power}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)] text-xs">
                        <Users size={14} className="text-[var(--accent-silver)]" />
                        <span>{car.passengers}</span>
                    </div>
                </div>

                {/* Action */}
                <Link
                    href={`/vehicle/${car.id}`}
                    className="flex items-center justify-between w-full text-sm text-white group-hover:text-[var(--accent-gold)] transition-colors"
                >
                    <span className="uppercase tracking-wide font-medium">View Details</span>
                    <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}
