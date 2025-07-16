"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { href: "/apply", label: "Apply" },
  { href: "/faqs", label: "FAQs" },
  { href: "/rules", label: "Rules" },
  { href: "/workshops", label: "Workshops" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white shadow-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-xl text-orange-600"
        >
          <img
            src="/1.svg"
            alt="ArrabaHack logo"
            className="h-8 w-auto object-contain"
            loading="lazy"
          />
          ArrabaHack
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-64 bg-white shadow-lg border-l p-6 flex flex-col gap-6"
          >
            <div className="mt-4 mb-2">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 font-extrabold text-xl text-orange-600"
              >
                <img
                  src="/1.svg"
                  alt="ArrabaHack logo"
                  className="h-7 w-auto object-contain"
                />
                ArrabaHack
              </Link>
            </div>
            <nav className="flex flex-col gap-4 text-lg font-medium">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 hover:text-orange-600"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
