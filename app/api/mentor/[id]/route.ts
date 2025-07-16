import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Mentor from "@/models/mentor";

// DELETE /api/mentor/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    await Mentor.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}

// PUT /api/mentor/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const body = await req.json();
    const updated = await Mentor.findByIdAndUpdate(params.id, body, {
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
