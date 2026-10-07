import mongoose from "mongoose";
import { Cat } from "@/types/cat";
import { cats } from "@/app/example/data";
import { NextResponse } from "next/server";
import connectDB from "@/database/db";

const catSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 0 },
  gender: { type: String },
  available: { type: Boolean, required: true },
  color: String,
  breed: String,
  image: String,
  description: String,
  personality: [String],
});

const CatObject = mongoose.models.cat || mongoose.model("cat", catSchema);

async function validateCat(cat: Cat): Promise<boolean> {
  const { name, age, available } = cat;
  if (!name || !age || available === undefined) {
    return false;
  }
  return true;
}

async function updateCat(name: string | null, available: boolean | null): Promise<Cat | undefined> {
  const cat: Cat | undefined = cats.find((cat) => cat.name == name);

  if (cat && available) {
    cat.available = available;
  }

  return cat;
}

export async function GET() {
  try {
    await connectDB();
    const cats = await CatObject.find({}).lean<Cat[]>();
    return NextResponse.json(cats);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Could not fetch cats" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  console.log(await request.json());

  return Response.json({ message: "Cat updated" });
}
export async function POST(request: Request) {
  let body;
  await connectDB();

  try {
    //catching and getting info from json, then checks if said json is valid or not
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Error: Invalid JSON" }, { status: 400 });
  }

  let validation = await validateCat(body);

  if (!validation) {
    return NextResponse.json({ error: "Error: Missing required fields" }, { status: 400 });
  }

  try {
    const catData = await CatObject.create(body);
    await catData.save();
    return NextResponse.json({ created: catData }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Error: Invalid JSON" }, { status: 400 });
  }
}
