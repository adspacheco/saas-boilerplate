import { NextResponse } from "next/server";
import { db } from "database/client.ts";

export async function GET() {
  const result = await db.execute("SELECT 1+1 as sum;");
  console.log(result.rows);
  return NextResponse.json({ saas: "boilerplate" }, { status: 200 });
}
