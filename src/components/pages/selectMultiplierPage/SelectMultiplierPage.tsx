import React, { Dispatch } from 'react';
import PageLayout from "../../pageLayout";
import SelectMultiplierHeader from "./selectMultiplierHeader";
import SelectMultiplierContent from "./selectMultiplierContent";
import { useTraining, useTrainingDispatch } from "../../../state/state";

const SelectMultiplierPage: () => React.JSX.Element = (): React.JSX.Element => {
   const { multiplierList } = useTraining();
   const dispatch: Dispatch<any> = useTrainingDispatch();

   function handleChangeSubjectOfRepetition(subjectOfRepetition: number): void {
      dispatch({
         type: 'changeSubjectOfRepetition',
         payload: {
            subjectOfRepetition,
         },
      })
   }

   return (
      <PageLayout
         header={<SelectMultiplierHeader />}
         content={
            <SelectMultiplierContent
               list={multiplierList}
               handleClick={handleChangeSubjectOfRepetition}
            />
         }
      />
   )
};

export default SelectMultiplierPage;
