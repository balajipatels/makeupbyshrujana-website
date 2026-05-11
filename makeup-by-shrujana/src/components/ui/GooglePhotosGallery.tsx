"use client";

import { useState } from "react";
import Image from "next/image";
import { X, User } from "lucide-react";
import type { GooglePhoto } from "@/lib/reviews";

interface Props {
  photos: GooglePhoto[];
}

export default function GooglePhotosGallery({ photos }: Props) {
  const [lightbox, setLightbox] = useState<GooglePhoto | null>(null);

  if (photos.length === 0) return null;

  return (
    <>
      <div className="columns-2 sm:columns-3 md:columns-4 gap-2 space-y-2">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightbox(photo)}
            className="relative w-full overflow-hidden rounded-xl group block break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            aria-label={`View photo by ${photo.authorDisplayName}`}
          >
            <Image
              src={photo.photoUri}
              alt={`Google photo by ${photo.authorDisplayName}`}
              width={photo.widthPx ?? 400}
              height={photo.heightPx ?? 400}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
            />
            {/* Hover attribution */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-2">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-white">
                <User className="w-3 h-3 shrink-0" />
                <span className="text-xs font-medium truncate">
                  {photo.authorDisplayName}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="relative max-w-2xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.photoUri}
              alt={`Photo by ${lightbox.authorDisplayName}`}
              width={lightbox.widthPx ?? 800}
              height={lightbox.heightPx ?? 800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              priority
            />
            <div className="flex items-center gap-2 mt-3 text-white/70 text-sm">
              <User className="w-4 h-4 shrink-0" />
              <span>
                Photo by{" "}
                {lightbox.authorUri ? (
                  <a
                    href={lightbox.authorUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white transition-colors"
                  >
                    {lightbox.authorDisplayName}
                  </a>
                ) : (
                  lightbox.authorDisplayName
                )}{" "}
                on Google
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
