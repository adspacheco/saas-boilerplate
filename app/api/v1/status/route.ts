import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ saas: "boilerplate" }, { status: 200 });
}
