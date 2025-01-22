import { FC } from "react";
import ExampleList from "../../../exampleList";
import type { Answer } from "../../../../types";
import styles from "./ResultContent.module.scss";

interface ResultListProps {
   exampleList: Answer[]
}

const ResultContent: FC<ResultListProps> = (
   { exampleList }) => {

   return (
      <article className={styles._}>
         <ExampleList exampleList={exampleList} />
      </article>
   )
};

export default ResultContent;