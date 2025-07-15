"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-24 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight text-center text-orange-600 mb-12 font-display">
          🤔 Frequently Asked Questions
        </h1>

        <Accordion type="single" collapsible className="space-y-4">
          {/* Q1 */}
          <AccordionItem value="q1" className="border border-gray-200 rounded-xl">
            <AccordionTrigger className="px-5 py-4 text-left font-medium text-lg">
              Who can participate in Arraba Hack?
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 text-gray-700">
              The hackathon is open to students, professionals, and enthusiasts of all backgrounds. Whether you’re a beginner or an expert, you’re welcome to join!
            </AccordionContent>
          </AccordionItem>

          {/* Q2 */}
          <AccordionItem value="q2" className="border border-gray-200 rounded-xl">
            <AccordionTrigger className="px-5 py-4 text-left font-medium text-lg">
              How much does it cost to attend?
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 text-gray-700">
              Thanks to our sponsors, participation is completely <strong>free</strong>. We’ll provide meals, snacks, and swag throughout the event.
            </AccordionContent>
          </AccordionItem>

          {/* Q3 */}
          <AccordionItem value="q3" className="border border-gray-200 rounded-xl">
            <AccordionTrigger className="px-5 py-4 text-left font-medium text-lg">
              What should I bring?
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 text-gray-700">
              Bring a laptop, charger, and any hardware or devices you’d like to hack on. Don’t forget an ID for registration and your enthusiasm!
            </AccordionContent>
          </AccordionItem>

          {/* Q4 */}
          <AccordionItem value="q4" className="border border-gray-200 rounded-xl">
            <AccordionTrigger className="px-5 py-4 text-left font-medium text-lg">
              Can I join without a team?
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 text-gray-700">
              Absolutely. You can come solo or with friends. If you arrive solo, we’ll assign you to a team and notify you one day before the event so you have time to connect. If you already have a full team, just register together and you’re good to go!
            </AccordionContent>
          </AccordionItem>

          {/* Q5 */}
          <AccordionItem value="q5" className="border border-gray-200 rounded-xl">
            <AccordionTrigger className="px-5 py-4 text-left font-medium text-lg">
              Is there a code of conduct?
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 text-gray-700">
              Yes. We follow this <Link href="/code-of-conduct" className="underline text-blue-600 hover:text-blue-800">Code of Conduct</Link> to ensure a safe and inclusive environment for everyone.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-16 text-center">
          <Link href="/apply" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-800 transition">
            Ready to Apply?
            <ArrowRightCircle className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
