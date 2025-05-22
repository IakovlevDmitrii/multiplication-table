export type Language = "en" | "ru";
export type Theme = "light" | "dark";

export interface Solution_Multiplication {
   subjectOfRepetition: number,
   secondMultiplier: number,
   product: number,
}

export interface EquationsState {
   multiplication: {
      currentSubjectOfRepetition: number,
      solutions: Solution_Multiplication[] | [],
   }
}

export interface PointerPosition {
   x: number;
   y: number;
}


