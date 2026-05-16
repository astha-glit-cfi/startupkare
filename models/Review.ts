import mongoose, { Schema, model, models } from 'mongoose';

const ReviewSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, default: 5 },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Review = models.Review || model('Review', ReviewSchema);