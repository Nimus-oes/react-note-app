import { useLocation, useParams } from "react-router";
import { useIsMobile } from "../hooks/use-is-mobile";
import NoteList from "../features/note/note-list";
import TagList from "../features/tag/tag-list";
import styles from "./index-panel.module.css";
import usePageTitle from "../hooks/use-page-title";

export default function IndexPanel() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const pageTitle = usePageTitle();
  const { tagId } = useParams();

  const noteMobileLayout = () => (
    <>
      <div>{pageTitle}</div>
      <NoteList />
      <div>+</div>
    </>
  );
  const noteDesktopLayout = () => (
    <div className={styles.noteDesktopContainer}>
      <div>Create New Note</div>
      <NoteList />
    </div>
  );
  const tagMobileLayout = () => (
    <>
      <div>{pageTitle}</div>
      <TagList />
    </>
  );
  const tagDesktopLayout = () => <div>Select a tag</div>;

  if (location.pathname.startsWith("/notes") || tagId) {
    return isMobile ? noteMobileLayout() : noteDesktopLayout();
  }

  if (location.pathname.startsWith("/tags")) {
    return isMobile ? tagMobileLayout() : tagDesktopLayout();
  }

  return "";
}
