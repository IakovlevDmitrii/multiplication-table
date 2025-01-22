import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SelectMultiplierContent.module.scss";

interface SelectMultiplierListProps {
   multiplierList: number[],
   handleClick: (index: number) => void;
}

const SelectMultiplierContent: FC<SelectMultiplierListProps> = (
   { multiplierList, handleClick }) => {

   return (
      <article className={styles._}>
         <ol>
            {
               multiplierList.map((index: number) => (
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
