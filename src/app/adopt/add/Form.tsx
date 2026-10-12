"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Cat } from "../../../types/cat";
import styles from "./add.module.css";

type FormProps = {
  handleSubmit: (cat: Omit<Cat, "id">) => Promise<boolean>;
};

type CatFields = Omit<Cat, "id" | "age"> & { age: string };

const emptyCat: CatFields = {
  name: "",
  age: "",
  color: "",
  breed: "",
  gender: "",
  image: "",
  description: "",
  available: true,
  personality: "",
};

export default function Form(props: FormProps) {
  const [cat, setCat] = useState<CatFields>(emptyCat);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    if (name === "available") {
      const checked = (event.target as HTMLInputElement).checked;
      setCat((previousCat) => ({ ...previousCat, available: checked }));
    } else {
      setCat((previousCat) => ({ ...previousCat, [name]: value }));
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    setCat((previousCat) => ({ ...previousCat, image: "" }));

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const image = reader.result as string;
      setCat((previousCat) => ({ ...previousCat, image: image }));
    };

    reader.readAsDataURL(file);
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.handleSubmit({ ...cat, age: Number(cat.age) });
    setCat(emptyCat);
  }

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <label className={styles.field}>
        Name
        <input name="name" type="text" value={cat.name} onChange={handleChange} required />
      </label>
      <label className={styles.field}>
        Age
        <input name="age" type="number" min="0" step="any" value={cat.age} onChange={handleChange} required />
      </label>
      <label className={styles.field}>
        Color
        <input name="color" type="text" value={cat.color} onChange={handleChange} required />
      </label>
      <label className={styles.field}>
        Breed
        <input name="breed" type="text" value={cat.breed} onChange={handleChange} required />
      </label>
      <label className={styles.field}>
        Gender
        <select name="gender" value={cat.gender} onChange={handleChange} required>
          <option value="">Select a gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
        </select>
      </label>
      <label className={styles.field}>
        Personality
        <input name="personality" type="text" value={cat.personality} onChange={handleChange} required />
      </label>
      <label className={styles.field}>
        Description
        <textarea name="description" rows={4} value={cat.description} onChange={handleChange} required />
      </label>
      <label className={styles.field}>
        Image
        <input name="image" type="file" accept="image/*" onChange={handleImageChange} required />
      </label>
      <button className={styles.button} type="submit">
        Add cat
      </button>
    </form>
  );
}
