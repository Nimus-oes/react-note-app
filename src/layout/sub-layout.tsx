import { Outlet, useParams } from "react-router";
import { useIsMobile } from "../hooks/use-is-mobile";
import styles from "./sub-layout.module.css";
import usePageTitle from "../hooks/use-page-title";

// This component is a generic layout for sub options. Any JSX node can be provided to be rendered.
interface SubOptionProps {
  subOptions: React.ReactNode;
}

export default function SubLayout({ subOptions }: SubOptionProps) {
  const { noteId } = useParams();
  const isMobile = useIsMobile();
  const pageTitle = usePageTitle();

  // If noteId, it means it's a content page which will be rendered through Outlet
  const mobileLayout = noteId ? (
    <Outlet />
  ) : (
    <>
      <div>{pageTitle}</div>
      <div>{subOptions}</div>
    </>
  );
  const desktopLayout = (
    <div className={styles.desktopContainer}>
      <div>{subOptions}</div>
      <Outlet />
    </div>
  );

  return <>{isMobile ? mobileLayout : desktopLayout}</>;
}
