import { FC, ReactNode } from "react";

import styles from "./Page.module.scss";

interface IPage {
  children: ReactNode;
}

export const Page: FC<IPage> = ({ children }) => {
  return <main className={styles.page}>{children}</main>;
};
