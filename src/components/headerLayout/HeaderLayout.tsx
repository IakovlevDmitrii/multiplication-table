import React from "react";
import type { HeaderProps } from "../../types";
import styles from './HeaderLayout.module.scss';

const HeaderLayout: React.FC<HeaderProps> = (
   { leftSide, title, rightSide }) => {
   return (
      <div className={styles._}>
         <div>
            {leftSide}
         </div>
         <div>
            {title}
         </div>
         <div>
            {rightSide}
         </div>
      </div>
   )
};

export default HeaderLayout;