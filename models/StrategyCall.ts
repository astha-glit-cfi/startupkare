import mongoose, { Schema, model, models } from 'mongoose';

const StrategyCallSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  startupName: { type: String },
  priority: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const StrategyCall = models.StrategyCall || model('StrategyCall', StrategyCallSchema);