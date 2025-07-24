import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Group from "@/models/group";
import Participant from "@/models/participant"; // to register the schema

export async function PATCH(
  req: Request,
  { params }: any
) {
  await dbConnect();
  const { name } = await req.json();

  const group = await Group.findByIdAndUpdate(
    params.id,
    { name: name.trim() },
    { new: true }
  );

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  return NextResponse.json(group);
}

export async function DELETE(
  req: Request,
  { params }: any
) {
  await dbConnect();

  const deleted = await Group.findByIdAndDelete(params.id);

  if (!deleted) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Group deleted successfully" });
}