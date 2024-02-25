import { FC, ReactNode } from "react";

import { Header } from "@/widgets/Header";
import { Page } from "@/widgets/Page/ui/Page";
import { Sidebar } from "@/widgets/Sidebar";

import styles from "./AppLayout.module.scss";

interface IAppLayout {
  children: ReactNode;
}

export const AppLayout: FC<IAppLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.appLayout}>
        <Sidebar />
        <Page>{children}</Page>
      </div>
    </>
  );
};
