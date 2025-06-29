import usePageTitle from "../../hooks/use-page-title";
import styles from "./nav-top-desktop.module.css";

export default function NavTopDesktop() {
  const pageTitle = usePageTitle();

  return (
    <div className={styles.container}>
      <div>{pageTitle}</div>
      <div className={styles.navWrapper}>
        <div>Search</div>
        <div>Settings</div>
      </div>
    </div>
  );
}
