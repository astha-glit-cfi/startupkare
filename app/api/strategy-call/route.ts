import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { StrategyCall } from '@/models/StrategyCall';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    
    const { name, email, phone, startupName, priority } = body;

    if (!name || !email || !phone || !priority) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newBooking = await StrategyCall.create({
      name,
      email,
      phone,
      startupName,
      priority
    });

    return NextResponse.json({ message: 'Booking successful', id: newBooking._id }, { status: 201 });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}