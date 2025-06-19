import AppHeader from "./nav/app-header";
import DesktopNavSide from "./nav/desktop-nav-side";
import styles from "./desktop-layout.module.css";
import DesktopNavTop from "./nav/desktop-nav-top";
import { Outlet } from "react-router";

export default function DesktopLayout() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.leftWrapper}>
        <AppHeader />
        <DesktopNavSide />
      </div>
      <div className={styles.rightWrapper}>
        <DesktopNavTop />
        <Outlet />
      </div>
    </div>
  );
}
