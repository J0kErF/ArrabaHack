"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
const ROLES = ["Participant", "Volunteer", "Sponsor", "Mentor"] as const;

type Role = (typeof ROLES)[number];

export default function ApplyPage() {
    const [role, setRole] = useState<Role>("Participant");

    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-orange-50 px-4 sm:px-6 lg:px-8 py-24 text-gray-800">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header */}
                <header className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-orange-600 font-display">
                        Apply to Arraba Hack
                    </h1>
                    <p className="text-gray-600 max-w-md mx-auto text-base sm:text-lg">
                        Select your role and complete our short application – it only takes a few minutes.
                    </p>
                </header>

                {/* Role Selector */}
                {/* Role Selector */}
                <div className="flex flex-wrap justify-center gap-3">
                    {ROLES.map((r) => (
                        <button
                            key={r}
                            onClick={() => setRole(r)}
                            className={`capitalize px-6 py-2 rounded-md font-medium border transition-all duration-200
        ${role === r
                                    ? "bg-orange-500 text-white shadow-md"
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
                        <form className="space-y-8">
                            {/* Shared Fields */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" required placeholder="John Doe" />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="tel" required placeholder="050‑123‑4567" />
                                </div>
                                <div className="space-y-1.5 sm:col-span-2">
                                    <Label htmlFor="email">
                                        Email Address {role === "Volunteer" && <span className="text-xs">(optional)</span>}
                                    </Label>
                                    <Input id="email" type="email" required={role !== "Volunteer"} placeholder="john@example.com" />
                                </div>
                            </div>

                            {/* Role‑specific Fields */}
                            {role === "Participant" && (
                                <div className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="city">City</Label>
                                            <Input id="city" required placeholder="Arraba" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="degree">Degree / Field</Label>
                                            <Input id="degree" required placeholder="B.Sc. Computer Science" />
                                        </div>
                                        <div className="space-y-1.5 sm:col-span-2">
                                            <Label htmlFor="institute">Institute Name</Label>
                                            <Input id="institute" required placeholder="University of XYZ" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <Label>Do you already have a team?</Label>
                                        <Select>
                                            <SelectTrigger className="py-3 px-4 rounded-lg border-gray-300 focus:ring-orange-500" >
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent className="z-50 bg-white shadow-lg border rounded-md" >
                                                <SelectItem value="yes">Yes</SelectItem>
                                                <SelectItem value="no">No</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input className="mt-2" placeholder="Team Leader's Phone (if applicable)" />
                                    </div>
                                </div>
                            )}

                            {role === "Volunteer" && (
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="address">Address</Label>
                                        <Input id="address" required placeholder="123 Main St, Arraba" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="age">Age</Label>
                                        <Input id="age" type="number" min={16} required placeholder="18" />
                                    </div>
                                </div>
                            )}

                            {role === "Sponsor" && (
                                <div className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="company">Company</Label>
                                            <Input id="company" required placeholder="AwesomeCorp" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="role">Your Role</Label>
                                            <Input id="role" required placeholder="Community Manager" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="message">Message / Proposal</Label>
                                        <Textarea id="message" rows={4} placeholder="Tell us how you'd like to support Arraba Hack…" />
                                    </div>
                                </div>
                            )}

                            {role === "Mentor" && (
                                <div className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="company2">Company</Label>
                                            <Input id="company2" required placeholder="Tech Co." />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="mentorRole">Your Role</Label>
                                            <Input id="mentorRole" required placeholder="Senior Developer" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="experience">Years of Experience</Label>
                                        <Input id="experience" type="number" min={1} required placeholder="5" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label>Type of Mentorship</Label>
                                        <Select>
                                            <SelectTrigger className="py-3 px-4 rounded-lg border-gray-300 focus:ring-orange-500" >
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent className="z-50 bg-white shadow-lg border rounded-md" >
                                                <SelectItem value="coding">Coding</SelectItem>
                                                <SelectItem value="business">Business</SelectItem>
                                                <SelectItem value="specialized">Specialized Field</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            )}

                            {/* Submit */}
                            <div className="pt-4">
                                <Button type="submit" size="lg" className="w-full sm:w-auto px-10 bg-orange-500 hover:bg-orange-600 text-white">
                                    Submit Application
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
