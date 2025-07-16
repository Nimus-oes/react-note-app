import { Outlet } from "react-router";
import styles from "./index-page.module.css";

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.indexPanel}>Index Page</h1>
      <div className={styles.contentPanel}>
        <Outlet />
      </div>
    </div>
  );
}
