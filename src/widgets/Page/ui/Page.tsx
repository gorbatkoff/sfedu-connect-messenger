import { FC, ReactNode, memo } from "react";

import classNames from "classnames";

import styles from "./Page.module.scss";

interface IPageProps {
  children: ReactNode;
  className?: string;
}

export const Page: FC<IPageProps> = memo(({ children, className }) => {
  return (
    <main className={classNames(styles.page, [className])}>{children}</main>
  );
});

Page.displayName = "Page";
