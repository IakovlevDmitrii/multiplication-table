import { FC } from "react";
import ExampleList from "../../../exampleList";
import type { Equation } from "../../../../types";
import styles from "./ResultContent.module.scss";

interface ResultListProps {
   exampleList: Equation[]
}

const ResultContent: FC<ResultListProps> = (
   { exampleList }) => {

   return (
      <article className={styles._}>
         <ExampleList exampleList={exampleList} isDefault={false} />
      </article>
   )
};

export default ResultContent;