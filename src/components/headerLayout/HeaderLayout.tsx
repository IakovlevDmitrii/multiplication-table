import { FC } from "react";
import type { HeaderLayoutProps } from "../../types";
import styles from './HeaderLayout.module.scss';

const HeaderLayout: FC<HeaderLayoutProps> = (
   { leftSide, title, rightSide }) => {
   return (
      <div className={styles._}>
         <div>
            <div>
               {leftSide}
            </div>
            <div>
               {rightSide}
            </div>
         </div>
         <div>
            {title}
         </div>
      </div>
   )
};

export default HeaderLayout;