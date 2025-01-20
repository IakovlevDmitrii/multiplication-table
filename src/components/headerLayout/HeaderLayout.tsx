import { FC } from "react";
import type { HeaderLayoutProps } from "../../types";
import styles from './HeaderLayout.module.scss';

const HeaderLayout: FC<HeaderLayoutProps> = (
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