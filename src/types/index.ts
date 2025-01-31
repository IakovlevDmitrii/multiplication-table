import React, { JSX } from "react";

export interface Solution_Multiplication {
   subjectOfRepetition: number,
   secondMultiplier: number,
   product: number,
}

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
