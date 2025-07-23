"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const ROLES = ["Participant", "Volunteer", "Sponsor", "Mentor"] as const;
type Role = (typeof ROLES)[number];

export default function ApplyPage() {
  const [role, setRole] = useState<Role>("Participant");
  const [loading, setLoading] = useState(false);
  const [existingUser, setExistingUser] = useState<{
    fullName: string;
    role: string;
  } | null>(null);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const phone = data.phone as string;

    // 🔎 Check if phone already registered
    const check = await fetch("/api/check-phone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });

    const result = await check.json();

    if (result.exists) {
      setExistingUser({
        fullName: result.fullName,
        role: result.role,
      });
      return; // 🚫 Don't submit if already exists
    }

    // ✅ Submit actual application
    setLoading(true);
    const res = await fetch(`/api/${role.toLowerCase()}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) {
      toast.success("Application submitted!");
      router.push(`/apply/done?role=${role}&phone=${encodeURIComponent(phone)}`);
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
            Apply to Arraba Hack
          </h1>
          <p className="text-gray-600 max-w-md mx-auto text-base sm:text-lg">
            Select your role and complete our short application – it only takes a few minutes.
          </p>
        </header>

        {/* Role Selector */}
        <div className="flex flex-wrap justify-center gap-3">
          {ROLES.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`capitalize px-6 py-2 rounded-md font-medium border transition
                ${role === r
                  ? "bg-orange-500 text-white shadow"
                  : "border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-600"
                }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Form */}
        <Card className="shadow-xl border-none">
          <CardContent className="p-6 sm:p-10 space-y-8">
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Shared fields */}
              <div className="grid gap-6 sm:grid-cols-2">
                <FormInput id="fullName" label="Full Name" required />
                <FormInput id="phone" label="Phone Number" type="tel" required />
                <FormInput
                  id="email"
                  label={`Email Address${role === "Volunteer" ? " (optional)" : ""}`}
                  type="email"
                  required={role !== "Volunteer"}
                  className="sm:col-span-2"
                />
              </div>

              {/* Role‑specific */}
              {role === "Participant" && <ParticipantSection />}
              {role === "Volunteer" && <VolunteerSection />}
              {role === "Sponsor" && <SponsorSection />}
              {role === "Mentor" && <MentorSection />}

              {/* Submit */}
              <div className="pt-4">
                <Button
                  disabled={loading}
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto px-10 bg-orange-500 hover:bg-orange-600 text-white"
                >
                  {loading ? "Submitting…" : "Submit Application"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <Dialog open={!!existingUser} onOpenChange={() => setExistingUser(null)}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>You're Already Registered</DialogTitle>
            <DialogDescription>
              We found a submission from <strong>{existingUser?.fullName}</strong> for the role of <strong>{existingUser?.role}</strong>.
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm text-gray-600 mt-4">
            If you need help or have updates, feel free to email us at:
            <br />
            <a href="mailto:mohammad@mryosef.com" className="text-orange-600 font-medium">
              mohammad@mryosef.com
            </a>
          </div>
          <DialogFooter className="mt-6">
            <Button onClick={() => setExistingUser(null)} className="w-full bg-orange-500 text-white hover:bg-orange-600">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </section>

  );
}

/* ---------- Reusable ---------- */

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

/* ---------- Participant ---------- */

function ParticipantSection() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
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
    </div>
  );
}

/* ---------- Volunteer ---------- */

function VolunteerSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <FormInput id="address" label="Address" required />
      <FormInput id="age" label="Age" type="number" min={16} required />
    </div>
  );
}

/* ---------- Sponsor ---------- */

function SponsorSection() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormInput id="company" label="Company" required />
        <FormInput id="role" label="Your Role" required />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Message / Proposal</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us how you'd like to support Arraba Hack…"
        />
      </div>
    </div>
  );
}

/* ---------- Mentor ---------- */

function MentorSection() {
  return (
    <div className="space-y-6">
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
    </div>
  );
}
