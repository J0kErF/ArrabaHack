import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Mentor from "@/models/mentor";

// PUT /api/mentor/[id]
export async function PUT(
  req: NextRequest,
  context: { params: Record<string, string> }
) {
  await dbConnect();

  try {
    const body = await req.json();
    const { id } = context.params;

    const updated = await Mentor.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json({ error: "Mentor not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

// DELETE /api/mentor/[id]
export async function DELETE(
  req: NextRequest,
  context: { params: Record<string, string> }
) {
  await dbConnect();

  try {
    const { id } = context.params;
    await Mentor.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
