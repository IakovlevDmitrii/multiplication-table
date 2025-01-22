import React from "react";

export interface Answer {
   subjectOfRepetition: number,
   secondMultiplier: number,
   result: number,
}

export interface TrainingContextType {
   answers: Answer[],
   multiplierList: number[],
   remainingMultiplierList: number[],
   subjectOfRepetition: number,
}

interface ActionAnswer {
   type: "answer";
   payload: {
      subjectOfRepetition: number,
      secondMultiplier: number,
      result: number,
   }
}
interface ActionChangeSubjectOfRepetition {
   type: "changeSubjectOfRepetition";
   payload: {
      subjectOfRepetition: number
   }
}
export type ActionType = ActionAnswer | ActionChangeSubjectOfRepetition

export interface HeaderLayoutProps {
   leftSide?: React.JSX.Element,
   title: React.JSX.Element,
   rightSide?: React.JSX.Element,
}

export interface PageLayoutProps {
   header: React.JSX.Element,
   content: React.JSX.Element,
}

export interface ChangeSubjectOfRepetitionDispatch {
   type: string;
   payload: { subjectOfRepetition: number };
}

export interface AnswerDispatch {
   type: string;
   payload: {
      subjectOfRepetition: number,
      secondMultiplier: number,
      result: number,
   };
}

export type DispatchType =
   | ChangeSubjectOfRepetitionDispatch
   | AnswerDispatch