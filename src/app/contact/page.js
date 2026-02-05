"use client";

import Button from "../components/ui/Button";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
            <div className="container">
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-16 text-center">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Info Side */}
                    <div>
                        <div className="mb-12">
                            <span className="text-[var(--accent-gold)] text-sm uppercase tracking-widest block mb-2">Visit Us</span>
                            <p className="text-2xl text-white font-serif mb-4">The Showroom</p>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                1236 Channel Side Drive<br />
                                Tampa, Florida 33602<br />
                                <span className="text-sm opacity-60 mt-2 block">Viewing by appointment only</span>
                            </p>
                        </div>

                        <div className="mb-12">
                            <span className="text-[var(--accent-gold)] text-sm uppercase tracking-widest block mb-2">Reach Out</span>
                            <p className="text-2xl text-white font-serif mb-4">Concierge Desk</p>
                            <p className="text-[var(--text-secondary)] mb-2">
                                <a href="tel:8135550123" className="hover:text-white transition-colors">(813) 555-0123</a>
                            </p>
                            <p className="text-[var(--text-secondary)]">
                                <a href="mailto:concierge@enterprisedynamic.com" className="hover:text-white transition-colors">concierge@enterprisedynamic.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-[var(--bg-secondary)] p-8 rounded-md border border-[var(--border-subtle)]">
                        <h3 className="text-2xl font-serif text-white mb-6">Send an Inquiry</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-[var(--accent-gold)] uppercase tracking-wider">Name</label>
                                    <input type="text" className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] p-3 text-white focus:border-[var(--accent-gold)] outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-[var(--accent-gold)] uppercase tracking-wider">Phone</label>
                                    <input type="tel" className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] p-3 text-white focus:border-[var(--accent-gold)] outline-none transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-[var(--accent-gold)] uppercase tracking-wider">Email</label>
                                <input type="email" className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] p-3 text-white focus:border-[var(--accent-gold)] outline-none transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-[var(--accent-gold)] uppercase tracking-wider">Message</label>
                                <textarea rows={4} className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] p-3 text-white focus:border-[var(--accent-gold)] outline-none transition-colors" />
                            </div>

                            <Button variant="primary" className="w-full justify-center">Send Message</Button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
