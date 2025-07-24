import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Group from "@/models/group";
import Participant from "@/models/participant"; // ✅ Ensure model is registered

export async function POST(req: NextRequest) {
  await dbConnect();
  const { participantId, fromGroupId, toGroupId } = await req.json();

  if (!participantId) {
    return NextResponse.json({ message: "Missing data" }, { status: 400 });
  }

  // Remove from previous group
  if (fromGroupId) {
    await Group.findByIdAndUpdate(fromGroupId, {
      $pull: { participants: participantId },
    });
  }

  // Add to new group
  await Group.findByIdAndUpdate(toGroupId, {
    $addToSet: { participants: participantId },
  });

  return NextResponse.json({ success: true });
}
