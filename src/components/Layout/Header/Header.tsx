import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p className={styles.pageTitile}>Tests</p>
        <p className={styles.pageDescription}>Run and analyze your tests</p>
      </div>
      <div className={styles.menuIcn}>
        <img
          alt=""
          className={styles.union}
          src="https://static.overlay-tech.com/assets/981f6a69-3b28-40d9-b11f-674dfb81bcd9.svg"
        />
      </div>
      <div className={styles.userInfo}>
        <img
          alt=""
          className={styles.face}
          src="https://static.overlay-tech.com/assets/b783c8d5-45ce-46b7-bf8e-e70ff91c8eb1.png"
        />
        <div className={styles.name}>
          <p className={styles.userName}>Pixelz Warrios</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
