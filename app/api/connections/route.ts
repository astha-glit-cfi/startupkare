import { NextResponse } from 'next/server';

// Mock data - In production, use server-side Supabase client
const mockConnections: any[] = [];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Mock: filter connections by userId
    const userConnections = mockConnections.filter(c => c.userId === userId);

    return NextResponse.json({ connections: userConnections || [] }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, investorId, startupId, status } = body;

    if (!userId || !investorId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock: create connection
    const newConnection = {
      id: Date.now().toString(),
      userId,
      investorId,
      startupId,
      status: status || 'interested',
      createdAt: new Date().toISOString(),
    };

    mockConnections.push(newConnection);

    return NextResponse.json(
      { message: 'Connection created successfully', data: newConnection },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
