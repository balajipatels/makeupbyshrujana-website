import Image from "next/image";
import { Play } from "lucide-react";
import type { InstagramPost } from "@/lib/instagram";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

interface Props {
  posts: InstagramPost[];
  username?: string;
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-lg bg-stone-100 animate-pulse"
        />
      ))}
    </div>
  );
}

function EmptyState({ username = "makeup_by_shrujana" }: { username?: string }) {
  return (
    <div className="flex flex-col items-center gap-5 py-10">
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 w-full opacity-30 pointer-events-none select-none">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-gradient-to-br from-fuchsia-100 to-rose-100"
          />
        ))}
      </div>
      <a
        href={`https://www.instagram.com/${username}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-rose-500 hover:from-fuchsia-700 hover:to-rose-600 text-white font-medium px-8 py-3 rounded-full text-sm transition-all shadow-sm"
      >
        <InstagramIcon className="w-4 h-4" />
        Follow @{username}
      </a>
    </div>
  );
}

export default function InstagramFeed({
  posts,
  username = "makeup_by_shrujana",
}: Props) {
  if (posts.length === 0) {
    return <EmptyState username={username} />;
  }

  const display = posts.slice(0, 9);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
        {display.map((post) => {
          const src =
            post.media_type === "VIDEO" && post.thumbnail_url
              ? post.thumbnail_url
              : post.media_url;
          const caption = post.caption?.slice(0, 100) ?? "Makeup by Shrujana S";

          return (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg group block bg-stone-100"
              aria-label={caption}
            >
              <Image
                src={src}
                alt={caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:640px) 33vw, (max-width:1024px) 22vw, 18vw"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                {post.media_type === "VIDEO" ? (
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                ) : (
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-[11px] leading-relaxed text-center px-2 line-clamp-4">
                    {post.caption?.slice(0, 90)}
                    {(post.caption?.length ?? 0) > 90 ? "…" : ""}
                  </p>
                )}
              </div>
            </a>
          );
        })}
      </div>

      <div className="text-center">
        <a
          href={`https://www.instagram.com/${username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-rose-500 hover:from-fuchsia-700 hover:to-rose-600 text-white font-medium px-7 py-2.5 rounded-full text-sm transition-all shadow-sm"
        >
          <InstagramIcon className="w-4 h-4" />
          Follow @{username} on Instagram
        </a>
      </div>
    </div>
  );
}

export { SkeletonGrid };
