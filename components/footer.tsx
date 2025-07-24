import Link from "next/link";
import { Facebook, Github, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 text-gray-300 py-10 mt-20 border-t border-gray-700"
      itemScope
      itemType="http://schema.org/Organization"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 text-center">
        {/* Logo or Site Name */}
        <Link href="/" className="text-xl font-bold text-white">
          Arraba Hackathon
        </Link>

        {/* Optional Navigation Links */}
        <nav className="flex gap-6 text-sm">
          <Link href="/team" className="hover:text-orange-400 transition">
            Team
          </Link>
          <Link href="/faqs" className="hover:text-orange-400 transition">
            FAQ
          </Link>
          <Link href="/apply" className="hover:text-orange-400 transition">
            Apply
          </Link>
        </nav>


        <p className="text-xs text-gray-400 mt-4">
          &copy; <span itemProp="name">Arraba Hackathon</span> 2025 · All rights reserved.
        </p>

        {/* SEO Hidden Multilingual Descriptions */}
        <div className="sr-only">
          <p>
            Arraba Hackathon is a leading Arab tech event in Israel, connecting developers,
            designers, and innovators from all sectors.
          </p>
          <p>
            هاكثون عرابة هو حدث تقني يجمع المبرمجين والمصممين ورواد الأعمال من المجتمع العربي
            داخل إسرائيل لتعزيز الإبداع والابتكار.
          </p>
          <p>
            האקתון ערבא הוא אירוע טכנולוגי ייחודי שמחבר מפתחים ויזמים ערבים ויהודים בצפון הארץ
            לקידום חדשנות וקהילה.
          </p>
        </div>
      </div>
    </footer>
  );
}
