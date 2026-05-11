import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { MessageCircle, Phone } from "lucide-react";

const services = [
  {
    emoji: "💍",
    name: "Bridal Makeup",
    price: "Starting from INR 8,000",
    desc: "Complete bridal transformation with premium quality products for a flawless, long-lasting look on your most special day.",
    tags: ["Full face makeup", "False lashes", "HD finish", "Touch-up kit", "6-8 hr wear"],
  },
  {
    emoji: "💝",
    name: "Engagement Makeup",
    price: "Starting from INR 5,000",
    desc: "Elegant and romantic makeup designed to photograph beautifully and last through your engagement ceremony.",
    tags: ["Natural or glam look", "False lashes", "Long-lasting finish"],
  },
  {
    emoji: "✨",
    name: "Party Makeup",
    price: "Starting from INR 3,000",
    desc: "Stunning, head-turning looks for parties, receptions, sangeet, and all special occasions.",
    tags: ["Customised look", "Optional false lashes", "Quick application"],
  },
  {
    emoji: "📸",
    name: "HD Makeup",
    price: "Starting from INR 4,000",
    desc: "High-definition makeup optimised for photography and videography. Flawless on camera, stunning in person.",
    tags: ["HD products", "Camera-ready finish", "Photo shoots"],
  },
  {
    emoji: "💇",
    name: "Hairstyling",
    price: "Starting from INR 1,500",
    desc: "Professional hairstyling to complement your look, from traditional buns and braids to modern curls.",
    tags: ["Traditional and modern styles", "Add-on to makeup"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#fdfaf6]">
      <Header />

      <div className="pt-24 pb-16 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="text-center mb-12">
          <span className="text-rose-500 text-xs font-semibold tracking-widest uppercase">Services</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2 mb-3">
            Services &amp; Pricing
          </h1>
          <p className="text-stone-500 text-sm max-w-md mx-auto">
            Available all over Bengaluru. Prices may vary based on travel distance and specific requirements.
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="text-4xl shrink-0">{s.emoji}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h2 className="font-serif text-xl text-stone-900">{s.name}</h2>
                    <span className="text-rose-600 font-semibold text-sm">{s.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag, j) => (
                      <span key={j} className="text-xs bg-rose-50 text-rose-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-rose-50 rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl text-stone-900 mb-2">Need a Custom Package?</h3>
          <p className="text-stone-500 text-sm mb-6">
            Contact me to discuss your requirements and I will create a package that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://wa.me/918217781256"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a
              href="tel:+918217781256"
              className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              <Phone className="w-4 h-4" /> Call +91 82177 81256
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
