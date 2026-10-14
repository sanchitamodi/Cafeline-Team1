"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import type { Cat } from "@/types/cat";
import styles from "./adopt.module.css";

type DatabaseCat = Omit<Cat, "id" | "personality"> & {
  _id: string;
  personality: string[];
};

export default function Adopt() {
  const [submitted, setSubmitted] = useState(false);
  const [cats, setCats] = useState<DatabaseCat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCats() {
      try {
        const response = await fetch("/api/cats", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Could not load cats.");
        }

        const data = await response.json();
        setCats(data);
      } catch {
        setError("Could not load cats. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadCats();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="about-page">
      <h1>The Cafeline Adoption Process</h1>
      <p>
        Browse our cats available for adoption, then visit Cafeline to meet them in person. Spend some time getting to
        know their personalities and ask our team any questions you have. When you find a cat you connect with, fill out
        an adoption application. We’ll review it and follow up with you about the next steps. Once everything is
        approved, we’ll help you complete the paperwork and get ready to welcome your new friend home!
      </p>

      {loading && <p>Loading cats...</p>}
      {error && <p>{error}</p>}

      <ul className={styles.list}>
        {cats
          .filter((cat) => cat.available)
          .map((cat) => (
            <li key={cat._id}>
              <article>
                <img src={cat.image} alt={cat.name} width={240} height={240} className={styles.image} />
                <h3>{cat.name}</h3>
              </article>
            </li>
          ))}
      </ul>

      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email: </label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="phoneNumber">Phone Number: </label>
        <input id="phoneNumber" name="phoneNumber" type="tel" pattern="[0-9]{10}" placeholder="1234567890" required />

        <label htmlFor="cat">Choose your cat: </label>
        <select id="cat" name="catId" defaultValue="" required>
          <option value="" disabled>
            Select a cat
          </option>
          {cats
            .filter((cat) => cat.available)
            .map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
        </select>

        <button type="submit">Submit Application</button>
        {submitted && <p>Your Application was submitted!</p>}
      </form>

      <Link href="/adopt/add" className={styles.addButton}>
        NEED TO PUT A CAT UP FOR ADOPTION? CLICK HERE
      </Link>
    </main>
  );
}
