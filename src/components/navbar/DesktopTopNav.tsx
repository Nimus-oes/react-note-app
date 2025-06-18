import styles from "./navbar.module.css";

export default function DesktopTopNav() {
  return (
    <div className={styles.topDeskNav}>
      <nav>Search</nav>
      <nav>Settings</nav>
    </div>
  );
}
