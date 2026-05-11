"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const images = [
  { src: "/bridal-s1.jpg",  alt: "South Indian Bridal Look",          category: "bridal" },
  { src: "/bridal-s2.jpg",  alt: "Bridal Close-up",                   category: "bridal" },
  { src: "/bridal-s3.jpg",  alt: "Bridal Jewellery and Makeup",     category: "bridal" },
  { src: "/bridal-s4.jpg",  alt: "Full Bridal Look",                  category: "bridal" },
  { src: "/bridal-s5.jpg",  alt: "Traditional Bridal Pose",           category: "bridal" },
  { src: "/bridal-s6.jpg",  alt: "Bridal Glam and Jewellery",       category: "bridal" },
  { src: "/party-s1.jpg",   alt: "Party Makeup – Pink Saree",         category: "party" },
  { src: "/party-s2.jpg",   alt: "Party Glam Look",                   category: "party" },
  { src: "/nalungu-s1.jpg", alt: "Nalungu Ceremony Makeup",           category: "nalungu" },
  { src: "/nalungu-s2.jpg", alt: "Nalungu Traditional Look",          category: "nalungu" },
  { src: "/hair-bun.jpg",   alt: "Bridal Bun with Jasmine",           category: "hairstyle" },
  { src: "/hair-curls1.jpg",alt: "Half-up Curly Hairstyle",           category: "hairstyle" },
  { src: "/hair-curls2.jpg",alt: "Bridal Curl Style",                 category: "hairstyle" },
];

const tabs = [
  { id: "all",       label: "All" },
  { id: "bridal",    label: "Bridal" },
  { id: "party",     label: "Party" },
  { id: "nalungu",   label: "Nalungu" },
  { id: "hairstyle", label: "Hairstyle" },
];

export default function Portfolio() {
  const [active,   setActive]   = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <div className="min-h-screen bg-[#fdfaf6]">
      <Header />

      {/* Hero */}
      <div className="pt-24 pb-6 text-center px-4">
        <span className="text-rose-500 text-xs font-semibold tracking-widest uppercase">Portfolio</span>
        <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2 mb-6">My Work</h1>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === t.id
                  ? "bg-rose-600 text-white"
                  : "bg-white border border-stone-200 text-stone-600 hover:border-rose-300 hover:text-rose-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img, i) => (
            <button
              key={img.src + i}
              className="aspect-square overflow-hidden rounded-xl group focus:outline-none"
              onClick={() => setLightbox(images.indexOf(img))}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                quality={70}
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              />
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-stone-400 py-20 text-sm">No images in this category yet.</p>
        )}

        {/* Book CTA */}
        <div className="mt-12 bg-white rounded-2xl p-8 text-center shadow-sm">
          <h3 className="font-serif text-2xl text-stone-900 mb-2">Love what you see?</h3>
          <p className="text-stone-500 text-sm mb-6">Book your appointment and get your perfect look.</p>
          <a
            href="https://wa.me/918217781256"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-medium px-7 py-3 rounded-full transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" /> Book on WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-2xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={800}
              height={900}
              className="w-full h-full object-contain rounded-xl"
              quality={85}
            />
            <p className="text-white/70 text-center text-sm mt-3">{images[lightbox].alt}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
