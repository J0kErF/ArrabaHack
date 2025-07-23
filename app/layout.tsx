import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Arraba Hackathon | هاكثون عرابة | האקתון ערבא",
    template: "%s | Arraba Hackathon",
  },
  description:
    "The official website for Arraba Hackathon — هاكثون عرابة — האקתון ערבא. Join us for a groundbreaking tech event uniting developers, designers, and creators from across the region.",
  authors: [{ name: "Arraba Hack Team", url: "https://arrabahack.mryosef.com" }],
  keywords: [
    // English
    "ArrabaHack",
    "Hackathon",
    "Innovation",
    "Tech",
    "Developers",
    "Hackers",
    "Events",
    "Palestinian Tech",
    "Israeli Hackathon",
    "Arraba Hackathon 2024",

    // Arabic
    "هاكثون عرابة",
    "هاكثون",
    "مطورين",
    "مبادرات تقنية",
    "هاكثون فلسطين",
    "هاكثون عرب الداخل",

    // Hebrew
    "האקתון ערבא",
    "האקתון",
    "אירועי טכנולוגיה",
    "פיתוח ערבי",
    "האקתון בצפון",
  ],
  applicationName: "Arraba Hackathon",
  themeColor: "#ff7d1b",
  metadataBase: new URL("https://arrabahack.mryosef.com"),
  openGraph: {
    title: "Arraba Hackathon | هاكثون عرابة | האקתון ערבא",
    description:
      "Join the official Arraba Hackathon: where Arab and Jewish developers unite to create innovative solutions. هاكثون عرابة - هاكثون التغيير. האקתון ערבא – חוויה טכנולוגית ייחודית.",
    url: "https://arrabahack.mryosef.com",
    siteName: "Arraba Hackathon",
    images: [
      {
        url: "https://arrabahack.mryosef.com/1.svg",
        width: 1200,
        height: 630,
        alt: "Arraba Hackathon 2024",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arraba Hackathon | هاكثون عرابة | האקתון ערבא",
    description:
      "Innovation, community, and tech in one event. Join us at Arraba Hackathon 2024.",
    site: "@arrabahack",
    images: ["https://arrabahack.mryosef.com/1.svg"],
  },
  icons: {
    icon: "/1.svg",
    shortcut: "/1.svg",
    apple: "/1.svg",
  },
  category: "Technology",
  creator: "Arraba Hack Team",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased selection:bg-orange-200">
        <Toaster position="top-center" />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
