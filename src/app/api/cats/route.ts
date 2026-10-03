import { Cat } from "@/types/cat";
import { cats } from "@/app/example/data";
import { NextResponse } from "next/server";
import getCats from "@/database/getCats";

async function updateCat(name: string | null, available: boolean | null): Promise<Cat | undefined> {
  const cat: Cat | undefined = cats.find((cat) => cat.name == name);

  if (cat && available) {
    cat.available = available;
  }

  return cat;
}

export async function GET() {
  let theCats;

  try {
    theCats = getCats();
  } catch (err) {
    throw new Error(`Could not get cats: ${err}`);
  }

  console.log("Database done worked.");
  return Response.json(theCats);
}

export async function PUT(request: Request) {
  console.log(await request.json());

  return Response.json({ message: "Cat updated" });
}
export async function POST(request: Request) {
  let body;
  try {
    //catching and getting info from json, then checks if said json is valid or not
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Error: Invalid JSON" }, { status: 400 });
  }

  //checking if we have a cat_name property: when we add more fields and a type for cats we will update this further
  if (!body.cat_name) {
    return NextResponse.json({ error: "Error: cat_name is required" }, { status: 400 });
  }

  //return as created
  return NextResponse.json({ created: body }, { status: 201 });
}
