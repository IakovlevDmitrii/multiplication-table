import type { RootState } from "../store";
import type { Solution } from "../../types";

export const selectTargetMultiplier =
	(state: RootState): number => {
		const multiplier = state.equations.targetMultiplier;
		if (multiplier == null) {
			throw new Error("targetMultiplier is not set");
		}
		return multiplier;
	};

export const selectSolutions =
	(state: RootState): [] | Solution[] => state.equations.solutions;
