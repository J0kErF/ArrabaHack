"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Building, BookOpen, HeartPulse, Leaf, Users } from "lucide-react";


export default function HomePage() {
  return (
    <div className="bg-[#0d0d35] text-white min-h-screen flex flex-col">
      {/* Navbar space from layout already fixed‑top */}

      {/* Hero Section */}
      <section className="relative flex flex-1 items-center justify-center text-center px-4 py-24 md:py-32 overflow-hidden">


        {/* Hero Content */}
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            {/* Multicolor Gradient Text */}
            <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-orange-400 bg-clip-text text-transparent">
              Arraba Hack #1
            </span>
          </h1>

          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-bold text-orange-400">
              20<sup>th</sup> September 2025
            </p>
            <p className="text-lg md:text-xl font-medium">
              New Sport Hall, Arraba
            </p>
          </div>

          <Button asChild size="lg" className="mt-6 bg-orange-400 text-black font-semibold hover:bg-amber-500">
            <Link href="/apply">Interested in Arraba Hack?</Link>
          </Button>
        </div>
      </section>
      {/* Organizers Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Organizers</h2>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <img src="/logos/pymaster.svg" alt="PyMaster" className="h-16 w-auto object-contain" />
          <img src="/logos/arraba-muni.jpg" alt="Arraba Municipality" className="h-16 w-auto object-contain" />
        </div>
      </section>

      {/* Partners Section 
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-8">Partners</h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
          {[
            "/logos/hasoub.svg",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Partner ${i + 1}`}
              className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </section>
*/}


      {/* About Section */}
      <section className="py-20 bg-white text-black text-center px-6">
        <h2 className="text-3xl font-bold text-orange-500 mb-8">About</h2>
        <p className="max-w-4xl mx-auto leading-relaxed">
          Arraba Hackathon is the city’s first‑ever 12‑hour tech innovation sprint — designed to spark creativity, collaboration,
          and entrepreneurial thinking among youth. In just one action‑packed day, participants will form teams, develop
          solutions to real‑world challenges, and present their ideas to a panel of mentors and industry experts from the Arab tech ecosystem.
          <br />
          <br />
          This is more than a competition — it's a launchpad for ideas, a platform for local talent, and a gateway to the
          world of startups and technology.
          <br />
          <br />
          Organized by PyMaster in collaboration with the Municipality of Arraba, the hackathon aims to empower the next
          generation of changemakers through technology and community‑driven innovation.
        </p>
      </section>

      {/* Theme Section */}
      <section className="py-24 bg-[#fdfaf6] text-center px-6 text-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Theme</h2>
          <p className="text-lg mb-4">
            This year’s theme is <span className="font-semibold text-orange-600">"Innovating for Community Impact"</span> —
            where participants will tackle local challenges using technology, creativity, and collaboration.
          </p>
          <p className="text-md text-gray-600 italic">
            Think sustainability, education, smart cities, or public health — and bring your boldest ideas to life.
          </p>
        </div>
      </section>
      {/* Challenges Section */}
      <section className="py-20 bg-white text-gray-800 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">💡 Hackathon Challenges</h2>
          <div className="space-y-10">
            {/* Challenge 1 */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-5 border rounded-xl shadow hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-orange-500">
                <Building className="w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-orange-500 mb-1">Smart Cities</h3>
                <p className="text-gray-700 text-sm">
                  Design tech-driven solutions that improve daily life in urban environments. Think traffic,
                  safety, or energy efficiency.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-5 border rounded-xl shadow hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-orange-500">
                <BookOpen className="w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-orange-500 mb-1">Education for All</h3>
                <p className="text-gray-700 text-sm">
                  Build tools or platforms that enhance accessibility and engagement in learning — especially in underserved communities.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-5 border rounded-xl shadow hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-orange-500">
                <HeartPulse className="w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-orange-500 mb-1">Public Health</h3>
                <p className="text-gray-700 text-sm">
                  Explore ways to improve community health through data, awareness tools, or smart monitoring systems.
                </p>
              </div>
            </div>

            {/* Challenge 4 */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-5 border rounded-xl shadow hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-orange-500">
                <Leaf className="w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-orange-500 mb-1">Sustainable Living</h3>
                <p className="text-gray-700 text-sm">
                  Develop eco-conscious tech that promotes sustainable habits — from recycling systems to water or energy saving applications.
                </p>
              </div>
            </div>

            {/* Challenge 5 */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-5 border rounded-xl shadow hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-orange-500">
                <Users className="w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-orange-500 mb-1">Youth Empowerment</h3>
                <p className="text-gray-700 text-sm">
                  Create platforms or solutions that help young people grow, connect, learn skills, or find mentorship and career opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section - Enhanced */}

      < section className="py-24 bg-white text-center px-6 text-gray-800" >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Schedule</h2>
          <p className="text-lg mb-4">
            We're finalizing an exciting day full of innovation, teamwork, and inspiration.
          </p>
          <p className="text-md text-gray-600 italic">
            Detailed schedule coming soon!
          </p>
        </div>
      </section >

      {/* Call to Action - Enhanced */}
      < section className="py-24 bg-gradient-to-r from-orange-50 to-gray-100 text-center px-6 text-gray-900" >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-orange-500">Ready to build something impactful?</h2>
          <p className="text-lg leading-relaxed">
            Applications are officially open! Click on <strong>Apply</strong> in the navbar and secure your spot.
            Check out our amazing{' '}
            <Link href="/sponsors" className="underline text-blue-600 hover:text-blue-800">
              sponsors
            </Link>{' '}who are making this event possible — many are hiring!
            <br />Have questions? Head over to our{' '}
            <Link href="/faqs" className="underline text-blue-600 hover:text-blue-800">
              FAQ section
            </Link>{' '}for more details.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section >
    </div >
  );
}
