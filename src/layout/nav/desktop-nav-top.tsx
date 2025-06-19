import styles from "./desktop-nav-top.module.css";

export default function DesktopNavTop() {
  return (
    <div className={styles.topNavWrapper}>
      <p>Page Title</p>
      <div className={styles.searchSettingWrapper}>
        <div>Search</div>
        <div>Settings</div>
      </div>
    </div>
  );
}
