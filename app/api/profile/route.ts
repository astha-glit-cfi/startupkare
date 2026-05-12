import { NextResponse } from 'next/server';

// Mock data storage - In production, use server-side Supabase client
const mockProfiles: any[] = [];

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

    // Mock: find profile by userId
    const profile = mockProfiles.find(p => p.userId === userId);

    return NextResponse.json({ profile: profile || null }, { status: 200 });
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
    const { userId, name, description, industry, stage, fundingTarget, team } = body;

    if (!userId || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock: create or update profile
    const existingIndex = mockProfiles.findIndex(p => p.userId === userId);
    
    const profileData = {
      id: existingIndex !== -1 ? mockProfiles[existingIndex].id : Date.now().toString(),
      userId,
      name,
      description,
      industry,
      stage,
      fundingTarget,
      team,
      createdAt: existingIndex !== -1 ? mockProfiles[existingIndex].createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (existingIndex !== -1) {
      mockProfiles[existingIndex] = profileData;
    } else {
      mockProfiles.push(profileData);
    }

    return NextResponse.json(
      { message: 'Profile updated successfully', data: profileData },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
