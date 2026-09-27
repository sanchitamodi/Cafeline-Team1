import { Cat } from "@/types/cat";
import { cats } from "@/app/example/data";

interface RouteParams {
  params: Promise<{ name: string; available: boolean }>;
}

function getCats(): Array<Cat> {
  return cats;
}
async function updateCat(name: string, available: boolean, body: any): Promise<Cat | undefined> {
  const cat: Cat | undefined = cats.find((cat) => cat.name == name);

  if (cat) {
    cat.available = available;
  }

  return cat;
}

export async function GET() {
  // lowkey gonna wait on the data but the variable is here
  const theCats: Array<Cat> = getCats();

  return Response.json(theCats);
}

export async function PUT(request: Request, { params }: RouteParams) {
  // https://oneuptime.com/blog/post/2026-01-24-nextjs-route-handlers/view
  const { name, available } = await params;
  const body = await request.json();
  const updatedCat = await updateCat(name, available, body);

  return Response.json(updatedCat);
}
