import Link from "next/link";
import { Facebook, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">&copy; ArrabaHack 2025 · All rights reserved</p>
        
      </div>
    </footer>
  );
}
