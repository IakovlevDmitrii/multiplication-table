import { JSX, Dispatch } from 'react';
import PageLayout from "../../pageLayout";
import SelectMultiplierHeader from "./selectMultiplierHeader";
import SelectMultiplierContent from "./selectMultiplierContent";
import { useTraining, useTrainingDispatch } from "../../../state/state";
import type { ChangeSubjectOfRepetitionDispatch } from "../../../types";

const SelectMultiplierPage = (): JSX.Element => {
   const { multiplierList } = useTraining();
   const dispatch: Dispatch<ChangeSubjectOfRepetitionDispatch> = useTrainingDispatch();

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
               multiplierList={multiplierList}
               handleClick={handleChangeSubjectOfRepetition}
            />
         }
      />
   )
};

export default SelectMultiplierPage;
