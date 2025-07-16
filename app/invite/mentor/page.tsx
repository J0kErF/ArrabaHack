"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-hot-toast";

export default function InviteMentorPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setLoading(true);
    const res = await fetch(`/api/mentor`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) {
      toast.success("Application submitted!");
      form.reset();
    } else {
      const { message } = await res.json();
      toast.error(message || "Submission failed. Please try again.");
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-orange-50 px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto space-y-12 text-gray-800">
        {/* Heading */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-orange-600 font-display">
            Mentor Invitation
          </h1>
          <p className="text-gray-600 max-w-md mx-auto text-base sm:text-lg">
            We see in you a strong potential to guide others, and we’d love to invite you to mentor at Arraba Hack on
            <span className="text-orange-500 font-bold"> September 20th, 2025</span> in Arraba.
          </p>
        </header>

        {/* Form */}
        <Card className="shadow-xl border-none">
          <CardContent className="p-6 sm:p-10 space-y-8">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <FormInput id="fullName" label="Full Name" required />
                <FormInput id="phone" label="Phone Number" type="tel" required />
                <FormInput id="email" label="Email Address" type="email" required className="sm:col-span-2" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <FormInput id="company" label="Company" required />
                <FormInput id="role" label="Your Role" required />
              </div>
              <FormInput id="yearsExp" label="Years of Experience" type="number" min={1} required />

              <div className="space-y-1.5">
                <Label>Type of Mentorship</Label>
                <Select name="mentorshipType">
                  <SelectTrigger className="py-3 px-4 rounded-lg border-gray-300 focus:ring-orange-500">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="z-50 bg-white shadow-lg border rounded-md">
                    <SelectItem value="coding">Coding</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="specialized">Specialized Field</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button
                  disabled={loading}
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto px-10 bg-orange-500 hover:bg-orange-600 text-white"
                >
                  {loading ? "Submitting…" : "Submit as Mentor"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FormInput({
  id,
  label,
  required,
  type = "text",
  className = "",
  ...props
}: React.ComponentProps<"input"> & { label: string }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} type={type} required={required} {...props} />
    </div>
  );
}
