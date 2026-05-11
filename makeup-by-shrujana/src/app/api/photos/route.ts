import { NextResponse } from "next/server";
import { fetchGooglePhotos } from "@/lib/reviews";

export const revalidate = 86400;

export async function GET() {
  const photos = await fetchGooglePhotos(8);
  return NextResponse.json({ photos });
}
