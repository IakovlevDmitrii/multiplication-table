import { FC } from "react";
import type { PageLayoutProps } from "../../types";
import styles from './PageLayout.module.scss';

const PageLayout: FC<PageLayoutProps> = (
   { header, content }) => {
   return (
      <div className={styles._}>
         <div className={styles.content}>
            <header>
               {header}
            </header>
            <main>
               {content}
            </main>
         </div>
      </div>
   )
};

export default PageLayout;