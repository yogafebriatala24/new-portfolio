import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ExperienceModel } from "@/models/PortfolioModels";
import { EXPERIENCES } from "@/data/portfolioData";

export async function GET() {
  try {
    const conn = await connectDB();
    if (!conn) {
      return NextResponse.json(EXPERIENCES);
    }

    const experiences = await ExperienceModel.find().sort({ order: 1, createdAt: -1 }).lean();
    if (experiences.length === 0) {
      return NextResponse.json(EXPERIENCES);
    }

    return NextResponse.json(experiences);
  } catch (error) {
    console.error("GET /api/experiences error:", error);
    return NextResponse.json(EXPERIENCES);
  }
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const adminPass = process.env.ADMIN_PASSWORD || "admin123";
    if (authHeader !== `Bearer ${adminPass}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const conn = await connectDB();
    if (!conn) {
      return NextResponse.json(
        { error: "MongoDB not connected. Please set MONGODB_URI in .env.local" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const newExp = await ExperienceModel.create(body);
    return NextResponse.json(newExp, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/experiences error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to create experience" },
      { status: 500 }
    );
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
    const { _id, createdAt, updatedAt, __v, ...updateData } = body;
    if (!_id) {
      return NextResponse.json({ error: "Missing _id" }, { status: 400 });
    }

    const updated = await ExperienceModel.findByIdAndUpdate(_id, updateData, { new: true });
    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("PUT /api/experiences error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to update experience" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
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

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing experience id" }, { status: 400 });
    }

    await ExperienceModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Experience deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/experiences error:", error);
    return NextResponse.json({ error: "Failed to delete experience" }, { status: 500 });
  }
}
