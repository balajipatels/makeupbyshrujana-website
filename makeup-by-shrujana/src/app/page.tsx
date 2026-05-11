import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InstagramFeed from "@/components/instagram/InstagramFeed";
import ReviewsCarousel from "@/components/ui/ReviewsCarousel";
import GooglePhotosGallery from "@/components/ui/GooglePhotosGallery";
import { fetchInstagramPosts } from "@/lib/instagram";
import { fetchGoogleReviews, fetchGooglePhotos } from "@/lib/reviews";
import { Phone, MessageCircle, Camera, Award, Star, Calendar } from "lucide-react";

const preview = [
  { src: "/bridal-s3.jpg",  alt: "South Indian bridal makeup artist in Bengaluru by Shrujana S" },
  { src: "/bridal-s6.jpg",  alt: "Bridal jewellery and makeup look by Shrujana S, Bengaluru" },
  { src: "/party-s1.jpg",   alt: "Party makeup artist in Bengaluru – pink saree glam look" },
  { src: "/nalungu-s1.jpg", alt: "Nalungu ceremony traditional makeup by bridal artist Shrujana" },
  { src: "/hair-bun.jpg",   alt: "Bridal hair styling – jasmine bun hairstyle by Shrujana S" },
  { src: "/bridal-s2.jpg",  alt: "Traditional South Indian bridal makeup in Bengaluru" },
];

const services = [
  { title: "Bridal Makeup",     desc: "Complete bridal transformation with premium, long-lasting products for your wedding day" },
  { title: "Engagement Makeup", desc: "Elegant looks that photograph beautifully for your special ceremony" },
  { title: "Party Makeup",      desc: "Glamorous, head-turning looks for all celebrations across Bengaluru" },
  { title: "Hair Styling",      desc: "Bridal & party hairstyles including buns, curls and traditional flower styles" },
  { title: "Saree Draping",     desc: "Expert saree draping in traditional and modern styles for every occasion" },
  { title: "HD Makeup",         desc: "High-definition finish optimised for photography and videography" },
];

export default async function Home() {
  const [instagramPosts, googleReviews, googlePhotos] = await Promise.all([
    fetchInstagramPosts(9),
    fetchGoogleReviews(),
    fetchGooglePhotos(8),
  ]);

  const placeId = process.env.GOOGLE_PLACE_ID;

  return (
    <div className="min-h-screen bg-[#fdfaf6]">
      <Header />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/bridal-s6.jpg"
          alt="Bridal Makeup by Shrujana S"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto fade-up">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-5 ring-2 ring-white/40">
            <Image
              src="/logo.jpeg"
              alt="Makeup by Shrujana S – Bridal Makeup Artist in Bengaluru"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold mb-2 leading-tight">
            Shrujana S
          </h1>
          <p className="text-base sm:text-xl font-light opacity-90 mb-1">
            Bridal &amp; Party Makeup Artist in Bengaluru
          </p>
          <p className="text-sm opacity-70 mb-8">Certified Makeup Artist &middot; KR Puram &middot; Whitefield &middot; All over Bengaluru</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918217781256"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-medium px-7 py-3 rounded-full transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" /> Book on WhatsApp
            </a>
            <Link
              href="/portfolio"
              className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-medium px-7 py-3 rounded-full transition-colors text-sm"
            >
              View My Work
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs animate-bounce select-none">
          scroll down
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Artist photo */}
            <div className="shrink-0">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/shrujana.jpg"
                  alt="Shrujana S – Makeup Artist"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover object-top"
                  quality={80}
                />
              </div>
            </div>
            {/* Bio */}
            <div>
              <span className="text-rose-500 text-xs font-semibold tracking-widest uppercase">About Me</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2 mb-4">
                Turning Beauty into Memories
              </h2>
              <p className="text-stone-500 leading-relaxed mb-3 text-sm sm:text-base">
                I am <strong className="text-stone-700">Shrujana S</strong>, a certified makeup artist
                based in Bengaluru, trained under the renowned{" "}
                <strong className="text-stone-700">Makeup by Anu Deepugowda</strong> (Dec 2025 &ndash; Feb 2026).
                I specialise in bridal, party, and engagement makeup &mdash; bringing out your natural
                beauty for your most special moments.
              </p>
              <p className="text-stone-400 leading-relaxed mb-6 text-xs sm:text-sm">
                Makeup by Shrujana is a professional <strong className="text-stone-600">bridal makeup artist in Bengaluru</strong> offering
                bridal, engagement, party makeup, saree draping, and hair styling services across
                Bengaluru and nearby areas including{" "}
                <strong className="text-stone-600">KR Puram, Whitefield, Baiyappanahalli</strong> and surroundings.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-stone-500">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-rose-400" /> Certified Artist
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-rose-400" /> Trained under Anu Deepugowda
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-rose-400" /> All over Bengaluru
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-16 bg-[#fdfaf6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-rose-500 text-xs font-semibold tracking-widest uppercase">Portfolio</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">Glimpses of My Work</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {preview.map((img, i) => (
              <Link href="/portfolio" key={i} className="aspect-square overflow-hidden rounded-xl group block">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  quality={70}
                  sizes="(max-width:768px) 50vw, 33vw"
                />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="inline-block border border-rose-300 text-rose-700 hover:bg-rose-50 font-medium px-8 py-3 rounded-full transition-colors text-sm"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-rose-500 text-xs font-semibold tracking-widest uppercase">Instagram</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">Latest on Instagram</h2>
            <p className="text-stone-400 text-sm mt-2">Follow along for daily updates &amp; behind-the-scenes</p>
          </div>
          <InstagramFeed posts={instagramPosts} username="makeup_by_shrujana" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-rose-500 text-xs font-semibold tracking-widest uppercase">Services</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">What I Offer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-[#fdfaf6] border border-stone-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="font-serif text-stone-900 text-base mb-2">{s.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-rose-600 hover:text-rose-700 text-sm font-medium">
              View all services &amp; pricing
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-[#fdfaf6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-rose-500 text-xs font-semibold tracking-widest uppercase">Reviews</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">What Clients Say</h2>
          </div>
          <ReviewsCarousel placeData={googleReviews} placeId={placeId} />
        </div>
      </section>

      {/* GOOGLE PHOTOS */}
      {googlePhotos.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-rose-500 text-xs font-semibold tracking-widest uppercase">Photos</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">From Google</h2>
              <p className="text-stone-400 text-sm mt-2">Real photos shared by clients on Google</p>
            </div>
            <GooglePhotosGallery photos={googlePhotos} />
          </div>
        </section>
      )}

      {/* SERVICE AREA MAP */}
      <section className="py-16 bg-[#fdfaf6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-rose-500 text-xs font-semibold tracking-widest uppercase">Service Area</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2">Based in Bengaluru</h2>
            <p className="text-stone-500 text-sm mt-3 max-w-xl mx-auto">
              Available for bridal, engagement and party makeup across Bengaluru &mdash;
              KR Puram, Whitefield, Baiyappanahalli, Indiranagar, HSR Layout and all surrounding areas.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124452.93564671836!2d77.5245627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Makeup by Shrujana S – Service Area Bengaluru"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-stone-900 mb-3">Ready to Look Your Best?</h2>
          <p className="text-stone-500 text-sm mb-8">
            Book a consultation and let us create your perfect look for your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918217781256"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Me
            </a>
            <a
              href="tel:+918217781256"
              className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="https://www.instagram.com/makeup_by_shrujana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-rose-300 text-rose-700 hover:bg-rose-100 font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              <Camera className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/918217781256"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-3.5 shadow-lg transition-colors z-40"
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      <Footer />
    </div>
  );
}
