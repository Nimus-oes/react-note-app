import { Outlet } from "react-router";
import AppHeader from "./navigation/app-header";
import NavSideDesktop from "./navigation/nav-side-desktop";
import NavTopDesktop from "./navigation/nav-top-desktop";
import styles from "./root-layout.module.css";
import { useIsMobile } from "../hooks/use-is-mobile";
import NavBottomMobile from "./navigation/nav-bottom-mobile";

export default function RootLayout() {
  const isMobile = useIsMobile();

  const mobileLayout = (
    <div>
      <AppHeader />
      <Outlet />
      <NavBottomMobile />
    </div>
  );
  const desktopLayout = (
    <div className={styles.desktopContainer}>
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

  return <>{isMobile ? mobileLayout : desktopLayout}</>;
}
