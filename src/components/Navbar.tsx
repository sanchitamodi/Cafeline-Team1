import Link from "next/link";
import styles from "./nav.module.css";

const tabs = [
  {
    name: "Home",
    link: "/home",
  },
  { name: "About", link: "/about" },
  { name: "Meet the Cats", link: "/cats" },
  { name: "Adopt", link: "/adopt" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <Link href={tab.link} className={styles.navbarfont} key={tab.link}>
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}
