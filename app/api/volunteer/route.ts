import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Volunteer from "@/models/volunteer";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const doc = await Volunteer.create(body);
    return NextResponse.json(doc, { status: 201 });
  } catch (err) {
    console.error("Volunteer POST error:", err);
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const docs = await Volunteer.find().sort({ createdAt: -1 });
    return NextResponse.json(docs);
  } catch (err) {
    console.error("Volunteer GET error:", err);
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}
