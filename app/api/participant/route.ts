import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Participant from "@/models/participant";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const participant = await Participant.create(body);
        return NextResponse.json(participant, { status: 201 });
    } catch (err: any) {
        console.error("❌ Participant API error:", err);
        return NextResponse.json(
            { message: err.message || "Server Error" },
            { status: 500 }
        );
    }

}

export async function GET() {
    try {
        await dbConnect();
        const participants = await Participant.find().sort({ createdAt: -1 });
        return NextResponse.json(participants);
    } catch (err) {
        return NextResponse.json({ message: "Error", error: err }, { status: 500 });
    }
}
