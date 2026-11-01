import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ProfileModel } from "@/models/PortfolioModels";
import { PERSONAL_INFO } from "@/data/portfolioData";

export async function GET() {
  try {
    const conn = await connectDB();
    if (!conn) {
      return NextResponse.json(PERSONAL_INFO);
    }

    const profile = await ProfileModel.findOne().lean();
    if (!profile) {
      return NextResponse.json(PERSONAL_INFO);
    }

    return NextResponse.json(profile);
  } catch (error) {
    console.error("GET /api/profile error:", error);
    return NextResponse.json(PERSONAL_INFO);
  }
}

export async function PUT(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const adminPass = process.env.ADMIN_PASSWORD || "admin123";
    if (authHeader !== `Bearer ${adminPass}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const conn = await connectDB();
    if (!conn) {
      return NextResponse.json({ error: "MongoDB not connected" }, { status: 500 });
    }

    const body = await req.json();
    const updated = await ProfileModel.findOneAndUpdate({}, body, {
      upsert: true,
      new: true,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT /api/profile error:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
