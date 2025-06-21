import { Outlet, useParams } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";
import styles from "./note-list-page.module.css";

export default function NoteListPage() {
  const isMobile = useIsMobile();
  const { noteId } = useParams();
  const mobileLayout = () => (noteId ? <Outlet /> : <div>All Notes</div>);
  const desktopLayout = () => (
    <div className={styles.desktopContainer}>
      <div className={styles.desktopNoteList}>All Notes</div>
      <div className={styles.desktopNoteDetail}>
        {noteId ? <Outlet /> : <p>Select a note</p>}
      </div>
    </div>
  );

  return <>{isMobile ? mobileLayout() : desktopLayout()}</>;
}
