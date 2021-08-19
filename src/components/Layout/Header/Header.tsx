import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p className={styles.pageTitile}>Tests</p>
        <p className={styles.pageDescription}>Run and analyze your tests</p>
      </div>
      <div className={styles.magnifierIcn}>
        <div className={styles.magnifier}>
          <div className={styles.oval9} />
          <img
            alt=""
            className={styles.path6}
            src="https://static.overlay-tech.com/assets/a725f3e0-04fb-44a2-97f5-63a3cc64f67b.svg"
          />
        </div>
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
          <img
            alt=""
            className={styles.downArrow}
            src="https://static.overlay-tech.com/assets/03267f38-5d9f-4782-8cbb-b139f9b31b97.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
