export default function PoliciesPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
            <div className="container max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-12">Rental Policies</h1>

                <div className="space-y-12">
                    <PolicySection title="Driver Requirements">
                        <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                            <li>Must be at least 25 years of age.</li>
                            <li>Valid driver's license held for at least 2 years.</li>
                            <li>Clean driving record (verification required).</li>
                            <li>Proof of full coverage insurance that transfers to rental vehicles.</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="Security Deposits">
                        <p className="text-[var(--text-secondary)] mb-4">
                            A security deposit is required for all non-member rentals. The amount varies by vehicle tier:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
                            <li>SUVs & Sedans: $1,000 - $2,000</li>
                            <li>Sports & Performance: $2,500 - $5,000</li>
                            <li>Exotics: $5,000+</li>
                        </ul>
                        <p className="text-[var(--text-secondary)] mt-4">
                            Deposits are fully refundable upon safe return of the vehicle.
                        </p>
                    </PolicySection>

                    <PolicySection title="Cancellations">
                        <p className="text-[var(--text-secondary)]">
                            Cancellations made 72 hours prior to the reservation start time will receive a full refund.
                            Cancellations within 72 hours are subject to a fee equal to one day's rental.
                        </p>
                    </PolicySection>

                    <PolicySection title="Mileage">
                        <p className="text-[var(--text-secondary)]">
                            Daily rentals include 100 miles per day. Additional miles are billed at rates varying from $2.00 to $5.00 per mile depending on the vehicle.
                        </p>
                    </PolicySection>
                </div>
            </div>
        </main>
    );
}

function PolicySection({ title, children }) {
    return (
        <section>
            <h2 className="text-2xl font-serif text-white mb-4">{title}</h2>
            {children}
        </section>
    );
}
