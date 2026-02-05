import Link from "next/link";
import { Check } from "lucide-react";
import Button from "../components/ui/Button";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
            <div className="container">
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 text-center">Membership & Access</h1>
                <p className="text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-16">
                    While all vehicles are available for daily rental, our membership tiers offer exclusive access, waived deposits, and priority delivery.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PricingCard
                        title="Guest"
                        price="Pay per Rental"
                        features={[
                            "Access to full fleet",
                            "Standard insurance requirements",
                            "Concierge support",
                            "Delivery within Tampa"
                        ]}
                    />
                    <PricingCard
                        title="Sovereign"
                        price="$2,500 / yr"
                        featured={true}
                        features={[
                            "10% off daily rates",
                            "Waived security deposits",
                            "Priority vehicle allocation",
                            "After-hours delivery included",
                            "Access to off-menu vehicles"
                        ]}
                    />
                    <PricingCard
                        title="Dynasty"
                        price="$10,000 / yr"
                        features={[
                            "25% off daily rates",
                            "Guaranteed availability (48h notice)",
                            "Personal driver service (4 credits)",
                            "Private event invitations",
                            "Yacht charter reciprocity"
                        ]}
                    />
                </div>
            </div>
        </main>
    );
}

function PricingCard({ title, price, features, featured = false }) {
    return (
        <div className={`p-8 rounded-md border flex flex-col ${featured ? 'bg-[var(--bg-secondary)] border-[var(--accent-gold)] transform md:-translate-y-4' : 'bg-transparent border-[var(--border-subtle)]'}`}>
            <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
            <p className="text-3xl text-[var(--accent-gold)] mb-8">{price}</p>

            <div className="space-y-4 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <Check size={16} className="text-[var(--accent-gold)] shrink-0" />
                        <span className="text-[var(--text-secondary)] text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <Button variant={featured ? "primary" : "outline"} className="justify-center w-full" href="/contact">
                Inquire
            </Button>
        </div>
    );
}
