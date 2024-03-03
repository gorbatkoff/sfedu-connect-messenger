import { FC, ReactNode } from "react";

import { Header } from "@/widgets/Header";
import { Page } from "@/widgets/Page/ui/Page";
import { Sidebar } from "@/widgets/Sidebar";
import { SidebarRight } from "@/widgets/SidebarRight";

import styles from "./AppLayout.module.scss";

interface IAppLayout {
  children: ReactNode;
}

export const AppLayout: FC<IAppLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.appLayout}>
        <Sidebar className={styles.sidebarWrapper} />
        <Page className={styles.pageWrapper}>{children}</Page>
        <SidebarRight className={styles.sidebarRightWrapper} isShow={false} />
      </div>
    </>
  );
};
