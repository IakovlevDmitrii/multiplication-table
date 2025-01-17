import React from "react";

export interface Answer {
   multiplier: number,
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
      multiplier: number,
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

export interface HeaderProps {
   leftSide?: React.JSX.Element,
   title: React.JSX.Element,
   rightSide?: React.JSX.Element,
}

export interface PageLayoutProps {
   header: React.JSX.Element,
   content: React.JSX.Element,
}