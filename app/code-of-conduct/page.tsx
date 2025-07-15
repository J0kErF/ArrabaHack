"use client";

import Link from "next/link";
import { CheckCircle, ShieldCheck, Users, AlertTriangle } from "lucide-react";

export default function CodeOfConductPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-24 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-orange-600 mb-4 font-display">
            🛡️ Code of Conduct
          </h1>
          <p className="text-lg text-gray-600">
            A safe, inclusive, and collaborative space for everyone.
          </p>
        </header>

        {/* Principles */}
        <div className="space-y-10">
          {/* Be Respectful */}
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-orange-500 mb-1">Be Respectful</h2>
              <p className="text-gray-700">
                Treat all participants, volunteers, and organizers with respect. We do not tolerate harassment or discrimination of any form.
              </p>
            </div>
          </div>

          {/* Be Inclusive */}
          <div className="flex items-start gap-4">
            <Users className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-orange-500 mb-1">Be Inclusive</h2>
              <p className="text-gray-700">
                We welcome people of all backgrounds, identities, and skill levels. Help us create a diverse and inclusive environment.
              </p>
            </div>
          </div>

          {/* Be Collaborative */}
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-orange-500 mb-1">Be Collaborative</h2>
              <p className="text-gray-700">
                Share knowledge freely, support your peers, and build amazing projects together. Collaboration beats competition.
              </p>
            </div>
          </div>

          {/* Report Issues */}
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-orange-500 mb-1">Report Issues</h2>
              <p className="text-gray-700">
                If you witness or experience any behavior that violates this code, please contact an organizer immediately. All reports are confidential.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">
            This Code of Conduct is adapted from the
            {" "}
            <Link href="http://mlh.io/code-of-conduct" className="underline text-blue-600 hover:text-blue-800" target="_blank">
              MLH Code of Conduct
            </Link>
            .
          </p>
          <Link href="/" className="text-orange-600 font-semibold hover:text-orange-800 transition">
            ← Back to Home
          </Link>
        </footer>
      </div>
    </section>
  );
}
