export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

export async function fetchInstagramPosts(limit = 12): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=${limit}&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data = await res.json();

    if (data.error) {
      console.error("[Instagram] API error:", data.error.message);
      return [];
    }

    return (data.data ?? []) as InstagramPost[];
  } catch (err) {
    console.error("[Instagram] Fetch failed:", err);
    return [];
  }
}
