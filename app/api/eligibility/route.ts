import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// MongoDB Connection Logic
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI!);
};

// Schema Definition
const EligibilitySchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  stage: String,
  industry: String,
  registered: String,
  support: String,
  createdAt: { type: Date, default: Date.now }
});

const Eligibility = mongoose.models.Eligibility || mongoose.model('Eligibility', EligibilitySchema);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();
    const newEntry = await Eligibility.create(body);
    return NextResponse.json({ success: true, data: newEntry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Database Error" }, { status: 500 });
  }
}