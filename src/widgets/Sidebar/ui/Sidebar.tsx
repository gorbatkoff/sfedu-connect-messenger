import { FC, memo } from "react";

import classNames from "classnames";

import { Chats } from "@/widgets/Chats/ui/Chats";

import { CreateChat } from "@/features/CreateChat/ui/CreateChat";

import styles from "./Sidebar.module.scss";

interface ISidebarProps {
  className: string;
}

export const Sidebar: FC<ISidebarProps> = memo(({ className }) => {
  return (
    <aside className={classNames(styles.sidebar, [className])}>
      <CreateChat />
      <h1>Ваши чаты</h1>
      <Chats />
    </aside>
  );
});

Sidebar.displayName = "Sidebar";
