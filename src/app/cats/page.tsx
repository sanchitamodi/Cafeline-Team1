import Navbar from "@/components/Navbar";
import styles from "./meetCats.module.css";
import { cats } from "@/app/example/data";

export default function Cats() {
  return (
    <main>
      <h1>Meet the cats!</h1>
      <ul className={styles.grid}>
        {cats.map((cat) => (
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
