import React from "react";
import styles from './PageLayout.module.scss';

const PageLayout: (
   {header, content}: {
      header: React.JSX.Element,
      content: React.JSX.Element,
   }) => React.JSX.Element = ({header, content}) => {
   return (
      <div className={styles.container}>
         <div className={styles.content}>
            <header className={styles.header}>
               {header}
            </header>
            <main className={styles.main}>
               {content}
            </main>
         </div>
      </div>
   )
};

export default PageLayout;