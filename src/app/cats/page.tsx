"use client";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import styles from "./meetCats.module.css";

import { Cat } from "@/types/cat";

export default function Cats() {
  const [filter, makeFilter] = useState("all");

  const [catsList, setCatsList] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/gitcats");

        if (!response.ok) {
          throw new Error("Failed to fetch cat dats from database.");
        }

        const data = await response.json();
        setCatsList(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCats();
  }, []);

  const filteredCats = catsList.filter((cat) => {
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

      {isLoading && <p className={styles.loading}>Loading cats from the database...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}

      {!isLoading && !error && (
        <ul className={styles.grid}>
          {filteredCats.map((cat) => (
            <div key={cat.id || (cat as any)._id} className={styles.card}>
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
      )}
    </main>
  );
}
