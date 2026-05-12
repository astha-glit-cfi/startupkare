import { NextResponse } from 'next/server';

// Mock data storage - In production, use server-side Supabase client
const mockLeads: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, idea } = body;

    // Validate input
    if (!name || !email || !phone || !idea) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock: save lead
    const newLead = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      idea,
      createdAt: new Date().toISOString(),
    };

    mockLeads.push(newLead);

    return NextResponse.json(
      { message: 'Lead captured successfully', data: newLead },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
