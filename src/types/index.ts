export type Language = "en" | "ru";
export type Theme = "light" | "dark";

export interface EquationsState {
   multiplication: {
      currentSubjectOfRepetition: number,
   }
}

export interface PointerPosition {
   x: number;
   y: number;
}

export interface Solution_Multiplication {
   subjectOfRepetition: number,
   secondMultiplier: number,
   product: number,
}
