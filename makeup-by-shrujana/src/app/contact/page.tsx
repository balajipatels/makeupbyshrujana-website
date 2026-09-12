import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Phone, MessageCircle, Camera, MapPin, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fdfaf6]">
      <Header />

      <div className="pt-24 pb-16 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="text-center mb-12">
          <span className="text-rose-500 text-xs font-semibold tracking-widest uppercase">Contact</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 mt-2 mb-3">
            {"Let's Connect"}
          </h1>
          <p className="text-stone-500 text-sm max-w-sm mx-auto">
            Reach out to book a session or ask any questions. I would love to be part of your special day!
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <a
            href="https://wa.me/918217781256?text=Hi%20Shrujana!%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20a%20makeup%20appointment.%0A%0AName%3A%20%0ADate%3A%20%0AOccasion%20(Bridal%2FEngagement%2FParty%2FOther)%3A%20%0ALocation%3A%20%0AAdditional%20details%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white rounded-2xl p-7 flex flex-col items-center gap-3 text-center transition-colors"
          >
            <MessageCircle className="w-7 h-7" />
            <div>
              <p className="font-semibold text-sm">WhatsApp</p>
              <p className="text-xs opacity-80 mt-0.5">+91 82177 81256</p>
            </div>
            <span className="text-[10px] font-semibold bg-white/20 px-3 py-1 rounded-full tracking-wide uppercase">
              Preferred
            </span>
          </a>

          <a
            href="tel:+918217781256"
            className="bg-rose-600 hover:bg-rose-700 text-white rounded-2xl p-7 flex flex-col items-center gap-3 text-center transition-colors"
          >
            <Phone className="w-7 h-7" />
            <div>
              <p className="font-semibold text-sm">Call Me</p>
              <p className="text-xs opacity-80 mt-0.5">+91 82177 81256</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/makeup_by_shrujana/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-fuchsia-600 to-rose-500 hover:from-fuchsia-700 hover:to-rose-600 text-white rounded-2xl p-7 flex flex-col items-center gap-3 text-center transition-all"
          >
            <Camera className="w-7 h-7" />
            <div>
              <p className="font-semibold text-sm">Instagram</p>
              <p className="text-xs opacity-80 mt-0.5">@makeup_by_shrujana</p>
            </div>
          </a>
        </div>

        {/* Info card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
          <h3 className="font-serif text-lg text-stone-900">Details</h3>

          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-stone-800 mb-0.5">Service Area</p>
              <p className="text-stone-500">All over Bengaluru</p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-stone-800 mb-0.5">Primary Address</p>
              <p className="text-stone-500">
                #8, Gurumurthy Nilaya, Sri Sairam Layout,<br />
                Behind Venu Gopala Swamy Temple,<br />
                Hale Devasandra, KR Puram, Bangalore &ndash; 560036
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-stone-800 mb-0.5">Secondary Address</p>
              <p className="text-stone-500">
                #2, Gowramma Layout, Opp. Vinayaka Stores,<br />
                Bidarahalli Main Road, Baiyappanahalli, Bangalore &ndash; 560049
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Phone className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-stone-800 mb-0.5">Phone</p>
              <a href="tel:+918217781256" className="text-stone-500 hover:text-rose-600 transition-colors block">+91 82177 81256</a>
              <a href="https://wa.me/918147061253?text=Hi%20Shrujana!%20%F0%9F%91%8B%20I%27d%20like%20to%20book%20a%20makeup%20appointment.%0A%0AName%3A%20%0ADate%3A%20%0AOccasion%20(Bridal%2FEngagement%2FParty%2FOther)%3A%20%0ALocation%3A%20%0AAdditional%20details%3A%20" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-rose-600 transition-colors block">+91 81470 61253 <span className="text-xs text-stone-400">(Alternate · WhatsApp)</span></a>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Mail className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-stone-800 mb-0.5">Email</p>
              <a
                href="mailto:shrujana.s2024@gmail.com?subject=Makeup%20Booking%20Enquiry&body=Hi%20Shrujana%2C%0A%0AI%27d%20like%20to%20enquire%20about%20a%20makeup%20appointment.%0A%0AName%3A%20%0APhone%3A%20%0ADate%3A%20%0AOccasion%20(Bridal%2FEngagement%2FParty%2FOther)%3A%20%0ALocation%3A%20%0AAdditional%20details%3A%20%0A%0AThank%20you!"
                className="text-stone-500 hover:text-rose-600 transition-colors"
              >
                shrujana.s2024@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Clock className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-stone-800 mb-0.5">Working Hours</p>
              <p className="text-stone-500">Mon &ndash; Sat: 9:00 AM &ndash; 8:00 PM</p>
              <p className="text-stone-500">Sunday: 10:00 AM &ndash; 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/918217781256?text=Hi%20Shrujana!%20I%27m%20interested%20in%20booking%20a%20makeup%20session.%20Could%20you%20share%20more%20details%3F"
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
