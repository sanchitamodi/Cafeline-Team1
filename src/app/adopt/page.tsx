"use client";

import { cats } from "../example/data";
import { useState, FormEvent } from "react";
import styles from "./adopt.module.css";

export default function Adopt() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className={styles.page}>
      <h1>The Cafeline Adoption Process</h1>
      <p>
        Browse our cats avaiable for adoption, then visit Cafeline to meet them in person. Spend some time getting to
        know their personalities and ask our team any questions you have. When you find a cat you connect with, fill out
        an adoption application. We’ll review it and follow up with you about the next steps. Once everything is
        approved, we’ll help you complete the paperwork and get ready to welcome your new friend home!
      </p>

      <ul className={styles.list}>
        {cats
          .filter((cat) => cat.available)
          .map((cat) => (
            <li key={cat.id}>
              <article>
                <img src={cat.image} alt={cat.name} width={240} height={240} className={styles.image} />
                <h3>{cat.name}</h3>
                <p>Available for adoption</p>
              </article>
            </li>
          ))}
      </ul>

      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email: </label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="select-cat">Choose your cat: </label>
        <select id="cat" name="catId" defaultValue="" required>
          <option value="" disabled>
            Select a cat
          </option>
          {cats
            .filter((cat) => cat.available)
            .map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
        </select>
        <button type="submit">Submit Application</button>
        {submitted && <p>Your Application was submitted! </p>}
      </form>
    </main>
  );
}
