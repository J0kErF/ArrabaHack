// app/api/groups/route.ts
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Group from "@/models/group";
import "@/models/participant"; // Ensure schema is registered

export async function GET() {
  await dbConnect();

  const groups = await Group.find()
    .populate("participants")
    .sort({ createdAt: 1 })
    .lean();

  const formattedGroups = groups.map((group) => ({
    _id: group._id,
    name: group.name,
    note: group.note,
    createdAt: group.createdAt,
    updatedAt: group.updatedAt,
    participants: group.participants.map((p: any) => ({
      _id: p._id,
      fullName: p.fullName,
      phone: p.phone,
      leaderPhone: p.leaderPhone || "No Leader",
    })),
  }));

  return NextResponse.json(formattedGroups);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const newGroup = await Group.create(body);
  return NextResponse.json(newGroup);
}
