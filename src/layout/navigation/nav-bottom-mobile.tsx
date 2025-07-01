import { NavLink } from "react-router";
import styles from "./nav-bottom-mobile.module.css";

export default function NavBottomMobile() {
  return (
    <div className={styles.container}>
      <NavLink to="/notes/all">Home</NavLink>
      <NavLink to="">Search</NavLink>
      <NavLink to="/notes/archived">Archived</NavLink>
      <NavLink to="/tags">Tags</NavLink>
      <NavLink to="">Settings</NavLink>
    </div>
  );
}
