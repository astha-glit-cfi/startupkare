// app/api/reviews/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const PLACE_ID = "YOUR_PLACE_ID_HERE"; // अपनी ID डालें
  const API_KEY = "YOUR_GOOGLE_API_KEY_HERE"; // अपनी Key डालें
  
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data.result);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}