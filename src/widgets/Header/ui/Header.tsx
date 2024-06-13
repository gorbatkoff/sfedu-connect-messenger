import { memo } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserAuthData } from "@/entities/User";

import styles from "./Header.module.scss";
import { UserAvatar } from "./UserAvatar/UserAvatar";

export const Header = memo(() => {
  const userData = useSelector(getUserAuthData);
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");

  return (
    <header className={styles.header}>
      <h1 style={{ fontWeight: "bold", cursor: "pointer" }}>
        <span onClick={handleNavigate}>Sfedu Connect Messenger</span>
      </h1>
      <div></div>
      <UserAvatar userData={userData} className={styles.userAvatar} />
    </header>
  );
});

Header.displayName = "Header";
