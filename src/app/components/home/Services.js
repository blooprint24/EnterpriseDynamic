"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Star } from "lucide-react";

const services = [
    {
        icon: <Clock size={32} />,
        title: "White-Glove Delivery",
        description: "We bring the vehicle to your doorstep—airport, hotel, or residence—at the time you choose."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Concierge Service",
        description: "24/7 support for your entire rental period. From restaurant reservations to route planning."
    },
    {
        icon: <Star size={32} />,
        title: "Pristine Condition",
        description: "Every vehicle is meticulously detailed and inspected before delivery to ensure perfection."
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--accent-gold)] opacity-[0.03] skew-x-12 transform translate-x-20" />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[var(--accent-gold)] text-sm uppercase tracking-widest block mb-2">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">The Enterprise Standard</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="p-8 border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] transition-colors duration-500 rounded-md bg-[var(--bg-primary)]/50 group"
                        >
                            <div className="inline-block p-4 mb-6 bg-[var(--bg-secondary)] rounded-full text-[var(--accent-gold)] group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
