export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
            <div className="container max-w-4xl">
                <span className="text-[var(--accent-gold)] text-sm uppercase tracking-widest block mb-4">Our Story</span>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-12">Redefining the Journey.</h1>

                <div className="prose prose-invert prose-lg text-[var(--text-secondary)]">
                    <p className="text-xl text-white mb-8 leading-relaxed">
                        Enterprise Dynamic was founded on a singular belief: that the vehicle you drive is not just transportation, but an extension of your ambition.
                    </p>
                    <p className="mb-6">
                        Located in the heart of Tampa, we serve a clientele that refuses to compromise. Our fleet is curated not by availability, but by distinction. From the quiet authority of a Rolls-Royce to the adrenaline of a Lamborghini, every vehicle represents the pinnacle of automotive engineering.
                    </p>
                    <p>
                        We don't just hand over keys; we curate an experience. Our concierge team ensures that every detail—from the scent of the cabin to the precise positioning of the seat—is tailored to your preference.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-[var(--border-subtle)]">
                    <div>
                        <h3 className="text-2xl font-serif text-white mb-4">The Mission</h3>
                        <p className="text-[var(--text-secondary)]">To provide seamless access to the world's most desirable vehicles, delivering a service that is as exceptional as the cars themselves.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif text-white mb-4">The Promise</h3>
                        <p className="text-[var(--text-secondary)]">Transparency, privacy, and flawless execution. We value your time as much as you do.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
