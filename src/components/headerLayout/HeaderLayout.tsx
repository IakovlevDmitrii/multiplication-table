import { FC } from "react";
import type { HeaderLayoutProps } from "../../types";
import styles from './HeaderLayout.module.scss';

const HeaderLayout: FC<HeaderLayoutProps> = (
   { leftSide, rightSide, title }) => (
   <div className={styles._}>
      <div>
         {leftSide}
      </div>
      <div>
         {rightSide}
      </div>
      <div>
         {title}
      </div>
   </div>
);

export default HeaderLayout;