type Language = "en" | "es" | "pt" | "ru";
type Theme = "light" | "dark";

interface Solution {
   targetMultiplier: number,
   secondMultiplier: number,
   product: number,
}

interface EquationsState {
   solutions: Solution[] | [],
   targetMultiplier: number,
}

interface SettingsState {
   language: Language,
   theme: Theme,
}

interface PointerPosition {
   x: number;
   y: number;
}

export {
   EquationsState,
   Language,
   PointerPosition,
   SettingsState,
   Solution,
   Theme,
}


