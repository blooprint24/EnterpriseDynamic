import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
    title: "Enterprise Dynamic | Luxury Fleet Rentals",
    description: "Experience the pinnacle of automotive excellence with Enterprise Dynamic. Premium luxury car rentals in Tampa, FL.",
    openGraph: {
        title: "Enterprise Dynamic | Luxury Fleet Rentals",
        description: "Premium luxury car rentals in Tampa, FL.",
        url: "https://enterprisedynamic.com",
        siteName: "Enterprise Dynamic",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} bg-[var(--bg-primary)] text-white`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
