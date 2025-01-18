import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./SelectMultiplierContent.module.scss";

interface SelectMultiplierListProps {
   list: number[],
   handleClick: (index: number) => void;
}

const SelectMultiplierContent: React.FC<SelectMultiplierListProps> = (
   { list, handleClick }) => {

   return (
      <article className={styles._}>
         <ol>
            {
               list.map((index: number): React.JSX.Element => (
                  <li key={index}>
                     <NavLink
                        to={`/multiplication-table/${index}`}
                        onClick={(): void => handleClick(index)}
                     >
                        x {index}
                     </NavLink>
                  </li>
               ))
            }
         </ol>
      </article>
   )
};

export default SelectMultiplierContent;
