import { JSX, Dispatch, useRef, useCallback } from 'react';
import PageLayout from "../../pageLayout";
import SelectMultiplierHeader from "./selectMultiplierHeader";
import SelectMultiplierContent from "./selectMultiplierContent";
import { useTraining, useTrainingDispatch } from "../../../state/state";
import type { ChangeSubjectOfRepetition } from "../../../types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const SelectMultiplierPage = (): JSX.Element => {
   const { multiplierList } = useTraining();
   const dispatch: Dispatch<ChangeSubjectOfRepetition> = useTrainingDispatch();

   const handleChangeSubjectOfRepetition = useCallback((subjectOfRepetition: number): void => {
      dispatch({
         type: 'changeSubjectOfRepetition',
         payload: {
            subjectOfRepetition,
         },
      })
   }, [dispatch]);

   const selectMultiplierPageRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from('h1', {
         opacity: 0,
      });
      gsap.from("li", {
         opacity: 0,
         stagger: 0.1
      });
   }, { scope: selectMultiplierPageRef });

   return (
      <PageLayout
         header={<SelectMultiplierHeader />}
         content={
            <SelectMultiplierContent
               multiplierList={multiplierList}
               handleClick={handleChangeSubjectOfRepetition}
            />
         }
         myRef={selectMultiplierPageRef}
      />
  )
};

export default SelectMultiplierPage;
