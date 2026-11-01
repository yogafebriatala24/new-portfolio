import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ProjectModel } from "@/models/PortfolioModels";
import { PROJECTS } from "@/data/portfolioData";

export async function GET() {
  try {
    const conn = await connectDB();
    if (!conn) {
      // Fallback to static data if MongoDB is not configured
      return NextResponse.json(PROJECTS);
    }

    const projects = await ProjectModel.find().sort({ order: 1, createdAt: -1 }).lean();
    if (projects.length === 0) {
      return NextResponse.json(PROJECTS);
    }

    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return NextResponse.json(PROJECTS);
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
    const newProject = await ProjectModel.create(body);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("POST /api/projects error:", error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
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
    const { _id, ...updateData } = body;
    if (!_id) {
      return NextResponse.json({ error: "Missing _id" }, { status: 400 });
    }

    const updated = await ProjectModel.findByIdAndUpdate(_id, updateData, { new: true });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT /api/projects error:", error);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
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
      return NextResponse.json({ error: "Missing project id" }, { status: 400 });
    }

    await ProjectModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/projects error:", error);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
