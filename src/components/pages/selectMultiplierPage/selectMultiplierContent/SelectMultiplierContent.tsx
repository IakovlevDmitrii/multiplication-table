import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SelectMultiplierContent.module.scss";

interface SelectMultiplierListProps {
   multiplierList: number[],
   onSelectMultiplier: (multiplier: number) => void;
}

const SelectMultiplierContent: FC<SelectMultiplierListProps> = (
   { multiplierList, onSelectMultiplier }) => {

   return (
      <article className={styles._}>
         <ol>
            {
               multiplierList.map((multiplier: number) => (
                  <li key={multiplier}>
                     <NavLink
                        to={`/multiplication-table/${multiplier}`}
                        onClick={(): void => onSelectMultiplier(multiplier)}
                     >
                        * {multiplier}
                     </NavLink>
                  </li>
               ))
            }
         </ol>
      </article>
   )
};

export default SelectMultiplierContent;
