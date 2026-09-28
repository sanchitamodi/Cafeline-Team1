import Navbar from "@/components/Navbar";
import styles from "./meetCats.module.css";
//import cat data
//import image

const testCats = [
  {
    id: 0,
    name: "Cat1",
    age: 11,
    color: "Tan",
    breed: "Domestic Shorthair",
    gender: "Female",
    description: "Hello, I am Cat1!",
    available: true,
    personality: "Happy",
  },
  {
    id: 1,
    name: "Cat2",
    age: 6,
    color: "Light Brown",
    breed: "Dwarf",
    gender: "Male",
    description: "Hello, I am Cat2!",
    available: false,
    personality: "Excited",
  },
];

export default function MeetTheCats() {
  return (
    <main>
      <Navbar />
      <h1>Meet the cats!</h1>
      <ul className={styles.grid}>
        {testCats.map((cat) => (
          <li key={cat.id} className={styles.card}>
            <img src="../../docs/images/cat-images/mei-mei.jpg" />
            <h2 className={styles.name}>{cat.name}</h2>
            <p>
              {cat.breed} <br /> {cat.age} years old <br /> {cat.gender} <br /> {cat.personality}{" "}
            </p>
            <p>{cat.description}</p>
            <p>{cat.available ? "Available for adoption" : "Already adopted"}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
