import { Cat } from "@/types/cat";
import { cats } from "@/app/example/data";

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
  console.log(await request.json());

  return Response.json({ message: "Cat updated" });
}
