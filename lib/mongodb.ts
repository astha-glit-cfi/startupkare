import mongoose from 'mongoose';

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  // Accessing MONGODB_URI inside the function as requested (with fallback to MONGO_URI)
  const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI;

  console.log("🔍 [MongoDB] Connection attempt...");
  
  if (!MONGODB_URI) {
    console.error("❌ [MongoDB] MONGODB_URI is undefined in process.env");
    console.log("Environment Keys present:", Object.keys(process.env).filter(k => k.includes('MONGO')));
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  console.log("📍 [MongoDB] URI found (length:", MONGODB_URI.length, ")");

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log("🔄 Connecting to MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ MongoDB Connected Successfully");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("❌ MongoDB Connection Error:", e);
    throw e;
  }

  return cached.conn;
}