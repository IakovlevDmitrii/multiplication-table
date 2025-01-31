import { FC } from "react";
import { NavLink } from "react-router-dom";
import MultiplicationSolutionsList from "../../../multiplicationSolutionsList";
import type { Solution_Multiplication } from "../../../../types";
import styles from "./MultiplicationTableContent.module.scss";

interface MultiplicationTableProps {
   subjectOfRepetition: number,
   solutionsList: Solution_Multiplication[],
}

const MultiplicationTableContent: FC<MultiplicationTableProps> = (
   { subjectOfRepetition, solutionsList }) => (
   <article className={styles._}>
      <MultiplicationSolutionsList solutionsList={solutionsList} isDefault={true} />
      <div className={styles.links}>
         <NavLink to={`/select-result/${subjectOfRepetition}`}>
            {'Check yourself'}
         </NavLink>
      </div>
   </article>
);

export default MultiplicationTableContent;
