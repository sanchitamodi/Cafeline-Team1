"use client";

import Link from "next/link";
import { useState } from "react";
import type { Cat } from "../../../types/cat";
import Form from "./Form";
import styles from "./add.module.css";

export default function AddCat() {
  const [message, setMessage] = useState("");

  async function handleSubmit(cat: Omit<Cat, "id">): Promise<boolean> {
    setMessage("");

    try {
      const response = await fetch("/api/cats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cat),
      });

      if (!response.ok) {
        const data = await response.json();
        setMessage(data.error || "Could not add the cat.");
        return false;
      }

      setMessage("Cat added! Go back to the adoption page.");
      return true;
    } catch {
      setMessage("Could not add the cat. Please try again.");
      return false;
    }
  }

  return (
    <main className={styles.page}>
      <h1>Put a cat up for adoption</h1>
      <p>Enter your cat&apos;s details below.</p>

      <Form handleSubmit={handleSubmit} />

      <p className={styles.message} role="status">
        {message}
      </p>

      <Link href="/adopt">Back to adoption page</Link>
    </main>
  );
}
