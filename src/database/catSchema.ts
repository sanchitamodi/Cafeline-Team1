import mongoose, { Schema, Model } from "mongoose";
import { Cat } from "../types/cat";

const catSchema = new mongoose.Schema<Cat>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  color: { type: String, required: true },
  breed: { type: String, required: true },
  gender: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  available: { type: Boolean, required: true },
  personality: { type: String, required: true },
});

const CatModel: Model<Cat> = mongoose.models.Cat || mongoose.model<Cat>("Cat", catSchema);
export default CatModel;
