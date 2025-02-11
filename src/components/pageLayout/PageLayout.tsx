import React, {FC, JSX} from "react";
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
   header: JSX.Element,
   content: JSX.Element,
   myRef?: React.RefObject<HTMLDivElement | null>,
}

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