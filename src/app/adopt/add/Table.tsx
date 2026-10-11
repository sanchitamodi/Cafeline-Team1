"use client";

import type { Cat } from "../../../types/cat";
import styles from "./add.module.css";

type TableProps = {
  catData: Cat[];
  removeCat: (id: number) => void;
};

function TableHeader() {
  return (
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Color</th>
        <th scope="col">Breed</th>
        <th scope="col">Gender</th>
        <th scope="col">Description</th>
        <th scope="col">Available</th>
        <th scope="col">Personality</th>
        <th scope="col">ID</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
  );
}

function TableBody(props: TableProps) {
  const rows = props.catData.map((cat) => (
    <tr key={cat.id}>
      <td>{cat.name}</td>
      <td>{cat.age}</td>
      <td>{cat.color}</td>
      <td>{cat.breed}</td>
      <td>{cat.gender}</td>
      <td>{cat.description}</td>
      <td>{cat.available ? "Yes" : "No"}</td>
      <td>{cat.personality}</td>
      <td>{cat.id}</td>
      <td>
        <button type="button" aria-label={`Delete ${cat.name}`} onClick={() => props.removeCat(cat.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return <tbody>{rows}</tbody>;
}

export default function Table(props: TableProps) {
  if (props.catData.length === 0) {
    return <p>No cats added yet.</p>;
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <caption>Cats added through this form</caption>
        <TableHeader />
        <TableBody catData={props.catData} removeCat={props.removeCat} />
      </table>
    </div>
  );
}
