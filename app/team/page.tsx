"use client";

import { Handshake, Users, Briefcase } from "lucide-react";

export default function TeamPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-24 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-16 font-display">
          Meet the Team
        </h1>

        {/* Organizers */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-orange-500 mr-2" />
            <h2 className="text-2xl font-semibold">Organizers</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <img src="/logos/pymaster.svg" alt="Organizer 1" className="h-20" />
            <img src="/logos/arraba-muni.jpg" alt="Organizer 2" className="h-20" />
          </div>
        </div>

        {/* Partners */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-orange-500 mr-2" />
            <h2 className="text-2xl font-semibold">Partners</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <img src="/logos/hasoub.svg" alt="Partner 1" className="h-16" />
            <img src="/logos/northmed.png" alt="Partner 2" className="h-16" />
          </div>
        </div>

        {/* Sponsors */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Handshake className="w-8 h-8 text-orange-500 mr-2" />
            <h2 className="text-2xl font-semibold">Sponsors</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <img src="/logos/Mercantile.png" alt="Sponsor 1" className="h-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
