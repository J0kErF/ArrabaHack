import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: {
    default: "Arraba Hackathon",
    template: "%s | Arraba Hackathon",
  },
  description:
    "Official website for Arraba Hackathon — innovation, community, and impact.",
  authors: [{ name: "Arraba Hack Team", url: "https://arrabahack.com" }],
  keywords: [
    "ArrabaHack",
    "Hackathon",
    "Innovation",
    "Tech",
    "Community",
  ],
  applicationName: "Arraba Hackathon",
  themeColor: "#ff7d1b",
  icons: {
    icon: "/1.svg",
    shortcut: "/1.svg",
    apple: "/1.svg",
  },
  metadataBase: new URL("https://arrabahack.com"),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased selection:bg-orange-200">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
