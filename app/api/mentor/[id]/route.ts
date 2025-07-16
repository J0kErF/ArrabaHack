import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Mentor from "@/models/mentor";

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  await dbConnect();

  try {
    await Mentor.findByIdAndDelete(context.params.id);
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  await dbConnect();

  try {
    const body = await request.json();
    const updated = await Mentor.findByIdAndUpdate(context.params.id, body, {
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
