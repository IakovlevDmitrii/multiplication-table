import { JSX, FC } from "react";
import { NavLink } from "react-router-dom";
import MultiplicationSolutionsList from "../../../multiplicationSolutionsList";
import type { Solution_Multiplication } from "../../../../types";
import styles from "./MultiplicationTableContent.module.scss";

interface MultiplicationTableProps {
   subjectOfRepetition: number,
   solutionsList: Solution_Multiplication[],
   checkYourself: JSX.Element,
}

const MultiplicationTableContent: FC<MultiplicationTableProps> = (
   {
      subjectOfRepetition,
      solutionsList,
      checkYourself,
   }) => (
   <article className={styles._}>
      <MultiplicationSolutionsList solutionsList={solutionsList} isDefault={true} />
      <div className={styles.links}>
         <NavLink
            to={`/select-result/${subjectOfRepetition}`}
            className={styles.opacity}
         >
            {checkYourself}
         </NavLink>
      </div>
   </article>
);

export default MultiplicationTableContent;
