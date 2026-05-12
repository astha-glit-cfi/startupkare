import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Lead } from '@/models/Lead';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    
    const body = await request.json();
    console.log("📥 Incoming Data:", body); // Ye aapke terminal mein dikhega

    const { name, email, phone, industry } = body;

    // Validation
    if (!name || !email || !phone || !industry) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const newLead = await Lead.create({ 
      name, 
      email: email.toLowerCase(), 
      phone, 
      industry 
    });

    console.log("✅ Saved to DB:", newLead._id);

    return NextResponse.json({ success: true, id: newLead._id }, { status: 201 });

  } catch (error: any) {
    console.error("❌ Database Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}