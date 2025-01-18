import React from 'react';
import type { Answer } from "../../../../types";
import styles from "./SelectResultSummaryContent.module.scss";

interface ResultListProps {
   subjectOfRepetition: number,
   list: Answer[],
}

const SelectResultSummaryContent: React.FC<ResultListProps> = (
   { subjectOfRepetition, list }) => {

   return (
      <article className={styles._}>
         <ol className={styles.answer_list}>
            {
               list.map(({multiplier, result}: Answer): React.JSX.Element => {
                  return (
                     <li key={multiplier}>
                        <div className={styles.answer}>
                           <div className={styles.condition}>
                              {`${subjectOfRepetition} * ${multiplier} = `}
                           </div>
                           <div className={styles.result}>
                              {`${result}`}
                           </div>
                        </div>
                     </li>
                  )
               })
            }
         </ol>
      </article>
   )
};

export default SelectResultSummaryContent;