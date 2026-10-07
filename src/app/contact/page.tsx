"use client";

import Navbar from "@/components/Navbar";
import styles from "./contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.page}>
      <div className={styles.body}>
        <h1>Contact</h1>
        <h3>Visit us:</h3>
        7 Meowth Street, CA, 91234 <br /> Monday-Friday: 10am - 8pm <br /> Saturday-Sunday: 10am - 9pm
        <h3>Message us:</h3>
        Phone: (805)-123-456 <br /> Email: cafeline@yahoo.com <br /> Instagram: @Cafeline_cats <br />
        <p></p>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea id="message" name="message" className={styles.field} required></textarea>
        <input type="submit" value="Submit" />
      </form>
      {submitted && <p>Thank you for your submission!</p>}
    </main>
  );
}
