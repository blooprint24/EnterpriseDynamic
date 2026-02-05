import fleetData from "../../data/fleet.json";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Calendar, Info } from "lucide-react";
import Button from "../../components/ui/Button";

// Return list of params to populate [id] segments dynamically
export async function generateStaticParams() {
    return fleetData.map((car) => ({
        id: car.id,
    }));
}

export default function VehicleDetail({ params }) {
    const { id } = params;
    const car = fleetData.find((c) => c.id === id);

    if (!car) {
        return <div className="pt-32 text-center text-white">Vehicle not found</div>;
    }

    return (
        <main className="min-h-screen bg-[var(--bg-primary)]">
            {/* Full Hero Image */}
            <div className="relative h-[60vh] md:h-[80vh] w-full">
                <Image
                    src={car.image}
                    alt={car.model}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/30" />

                {/* Back Button */}
                <Link href="/fleet" className="absolute top-28 left-4 md:left-12 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <ArrowLeft size={18} />
                    <span className="text-sm uppercase tracking-wide">Back to Fleet</span>
                </Link>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20 container">
                    <span className="text-[var(--accent-gold)] text-sm uppercase tracking-widest block mb-2">{car.brand}</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">{car.model}</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed">{car.description}</p>
                </div>
            </div>

            <div className="container py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">

                {/* Left Column: Specs */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-serif text-white mb-8 border-b border-[var(--border-subtle)] pb-4">Specifications</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-16">
                        <SpecItem label="Acceleration" value={car.acceleration} />
                        <SpecItem label="Horsepower" value={car.power} />
                        <SpecItem label="Transmission" value={car.transmission} />
                        <SpecItem label="Passengers" value={car.passengers} />
                        <SpecItem label="Engine Type" value="V8 Twin Turbo" /> {/* Mock value if missing */}
                        <SpecItem label="Drivetrain" value="AWD" /> {/* Mock value */}
                    </div>

                    <h2 className="text-2xl font-serif text-white mb-8 border-b border-[var(--border-subtle)] pb-4">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {car.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-[var(--text-secondary)]">
                                <div className="w-5 h-5 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)]">
                                    <Check size={12} />
                                </div>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Booking Card */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 glass p-8 rounded-lg border border-[var(--border-subtle)]">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <p className="text-[var(--text-secondary)] text-sm uppercase tracking-wider mb-1">Daily Rate</p>
                                <p className="text-3xl text-[var(--accent-gold)] font-serif">${car.price}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-white text-sm flex items-center gap-1">
                                    {car.available ? (
                                        <><span className="w-2 h-2 bg-green-500 rounded-full inline-block" /> Available</>
                                    ) : (
                                        <><span className="w-2 h-2 bg-red-500 rounded-full inline-block" /> Reserved</>
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="p-4 bg-[var(--bg-tertiary)] rounded border border-[var(--border-subtle)] flex items-start gap-3">
                                <Info size={18} className="text-[var(--accent-gold)] shrink-0 mt-0.5" />
                                <p className="text-xs text-[var(--text-secondary)]">
                                    Security deposit of $2,000 required. Insurance verification needed before delivery.
                                </p>
                            </div>
                        </div>

                        <Button variant="primary" className="w-full justify-center" href="/contact">
                            Request Booking
                        </Button>

                        <p className="text-center text-[var(--text-tertiary)] text-xs mt-4">
                            24/7 Concierge Support included
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}

function SpecItem({ label, value }) {
    return (
        <div>
            <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-wider mb-1">{label}</p>
            <p className="text-white text-lg font-medium">{value}</p>
        </div>
    );
}
