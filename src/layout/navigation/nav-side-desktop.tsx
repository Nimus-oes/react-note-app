import { NavLink } from "react-router";
import styles from "./nav-side-desktop.module.css";

export default function NavSideDesktop() {
  return (
    <div className={styles.container}>
      <NavLink to="/notes/all">All Notes</NavLink>
      <NavLink to="/notes/archived">Archived Notes</NavLink>
      <NavLink to="/tags">Tags</NavLink>
    </div>
  );
}
