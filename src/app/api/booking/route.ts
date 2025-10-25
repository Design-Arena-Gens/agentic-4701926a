import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // In a real app, send to your CRM, email, or database.
    // For this demo, just echo back success.
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
