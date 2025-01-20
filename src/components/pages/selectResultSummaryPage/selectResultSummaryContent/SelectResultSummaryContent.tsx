import { FC } from "react";
import type { Answer } from "../../../../types";
import styles from "./SelectResultSummaryContent.module.scss";

interface ResultListProps {
   subjectOfRepetition: number,
   list: Answer[],
}

const SelectResultSummaryContent: FC<ResultListProps> = (
   { subjectOfRepetition, list }) => {

   return (
      <article className={styles._}>
         <ol>
            {
               list.map(({multiplier, result}: Answer) => {
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