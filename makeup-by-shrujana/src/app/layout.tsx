import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shrujana S – Bridal & Party Makeup Artist in Bengaluru",
  description: "Certified bridal and party makeup artist in Bengaluru. Trained under Makeup by Anu Deepugowda. Book Shrujana S for your bridal, engagement or party look.",
  keywords: ["bridal makeup artist in Bengaluru", "bridal makeup Bengaluru", "makeup artist near me Bengaluru", "Shrujana S", "party makeup Bengaluru", "engagement makeup Bengaluru", "saree draping Bengaluru", "hair styling bridal Bengaluru", "makeup artist KR Puram", "makeup artist Whitefield", "makeup artist Baiyappanahalli", "nalungu makeup", "HD makeup Bengaluru"],
  authors: [{ name: "Shrujana S" }],
  creator: "Shrujana S",
  metadataBase: new URL("https://makeup-by-shrujana.vercel.app"),
  verification: {
    google: "b4dd91d15c34afec",
  },
  openGraph: {
    title: "Shrujana S – Bridal & Party Makeup Artist in Bengaluru",
    description: "Certified bridal and party makeup artist in Bengaluru. Book for bridal, engagement or party looks.",
    url: "https://makeup-by-shrujana.vercel.app",
    siteName: "MakeUpByShrujana",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
