"use client";

import { useEffect, useState } from "react";
import { Participant } from "@/models/participant";
import { Group } from "@/models/group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ManageGroupDialog from "@/components/custom/ManageGroupDialog";
import { Pencil } from "lucide-react";

export const dynamic = "force-dynamic";

export default function GroupManagementPage() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [allParticipants, setAllParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  useEffect(() => {
    fetchGroups();
    fetchParticipants();
  }, []);

  const fetchGroups = async () => {
    const res = await fetch("/api/groups");
    const data = await res.json();
    setGroups(data);
  };

  const fetchParticipants = async () => {
    const res = await fetch("/api/participant");
    const data = await res.json();
    setAllParticipants(data);
  };

  const createGroup = async () => {
    if (!newGroupName.trim()) return;
    const res = await fetch("/api/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newGroupName })
    });
    if (res.ok) {
      setNewGroupName("");
      fetchGroups();
    }
  };

  const moveParticipant = async (participantId: string, fromGroupId: string | null, toGroupId: string) => {
    setLoading(true);
    await fetch("/api/groups/move", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId, fromGroupId, toGroupId })
    });
    await fetchGroups();
    setLoading(false);
  };

  const removeParticipant = async (participantId: string, fromGroupId: string) => {
    setLoading(true);
    await fetch("/api/groups/move", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId, fromGroupId, toGroupId: null })
    });
    await fetchGroups();
    setLoading(false);
  };

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-orange-600">Group Management</h1>

      {/* Create Group */}
      <div className="flex gap-3 mb-10 items-center">
        <Input
          placeholder="Enter new group name"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          className="w-64"
        />
        <Button onClick={createGroup} className="bg-orange-500 text-white hover:bg-orange-600">
          Create Group
        </Button>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group._id} className="shadow-md border border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  {group.name}
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setSelectedGroup(group)}
                    title="Edit Group"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </h2>
                <p className="text-sm text-gray-500">{group.participants.length} members</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSelectedGroup(group)}>
                Manage
              </Button>
            </CardHeader>
            <Separator />
            <CardContent className="p-4 space-y-2">
              {group.participants.length > 0 ? (
                group.participants.map((p: any) => (
                  <div key={p._id} className="flex items-start justify-between text-sm text-gray-700">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">{p.fullName}</span>
                      <span className="text-xs text-gray-500">📞 {p.phone}</span>
                      <span className="text-xs text-gray-400 italic">
                        👑 Leader: {p.leaderPhone || "No Group"}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => removeParticipant(p._id, group._id)}>Remove</Button>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 italic">No participants yet.</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Manage Group Modal */}
      {selectedGroup && (
        <ManageGroupDialog
          open={!!selectedGroup}
          group={selectedGroup}
          allGroups={groups}
          allParticipants={allParticipants}
          loading={loading}
          onCloseAction={() => setSelectedGroup(null)}
          onMoveAction={moveParticipant}
        />
      )}
    </section>
  );
}
