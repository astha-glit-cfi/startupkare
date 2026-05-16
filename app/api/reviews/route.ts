import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Review } from '@/models/Review';

// 1. Saare reviews mangwane ke liye
export async function GET() {
  try {
    await connectToDatabase();
    const allReviews = await Review.find().sort({ date: -1 }); // Naya review upar
    return NextResponse.json(allReviews);
  } catch (e) { return NextResponse.json([]); }
}

// 2. Naya review save karne ke liye
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const newReview = await Review.create(body);
    return NextResponse.json(newReview, { status: 201 });
  } catch (e) { return NextResponse.json({ error: "Failed" }, { status: 500 }); }
}