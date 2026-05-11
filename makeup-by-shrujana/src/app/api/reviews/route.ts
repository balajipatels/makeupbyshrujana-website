import { NextResponse } from "next/server";
import { fetchGoogleReviews } from "@/lib/reviews";

export const revalidate = 86400;

export async function GET() {
  const data = await fetchGoogleReviews();
  if (!data) {
    return NextResponse.json({ error: "Reviews unavailable" }, { status: 503 });
  }
  return NextResponse.json(data);
}
