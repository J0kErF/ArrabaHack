"use client";

import { Handshake } from "lucide-react";

export default function SponsorsPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-24 text-gray-800">
      <div className="text-center max-w-lg mx-auto">
        <Handshake className="w-16 h-16 text-orange-500 mx-auto mb-6" />
        <h1 className="text-4xl font-extrabold tracking-tight text-orange-600 mb-4 font-display">
          Sponsors Coming Soon
        </h1>
        <p className="text-lg text-gray-700">
          We’re actively partnering with forward‑thinking companies. Full sponsor list will be published closer to the event—stay tuned!
        </p>
      </div>
    </section>
  );
}
