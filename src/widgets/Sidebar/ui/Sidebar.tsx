import { FC, memo } from "react";

import classNames from "classnames";

import styles from "./Sidebar.module.scss";

interface ISidebarProps {
  className: string;
}

export const Sidebar: FC<ISidebarProps> = memo(({ className }) => {
  return <aside className={classNames(styles.sidebar, [className])}></aside>;
});
