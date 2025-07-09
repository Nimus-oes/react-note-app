import { NavLink, Outlet } from "react-router";
import { NAV_OPTIONS } from "../constants";
import styles from "./nav-layout-desktop.module.css";
import type { NavOption } from "../types";

export default function NavLayoutDesktop() {
  const getSideNavItem = (id: NavOption) => {
    return (
      <NavLink to={NAV_OPTIONS[id].route} className={styles.sideNavItem}>
        <div>{NAV_OPTIONS[id].icon}</div>
        <div>{NAV_OPTIONS[id].i18nKey}</div>
        <div>→</div>
      </NavLink>
    );
  };

  const getNavIcon = (id: NavOption) => {
    return <div>{NAV_OPTIONS[id].icon}</div>;
  };

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <div>Header</div>
        {getSideNavItem("home")}
        {getSideNavItem("archived")}
        <div>Tags</div>
      </div>
      <div>
        <div className={styles.topBar}>
          <div>Page Title</div>
          <div className={styles.serachSetting}>
            <div>{getNavIcon("search")}</div>
            <div>{getNavIcon("settings")}</div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
