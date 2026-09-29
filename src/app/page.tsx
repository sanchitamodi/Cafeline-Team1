import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Link from "next/link";
import { cats } from "@/app/example/data";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <h1>A place where all cats can call home.</h1>
        <p>Coffee, cats, and a chance to take one home! (｡♥‿♥｡) </p>
        <Link href="/cats" className={styles.cta}>
          Meet the Cats
        </Link>
      </section>

      <section className={styles.featured}>
        <h2>Meet a few of our cats!</h2>
        <div className={styles.catGrid}>
          {cats.slice(0, 3).map((cat) => (
            <Link href="/cats" key={cat.id} className={styles.catCard}>
              <Image src={cat.image} alt={cat.name} width={200} height={200} />
              <h3>{cat.name}</h3>
              <p>
                {cat.personality} · {cat.age} yrs
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
