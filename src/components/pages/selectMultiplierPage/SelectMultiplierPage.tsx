import React, { Dispatch } from 'react';
import { NavLink } from "react-router-dom";
import PageLayout from "../../pageLayout";
import Header from "../../header";
import { useTraining, useTrainingDispatch } from "../../../state/state";
import styles from './SelectMultiplierPage.module.scss';

const SelectMultiplierPage: () => React.JSX.Element = (): React.JSX.Element => {

   const dispatch: Dispatch<any> = useTrainingDispatch();
   const {multiplierList} = useTraining();

   function handleChangeSubjectOfRepetition(num: number): void {
      dispatch({
         type: 'changeSubjectOfRepetition',
         payload: {
            subjectOfRepetition: num,
         },
      })
   }

   const selectMultiplierList :React.JSX.Element = (
      <ol className={styles.multiplierList}>
         {
            multiplierList.map((index :number): React.JSX.Element => (
               <li key={index}>
                  <NavLink
                     className={styles.link}
                     to={`/multiplication-table/${index}`}
                     onClick={(): void => handleChangeSubjectOfRepetition(index)}
                  >
                     x {index}
                  </NavLink>
               </li>
            ))
         }
      </ol>
   );

   const header: React.JSX.Element = (
      <Header title={<h1>Выбери множитель</h1>} />
   );

   const content: React.JSX.Element = (
      <article className={styles.content}>
         {selectMultiplierList}
      </article>
   );

   return <PageLayout header={header} content={content} />
};

export default SelectMultiplierPage;
