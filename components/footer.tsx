import Link from "next/link";
import { Facebook, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">&copy; ArrabaHack 2025 · All rights reserved</p>
        <div className="flex gap-4 text-gray-400">
          <Link href="https://www.facebook.com/arrabahack" target="_blank" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-orange-500 transition" />
          </Link>
          <Link href="https://github.com/arrabahack" target="_blank" aria-label="GitHub">
            <Github className="w-5 h-5 hover:text-orange-500 transition" />
          </Link>
          <Link href="https://twitter.com/arrabahack" target="_blank" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-orange-500 transition" />
          </Link>
          <Link href="https://linkedin.com/company/arrabahack" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-orange-500 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
