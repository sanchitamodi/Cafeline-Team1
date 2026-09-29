import { Cat } from "@/types/cat";
import { cats } from "@/app/example/data";

interface RouteParams {
  params: Promise<{ name: string; available: boolean }>;
}

function getCats(): Array<Cat> {
  return cats;
}
async function updateCat(name: string | null, available: boolean | null): Promise<Cat | undefined> {
  const cat: Cat | undefined = cats.find((cat) => cat.name == name);

  if (cat && available) {
    cat.available = available;
  }

  return cat;
}

export async function GET() {
  // lowkey gonna wait on the data but the variable is here
  const theCats: Array<Cat> = getCats();

  return Response.json(theCats);
}

export async function PUT(request: Request) {
  // https://oneuptime.com/blog/post/2026-01-24-nextjs-route-handlers/view

  // const searchParams = request.url.searchParams;

  const body = await request.json();
  // const name = searchParams.get("name");
  // const available = searchParams.get("available") === "true";

  // console.log(name, available);
  // const updatedCat = await updateCat(name, available);

  // if (!updatedCat) {
  //   return Response.error();
  // }

  // return Response.json(updatedCat);

  return Response.json("Cat has change >:)");
}
