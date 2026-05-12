import mongoose, { Schema, model, models } from 'mongoose';

const LeadSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  industry: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// models.Lead check karta hai agar pehle se bana hai, warna naya banata hai
export const Lead = models.Lead || model('Lead', LeadSchema);