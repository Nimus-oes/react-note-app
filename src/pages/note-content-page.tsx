import useIsMobile from "../hooks/is-mobile";
import {
  ArchiveNoteButton,
  CancelEditButton,
  DeleteNoteButton,
  GoBackButton,
  SaveEditButton,
} from "../ui/button";
import styles from "./note-content-page.module.css";

export default function NoteContentPage() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div>
        <div className={styles.flexRow}>
          <GoBackButton />
          <DeleteNoteButton isMobile={isMobile} />
          <ArchiveNoteButton isMobile={isMobile} />
          <CancelEditButton isMobile={isMobile} />
          <SaveEditButton isMobile={isMobile} />
        </div>
        <div>Note Content</div>
      </div>
    );
  }
  return (
    <div className={styles.flexRow}>
      <div>
        <div>Note Content</div>
        <div className={styles.flexRow}>
          <SaveEditButton isMobile={isMobile} />
          <CancelEditButton isMobile={isMobile} />
        </div>
      </div>
      <div>
        <ArchiveNoteButton isMobile={isMobile} />
        <DeleteNoteButton isMobile={isMobile} />
      </div>
    </div>
  );
}
