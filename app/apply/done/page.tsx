// app/apply/done/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function ApplyDonePage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const phone = searchParams.get("phone");

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-20 text-center">
      <div className="max-w-lg space-y-6">
        <h1 className="text-4xl font-bold text-green-600">🎉 Registration Complete!</h1>
        <p className="text-lg text-gray-700">
          Thank you for applying as <strong>{role}</strong>!
        </p>
        <p className="text-gray-600">
          We’ve received your application and will reach out to you at <strong>{phone}</strong> soon.
        </p>
      </div>
    </section>
  );
}
