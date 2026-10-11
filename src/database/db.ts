import mongoose from "mongoose";

const connectDB = async () => {
  const url = process.env.MONGO_URI;

  if (!url) {
    throw new Error("Please define MONGO_URI in your .env file");
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  return await mongoose.connect(url);
};

export default connectDB;
