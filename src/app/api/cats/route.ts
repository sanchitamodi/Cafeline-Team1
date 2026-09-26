import { Cat } from "@/types/cat";

function getCats(): Promise<Array<Cat>> | null {
  return null;
}
async function updateCat(name: string) {}

export async function GET() {
  // lowkey gonna wait on the data but the variable is here
  let cats /*: Array<Cat>*/ = await getCats();

  if (cats) {
    0;
  }

  return Response.error();
}

export async function PUT(request: Request) {
  // https://oneuptime.com/blog/post/2026-01-24-nextjs-route-handlers/view
  const body = await request.json();
  const updatedCat = await updateCat(body.name);

  return Response.json(updatedCat);
}
