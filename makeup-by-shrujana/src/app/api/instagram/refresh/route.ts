import { NextResponse } from "next/server";

/**
 * Instagram long-lived tokens expire after ~60 days.
 * Hit this endpoint (with ?secret=CRON_SECRET) via a cron job every 30 days
 * to refresh the token automatically.
 *
 * Example Vercel cron (vercel.json):
 *   { "crons": [{ "path": "/api/instagram/refresh?secret=<CRON_SECRET>", "schedule": "0 0 1 * *" }] }
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (!process.env.CRON_SECRET || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "No token configured" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
    );
    const data = await res.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      new_token: data.access_token,
      expires_in: data.expires_in,
      note: "Update INSTAGRAM_ACCESS_TOKEN in Vercel environment variables with the new_token value.",
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
