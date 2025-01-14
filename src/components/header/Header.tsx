import React from "react";
import type { HeaderType } from './HeaderType';
import styles from './Header.module.scss';


const Header: (props: HeaderType) => React.JSX.Element = (props: HeaderType): React.JSX.Element => {
   return (
      <div className={styles.content}>
         <div className={styles.left_side}>
            {props.leftSide}
         </div>
         <div className={styles.title}>
            {props.title}
         </div>
         <div className={styles.right_side}>
            {props.rightSide}
         </div>
      </div>
   )
};

export default Header;