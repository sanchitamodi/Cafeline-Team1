import Link from "next/link";
import styles from "./nav.module.css";

const tabs = [
  {
    name: "Home",
    link: "/",
  },
  { name: "About", link: "/about" },
  { name: "Meet the Cats", link: "/cats" },
  { name: "Adopt", link: "/adopt" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.header}> Cafeline</h2>
      <div className={styles.navItems}>
        {tabs.map((tab) => (
          <Link href={tab.link} className={styles.navbarfont} key={tab.link}>
            {tab.name}
            <div className={styles.underline} />
          </Link>
        ))}
      </div>
    </nav>
  );
}
