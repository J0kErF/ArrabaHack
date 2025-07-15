"use client";

import { CalendarClock } from "lucide-react";

export default function WorkshopsPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-24 text-gray-800">
      <div className="text-center max-w-lg mx-auto">
        <CalendarClock className="w-16 h-16 text-orange-500 mx-auto mb-6" />
        <h1 className="text-4xl font-extrabold tracking-tight text-orange-600 mb-4 font-display">
          Workshops Coming Soon
        </h1>
        <p className="text-lg text-gray-700">
          Our interactive workshops will be announced as the event date approaches. Stay tuned for updates!
        </p>
      </div>
    </section>
  );
}
