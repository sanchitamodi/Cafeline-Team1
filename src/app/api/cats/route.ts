import { NextResponse } from "next/server";

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
