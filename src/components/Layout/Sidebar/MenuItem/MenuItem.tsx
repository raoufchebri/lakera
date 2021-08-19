import React, { FC } from "react";
import styles from "./MenuItem.module.scss";

type MenuItemProps = {
  label: string;
  icon: string;
  active?: boolean;
  notify?: boolean;
};

const MenuItem: FC<MenuItemProps> = ({ label, icon, active, notify }) => {
  const className = active ? `${styles.label} ${styles.active}` : styles.label;
  return (
    <div className={styles.menuItem}>
      <img alt="" className={styles.icon} src={icon} />
      <p className={className}>{label}</p>
      {notify && <div className={styles.notifeMark} />}
    </div>
  );
};

export default MenuItem;
