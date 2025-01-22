import { FC } from "react";
import { NavLink } from "react-router-dom";
import ExampleList from "../../../exampleList";
import type { Answer } from "../../../../types";
import styles from "./MultiplicationTableContent.module.scss";

interface MultiplicationTableProps {
   subjectOfRepetition: number,
   exampleList: Answer[],
}

const MultiplicationTableContent: FC<MultiplicationTableProps> = (
   { subjectOfRepetition, exampleList }) => {

   return (
      <article className={styles._}>
         <ExampleList exampleList={exampleList} />
         <div className={styles.links}>
            <NavLink to={`/select-result/${subjectOfRepetition}`}>
               {`Проверь знания`}
            </NavLink>
         </div>
      </article>
   )
};

export default MultiplicationTableContent;
