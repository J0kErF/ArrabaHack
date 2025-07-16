import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Volunteer from "@/models/volunteer";

// DELETE /api/volunteer/[id]
export async function DELETE(
  req: NextRequest,
  context: any
) {
  await dbConnect();

  try {
    const { id } = context.params;
    await Volunteer.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}

// PUT /api/volunteer/[id]
export async function PUT(
  req: NextRequest,
  context: any
) {
  await dbConnect();

  try {
    const body = await req.json();
    const { id } = context.params;

    const updated = await Volunteer.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
