"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "react-hot-toast";

const ENDPOINTS = {
  Participant: "/api/participant",
  Volunteer: "/api/volunteer",
  Sponsor: "/api/sponsor",
  Mentor: "/api/mentor",
} as const;

type RoleKey = keyof typeof ENDPOINTS;
type Data = Record<string, any>[];

export default function AppliesPage() {
  const [role, setRole] = useState<RoleKey>("Participant");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<Record<RoleKey, Data>>({
    Participant: [],
    Volunteer: [],
    Sponsor: [],
    Mentor: [],
  });

  const [editingItem, setEditingItem] = useState<any>(null);
  const [editValues, setEditValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [passInput, setPassInput] = useState("");

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

  async function handleDelete(role: RoleKey, id: string) {
    const confirm = window.confirm("Are you sure you want to delete this application?");
    if (!confirm) return;

    const res = await fetch(`/api/${role.toLowerCase()}/${id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success("Deleted");
      setData((prev) => ({
        ...prev,
        [role]: prev[role].filter((x) => x._id !== id),
      }));
    } else {
      toast.error("Failed to delete");
    }
  }

  function downloadCSV(data: Record<string, any>[], filename: string) {
    if (!data.length) return toast.error("No data to export");
    const header = Object.keys(data[0]).filter((k) => !["_id", "__v"].includes(k));
    const csv = [
      header.join(","),
      ...data.map((row) =>
        header.map((field) => `"${(row[field] ?? "").toString().replace(/"/g, '""')}"`).join(",")
      ),
    ];
    const blob = new Blob([csv.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      {/* 🔐 Password Modal */}
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
            />
            <Button className="w-full bg-orange-500 text-white" onClick={handleUnlock}>
              Unlock
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 🧾 Edit Modal */}
      <Dialog open={!!editingItem} onOpenChange={() => setEditingItem(null)}>
        <DialogContent
          className="sm:max-w-lg w-full max-h-[90vh] overflow-y-auto bg-white p-4"
        >
          <DialogHeader>
            <DialogTitle>Edit Application</DialogTitle>
          </DialogHeader>

          {editingItem && (
            <form
              className="space-y-4 mt-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const filteredUpdates = Object.fromEntries(
                  Object.entries(editValues).filter(
                    ([k]) => !["_id", "__v", "createdAt", "updatedAt"].includes(k)
                  )
                );

                const res = await fetch(
                  `/api/${editingItem.role.toLowerCase()}/${editingItem._id}`,
                  {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(filteredUpdates),
                  }
                );

                if (res.ok) {
                  toast.success("Updated successfully");
                  setData((prev) => ({
                    ...prev,
                    [editingItem.role as RoleKey]: prev[editingItem.role as RoleKey].map((x) =>
                      x._id === editingItem._id ? { ...x, ...filteredUpdates } : x
                    ),
                  }));
                  setEditingItem(null);
                } else {
                  toast.error("Update failed");
                }
              }}
            >
              {Object.entries(editValues)
                .filter(([k]) => !["_id", "__v", "createdAt", "updatedAt"].includes(k))
                .map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium mb-1 capitalize" htmlFor={key}>
                      {key}
                    </label>
                    <Input
                      id={key}
                      value={value ?? ""}
                      onChange={(e) =>
                        setEditValues((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                    />
                  </div>
                ))}

              <div className="flex flex-col sm:flex-row gap-2 pt-4">
                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Save Changes
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
                  onClick={async () => {
                    const confirmed = window.confirm("Are you sure you want to delete?");
                    if (!confirmed) return;

                    const res = await fetch(
                      `/api/${editingItem.role.toLowerCase()}/${editingItem._id}`,
                      { method: "DELETE" }
                    );
                    if (res.ok) {
                      toast.success("Deleted");
                      setData((prev) => ({
                        ...prev,
                        [editingItem.role as RoleKey]: prev[editingItem.role as RoleKey].filter(
                          (x) => x._id !== editingItem._id
                        ),

                      }));
                      setEditingItem(null);
                    } else {
                      toast.error("Failed to delete");
                    }
                  }}
                >
                  Delete
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* 🔓 Main Section */}
      {unlocked && (
        <section className="min-h-screen bg-white px-6 py-20 text-gray-800">
          <div className="max-w-6xl mx-auto space-y-10">
            <h1 className="text-4xl font-extrabold text-orange-600 text-center">Applications</h1>

            <div className="flex justify-center">
              <Input
                type="text"
                placeholder="Search by name, phone, or email"
                className="max-w-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
              />
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                className="mt-4 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                onClick={() => downloadCSV(data[role], `${role}-applications`)}
              >
                Export {role} to CSV 
              </Button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Total {role} applications: {data[role].length}
            </p>

            <Tabs value={role} onValueChange={(v) => setRole(v as RoleKey)}>
              <TabsList className="mx-auto flex flex-wrap justify-center gap-3 bg-gray-100 rounded-lg p-1">
                {(Object.keys(ENDPOINTS) as RoleKey[]).map((r) => (
                  <TabsTrigger
                    key={r}
                    value={r}
                    className="capitalize px-4 py-1.5 rounded-md text-sm font-medium transition-colors data-[state=active]:bg-orange-500 data-[state=active]:text-white"
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
                        .filter((item: any) => {
                          const target = (
                            `${item.fullName || ""} ${item.phone || ""} ${item.email || ""}`
                          ).toLowerCase();
                          return target.includes(searchQuery);
                        })
                        .sort(
                          (a, b) =>
                            new Date(b.createdAt ?? b._id).getTime() -
                            new Date(a.createdAt ?? a._id).getTime()
                        )
                        .map((item: any) => (
                          <Card key={item._id} className="relative border shadow-sm">
                            <CardContent className="p-4 space-y-1 text-sm">
                              {Object.entries(item)
                                .filter(([k]) => !["_id", "__v"].includes(k))
                                .map(([k, v]) => (
                                  <p key={k}>
                                    <span className="font-medium capitalize">{k}:</span>{" "}
                                    {String(v)}
                                  </p>
                                ))}
                              <p className="text-xs text-gray-500 pt-2">
                                {new Date(item.createdAt ?? item._id).toLocaleString()}
                              </p>
                              <div className="pt-3 flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-orange-600 border-orange-400 hover:bg-orange-100"
                                  onClick={() => {
                                    setEditingItem({ ...item, role: r });
                                    setEditValues(
                                      Object.fromEntries(
                                        Object.entries(item).map(([k, v]) => [k, String(v ?? "")])
                                      )
                                    );
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  className="bg-red-500 text-white hover:bg-red-600"
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleDelete(r, item._id)}
                                >
                                  Delete
                                </Button>
                              </div>
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
