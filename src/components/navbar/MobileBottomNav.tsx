import { NavLink } from "react-router";
import styles from "./navbar.module.css";

export default function MobileBottomNav() {
  return (
    <div className={styles.bottomMobNav}>
      <NavLink to="/all">Home</NavLink>
      <nav>Search</nav>
      <NavLink to="/archived">Archived</NavLink>
      <NavLink to="/tagList">Tags</NavLink>
      <nav>Settings</nav>
    </div>
  );
}
