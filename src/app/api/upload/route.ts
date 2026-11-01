import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const adminPass = process.env.ADMIN_PASSWORD || "admin123";
    if (authHeader !== `Bearer ${adminPass}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary using upload_stream
    const uploadResult: any = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "portfolio-yoga",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    return NextResponse.json({
      success: true,
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });
  } catch (error: any) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to upload image" },
      { status: 500 }
    );
  }
}
