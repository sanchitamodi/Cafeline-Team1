"use client";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import styles from "./meetCats.module.css";
import { cats } from "@/app/example/data";

export default function Cats() {
  const [filter, makeFilter] = useState("all");

  const filteredCats = cats.filter((cat) => {
    switch (filter) {
      case "available":
        return cat.available === true;
      case "male":
        return cat.gender === "Male";
      case "female":
        return cat.gender === "Female";
      default:
        return true;
    }
  });

  return (
    <main>
      <h1>Meet the cats!</h1>
      <div>
        <label htmlFor="gender-and-availability">Filter Cats: </label>
        <select id="gender-and-availability" value={filter} onChange={(e) => makeFilter(e.target.value)}>
          <option value="all">All Cats</option>
          <optgroup label="Availability">
            <option value="available">Available For Adoption</option>
          </optgroup>
          <optgroup label="Gender">
            <option value="male">Male Cats</option>
            <option value="female">Female Cats</option>
          </optgroup>
        </select>
      </div>
      <ul className={styles.grid}>
        {filteredCats.map((cat) => (
          <div key={cat.id} className={styles.card}>
            <img className={styles.image} src={cat.image} alt={cat.name} />
            <h2 className={styles.name}>᯽{cat.name}᯽</h2>
            <p>
              {cat.gender} <br /> {cat.age} years old <br /> {cat.breed} <br /> {cat.personality}{" "}
            </p>
            <p>{cat.description}</p>
            <p>{cat.available ? "Available for adoption" : "Already adopted"}</p>
          </div>
        ))}
      </ul>
    </main>
  );
}
