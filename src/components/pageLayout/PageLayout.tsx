import { FC } from "react";
import type { PageLayoutProps } from "../../types";
import styles from './PageLayout.module.scss';

const PageLayout: FC<PageLayoutProps> = (
   { header, content, myRef }) => (

   <div className={styles._} ref={myRef}>
      <header>
         {header}
      </header>
      <main>
         {content}
      </main>
   </div>
);

export default PageLayout;