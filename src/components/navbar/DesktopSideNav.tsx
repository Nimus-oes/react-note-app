import { NavLink } from "react-router";
import styles from "./navbar.module.css";

export default function DesktopSideNav() {
  return (
    <div className={styles.sideDeskNav}>
      <NavLink to="/all">All Notes</NavLink>
      <NavLink to="/archived">Archived Notes</NavLink>
      <NavLink to="/tag1">Tag 1</NavLink>
      <NavLink to="/tag2">Tag 2</NavLink>
      <NavLink to="/tag3">Tag 3</NavLink>
    </div>
  );
}
