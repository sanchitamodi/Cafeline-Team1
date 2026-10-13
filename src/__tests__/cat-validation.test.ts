import { describe, it, expect } from "vitest";
import CatModel from "@/database/catSchema";

const validCat = () => ({
  id: 1,
  name: "Mochi",
  age: 3,
  color: "Cream",
  breed: "Siamese",
  gender: "Female",
  image: "/cats/mochi.jpg",
  description: "A calm lap cat.",
  available: true,
  personality: "Gentle",
});

describe("Cat model validation", () => {
  it("accepts a valid cat", () => {
    const err = new CatModel(validCat()).validateSync();
    expect(err).toBeUndefined();
  });

  it("requires a name", () => {
    const { name: _name, ...data } = validCat();
    const err = new CatModel(data).validateSync();
    expect(err?.errors.name?.kind).toBe("required");
  });

  it("rejects a non-numeric age", () => {
    const err = new CatModel({ ...validCat(), age: "very old" }).validateSync();
    expect(err?.errors.age?.name).toBe("CastError");
  });
});
