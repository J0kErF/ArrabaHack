"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-hot-toast";

export default function InviteParticipantPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setLoading(true);
    const res = await fetch(`/api/participant`, {
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
            You Are Invited
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg sm:text-xl">
            We see a great potential in you. We'd like to officially invite you to participate in <strong>Arraba Hack</strong>,
            taking place on <strong>September 20th, 2025</strong> at the New Sport Hall in Arraba.
            Please fill out the form below to confirm your participation.
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
                <FormInput id="city" label="City" required />
                <FormInput id="degree" label="Degree / Field" required />
                <FormInput id="institute" label="Institute Name" required className="sm:col-span-2" />
              </div>

              <div className="space-y-3">
                <Label>Do you already have a team?</Label>
                <Select name="hasTeam">
                  <SelectTrigger className="py-3 px-4 rounded-lg border-gray-300 focus:ring-orange-500">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="z-50 bg-white shadow-lg border rounded-md">
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <Input name="leaderPhone" className="mt-2" placeholder="Team Leader's Phone (if applicable)" />
              </div>

              <div className="pt-4">
                <Button
                  disabled={loading}
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto px-10 bg-orange-500 hover:bg-orange-600 text-white"
                >
                  {loading ? "Submitting…" : "Confirm Participation"}
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
