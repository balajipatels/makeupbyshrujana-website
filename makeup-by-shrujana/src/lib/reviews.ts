export interface GooglePhoto {
  photoUri: string;
  widthPx?: number;
  heightPx?: number;
  authorDisplayName: string;
  authorUri?: string;
}

export interface GoogleReview {
  authorAttribution: {
    displayName: string;
    photoUri?: string;
    uri?: string;
  };
  rating: number;
  text?: { text: string; languageCode?: string };
  relativePublishTimeDescription: string;
  publishTime?: string;
}

export interface PlaceData {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
}

export async function fetchGooglePhotos(limit = 8): Promise<GooglePhoto[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return [];

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "photos",
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) return [];

    const data = await res.json();
    const rawPhotos: Array<{
      name: string;
      widthPx?: number;
      heightPx?: number;
      authorAttributions?: Array<{ displayName: string; uri?: string }>;
    }> = data.photos?.slice(0, limit) ?? [];

    const resolved = await Promise.all(
      rawPhotos.map(async (photo) => {
        try {
          const mediaRes = await fetch(
            `https://places.googleapis.com/v1/${photo.name}/media?maxWidthPx=800&skipHttpRedirect=true`,
            {
              headers: { "X-Goog-Api-Key": apiKey },
              next: { revalidate: 86400 },
            }
          );
          if (!mediaRes.ok) return null;
          const mediaData = await mediaRes.json();
          return {
            photoUri: mediaData.photoUri as string,
            widthPx: photo.widthPx,
            heightPx: photo.heightPx,
            authorDisplayName: photo.authorAttributions?.[0]?.displayName ?? "Google User",
            authorUri: photo.authorAttributions?.[0]?.uri,
          } satisfies GooglePhoto;
        } catch {
          return null;
        }
      })
    );

    return resolved.filter(Boolean) as GooglePhoto[];
  } catch (err) {
    console.error("[Photos] Fetch failed:", err);
    return [];
  }
}

export async function fetchGoogleReviews(): Promise<PlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      console.error("[Reviews] Places API error:", res.status, await res.text());
      return null;
    }

    const data = await res.json();
    return data as PlaceData;
  } catch (err) {
    console.error("[Reviews] Fetch failed:", err);
    return null;
  }
}
