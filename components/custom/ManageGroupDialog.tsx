"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Group } from "@/models/group";
import { Participant } from "@/models/participant";
import { useState } from "react";

interface Props {
  open: boolean;
  group: Group;
  allGroups: Group[];
  allParticipants: Participant[];
  loading: boolean;
  onCloseAction: () => void;
  onMoveAction: (participantId: string, fromGroupId: string | null, toGroupId: string) => void;
}

export default function ManageGroupDialog({
  open,
  group,
  allGroups,
  allParticipants,
  loading,
  onCloseAction,
  onMoveAction,
}: Props) {
  const [groupName, setGroupName] = useState(group.name);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);

  const deleteGroup = async () => {
    if (!confirm("Are you sure you want to delete this group?")) return;
    setDeleting(true);
    await fetch(`/api/groups/${group._id}`, { method: "DELETE" });
    setDeleting(false);
    onCloseAction();
  };

  const updateGroupName = async () => {
    if (!groupName.trim() || groupName === group.name) return;
    setUpdating(true);
    await fetch(`/api/groups/${group._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: groupName.trim() }),
    });
    setUpdating(false);
    onCloseAction(); // Refresh UI externally after closing
  };

  const isInAnyGroup = (participantId: string) =>
    allGroups.some((g) => g.participants.some((p: any) => p._id === participantId));

  const isInCurrentGroup = (participantId: string) =>
    group.participants.some((p: any) => p._id === participantId);

  const participantsToShow = allParticipants.filter((p) =>
    !isInAnyGroup(p._id) || isInCurrentGroup(p._id)
  );

  return (
    <Dialog open={open} onOpenChange={onCloseAction}>
      <DialogContent className="max-w-3xl bg-white rounded-xl shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800 mb-4 break-words">
            Manage Participants in {group.name}
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-3 mb-4">
          <Input
            placeholder="Rename group"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={updateGroupName}
            disabled={updating || !groupName.trim() || groupName === group.name}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {updating ? "Updating..." : "Update"}
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h3 className="font-medium text-gray-700">Add a Participant</h3>
          <Button
            onClick={deleteGroup}
            disabled={deleting}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            {deleting ? "Deleting..." : "Delete Group"}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto">
          {participantsToShow
            .filter((p) => !isInCurrentGroup(p._id))
            .map((p) => (
              <Button
                key={p._id}
                variant="outline"
                className="justify-start text-left whitespace-normal break-words"
                onClick={() => onMoveAction(p._id, null, group._id)}
                disabled={loading}
              >
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium text-gray-800">{p.fullName}</span>
                  <span className="text-xs text-gray-500 break-all">{p.phone}</span>
                </div>
              </Button>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
