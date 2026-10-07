import { NextResponse } from "next/server";
import connectDB from "@/database/connectDB";
import CatModel from "@/database/catSchema";
import { cats } from "@/app/example/data";

export async function GET() {
  try {
    await connectDB();

    // gotta wipe first so that the re-running doesn't create duplicates :)
    await CatModel.deleteMany({});
    const inserted = await CatModel.insertMany(cats);

    return NextResponse.json({
      message: `Seeded ${inserted.length} cats`,
      cats: inserted,
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
