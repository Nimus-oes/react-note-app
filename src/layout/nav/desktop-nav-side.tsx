import { NavLink } from "react-router";
import styles from "./desktop-nav-side.module.css";

export default function DesktopNavSide() {
  return (
    <>
      <div className={styles.noteWrapper}>
        <NavLink to="">All Notes</NavLink>
        <NavLink to="">Archived Notes</NavLink>
      </div>
      <section className={styles.tagWrapper}>
        <h3>Tags</h3>
        <NavLink to="">Tag 1</NavLink>
        <NavLink to="">Tag 2</NavLink>
        <NavLink to="">Tag 3</NavLink>
      </section>
    </>
  );
}
