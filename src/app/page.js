import Hero from "./components/home/Hero";
import FeaturedFleet from "./components/home/FeaturedFleet";
import Services from "./components/home/Services";
import Location from "./components/home/Location";
import fleetData from "./data/fleet.json"; // Direct import for simplicity in Server Component

export default function Home() {
    return (
        <main>
            <Hero />
            <FeaturedFleet fleet={fleetData} />
            <Services />
            <Location />
        </main>
    );
}
