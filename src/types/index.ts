import React, { JSX } from "react";

export interface Equation {
   subjectOfRepetition: number,
   secondMultiplier: number,
   result: number,
}

export interface TrainingContextType {
   answers: Equation[],
   multiplierList: number[],
   remainingMultiplierList: number[],
   subjectOfRepetition: number,
}

export interface Answer {
   type: "answer";
   payload: Equation;
}

export interface ChangeSubjectOfRepetition {
   type: "changeSubjectOfRepetition";
   payload: { subjectOfRepetition: number }
}

export type ActionType = Answer | ChangeSubjectOfRepetition

export interface HeaderLayoutProps {
   leftSide?: JSX.Element,
   title: JSX.Element,
   rightSide?: JSX.Element,
}

export interface PageLayoutProps {
   header: JSX.Element,
   content: JSX.Element,
   myRef?: React.RefObject<HTMLDivElement | null>,
}

export type DispatchType =
   | ChangeSubjectOfRepetition
   | Answer