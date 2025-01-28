import { FC } from "react";
import { NavLink } from "react-router-dom";
import ExampleList from "../../../exampleList";
import type { Equation } from "../../../../types";
import styles from "./MultiplicationTableContent.module.scss";

interface MultiplicationTableProps {
   subjectOfRepetition: number,
   exampleList: Equation[],
}

const MultiplicationTableContent: FC<MultiplicationTableProps> = (
   { subjectOfRepetition, exampleList }) => (
   <article className={styles._}>
      <ExampleList exampleList={exampleList} isDefault={true} />
      <div className={styles.links}>
         <NavLink to={`/select-result/${subjectOfRepetition}`}>
            {'Check yourself'}
         </NavLink>
      </div>
   </article>
);

export default MultiplicationTableContent;
