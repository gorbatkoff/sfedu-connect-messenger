import { memo } from "react";

import { useSelector } from "react-redux";

import { getUserAuthData } from "@/entities/User";

import styles from "./Header.module.scss";
import { UserAvatar } from "./UserAvatar/UserAvatar";

export const Header = memo(() => {
  const userData = useSelector(getUserAuthData);

  return (
    <header className={styles.header}>
      <div></div>
      <div></div>
      <UserAvatar userData={userData} className={styles.userAvatar} />
    </header>
  );
});

Header.displayName = "Header";
