import { NavLink, Outlet } from "react-router";
import { ICONS, ROUTES } from "../constants";
import styles from "./app-layout.module.css";

export default function AppLayout() {
  return (
    <>
      <div className={styles.flexRow}>
        <div>
          <header>Logo</header>
          <NavLink to={ROUTES.all_notes_list()} className={styles.flexRow}>
            <div>{ICONS.home}</div>
            <div>All Notes</div>
            <div>→</div>
          </NavLink>
          <NavLink to={ROUTES.archived_notes_list()} className={styles.flexRow}>
            <div>{ICONS.archived}</div>
            <div>Archived Notes</div>
            <div>→</div>
          </NavLink>
          <div>Tags</div>
        </div>
        <div className={styles.rightSide}>
          <div className={`${styles.flexRow} ${styles.topBar}`}>
            <div>Page Title</div>
            <div className={styles.flexRow}>
              <div>{ICONS.search}</div>
              <NavLink to={ROUTES.settings()}>{ICONS.settings}</NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
