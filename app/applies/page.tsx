"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const ENDPOINTS = {
  Participant: "/api/participant",
  Volunteer: "/api/volunteer",
  Sponsor: "/api/sponsor",
  Mentor: "/api/mentor",
} as const;

type RoleKey = keyof typeof ENDPOINTS;

type Data = Record<string, any>[];

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "react-hot-toast";

export default function AppliesPage() {
  const [role, setRole] = useState<RoleKey>("Participant");
  const [data, setData] = useState<Record<RoleKey, Data>>({
    Participant: [],
    Volunteer: [],
    Sponsor: [],
    Mentor: [],
  });
  const [loading, setLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [passInput, setPassInput] = useState("");

  // Fetch when unlocked & role changes
  useEffect(() => {
    if (!unlocked) return;
    async function fetchData() {
      setLoading(true);
      const res = await fetch(ENDPOINTS[role]);
      const json = await res.json();
      setData((prev) => ({ ...prev, [role]: json }));
      setLoading(false);
    }
    if (data[role].length === 0) fetchData();
  }, [role, unlocked]);

  function handleUnlock() {
    if (passInput === process.env.NEXT_PUBLIC_PASS) {
      setUnlocked(true);
    } else {
      toast.error("Incorrect password");
    }
  }

  return (
    <>
      {/* Password Modal */}
      <Dialog open={!unlocked}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Enter Admin Password</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Password"
              value={passInput}
              onChange={(e) => setPassInput(e.target.value)}
              className="w-full"
            />
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={handleUnlock}>
              Unlock
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {unlocked && (
        <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-24 text-gray-800">
          <div className="max-w-6xl mx-auto space-y-10">
            <h1 className="text-4xl font-extrabold text-orange-600 text-center">Applications</h1>

            {/* Role Tabs */}
            <Tabs value={role} onValueChange={(v) => setRole(v as RoleKey)}>
              <TabsList className="mx-auto flex max-w-md justify-center flex-wrap gap-3 bg-gray-100 rounded-lg p-1">
                {(Object.keys(ENDPOINTS) as RoleKey[]).map((r) => (
                  <TabsTrigger
                    key={r}
                    value={r}
                    className="capitalize px-4 py-1.5 rounded-md text-sm font-medium transition-colors data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=inactive]:text-gray-700 hover:data-[state=inactive]:text-orange-600"
                  >
                    {r}
                  </TabsTrigger>
                ))}
              </TabsList>
              {(Object.keys(ENDPOINTS) as RoleKey[]).map((r) => (
                <TabsContent key={r} value={r} className="mt-8">
                  {loading && role === r ? (
                    <div className="flex justify-center py-10">
                      <Loader2 className="w-6 h-6 animate-spin text-orange-600" />
                    </div>
                  ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {data[r]
                        .sort(
                          (a, b) =>
                            new Date(b.createdAt ?? b._id).getTime() -
                            new Date(a.createdAt ?? a._id).getTime()
                        )
                        .map((item: any) => (
                          <Card key={item._id} className="border shadow-sm">
                            <CardContent className="p-4 space-y-1 text-sm">
                              {Object.entries(item).map(([k, v]) =>
                                k === "_id" || k === "__v" ? null : (
                                  <p key={k}>
                                    <span className="font-medium capitalize">{k}: </span>
                                    {String(v)}
                                  </p>
                                )
                              )}
                              <p className="text-xs text-gray-500 pt-2">
                                {new Date(item.createdAt ?? item._id).toLocaleString()}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      )}
    </>
  );
}
