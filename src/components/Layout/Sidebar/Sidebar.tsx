import React from "react";
import {
  DASHBOARD_ICON,
  MESSAGES_ICON,
  SETTINGS_ICON,
  TESTS_ICON,
} from "../../../constants/icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import styles from "./Sidebar.module.scss";

const menuItems = [
  { label: "Dashboard", icon: DASHBOARD_ICON },
  { label: "Tests", icon: TESTS_ICON, active: true },
  { label: "Messages", icon: MESSAGES_ICON, notify: true },
  { label: "Settings", icon: SETTINGS_ICON },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <div className={styles.sidebarMenu}>
        {menuItems.map(({ label, icon, active, notify }) => (
          <MenuItem
            key={label}
            label={label}
            icon={icon}
            active={active}
            notify={notify}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
