import { Outlet } from "react-router";
import { useIsMobile } from "./hooks/useIsMobile";
import AppLogo from "./components/appheader/AppLogo";
import DesktopSideNav from "./components/navbar/DesktopSideNav";
import DesktopTopNav from "./components/navbar/DesktopTopNav";
import MobileBottomNav from "./components/navbar/MobileBottomNav";
import styles from "./App.module.css";

export default function App() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <>
          <AppLogo />
          <Outlet />
          <MobileBottomNav />
        </>
      ) : (
        <div className={styles.desktopLayout}>
          <div className={styles.sideDeskNav}>
            <AppLogo />
            <DesktopSideNav />
          </div>
          <div className={styles.topDeskNav}>
            <DesktopTopNav />
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
