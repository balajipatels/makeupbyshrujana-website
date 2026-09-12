import Link from "next/link";
import { Phone, MessageCircle, Camera, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-stone-800">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-white text-lg mb-2">Shrujana S</h3>
            <p className="text-sm text-stone-400">Bridal &amp; Party Makeup Artist</p>
            <p className="text-sm text-stone-400">Bengaluru, Karnataka</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 tracking-wide uppercase">Contact</h4>
            <div className="space-y-2 text-sm">
              <a href="tel:+918217781256" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" /> +91 82177 81256
              </a>
              <a href="tel:+918147061253" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" /> +91 81470 61253 <span className="text-stone-500 text-xs">(Alt)</span>
              </a>
              <a href="https://wa.me/918217781256?text=Hi%20Shrujana!%20I%27m%20interested%20in%20booking%20a%20makeup%20session.%20Could%20you%20share%20more%20details%3F" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle className="w-3.5 h-3.5 shrink-0" /> WhatsApp
              </a>
              <a href="https://www.instagram.com/makeup_by_shrujana/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors">
                <Camera className="w-3.5 h-3.5 shrink-0" /> @makeup_by_shrujana
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0" /> All over Bengaluru
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 tracking-wide uppercase">Pages</h4>
            <nav className="space-y-2 text-sm">
              {[
                { label: "Home",      href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Services",  href: "/services" },
                { label: "Contact",   href: "/contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="block hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <p className="text-center text-xs text-stone-500 pt-6">
          © 2025 Shrujana S – MakeUpByShrujana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
