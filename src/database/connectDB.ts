import mongoose from "mongoose";

export default async function connectDB() {
  const MONGO_URI = process.env.MONGO_URI ?? "";

  if (!MONGO_URI) {
    throw new Error("Please define MONGO_URI in .env.local");
  }

  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  return mongoose.connect(MONGO_URI);
}
