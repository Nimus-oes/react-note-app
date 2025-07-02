import { Outlet, useParams } from "react-router";
import { useIsMobile } from "../hooks/use-is-mobile";
import styles from "./index-layout.module.css";
import IndexPanel from "../pages/index-panel";

export default function IndexLayout() {
  const { noteId } = useParams();
  const isMobile = useIsMobile();

  // If noteId, it means it's a content page which will be rendered through Outlet
  const mobileLayout = noteId ? (
    <Outlet />
  ) : (
    <>
      <IndexPanel />
    </>
  );
  const desktopLayout = (
    <div className={styles.desktopContainer}>
      <IndexPanel />
      <Outlet />
    </div>
  );

  return <>{isMobile ? mobileLayout : desktopLayout}</>;
}
