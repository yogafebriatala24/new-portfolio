import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminPass = process.env.ADMIN_PASSWORD || "admin123";

    if (password === adminPass) {
      return NextResponse.json({ success: true, token: adminPass });
    }

    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}
