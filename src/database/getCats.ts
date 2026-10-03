import CatModel from "./catSchema";
import connectDB from "./connectDB";

export default async function getCats() {
  await connectDB();

  try {
    const cats = await CatModel.find().sort({ name: 1 }).orFail();

    // if (cats.length == 0) {
    //   throw new Error("No cats present in database.");
    // }

    return cats;
  } catch (err) {
    throw new Error(`Error trying to get cats: ${err}`);
  }
}
