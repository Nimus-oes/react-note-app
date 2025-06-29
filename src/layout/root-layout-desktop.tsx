import { Outlet } from "react-router";
import AppHeader from "./navigation/app-header";
import NavSideDesktop from "./navigation/nav-side-desktop";
import NavTopDesktop from "./navigation/nav-top-desktop";
import styles from "./root-layout-desktop.module.css";

export default function RootLayoutDesktop() {
  return (
    <div className={styles.container}>
      <div>
        <AppHeader />
        <NavSideDesktop />
      </div>
      <div>
        <NavTopDesktop />
        <Outlet />
      </div>
    </div>
  );
}
