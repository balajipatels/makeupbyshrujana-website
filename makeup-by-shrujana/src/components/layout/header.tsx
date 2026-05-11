"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, Phone } from "lucide-react";

const nav = [
  { label: "Home",      href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services",  href: "/services" },
  { label: "Contact",   href: "/contact" },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-rose-100">
            <Image
              src="/logo.jpeg"
              alt="Shrujana S"
              width={36}
              height={36}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-serif text-sm font-semibold text-stone-900 group-hover:text-rose-700 transition-colors">
              Shrujana S
            </p>
            <p className="text-[10px] text-stone-400 hidden sm:block tracking-wide">
              Makeup Artist · Bengaluru
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-stone-600 hover:text-rose-600 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+918217781256"
            className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-rose-600 transition-colors font-medium px-3 py-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            Call
          </a>
          <a
            href="https://wa.me/918217781256"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-stone-600 hover:text-rose-600 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-4 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 text-stone-700 hover:text-rose-600 font-medium transition-colors text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="tel:+918217781256"
              className="flex items-center justify-center gap-2 border border-stone-200 text-stone-700 text-sm font-medium px-4 py-2.5 rounded-full hover:border-rose-300 hover:text-rose-600 transition-colors"
            >
              <Phone className="w-4 h-4" /> +91 82177 81256
            </a>
            <a
              href="https://wa.me/918217781256"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
