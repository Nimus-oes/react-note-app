import styles from "./nav-bottom-mobile.module.css";

export default function NavBottomMobile() {
  return (
    <div className={styles.container}>
      <div>Home</div>
      <div>Search</div>
      <div>Archived</div>
      <div>Tags</div>
      <div>Settings</div>
    </div>
  );
}
