import { useIsMobile } from "../hooks/use-is-mobile";
import styles from "./content-panel.module.css";

export default function ContentPanel() {
  const isMobile = useIsMobile();

  const mobileLayout = (
    <div>
      <div className={styles.mobileButtonWrapper}>
        <div>Go Back</div>
        <div>Delete</div>
        <div>Archive/Restore</div>
        <div>Cancel</div>
        <div>Save Note</div>
      </div>
      <h2>Note Content Page</h2>
    </div>
  );

  const desktopLayout = (
    <div className={styles.container}>
      <div className={styles.rightPanelWrapper}>
        <h2>Note Content Page</h2>
        <div className={styles.bottomButtonWrapper}>
          <div>Save Note</div>
          <div>Cancel</div>
        </div>
      </div>
      <div>
        <div>Archive/Restore Note</div>
        <div>Delete Note</div>
      </div>
    </div>
  );

  return <>{isMobile ? mobileLayout : desktopLayout}</>;
}
