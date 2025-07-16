import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Mentor from "@/models/mentor";

// Force Node runtime (not Edge) for full compatibility
export const runtime = "nodejs";

// DELETE /api/mentor/[id]
export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  await dbConnect();
  const id = context.params.id;

  try {
    await Mentor.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}

// PUT /api/mentor/[id]
export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  await dbConnect();
  const id = context.params.id;

  try {
    const body = await req.json();
    const updated = await Mentor.findByIdAndUpdate(id, body, { new: true });

    if (!updated) {
      return NextResponse.json({ error: "Mentor not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
