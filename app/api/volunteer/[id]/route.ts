import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Volunteer from "@/models/volunteer";

// DELETE /api/volunteer/[id]
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    await Volunteer.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}

// PUT /api/volunteer/[id]
export async function PUT(
  req: Request,
  context: { params: { id: string } }
) {
  await dbConnect();

  try {
    const body = await req.json();
    const updated = await Volunteer.findByIdAndUpdate(context.params.id, body, {
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
