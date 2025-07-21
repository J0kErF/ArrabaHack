"use client";

import { CheckCircle, ShieldCheck, TimerReset, FolderCheck } from "lucide-react";

export default function RulesPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-24 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight text-center text-orange-600 mb-12 font-display">
          🛡️ Arraba Hack – Official Rules
        </h1>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" /> Spirit of the Competition
            </h2>
            <p className="text-gray-700">
              Arraba Hack is more than a competition — it’s an opportunity to grow, collaborate, and have fun.
              Whether you’re here to win or just learn something new, keep the hacker spirit alive by helping
              others, staying curious, and building awesome things together.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-2 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" /> General Rules
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All participants must follow our <a className="underline text-blue-600" href="/code-of-conduct">Code of Conduct</a>.</li>
              <li>The hackathon is open to students and professionals. Organizers, mentors, and sponsors cannot compete.</li>
              <li>Teams should consist of active participants (we recommend 2–5 members).</li>
              <li>Work on projects should begin during the event. You may brainstorm ideas in advance, but no pre-written code is allowed.</li>
              <li>Reuse of open-source libraries or frameworks is encouraged — just no copy-paste of previous full projects.</li>
              <li>Once hacking ends, only bug fixes (not new features) are allowed before demos.</li>
              <li>Organizers reserve the right to disqualify any team for rule violations or unethical behavior.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-2 flex items-center gap-2">
              <TimerReset className="w-6 h-6" /> Digital Submissions
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Submit a slides presentation showing what you built.</li>
              <li>Your code must be public and submitted via GitHub.</li>
              <li>The slides presentation must mention "Arraba Hack" clearly at the start.</li>
              <li>Projects must be new work — no reused codebases.</li>
              <li>All team members must be properly registered for the event.</li>
            </ul>
          </div>
<div>
            <h2 className="text-2xl font-bold text-orange-500 mb-2 flex items-center gap-2">
              <FolderCheck className="w-6 h-6" /> Judging Criteria
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Innovation & Technical Depth:</strong> How impressive or challenging is the tech? Did you use
                creative techniques or advanced integrations?
              </li>
              <li>
                <strong>Design & User Experience:</strong> Is the solution intuitive, visually appealing, and user‑friendly?
              </li>
              <li>
                <strong>Completion & Functionality:</strong> Does your prototype function as intended? How complete is the MVP?
              </li>
              <li>
                <strong>Business Potential & Scalability:</strong> Is there a clear market fit and business model? Can the idea grow or scale sustainably?
              </li>
              <li>
                <strong>Pitch Quality & Communication:</strong> How effectively did you present the problem, solution, and value proposition?
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              While code quality isn’t scored directly, impactful solutions with clear growth potential and strong communication will stand out.
            </p>
          </div>

          <div className="pt-10 border-t mt-12">
            <p className="text-center text-gray-600 italic">
              At Arraba Hack, it’s not just about winning — it’s about exploring, growing, and connecting. So be bold, try new things, and have fun!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
