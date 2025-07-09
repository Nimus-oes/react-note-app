import { NavLink, Outlet } from "react-router";
import { NAV_OPTIONS } from "../constants";
import styles from "./nav-layout-mobile.module.css";
import type { NavOption } from "../types";

export default function NavLayoutMobile() {
  const bottomNavOptions: NavOption[] = [
    "home",
    "archived",
    "search",
    "tags",
    "settings",
  ];

  const bottomNavBar = bottomNavOptions.map((item) => (
    <NavLink to={NAV_OPTIONS[item].route} key={item}>
      <div>{NAV_OPTIONS[item].icon}</div>
      <div>{item}</div>
    </NavLink>
  ));

  return (
    <div>
      <div>Header</div>
      <div>Page Title</div>
      <Outlet />
      <div>
        <div className={styles.navBar}>{bottomNavBar}</div>
      </div>
    </div>
  );
}
