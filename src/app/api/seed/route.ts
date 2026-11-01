import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ProjectModel, ExperienceModel, ProfileModel } from "@/models/PortfolioModels";
import { PROJECTS, EXPERIENCES, PERSONAL_INFO } from "@/data/portfolioData";

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
        { error: "MongoDB not connected. Please provide MONGODB_URI." },
        { status: 500 }
      );
    }

    // 1. Seed Profile
    await ProfileModel.deleteMany({});
    await ProfileModel.create(PERSONAL_INFO);

    // 2. Seed Projects
    await ProjectModel.deleteMany({});
    const formattedProjects = PROJECTS.map((p, idx) => ({
      title: p.title,
      category: p.category,
      period: p.period || "",
      description: p.description,
      details: p.details || "",
      image: p.image,
      tags: p.tags,
      demoUrl: p.demoUrl || "",
      githubUrl: p.githubUrl || "",
      prototypeUrl: p.prototypeUrl || "",
      featured: p.featured ?? false,
      order: idx,
    }));
    await ProjectModel.insertMany(formattedProjects);

    // 3. Seed Experiences
    await ExperienceModel.deleteMany({});
    const formattedExperiences = EXPERIENCES.map((e, idx) => ({
      role: e.role,
      company: e.company,
      period: e.period,
      type: e.type || "Kontrak",
      description: e.description,
      tags: e.tags,
      category: e.category,
      order: idx,
    }));
    await ExperienceModel.insertMany(formattedExperiences);

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully with initial portfolio data!",
      seeded: {
        profile: 1,
        projects: formattedProjects.length,
        experiences: formattedExperiences.length,
      },
    });
  } catch (error) {
    console.error("POST /api/seed error:", error);
    return NextResponse.json({ error: "Failed to seed database" }, { status: 500 });
  }
}
