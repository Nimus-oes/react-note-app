import { Outlet, useParams } from "react-router";
import useIsMobile from "../hooks/is-mobile";
import styles from "./index-panel-page.module.css";

export default function IndexPanelPage() {
  const { noteId } = useParams();
  const isIndexPage = !noteId;
  const isMobile = useIsMobile();
  const mobileLayout = isIndexPage ? <div>Note List</div> : <Outlet />;

  if (isMobile) {
    return mobileLayout;
  }

  return (
    <div className={styles.desktopContainer}>
      <div className={styles.desktopIndexPanel}>Note List</div>
      <div className={styles.desktopContentPanel}>
        <Outlet />
      </div>
    </div>
  );
}
