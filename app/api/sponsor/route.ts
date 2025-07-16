import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Sponsor from "@/models/sponsor";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const doc = await Sponsor.create(body);
    return NextResponse.json(doc, { status: 201 });
  } catch (err) {
    console.error("Sponsor POST error:", err);
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const docs = await Sponsor.find().sort({ createdAt: -1 });
    return NextResponse.json(docs);
  } catch (err) {
    console.error("Sponsor GET error:", err);
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}
