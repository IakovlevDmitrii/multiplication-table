import { FC } from "react";
import MultiplicationSolutionsList from "../../../multiplicationSolutionsList";
import type { Solution_Multiplication } from "../../../../types";
import styles from "./ResultContent.module.scss";

interface ResultListProps {
   solutionsList: Solution_Multiplication[]
}

const ResultContent: FC<ResultListProps> = (
   { solutionsList }) => {

   return (
      <article className={styles._}>
         <MultiplicationSolutionsList solutionsList={solutionsList} isDefault={false} />
      </article>
   )
};

export default ResultContent;