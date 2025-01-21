import { FC, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SelectMultiplierContent.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface SelectMultiplierListProps {
   multiplierList: number[],
   handleClick: (index: number) => void;
}

gsap.registerPlugin(useGSAP);

const SelectMultiplierContent: FC<SelectMultiplierListProps> = (
   { multiplierList, handleClick }) => {

   const container = useRef<HTMLOListElement>(null);

   useGSAP(() => {
      gsap.from("li", {
         opacity: 0,
         stagger: 0.1
      });
   },{ scope: container });

   return (
      <article className={styles._}>
         <ol ref={container}>
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
