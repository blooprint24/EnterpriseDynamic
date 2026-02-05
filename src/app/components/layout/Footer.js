import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">
                            ENTERPRISE<span className="font-light text-[var(--accent-gold)]">DYNAMIC</span>
                        </h3>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                            Elevating the journey. We provide an exclusive fleet of luxury and exotic vehicles for those who demand excellence in every mile.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram size={18} />} />
                            <SocialIcon icon={<Twitter size={18} />} />
                            <SocialIcon icon={<Facebook size={18} />} />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-serif mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/fleet">The Fleet</FooterLink>
                            <FooterLink href="/services">Services</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/journal">Journal</FooterLink>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-serif mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/policies">rental Policies</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/terms">Terms of Service</FooterLink>
                            <FooterLink href="/insurance">Insurance Info</FooterLink>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif mb-6">Contact</h4>
                        <ul className="space-y-4 text-[var(--text-secondary)] text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[var(--accent-gold)] shrink-0" />
                                <span>1236 Channel Side Drive,<br />Tampa, FL 33602</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[var(--accent-gold)] shrink-0" />
                                <span>(813) 555-0123</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[var(--accent-gold)] shrink-0" />
                                <span>concierge@enterprisedynamic.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[var(--border-subtle)] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--text-tertiary)]">
                    <p>&copy; {new Date().getFullYear()} Enterprise Dynamic LLC. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex gap-6">
                        <span>Designed with Precision</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }) {
    return (
        <li>
            <Link href={href} className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">
                {children}
            </Link>
        </li>
    );
}

function SocialIcon({ icon }) {
    return (
        <a href="#" className="w-8 h-8 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all">
            {icon}
        </a>
    );
}
