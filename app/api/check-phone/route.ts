// app/api/check-phone/route.ts
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Participant from "@/models/participant";
import Volunteer from "@/models/volunteer";
import Sponsor from "@/models/sponsor";
import Mentor from "@/models/mentor";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json({ message: "Phone is required." }, { status: 400 });
    }

    const collections = [
      { model: Participant, role: "Participant" },
      { model: Volunteer, role: "Volunteer" },
      { model: Sponsor, role: "Sponsor" },
      { model: Mentor, role: "Mentor" },
    ];

    for (const { model, role } of collections) {
      const record = await model.findOne({ phone }).lean() as { fullName: string } | null;
      if (record) {
        return NextResponse.json({
          exists: true,
          role,
          fullName: record.fullName || "Unnamed",
        });
      }
    }

    return NextResponse.json({ exists: false });
  } catch (err: any) {
    console.error("❌ Phone check error:", err);
    return NextResponse.json(
      { message: err.message || "Server Error" },
      { status: 500 }
    );
  }
}
