import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MultiplicationTableContent.module.scss";

interface MultiplicationTableProps {
   subjectOfRepetition: number,
   list: number[],
}

const MultiplicationTableContent: FC<MultiplicationTableProps> = (
   { subjectOfRepetition, list }) => {

   return (
      <article className={styles._}>
         <ol>
            {
               list.map(index => (
                  <li key={index}>
                     <div className={styles.example}>
                        <div className={styles.condition}>
                           {`${subjectOfRepetition} * ${index} = `}
                        </div>
                        <div className={styles.result}>
                           {`${subjectOfRepetition * index}`}
                        </div>
                     </div>
                  </li>
               ))
            }
         </ol>
         <div className={styles.links}>
            <NavLink to={`/select-result/${subjectOfRepetition}`}>
               {`Проверь умножение на ${subjectOfRepetition}`}
            </NavLink>
         </div>
      </article>
   )
};

export default MultiplicationTableContent;
