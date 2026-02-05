"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Location() {
    return (
        <section className="py-24 bg-[var(--bg-primary)]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Testimonials Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[var(--accent-gold)] text-sm uppercase tracking-widest block mb-2">Client Series</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-12">Experiences</h2>

                        <div className="bg-[var(--bg-secondary)] p-8 rounded-md border border-[var(--border-subtle)] relative">
                            <Quote className="absolute top-8 left-8 text-[var(--accent-gold)] opacity-20" size={64} />
                            <p className="text-lg md:text-xl italic text-white/90 leading-relaxed relative z-10 mb-6">
                                "The Rolls-Royce Ghost was immaculate. The delivery to the private terminal was seamless, and the car performed beautifully. Enterprise Dynamic is now my go-to in Tampa."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                                    {/* Placeholder avatar */}
                                    <div className="w-full h-full bg-[var(--accent-gold)]/20" />
                                </div>
                                <div>
                                    <p className="text-white font-serif">James Sterling</p>
                                    <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest">CEO, Sterling Ventures</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] w-full rounded-md overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        {/* Map Placeholder Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=1600')" }}
                        >
                            <div className="absolute inset-0 bg-black/30 md:bg-black/50 hover:bg-black/20 transition-colors duration-500" />
                        </div>

                        <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 border border-[var(--border-subtle)] max-w-xs">
                            <h3 className="text-white font-serif text-xl mb-2">Visit Our Showroom</h3>
                            <p className="text-[var(--text-secondary)] text-sm mb-4">
                                1236 Channel Side Drive<br />
                                Tampa, Florida 33602
                            </p>
                            <p className="text-[var(--accent-gold)] text-xs uppercase tracking-widest">By Appointment Only</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
