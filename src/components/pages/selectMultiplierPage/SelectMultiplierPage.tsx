import { JSX, useRef, useCallback } from 'react';
import PageLayout from "../../pageLayout";
import SelectMultiplierHeader from "./selectMultiplierHeader";
import SelectMultiplierContent from "./selectMultiplierContent";
import { useAppDispatch, useAppSelector } from "../../../features/hooks";
import { selectUi } from "../../../store/uiSlice";
import {
   selectEquations,
   changeSubjectOfRepetition_multiplication } from "../../../store/equationsSlice";
import contentTexts from "../../../features/contentTexts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const SelectMultiplierPage = (): JSX.Element => {
   const { multiplication } = useAppSelector(selectEquations);
   const { lang } = useAppSelector(selectUi);
   const dispatch = useAppDispatch();
   const title = (
      <h1>
         {contentTexts.selectMultiplierPage.header[lang]}
      </h1>
   );

   const onSelectMultiplier = useCallback(
      (newSubjectOfRepetition: number): void => {
         dispatch(changeSubjectOfRepetition_multiplication(newSubjectOfRepetition)
      )}, [dispatch]
   );

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
         header={
            <SelectMultiplierHeader
               title={title}
            />
         }
         content={
            <SelectMultiplierContent
               multiplierList={multiplication.multiplierList}
               onSelectMultiplier={onSelectMultiplier}
            />
         }
         myRef={selectMultiplierPageRef}
      />
  )
};

export default SelectMultiplierPage;
