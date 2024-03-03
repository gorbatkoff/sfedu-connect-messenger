import { FC } from "react";

import classNames from "classnames";

import styles from "./SidebarRight.module.scss";

interface ISidebarProps {
  className: string;
  isShow?: boolean;
}

export const SidebarRight: FC<ISidebarProps> = ({
  className,
  isShow = false,
}) => {
  if (!isShow) return null;

  return (
    <aside className={classNames(styles.sidebarRight, [className])}></aside>
  );
};
